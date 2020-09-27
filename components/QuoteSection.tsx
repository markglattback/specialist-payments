import styled from "styled-components";
import Container from "styled-components/Container";
import QuoteButton from "./QuoteButton";
import { PropsWithoutRef, HTMLProps, HTMLAttributes } from "react";
import MaxContainer from "styled-components/MaxContainer";

const Section = styled.section`
  div.inner-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 7rem 0;

    h3 {
      font-size: 1.8rem;
      /* color: var(--brand); */
      margin-bottom: 1.5rem;
    }

    p {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    button {
      margin: 1.5rem auto 0 auto;
    }
  }
`;

const WideContainer = styled(MaxContainer)<{ transparent?: boolean }>`
  background: ${({ transparent }) =>
    transparent ? "transparent" : "var(--backgroundTint)"};
`;

export default function QuoteSection(
  props: { transparent?: boolean } & HTMLAttributes<HTMLDivElement>
) {
  return (
    <Section id="get-a-quote" {...props}>
      <WideContainer transparent>
        <div className="inner-container">
          <h3>Let us provide you with a quote</h3>
          <p>
            If you're interested in any of our products, fill in our quote form
            and we'll get back to you with a bespoke quote.
          </p>
          <QuoteButton />
        </div>
      </WideContainer>
    </Section>
  );
}
