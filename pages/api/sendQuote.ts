import nodemailer from "nodemailer";
import validator from "validator";
import { NextApiRequest, NextApiResponse } from "next";

type ReqBody = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  business: string;
  customerType: string;
  businessType: string;
  turnover: string;
  paymentTypes: PaymentTypes;
  comments: string;
};

type PaymentTypes = {
  cardMachine: boolean;
  website: boolean;
  phone: boolean;
  email: boolean;
  [key: string]: boolean;
};

type DisplayNames<P> = {
  [key in keyof P]: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body: ReqBody = req.body;

  let transporter = nodemailer.createTransport({
    service: "Outlook365", // no need to set host or port etc.
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  function extractPaymentTypes(types: PaymentTypes): string {
    let returnTypes = [];

    const displayName: DisplayNames<PaymentTypes> = {
      cardMachine: "Card Machines",
      website: "Payment Gateways",
      phone: "Phone Payments",
      email: "Payment Links",
    };

    for (const key in types) {
      if (Object.prototype.hasOwnProperty.call(types, key)) {
        const bool = types[key];
        if (bool) {
          returnTypes.push(displayName[key]);
        }
      }
    }

    return returnTypes.join(", ");
  }

  const paymentTypes = extractPaymentTypes(body.paymentTypes);

  const sender = `${body.firstName
    .slice(0, 1)
    .toUpperCase()}${body.firstName.slice(1)} ${body.lastName
    .slice(0, 1)
    .toUpperCase()}${body.lastName.slice(1)}`;

  console.log(transporter);

  const message = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    replyTo: body.email,
    subject: `Web Enquiry - ${sender}`,
    text: `First Name: ${body.firstName},
      Last Name: ${body.lastName},
      Email: ${body.email},
      Phone: ${body.phone},
      Business Name: ${body.business},
      Customer Type: ${body.customerType},
      Business Type: ${body.businessType},
      Turnover: ${body.turnover},
      Payment Types: ${paymentTypes},
      Comments: ${body.comments},
      `,
    html: `<h1 style="font-size: 1.25em">Web Enquiry</h1>
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
                <p><span style="font-weight: bold;">Customer Type:</span> ${validator.escape(
                  body.customerType
                )}</p>
                  <p><span style="font-weight: bold;">Business Type:</span> ${validator.escape(
                    body.businessType
                  )}</p>
                    <p><span style="font-weight: bold;">Turnover:</span> ${validator.escape(
                      body.turnover
                    )}</p>
                      <p><span style="font-weight: bold;">Payment Types:</span> ${paymentTypes}</p>
                      <p><span style="font-weight: bold;">Comments:</span> ${validator.escape(
                        body.comments
                      )}</p>
                        `,
  };

  transporter.verify(function (err, success) {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.json({ message: "Server Error 1" });
    } else {
      transporter.sendMail(message, function (err, info) {
        if (err) {
          console.log(err);
          res.statusCode = 500;
          res.json({ message: "Server Error 1" });
        } else {
          res.statusCode = 200;
          res.json({ message: "Server Error 2" });
        }
      });
    }
  });
};
