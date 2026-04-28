const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return json(405, { error: 'Method not allowed.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.QUOTE_FROM_EMAIL;
  const toEmail = process.env.QUOTE_TO_EMAIL || 'epoxy_fl@abv.bg';

  if (!resendApiKey || !fromEmail) {
    return json(500, { error: 'Quote form is not configured yet.' });
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: 'Invalid request body.' });
  }

  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const phone = sanitize(payload.phone);
  const company = sanitize(payload.company);
  const message = sanitize(payload.message);
  const website = sanitize(payload.website);

  if (website) {
    return json(200, { ok: true });
  }

  if (!name || !email || !phone || !message) {
    return json(400, { error: 'Please complete all required fields.' });
  }

  if (!emailRegex.test(email)) {
    return json(400, { error: 'Please enter a valid email address.' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCompany = escapeHtml(company || '-');
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New quote request from ${name}`,
      text: [
        'New quote request',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company || '-'}`,
        '',
        'Project details:',
        message
      ].join('\n'),
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Project details:</strong></p>
        <p>${safeMessage}</p>
      `
    })
  });

  if (!resendResponse.ok) {
    const errorData = await resendResponse.json().catch(() => ({}));
    return json(502, { error: errorData.message || 'Failed to send the quote request.' });
  }

  return json(200, { ok: true });
}
