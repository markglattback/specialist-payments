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

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners | Specialist Payments</title>
      </Head>
      <section id="partners">
        <Wrapper>
          <article>
            <div className="partners">
              <h1>Partners</h1>
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
            </div>
          </article>
        </Wrapper>
      </section>
    </>
  );
}
