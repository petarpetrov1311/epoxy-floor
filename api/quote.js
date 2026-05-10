import { handleQuoteSubmission } from '../server/quote-service.js';

export default async function handler(req) {
  const payload = await req.json().catch(() => null);
  const result = await handleQuoteSubmission({
    method: req.method,
    payload,
    env: process.env
  });

  return new Response(JSON.stringify(result.body), {
    status: result.status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
