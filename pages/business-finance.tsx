import styled from "styled-components";
import ProductHeroWrapper from "styled-components/ProductHeroWrapper";
import ProductDetailWrapper from "styled-components/ProductDetailWrapper";
import Container from "styled-components/Container";
import SkewedBackgroundTint from "styled-components/SkewedBackgroundTint";
import BusinessFinance from "components/Product Illustrations/BusinessFinance";
import Head from "next/head";
import QuoteSection from "components/QuoteSection";

const Article = styled.article`
  div.article-text {
    text-align: center;

    p {
      text-align: left;
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

    @media screen and (max-width: 480px) {
      margin: var(--paddingDouble) auto;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 0 var(--paddingDouble);
  }
`;

const SkewedBackground = styled(SkewedBackgroundTint)`
  top: 0;
  height: 100%;
`;

let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis maiores quod quo harum hic dolores aspernatur delectus.";

export default function BusinessFinancePage() {
  return (
    <>
      <Head>
        <title>Business Finance | Specialist Payments</title>
      </Head>
      <section id="business-finance-heading">
        <ProductHeroWrapper>
          <div className="information">
            <h1>Business Finance</h1>
            <p>
              Next day settlements available to help with your business
              cashflow.
            </p>
          </div>
          <div
            className="illustration"
            style={{ maxWidth: "500px", overflowX: "hidden" }}
          >
            <BusinessFinance style={{ height: "100%", margin: "0 auto" }} />
          </div>
        </ProductHeroWrapper>
      </section>
      <section id="payment-links-detail">
        <ProductDetailWrapper>
          <SkewedBackground />
          <Container>
            <Article>
              <div className="article-text">
                <h2>Borrowing with flexibility</h2>
                <p>
                  Pay us back when you get paid with our amazingly flexible
                  lending scheme. We agree a sum for you to borrow and a fixed %
                  to repay each month. If you have a bad month sales wise,
                  relax, you can pay us next month. No late penalties, no
                  increases in repayments and no hidden costs. Whether its a few
                  hundred pounds or a few million, we are simply here to support
                  your business in a way that suits you.
                </p>
              </div>
            </Article>
          </Container>
        </ProductDetailWrapper>
      </section>
      <QuoteSection />
    </>
  );
}
