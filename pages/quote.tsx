// import QuoteForm from "components/QuoteForm/QuoteForm";
import QuoteForm from "components/QuoteForm/FormikForm";
import QuoteIllustration from "../components/Product Illustrations/Quote";
import Container from "styled-components/Container";
import styled from "styled-components";
import Head from "next/head";
import { useEffect } from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 7rem;

  div.illustration {
    max-width: 500px;
    margin-left: var(--paddingDouble);
  }

  @media (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 var(--padding);

    div.illustration {
      grid-row-start: 1;
      margin-left: 0;

      svg {
        height: 250px;
      }
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

export default function Quote() {
  return (
    <>
      <Head>
        <title>Bespoke Quotes | Specialist Payments</title>
      </Head>
      <section id="quote-form">
        <SectionContainer>
          <h1>Get a Personalised Quote</h1>
          <Grid>
            <div>
              <QuoteForm />
            </div>
            <div className="illustration">
              <QuoteIllustration style={{ width: "100%" }} />
            </div>
          </Grid>
        </SectionContainer>
      </section>
    </>
  );
}
