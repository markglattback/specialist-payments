import styled from "styled-components";
import CardReader from "components/Product Illustrations/CardReader";
import Container from "styled-components/Container";
import MaxContainer from "styled-components/MaxContainer";
import SkewedBackgroundTint from "styled-components/SkewedBackgroundTint";

const IllustrationSectionWrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 7rem;
  margin-bottom: 10rem;

  div.information {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 5rem;
  }

  div.illustration {
    display: flex;
    justify-content: center;
    height: 360px;
  }

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
    margin-bottom: 5rem;

    div.information {
      text-align: center;
      margin: 0 var(--paddingDouble);
      margin-bottom: 4rem;
    }

    div.illustration {
      height: 180px;
    }

    button {
      margin: var(--padding) auto;
    }
  }
`;

const DetailSectionWrapper = styled(MaxContainer)`
  background: transparent;
  position: relative;
  padding-top: 7rem;
  padding-bottom: 7rem;

  @media (max-width: 414px) {
    padding-top: 5rem;
  }

  h2 {
    position: relative;
    text-align: center;
    font-size: 1rem;
    z-index: 1;
  }

  p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: var(--maxWidth);
  margin: 10rem auto;
  /* color: var(--bodyColorTint); */

  :nth-of-type(1) {
    margin-top: 0;
  }
  :nth-of-type(2) {
    margin-bottom: 0;
  }

  div.article-image {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;

    img {
      width: 100%;
    }
  }

  div.article-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--brand);
      margin-bottom: 1.5rem;
      text-align: left;
    }
  }

  @media (max-width: 414px) {
    margin: 0 var(--paddingDouble);
    grid-template-columns: calc(100%);
    grid-template-rows: repeat(auto);

    div.article-image {
      max-width: calc(100% - 4rem);
      margin: var(--paddingDouble) auto;
    }

    div.article-text {
      text-align: center;

      h2 {
        text-align: center;
      }
    }
  }
`;

const SkewedBackground = styled(SkewedBackgroundTint)`
  top: 0;
`;

export default function ProductPage() {
  return (
    <>
      <section id="card-reader-heading">
        <IllustrationSectionWrapper>
          <div className="illustration">
            <CardReader style={{ height: "100%" }} />
          </div>
          <div className="information">
            <h1>Card Readers</h1>
            <p>
              We work with the most popular brands in the industry to give you
              the edge over your competitors.
            </p>
          </div>
        </IllustrationSectionWrapper>
      </section>
      <section id="card-reader-detail">
        <DetailSectionWrapper>
          <SkewedBackground />
          <Container>
            <Article>
              <div className="article-text">
                <h2>Pax A920</h2>
                <p>
                  The Pax A920 is our latest card reader, and is the most
                  popular and stylish card terminal on the market. Powered by
                  Android and packed with a fantastic range of features.
                </p>
              </div>
              <div className="article-image">
                <img src="/A920.webp" alt="Pax A920 Card Reader" />
              </div>
            </Article>
          </Container>
        </DetailSectionWrapper>
      </section>
    </>
  );
}
