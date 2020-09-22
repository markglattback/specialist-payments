import styled from "styled-components";
import Container from "styled-components/Container";

const FooterWrapper = styled.footer`
  background: var(--backgroundShade);
  position: relative;
  padding-top: var(--paddingDouble);
  flex-shrink: 0;
  font-size: 16px;
  color: var(--bodyColor);

  div.grid {
    @media (max-width: 414px) {
      margin: 0 var(--padding);
    }
  }

  div.logo {
    margin-bottom: var(--paddingDouble);
    img {
      display: inline-block;
      height: 80px;
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
  }

  p.contact-details {
    font-weight: bold;

    span {
      font-weight: normal;
      margin-left: var(--paddingHalf);
    }
  }

  div.footer-background {
    position: absolute;
    background: var(--backgroundShade);
    top: 10rem;
    height: calc(100%);
    width: 100%;
    transform: skewY(10deg);
  }
`;

type Props = {};

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div className="grid">
          <div className="logo">
            <img src="/sp-logo-horizontal.svg" alt="Specialist Payments" />
          </div>
          <div className="contact">
            <div>
              <h2>Contact</h2>
              <p className="contact-details">
                email:<span className="email">info@specialistpayments.com</span>
                <br />
                phone:<span className="phone">020 8167 9061</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
}
