import styled from "styled-components";
import Container from "styled-components/Container";
import Benefit from "components/Benefit";
import Head from "next/head";

const Wrapper = styled(Container)`
  margin-top: 7rem;
  text-align: center;

  div {
    max-width: 700px;
    padding-left: 1rem;
    margin: 0 auto;
    margin-bottom: 7rem;
  }

  h1 {
    margin-bottom: 3rem;
  }

  h2 {
    color: var(--brand);
    margin-bottom: 3rem;
  }

  p {
    text-align: left;
  }
`;

const BenefitWrapper = styled(Container)`
  div.why-us {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  h2 {
    text-align: center;
    color: var(--brand);
    margin-bottom: 3rem;
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About | Specialist Payments</title>
      </Head>
      <section id="about-us">
        <Wrapper>
          <article>
            <div className="about-us">
              <h1>About Us</h1>
              <p>
                Specialist Payments was born out of a desire to improve the transparency of the card payments industry. Our goal is to find our clients the perfect payment solution for their business, whether they are new to card payments or looking to switch providers. The multiple options available to merchants can appear very confusing, so we remove the industry jargon and do the ground work for you. Through our expertise and extensive banking partnerships, we aim to present you with a reliable solution that not only saves you money, but also provides a first-class customer experience. Once we've helped equip you with the tools you need to take payments, we are there to provide ongoing support to help you maximise your payments journey.
              </p>
              <p>
                Further to card payment solutions, we can also assist you with business energy, insurance, finance and telecoms through our unique network of partners. We save you hours of searching for the best deals, allowing you to spend more time doing what you do best and growing your business!
              </p>
            </div>
          </article>
          <article>
            <div className="green-statement">
              <h2>We are Green</h2>
              <p>
                We operate a paperless policy. All correspondence is carried out
                online, from sign up, to ongoing support. Our clients receive
                their monthly statements and invoices via email, or by accessing
                their online account.
              </p>
            </div>
          </article>
        </Wrapper>
        <BenefitWrapper>
          <article>
            <div className="why-us">
              <h2>Why Us?</h2>
              <Benefit
                icon="/benefits/support.svg"
                title="24/7 Support"
                details="We're confident you won't need us often, but when you do we'll be there for you, all day, every day."
              />
              <Benefit
                icon="/benefits/account-manager.svg"
                title="Dedicated Account Manager"
                details="We'll assign you a dedicated account manager to guide you on your journey with us."
              />
              <Benefit
                icon="/benefits/next-day-funding.svg"
                title="Next Day Funds"
                details="Next day settlements available to help with your business cashflow."
              />
              <Benefit
                icon="/benefits/next-day-delivery.svg"
                title="Next Day Delivery"
                details="Once you're signed up you'll receive your new equipment the next day. No waiting."
              />
              <Benefit
                icon="/benefits/fast-setup.svg"
                title="Fast Setup"
                details="Installing your new equipment couldn't be easier. You'll be up and running within minutes."
              />
              <Benefit
                icon="/benefits/pci-compliance.svg"
                title="PCI Compliance"
                details="We'll take care of your PCI Compliance so you can focus on running your business."
              />
            </div>
          </article>
        </BenefitWrapper>
      </section>
    </>
  );
}
