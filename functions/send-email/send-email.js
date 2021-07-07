const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_AUTH_USER,
      pass: process.env.NODEMAILER_AUTH_PASS,
    },
  });

  try {
    const body = JSON.parse(event.body);
    await transporter.sendMail({
      from: `Whitesand <${process.env.NODEMAILER_AUTH_USER}>`,
      to: process.env.NODEMAILER_AUTH_USER,
      replyTo: `${body.firstName} <${body.email}>`,
      subject: `Whitesand website contact form: ${body.subject}`,
      text: body.message,
    });

    await transporter.sendMail({
      from: `Whitesand <${process.env.NODEMAILER_AUTH_USER}>`,
      to: body.email,
      subject: 'I have received your message',
      text: 'I have received your message and will get back to you shortly.',
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false }),
    };
  }
};
