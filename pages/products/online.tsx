import styled from "styled-components";
import OnlinePayments from "components/Product Illustrations/OnlinePayments";
import CardReaders from "components/Product Illustrations/CardReaders";
import EPOS from "components/Product Illustrations/EPOS";
import ProductHeroWrapper from "styled-components/ProductHeroWrapper";
import ProductDetailWrapper from "styled-components/ProductDetailWrapper";
import Container from "styled-components/Container";
import SkewedBackgroundTint from "styled-components/SkewedBackgroundTint";
import ProductArticle from "styled-components/ProductArticle";
import PaymentGateways from "components/Product Illustrations/PaymentGateways";

const CenteredArticle = styled.article`
  div.article-text {
    text-align: center;

    p {
      max-width: 600px;
    }

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

export default function OnlinePaymentsPage() {
  return (
    <>
      <section id="card-reader-heading">
        <ProductHeroWrapper>
          <div className="illustration">
            <OnlinePayments style={{ height: "100%" }} />
          </div>
          <div className="information">
            <h1>Online Payments</h1>
            <p>
              Do you have a website which you need to take payments through, or
              do you have customers that like to pay by phone? Look no further
              than our online options, as well as our pay link whereby you can
              accept payments via your email
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
                <h2>Payment Gateways</h2>
                <p>{lorem}</p>
              </div>
              <div className="article-image">
                <PaymentGateways style={{ width: "100%" }} />
              </div>
            </ProductArticle>
          </Container>
        </ProductDetailWrapper>
        <ProductDetailWrapper>
          <Container></Container>
        </ProductDetailWrapper>
      </section>
    </>
  );
}
