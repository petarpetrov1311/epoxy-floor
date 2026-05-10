import { createReadStream, existsSync, readFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

import { handleQuoteSubmission } from './quote-service.js';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(rootDir, 'dist');
const indexPath = join(distDir, 'index.html');
const envPath = join(rootDir, '.env.local');
const port = Number(process.env.PORT || 4173);

if (!existsSync(indexPath)) {
  console.error('Missing dist/index.html. Run "npm run build" first.');
  process.exit(1);
}

loadEnvFile(envPath);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'POST' && req.url === '/api/quote') {
      const bodyText = await readBody(req);
      let payload;

      try {
        payload = bodyText ? JSON.parse(bodyText) : {};
      } catch {
        sendJson(res, 400, { error: 'Invalid request body.' });
        return;
      }

      const result = await handleQuoteSubmission({
        method: req.method,
        payload,
        env: process.env
      });

      sendJson(res, result.status, result.body);
      return;
    }

    const urlPath = (req.url || '/').split('?')[0];
    const relativePath = urlPath.replace(/^\/+/, '');
    const safePath = normalize(relativePath).replace(/^(\.\.[/\\])+/, '');
    let filePath = join(distDir, safePath);

    if (urlPath === '/' || !existsSync(filePath) || !extname(filePath)) {
      filePath = indexPath;
    }

    const extension = extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mimeTypes[extension] || 'application/octet-stream'
    });
    createReadStream(filePath).pipe(res);
  } catch (error) {
    sendJson(res, 500, { error: error.message || 'Internal server error.' });
  }
});

server.listen(port, () => {
  console.log(`Preview server running at http://localhost:${port}`);
});

function loadEnvFile(path) {
  if (!existsSync(path)) {
    return;
  }

  const content = readFileSync(path, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on('data', (chunk) => {
      chunks.push(chunk);
    });

    req.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'));
    });

    req.on('error', reject);
  });
}

function sendJson(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  res.end(JSON.stringify(body));
}
