import nodemailer from 'nodemailer'

const sendContactEmail = ({ name, email, object, message }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  transporter.sendMail({ MAIL_TO })
}
