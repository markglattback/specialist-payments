import styled from "styled-components";
import CardReaders from "components/Product Illustrations/CardReaders";
import EPOS from "components/Product Illustrations/EPOS";
import ProductHeroWrapper from "styled-components/ProductHeroWrapper";
import ProductDetailWrapper from "styled-components/ProductDetailWrapper";
import Container from "styled-components/Container";
import SkewedBackgroundTint from "styled-components/SkewedBackgroundTint";
import ProductArticle from "styled-components/ProductArticle";

const EPOSArticle = styled.article`
  div.article-text {
    text-align: center;

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--brand);
      margin-bottom: 1.5rem;
    }
  }

  div.illustration {
    max-width: 800px;
    margin: 0 auto;

    img {
      width: 100%;
    }

    @media (max-width: 414px) {
      margin: var(--paddingDouble) auto;
    }
  }

  @media (max-width: 414px) {
    margin: 0 var(--paddingDouble);
  }
`;

const SkewedBackground = styled(SkewedBackgroundTint)`
  top: 0;
  height: 100%;
`;

let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis maiores quod quo harum hic dolores aspernatur delectus.";

export default function CardReaderPage() {
  return (
    <>
      <section id="card-reader-heading">
        <ProductHeroWrapper>
          <div className="illustration">
            <CardReaders style={{ height: "100%" }} />
          </div>
          <div className="information">
            <h1>Card Readers</h1>
            <p>
              We work with the most popular brands in the industry to give you
              the edge over your competitors.
            </p>
          </div>
        </ProductHeroWrapper>
      </section>
      <section id="card-reader-detail">
        <ProductDetailWrapper>
          <SkewedBackground />
          <Container>
            <ProductArticle>
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
            </ProductArticle>
          </Container>
        </ProductDetailWrapper>
        <ProductDetailWrapper>
          <Container>
            <EPOSArticle>
              <div className="article-text">
                <h2>Seamless POS Integration</h2>
                <p>{lorem}</p>
              </div>
              <div className="illustration">
                <EPOS />
              </div>
            </EPOSArticle>
          </Container>
        </ProductDetailWrapper>
      </section>
    </>
  );
}
