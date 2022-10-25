import nodemailer from "nodemailer"
import { generateCode } from "./utils.js"

export const sendMail = (firstName, secondName, email) => {
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from:`"Jacobs Properties" <${process.env.EMAIL}>`,
    to: email,
    subject: "Jacobs Properties, Refer-a-friend",
    text: "Hello there!",
    html: 
    `
      <p>Hi ${firstName} ${secondName}<p>
      <p>Here is your refer-a-friend code.
      <h2>${generateCode(8)}</h2>
    `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.json({"commnet": "Hi there"})
  })
}