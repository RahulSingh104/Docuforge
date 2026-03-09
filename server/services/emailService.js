const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD
  }
});

exports.sendEmail = async (to, subject, text, attachmentPath) => {

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    text,
    attachments: [
      {
        path: attachmentPath
      }
    ]
  });

};