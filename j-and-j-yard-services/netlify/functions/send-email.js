const sgMail = require('@sendgrid/mail');

exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, phone, subject, message } = body;
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL;

    if (!SENDGRID_API_KEY || !RECIPIENT_EMAIL || !FROM_EMAIL) {
      return { 
        statusCode: 500, 
        body: 'Server not configured: missing environment variables (SENDGRID_API_KEY, RECIPIENT_EMAIL, or FROM_EMAIL).' 
      };
    }

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: RECIPIENT_EMAIL,
      from: FROM_EMAIL,
      replyTo: email,
      subject: `[Website contact] ${subject || 'New message'}`,
      text: `From: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await sgMail.send(msg);
    return { statusCode: 200, body: 'OK' };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: String(err) };
  }
};
