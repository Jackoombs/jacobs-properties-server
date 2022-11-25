import nodemailer from "nodemailer";

export const sendUserMail = async (template, email) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = await transporter.sendMail({
    from: `"Jacobs Properties" <${process.env.EMAIL}>`,
    to: email,
    subject: "Jacobs Properties, Refer-a-friend",
    text: "Refer a friend",
    html: template,
  });

  console.log("Message sent: %s", mailOptions.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mailOptions));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
