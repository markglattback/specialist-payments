import styled from "styled-components";
import Container from "styled-components/Container";
import Link from "next/link";

const FooterWrapper = styled.footer`
  background: var(--backgroundShade);
  position: relative;
  padding: var(--paddingDouble) 0;
  flex-shrink: 0;
  font-size: 16px;
  color: var(--bodyColor);

  h3 {
    font-size: 1em;
    margin: var(--padding) 0;
  }

  div.grid {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-gap: var(--padding);
    align-items: flex-start;

    > div {
      overflow-x: hidden;
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 50%);
    }

    @media (max-width: 414px) {
      grid-template-columns: repeat(1, 1fr);
      margin: 0 var(--padding);
    }
  }

  div.logo {
    img {
      display: inline-block;
      width: 156px;
    }
  }

  div.contact {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;

    h2 {
      font-size: 1.2em;
      color: var(--brand);
    }

    @media (max-width: 1024px) {
      grid-column-start: 1;
      grid-row-start: 2;
    }

    @media (max-width: 414px) {
      grid-row-start: 4;
    }
  }

  p.contact-details {
  }

  div.footer-background {
    position: absolute;
    background: var(--backgroundShade);
    top: 10rem;
    height: calc(100%);
    width: 100%;
    transform: skewY(10deg);
  }

  div.footer-links {
    ul {
      display: flex;
      flex-direction: column;
    }
  }
`;

type Props = {};

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div className="grid">
          <div className="logo">
            <img src="/sp-logo-tight.svg" alt="Specialist Payments" />
          </div>
          <div className="contact">
            <div>
              <h3>Contact</h3>
              <p className="contact-details">
                <span className="email">info@specialistpayments.com</span>
                <br />
                <span className="phone">020 8167 9061</span>
              </p>
            </div>
          </div>
          <div className="footer-links">
            <h3>Products</h3>
            <ul>
              <Link href="/card-readers">
                <a>Card Readers</a>
              </Link>
              <Link href="/payment-gateways">
                <a>Payment Gateways</a>
              </Link>
              <Link href="/payment-links">
                <a>Payment Links</a>
              </Link>
              <Link href="/phone-payments">
                <a>Phone Payments</a>
              </Link>
              <Link href="/business-finance">
                <a>Business Finance</a>
              </Link>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <Link href="/about">
                <a>About Us</a>
              </Link>
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
}
