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
                Specialist Payments was launched with an ambition to make
                payment solutions more cost effective and fairer. Card payments
                have been increasing for many years, however, on the back of
                Covid-19 , the world is experiencing a massive shift, and so is
                the way businesses take payments. Whilst cash will still be
                around for years to come, the demand for contactless payments is
                almost an expectation for most customers these days, and even
                more so with social distancing playing a role.
              </p>
              <p>
                That's where we come in. Whether you already have a payment
                solution in place, or you are looking to acquire one, we can
                help you. We want to help our clients grow their business by
                streamlining the way they take payments. We hate the fact that
                many business's are tied into long term contracts with
                extortionate price plans. We firmly believe that our honest and
                fair approach will help shape a more collaborative payments
                industry.
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
