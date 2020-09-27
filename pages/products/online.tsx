import styled from "styled-components";
import OnlinePayments from "components/Product Illustrations/OnlinePayments";
import EPOS from "components/Product Illustrations/EPOS";
import ProductHeroWrapper from "styled-components/ProductHeroWrapper";
import ProductDetailWrapper from "styled-components/ProductDetailWrapper";
import Container from "styled-components/Container";
import SkewedBackgroundTint from "styled-components/SkewedBackgroundTint";
import ProductArticle from "styled-components/ProductArticle";
import PaymentGateways from "components/Product Illustrations/PaymentGateways";
import PaymentLinks from "components/Product Illustrations/PaymentLinks";
import PhonePayments from "components/Product Illustrations/PhonePayments";
import PhonePaymentsB from "components/Product Illustrations/PhonePaymentsB";

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
          <div className="information">
            <h1>Online Payments</h1>
            <p>
              Do you have a website which you need to take payments through, or
              do you have customers that like to pay by phone? Look no further
              than our online options, as well as our pay link whereby you can
              accept payments via your email
            </p>
          </div>
          <div className="illustration">
            <OnlinePayments style={{ height: "100%" }} />
          </div>
        </ProductHeroWrapper>
      </section>
      <section id="card-reader-detail">
        <ProductDetailWrapper>
          <SkewedBackground />
          <Container>
            <ProductArticle>
              <div className="article-image reversed">
                <PaymentGateways style={{ width: "100%" }} />
              </div>
              <div className="article-text">
                <h2>E-commerce Payment Gateways</h2>
                <p>
                  Take payments through your website with one of our simple to
                  use E-commerce gateways.
                </p>
              </div>
              <div className="article-details">
                <div className="heading">
                  <h3>Expand your business</h3>
                </div>
                <div className="text-left">
                  You'll be able to accept payments globally, helping you to
                  maximise revenue if you have an international customer base.
                </div>
                <div className="text-right">
                  It's easy to set up, and our developers will help tailor a
                  bespoke product to fit your website, making life easy for you.
                </div>
              </div>
            </ProductArticle>
          </Container>
        </ProductDetailWrapper>
        <ProductDetailWrapper>
          <Container>
            <ProductArticle>
              <div className="article-image reversed">
                <PaymentLinks style={{ width: "80%" }} />
              </div>
              <div className="article-text">
                <h2>Payment Links</h2>
                <p>
                  Make it easy for your customer by sending them a payment link
                  via email or text, and get paid from anywhere in the world.
                </p>
              </div>
              <div className="article-details">
                <div className="heading">
                  <h3>Secure remote payments</h3>
                </div>
                <div className="text-left">
                  <p>
                    It's simple to create a secure pay link. Just enter the
                    amount and send the generated link to your customer.
                  </p>
                </div>
                <div className="text-right">
                  <p>
                    All they need to do is click on the link and enter their
                    payment details. It couldn't be easier.
                  </p>
                </div>
              </div>
            </ProductArticle>
          </Container>
        </ProductDetailWrapper>
        <ProductDetailWrapper>
          <SkewedBackground />
          <Container>
            <ProductArticle>
              <div className="article-image reversed">
                <PhonePaymentsB style={{ width: "80%" }} />
              </div>
              <div className="article-text">
                <h2>Phone Payments</h2>
                <p>
                  Take advantage of lower rates when you use a MOTO account to
                  take payments over the Phone.
                </p>
              </div>
              <div className="article-details">
                <div className="heading">
                  <h3>Why pay more than you have to?</h3>
                </div>
                <div className="text-left">
                  <p>
                    Use a MOTO account to process phone payments and get lower
                    rates than if you were to use a card machine.
                  </p>
                </div>
                <div className="text-right">
                  <p>
                    Simply log into your account online, input your customer's
                    payment details and thats it! Fast, secure, and easy to use.
                  </p>
                </div>
              </div>
            </ProductArticle>
          </Container>
        </ProductDetailWrapper>
      </section>
    </>
  );
}
