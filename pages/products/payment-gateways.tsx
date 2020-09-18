import styled from "styled-components";
import PaymentGateways from "components/Product Illustrations/PaymentGateways";
import EPOS from "components/Product Illustrations/EPOS";
import ProductHeroWrapper from "styled-components/ProductHeroWrapper";
import ProductDetailWrapper from "styled-components/ProductDetailWrapper";
import ProductArticle from "styled-components/ProductArticle";
import Container from "styled-components/Container";
import SkewedBackgroundTint from "styled-components/SkewedBackgroundTint";

const SkewedBackground = styled(SkewedBackgroundTint)`
  top: 0;
  height: 100%;
`;

let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis maiores quod quo harum hic dolores aspernatur delectus.";

export default function PaymentGatewaysPage() {
  return (
    <>
      <section id="card-reader-heading">
        <ProductHeroWrapper>
          <div
            className="illustration"
            style={{ maxWidth: "500px", overflowX: "hidden" }}
          >
            <PaymentGateways style={{ height: "100%", margin: "0 auto" }} />
          </div>
          <div className="information">
            <h1>Payment Gateways</h1>
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
                <h2>Heading</h2>
                <p>{lorem}</p>
              </div>
            </ProductArticle>
          </Container>
        </ProductDetailWrapper>
      </section>
    </>
  );
}
