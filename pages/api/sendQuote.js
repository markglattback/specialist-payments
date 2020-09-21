import nodemailer from 'nodemailer';



export default async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_TLS,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  console.log(process.env.SMTP_PASS, process.env.SMTP_USER);

  const result = await transporter.verify();
  console.log(result);


  res.statusCode = 200
  res.json({ result });
}
