const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export async function handleQuoteSubmission({ method, payload, env }) {
  if (method !== 'POST') {
    return { status: 405, body: { error: 'Method not allowed.' } };
  }

  const resendApiKey = env.RESEND_API_KEY;
  const fromEmail = env.QUOTE_FROM_EMAIL;
  const toEmail = env.QUOTE_TO_EMAIL || 'epoxy_fl@abv.bg';

  if (!resendApiKey || resendApiKey === 'PASTE_YOUR_RESEND_API_KEY_HERE' || !fromEmail) {
    return { status: 500, body: { error: 'Quote form is not configured yet.' } };
  }

  const name = sanitize(payload?.name);
  const email = sanitize(payload?.email);
  const phone = sanitize(payload?.phone);
  const company = sanitize(payload?.company);
  const message = sanitize(payload?.message);
  const website = sanitize(payload?.website);

  if (website) {
    return { status: 200, body: { ok: true } };
  }

  if (!name || !email || !phone || !message) {
    return { status: 400, body: { error: 'Please complete all required fields.' } };
  }

  if (!emailRegex.test(email)) {
    return { status: 400, body: { error: 'Please enter a valid email address.' } };
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
    return {
      status: 502,
      body: { error: errorData.message || 'Failed to send the quote request.' }
    };
  }

  return { status: 200, body: { ok: true } };
}
