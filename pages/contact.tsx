import ContactForm from "components/Forms/ContactForm";
import QuoteIllustration from "../components/Product Illustrations/Quote";
import Container from "styled-components/Container";
import styled from "styled-components";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import FormErrorMessage from "components/FormErrorMessage";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 7rem;

  @media (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 var(--padding);
    text-align: center;

    h2 {
      text-align: center;
    }
  }

  div.contact-info {
    text-align: left;
    margin: 1.25rem var(--paddingDouble) 0 var(--paddingDouble);

    @media (max-width: 414px) {
      margin-top: 3rem;
    }
  }

  div.contact-details {
    display: flex;
    margin: var(--padding) 0;

    p {
      margin: 0;
    }
  }

  div.icon {
    height: 20px;
    margin-right: var(--padding);

    img {
      transform: translateY(2px);
    }
  }
`;

const SectionContainer = styled(Container)`
  margin-top: 7rem;

  @media (max-width: 414px) {
    h1 {
      text-align: center;
      padding: 0 var(--paddingDouble);
    }
  }
`;

type Props = {
  address: {
    line_1: string;
    line_2: string;
    line_3: string;
  };
  phone: string;
  email: string;
};

export default function Contact(props: Props) {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Contact Us | Specialist Payments</title>
      </Head>
      <section id="contact-form">
        <SectionContainer>
          <h1>
            {!formSubmitted ? "Contact Us" : "Thank you for getting in touch"}
          </h1>
          <Grid>
            <div>
              {!formSubmitted ? (
                <ContactForm
                  updateParent={setFormSubmitted}
                  showError={setShowError}
                />
              ) : (
                <p>We'll get back to you soon!</p>
              )}
            </div>
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="contact-details">
                <div className="icon">
                  <img
                    src="/small icons/location.svg"
                    alt="Address"
                    height="100%"
                  />
                </div>
                <div className="detail">
                  <p>
                    {props.address.line_1}
                    <br />
                    {props.address.line_2}
                    <br />
                    {props.address.line_3}
                  </p>
                </div>
              </div>
              <div className="contact-details">
                <div className="icon">
                  <img
                    src="/small icons/phone.svg"
                    alt="Address"
                    height="100%"
                  />
                </div>
                <div className="detail">
                  <p>{props.phone}</p>
                </div>
              </div>
              <div className="contact-details">
                <div className="icon">
                  <img
                    src="/small icons/email.svg"
                    alt="Address"
                    height="100%"
                  />
                </div>
                <div className="detail">
                  <p>{props.email}</p>
                </div>
              </div>
            </div>
          </Grid>
        </SectionContainer>
      </section>
      {showError && <FormErrorMessage close={setShowError} />}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      address: {
        line_1: process.env.ADDRESS_LINE_1,
        line_2: process.env.ADDRESS_LINE_2,
        line_3: process.env.ADDRESS_LINE_3,
      },
      phone: process.env.PHONE,
      email: process.env.EMAIL,
    },
  };
};
