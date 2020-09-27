import styled from "styled-components";
import PaymentGateways from "components/Product Illustrations/PaymentGateways";
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
            <p>E-Commerce made easy.</p>
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
                <p>
                  Take payments through your website with one of our simple to
                  use E-Commerce gateways. You can also accept payments
                  globally, helping you to maximise revenue if you have an
                  international customer base. Easy to set up, our developers
                  will help tailor a bespoke product to fit your website making
                  life easy for you.
                </p>
              </div>
            </ProductArticle>
          </Container>
        </ProductDetailWrapper>
      </section>
    </>
  );
}
