import sendgrid from "@sendgrid/mail";
import validator from "validator";
import { NextApiRequest, NextApiResponse } from "next";

type ReqBody = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  business: string;
  comments: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body: ReqBody = req.body;
  console.log(process.env.SENDGRID_API_KEY);

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

  const sender = `${body.firstName
    .slice(0, 1)
    .toUpperCase()}${body.firstName.slice(1)} ${body.lastName
    .slice(0, 1)
    .toUpperCase()}${body.lastName.slice(1)}`;

  try {
    const message = {
      from: `Quote Request <${process.env.SMTP_USER as string}>`,
      to: process.env.SMTP_USER as string,
      replyTo: body.email,
      subject: body.business,
      text: `First Name: ${body.firstName},
      Last Name: ${body.lastName},
      Email: ${body.email},
      Phone: ${body.phone},
      Business Name: ${body.business},
      Comments: ${body.comments},
      `,
      html: `<h1 style="font-size: 1.25em">Message Received</h1>
      <p><span style="font-weight: bold;">First Name:</span> ${validator.escape(
        body.firstName
      )}</p>
      <p><span style="font-weight: bold;">Last Name:</span> ${validator.escape(
        body.lastName
      )}</p>
      <p><span style="font-weight: bold;">Email:</span> ${validator.escape(
        body.email
      )}</p>
      <p><span style="font-weight: bold;">Phone:</span> ${validator.escape(
        body.phone
      )}</p>
      <p><span style="font-weight: bold;">Business Name:</span> ${validator.escape(
        body.business
      )}</p>
      <p><span style="font-weight: bold;">Comments:</span> ${validator.escape(
        body.comments
      )}</p>
      `,
    };

    await sendgrid.send(message);
    res.statusCode = 200;
    res.json({ message: "success" });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ message: err });
  }
};
