import styled from "styled-components";
import Container from "styled-components/Container";

const FooterWrapper = styled.footer`
  background: var(--backgroundShade);
  position: relative;
  padding-top: 7rem;
  flex-shrink: 0;

  div.contact {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 0 var(--paddingDouble);

    h2 {
      color: var(--brand);
    }

    span {
      @media (max-width: 414px) {
        display: block;
      }
    }

    span.email {
      margin-right: 3rem;
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
        <div className="contact">
          <div>
            <h2>Contact</h2>
            <p>Get in touch via email or phone</p>
            <p className="contact-details">
              <span className="email">info@specialistpayments.com</span>
              <span className="phone">020 8167 9061</span>
            </p>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
}
