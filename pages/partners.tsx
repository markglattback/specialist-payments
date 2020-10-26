import styled from "styled-components";
import Container from "styled-components/Container";
import Benefit from "components/Benefit";
import Head from "next/head";

const Wrapper = styled(Container)`
  margin-top: 7rem;
  margin-bottom: 7rem;
  text-align: center;

  h1 {
    margin-bottom: 3rem;

    @media screen and (max-width: 480px) {
      margin-bottom: 7rem;
    }
  }

  h2 {
    color: var(--brand);
    margin-bottom: 3rem;
  }

  p {
    text-align: left;
  }

  div.partner-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: end center;
    padding: 0;
    margin: 0 auto;

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
      place-items: center center;
      grid-gap: 3rem;

      div {
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 48px;
    }

    img {
      height: 100%;
    }
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
            </div>
            <div className="partner-grid">
              <div style={{ height: "96px" }}>
                <img src="/partners/pax.png" alt="Pax" />
              </div>
              <div>
                <img src="/partners/truevo.png" alt="Truevo" />
              </div>
              <div>
                <img src="/partners/posmart.svg" alt="POSmart" />
              </div>
              <div>
                <img src="/partners/eposnow.svg" alt="EposNow" />
              </div>
            </div>
          </article>
        </Wrapper>
      </section>
    </>
  );
}
