import styled from "styled-components";
import Container from "styled-components/Container";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";
import { forwardRef, SVGProps } from "react";

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
      text-align: center;
    }
  }

  div.logo {
    grid-column-start: 1;
    grid-column-end: 3;
    img {
      display: inline-block;
      width: 156px;
    }

    @media (max-width: 414px) {
      grid-column-end: 2;
    }
  }

  div.contact {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;

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
      grid-column-end: 2;
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

  div.footer-links {
    grid-row-start: 1;
    grid-row-end: 3;

    ul {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 414px) {
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }

  div.footer-links.company {
    @media (max-width: 414px) {
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }

  div.additional-details {
    padding: var(--paddingDouble) 0 0 0;
    font-size: 13px;
    text-align: center;

    @media (max-width: 414px) {
      padding: 0;
    }
  }
`;

type Props = {
  mobile: boolean;
};

export default function Footer({ mobile }: Props) {
  const LinkChild = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    ({ ...props }, ref) => {
      return <Logo {...props} ref={ref} />;
    }
  );

  const router = useRouter();

  return (
    <FooterWrapper>
      <Container>
        <div className="grid">
          <div className="logo">
            <Logo
              onClick={() => router.push("/")}
              style={{
                height: `${mobile ? "30px" : "48px"}`,
                cursor: "pointer",
              }}
            />
          </div>
          <div className="contact">
            <div>
              <p className="contact-details">
                <span className="email">info@specialistpayments.com</span>
                <br />
                <span className="phone">020 8167 9061</span>
              </p>
            </div>
          </div>
          <div className="footer-links products">
            <h3>Products</h3>
            <ul>
              <Link href="/card-readers">
                <a>Card Readers</a>
              </Link>
              <Link href="/online">
                <a>Online Payments</a>
              </Link>
            </ul>
          </div>
          <div className="footer-links company">
            <h3>Company</h3>
            <ul>
              <Link href="/about">
                <a>About Us</a>
              </Link>
              <Link href="/partners">
                <a>Partners</a>
              </Link>
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="additional-details">
          <p>
            Specialist Payment Solutions Ltd is a registered company in England
            - 12769227
          </p>
          <p>© Copyright 2020 - Specialist Payment Solutions Ltd</p>
        </div>
      </Container>
    </FooterWrapper>
  );
}
