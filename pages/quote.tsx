import QuoteForm from "components/Forms/QuoteForm";
import QuoteIllustration from "../components/Product Illustrations/Quote";
import Container from "styled-components/Container";
import styled from "styled-components";
import Head from "next/head";
import { useEffect, useState } from "react";
import FormErrorMessage from "components/FormErrorMessage";

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
    text-align: center;

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
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Bespoke Quotes | Specialist Payments</title>
      </Head>
      <section id="quote-form">
        <SectionContainer>
          <h1>
            {!formSubmitted
              ? "Get a Personalised Quote"
              : "Thank you for getting in touch"}
          </h1>
          <Grid>
            <div>
              {!formSubmitted ? (
                <QuoteForm
                  updateParent={setFormSubmitted}
                  showError={setShowError}
                />
              ) : (
                <p>We'll get back to you within 48 hours</p>
              )}
            </div>
            {!formSubmitted && (
              <div className="illustration">
                <QuoteIllustration style={{ width: "100%" }} />
              </div>
            )}
          </Grid>
        </SectionContainer>
      </section>
      {showError && <FormErrorMessage close={setShowError} />}
    </>
  );
}
