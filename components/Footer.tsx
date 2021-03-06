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
      grid-template-columns: 2fr 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
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

    @media (max-width: 1024px) {
      grid-column-end: 2;
    }

    @media screen and (max-width: 480px) {
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
      grid-column-end: 2;
      grid-row-start: 2;
    }

    @media screen and (max-width: 480px) {
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

    @media screen and (max-width: 480px) {
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }

  div.footer-links.company {
    @media screen and (max-width: 480px) {
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }

  div.social-media {
    display: flex;
    margin: 0 auto;
    margin-top: var(--paddingDouble);
    height: 36px;
    justify-content: center;
    fill: var(--bodyColor);

    a {
      display: block;
      height: 100%;
    }

    img {
      display: block;
      margin: 0 0.5rem;
    }

    img:hover {
      cursor: pointer;
    }
  }

  div.additional-details {
    padding: var(--paddingDouble) 0 0 0;
    font-size: 13px;
    text-align: center;

    @media screen and (max-width: 480px) {
      padding: 0;
    }
  }

	.end-content {
		padding: var(--paddingDouble) var(--padding) 0 ;
		font-size: 13px;
		text-align: center;

		.payment-methods {
			display: flex;
			justify-content: center;
			align-items: center;

			svg, img {
				margin: 0 4px;
			}

			img {
				width: auto;
				height: 15px;
				object-fit: cover;
			}
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
							<p>
								2-5, 1 Grosvenor Road
                <br />
                Wanstead
                <br />
                London, E11 2EW
              </p>
						</div>
					</div>
					<div className="footer-links products">
						<h3>Products</h3>
						<ul>
							<Link href="/products/card-readers">
								<a>Card Readers</a>
							</Link>
							<Link href="/products/online-payments">
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
							<Link href="/contact">
								<a>Contact Us</a>
							</Link>
							<Link href="/partners">
								<a>Partners</a>
							</Link>
						</ul>
					</div>
				</div>
				<div className="social-media">
					<a
						href="https://www.linkedin.com/company/specialistpayments"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/social/linkedin.svg" alt="LinkedIn" height="100%" />
					</a>
					<a
						href="https://www.instagram.com/specialistpayments/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/social/instagram.svg" alt="LinkedIn" height="100%" />
					</a>
					<a
						href="https://www.facebook.com/specialistpayments/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/social/facebook.svg" alt="LinkedIn" height="100%" />
					</a>
				</div>
				<div className="additional-details">
					<p>
						Specialist Payment Solutions Ltd is a registered company in England
						- 12769227
          </p>
					<p>© Copyright 2020 - Specialist Payment Solutions Ltd</p>
				</div>


				<div className="end-content">
					<p>Cards Accepted</p>

					<div className="payment-methods">

						<svg className="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>

						<svg className="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>

						<svg className="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-maestro"><title id="pi-maestro">Maestro</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#00A2E5" cx="23" cy="12" r="7"></circle><path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>

						<svg className="icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-american_express"><title id="pi-american_express">American Express</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path><path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path><path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg>


						<svg className="icon" viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"></path><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"></path><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"></path><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"></path><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"></path><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"></path><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"></path><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"></stop><stop offset=".25" stop-color="#F79A20"></stop><stop offset=".533" stop-color="#F68D20"></stop><stop offset=".62" stop-color="#F58720"></stop><stop offset=".723" stop-color="#F48120"></stop><stop offset="1" stop-color="#F37521"></stop></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"></stop><stop offset=".359" stop-color="#E16F27"></stop><stop offset=".703" stop-color="#D4602C"></stop><stop offset=".982" stop-color="#D05B2E"></stop></linearGradient></defs></svg>

						<svg className="icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-google_pay"><title id="pi-google_pay">Google Pay</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path><path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"></path><path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"></path><path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"></path><path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"></path><path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"></path></svg>

						<svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" x="0" y="0" width="38" height="24" viewBox="0 0 165.521 105.965"><title id="pi-apple_pay">Apple Pay</title><path fill="#000" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"></path><path fill="#FFF" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"></path><g><g><path fill="#000" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"></path><path fill="#000" d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"></path></g><g><path fill="#000" d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"></path><path fill="#000" d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"></path><path fill="#000" d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"></path></g></g></svg>

						<svg className="icon" xmlns="http://www.w3.org/2000/svg" width="41.33px" height="20px" viewBox="0 0 62 30" version="1.1">
							<title>Samsung Pay</title>
							<defs>
								<polygon id="path-1" points="0 0.377636364 6.32841334 0.377636364 6.32841334 9.75231818 0 9.75231818" />
							</defs>
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="Dojo-Proposed-Copy" transform="translate(-895.000000, -7291.000000)">
									<g id="Group-22" transform="translate(895.000000, 7291.000000)">
										<path d="M13.9965,29.2127091 L13.9965,15.0936182 L16.2721818,15.0936182 L16.2721818,16.1321182 C16.585,15.6262545 17.1965455,15.2669364 17.6756364,15.1048909 C18.1575455,14.9456636 18.6563636,14.8639364 19.1636364,14.8639364 C20.4219545,14.8639364 21.7648182,15.2880727 22.8568636,16.4223909 C23.8643636,17.4707545 24.397,18.7445727 24.397,20.2551182 C24.397,20.9469818 24.2645455,21.6289818 24.0010455,22.2828 C23.7445909,22.9408455 23.3796364,23.5185727 22.909,24.0004818 C22.413,24.5204364 21.8479545,24.9121636 21.2279545,25.1770727 C20.6079545,25.4405727 20.0288182,25.5744364 19.2679091,25.5744364 C18.7141364,25.5744364 18.1815,25.4913 17.6770455,25.3151636 C17.1810455,25.1545273 16.4863636,24.7557545 16.2341364,24.3203455 L16.2341364,29.2127091 L13.9965,29.2127091 M19.0917727,16.8690727 C18.2618182,16.8690727 17.5389545,17.1269364 16.9457273,17.7342545 C16.3398182,18.3683455 16.1030909,19.2715727 16.1030909,20.1719818 C16.1030909,21.1301636 16.3327727,22.0672091 16.9231818,22.6998909 C17.5192273,23.3339818 18.2533636,23.5566182 19.1086818,23.5566182 C19.9752727,23.5566182 20.6784091,23.2029364 21.2152727,22.6632545 C21.8282273,22.0376182 22.1199091,21.1879364 22.1199091,20.2776636 C22.1199091,19.2786182 21.8254091,18.3908909 21.2307727,17.7596182 C20.7192727,17.2143 19.9795,16.8690727 19.0917727,16.8690727" id="Fill-1" fill="#FEFEFE" />
										<polygon id="Fill-3" fill="#FEFEFE" points="39.9923955 29.2127091 41.9129864 24.7628 37.5081682 15.0950273 39.9050318 15.0950273 43.0360318 22.3518455 45.92185 15.0950273 48.3342136 15.0950273 42.3469864 29.2127091" />
										<path d="M33.8999091,25.3885773 L33.8999091,24.3204864 C33.6490909,24.7558955 32.9544091,25.1546682 32.4598182,25.3153045 C31.9539545,25.4914409 31.4156818,25.5745773 30.8675455,25.5745773 C30.1080455,25.5745773 29.5275,25.4407136 28.9060909,25.1786227 C28.2875,24.9123045 27.7224545,24.5191682 27.2264545,23.9992136 C26.7558182,23.5201227 26.3880455,22.9409864 26.1358182,22.28435 C25.8695,21.6277136 25.7356364,20.9471227 25.7356364,20.25385 C25.7356364,18.7447136 26.2682727,17.4708955 27.2757727,16.4225318 C28.3706364,15.2882136 29.7135,14.8640773 30.9732273,14.8640773 C31.4790909,14.8640773 31.9765,14.9458045 32.4598182,15.1064409 C32.9403182,15.2670773 33.5518636,15.6263955 33.8675,16.1336682 L33.8675,15.0951682 L36.1375455,15.0951682 L36.1375455,25.3885773 L33.8999091,25.3885773 M28.9032727,17.75835 C28.3072273,18.3910318 28.0169545,19.2787591 28.0169545,20.2778045 C28.0169545,21.1880773 28.3072273,22.0377591 28.9215909,22.6619864 C29.4570455,23.2044864 30.1601818,23.5567591 31.0267727,23.5567591 C31.8835,23.5567591 32.6162273,23.3341227 33.2094545,22.7000318 C33.8055,22.06735 34.0281364,21.1303045 34.0281364,20.1721227 C34.0281364,19.2717136 33.7970455,18.3698955 33.1911364,17.7343955 C32.5936818,17.12285 31.8736364,16.8692136 31.0436818,16.8692136 C30.1531364,16.8692136 29.4161818,17.21585 28.9032727,17.75835" id="Fill-5" fill="#FEFEFE" />
										<polygon id="Fill-7" fill="#FEFEFE" points="50.7161409 8.56276364 50.5991864 1.68921818 52.7677773 1.68921818 52.7677773 10.3621727 49.6494591 10.3621727 47.4893227 3.24203636 47.43155 3.24203636 47.55555 10.3621727 45.4052773 10.3621727 45.4052773 1.68921818 48.6532318 1.68921818 50.6682318 8.56276364" />
										<polygon id="Fill-9" fill="#FEFEFE" points="11.3117591 2.49634545 10.1154409 10.4422091 7.75098636 10.4422091 9.37144091 1.68893636 13.2718045 1.68893636 14.89085 10.4422091 12.5334409 10.4422091 11.3638955 2.49634545" />
										<polygon id="Fill-11" fill="#FEFEFE" points="21.5221727 8.38521818 22.6057636 1.69062727 26.1735818 1.69062727 26.3694455 10.4410818 24.1769 10.4410818 24.1163091 2.57130909 24.0740364 2.57130909 22.6085818 10.4410818 20.3934909 10.4410818 18.9224 2.57130909 18.8744909 2.57130909 18.8195364 10.4410818 16.6298091 10.4410818 16.8284909 1.69062727 20.4005364 1.69062727 21.4784909 8.38521818" />
										<path d="M39.8837545,9.12893636 C40.4995273,9.12893636 40.6827091,8.71184545 40.7278,8.50048182 C40.7461182,8.40607273 40.7461182,8.27784545 40.7461182,8.16511818 L40.7461182,1.68893636 L42.9682545,1.68893636 L42.9682545,7.96502727 C42.9682545,8.12848182 42.9513455,8.45539091 42.9428909,8.54275455 C42.7935273,10.1787091 41.4957545,10.7028909 39.8837545,10.7028909 C38.2745727,10.7028909 36.9824364,10.1787091 36.8344818,8.54275455 C36.8232091,8.45539091 36.8077091,8.12848182 36.8133455,7.96502727 L36.8133455,1.68893636 L39.0284364,1.68893636 L39.0284364,8.16511818 C39.0213909,8.27784545 39.0312545,8.40607273 39.0453455,8.50048182 C39.0890273,8.71184545 39.2778455,9.12893636 39.8837545,9.12893636" id="Fill-13" fill="#FEFEFE" />
										<g id="Group-17" transform="translate(0.000000, 1.031173)">
											<mask id="mask-2" fill="white">
												<use xlinkHref="#path-1" />
											</mask>
											<g id="Clip-16" />
											<path d="M4.06480455,6.93977273 C4.14794091,7.15254545 4.12398636,7.4245 4.08312273,7.58795455 C4.01266818,7.87963636 3.81398636,8.17977273 3.22498636,8.17977273 C2.67966818,8.17977273 2.35135,7.86413636 2.35135,7.38363636 L2.34430455,6.53395455 L-0.000422727273,6.53395455 L-0.000422727273,7.21031818 C-0.000422727273,9.16613636 1.53266818,9.75231818 3.17566818,9.75231818 C4.76653182,9.75231818 6.06712273,9.21404545 6.27285,7.75563636 C6.38135,6.99613636 6.30385,6.50154545 6.26721364,6.31695455 C5.89944091,4.47809091 2.57398636,3.93981818 2.32457727,2.914 C2.28230455,2.73081818 2.28935,2.55186364 2.31612273,2.45463636 C2.37812273,2.16718182 2.56975909,1.86281818 3.11507727,1.86281818 C3.63221364,1.86281818 3.93235,2.18409091 3.93235,2.65331818 L3.93235,3.20004545 L6.11925909,3.20004545 L6.11925909,2.58568182 C6.11925909,0.676363636 4.40298636,0.377636364 3.16016818,0.377636364 C1.60594091,0.377636364 0.332122727,0.896181818 0.101031818,2.325 C0.0404409091,2.7125 0.0319863636,3.06054545 0.117940909,3.50018182 C0.501213636,5.29536364 3.61248636,5.80827273 4.06480455,6.93977273" id="Fill-15" fill="#FEFEFE" mask="url(#mask-2)" />
										</g>
										<path d="M32.5342182,7.95995455 C32.6215818,8.16709091 32.5849455,8.43481818 32.5525364,8.59968182 C32.4849,8.88572727 32.2834,9.17740909 31.7084909,9.17740909 C31.1631727,9.17740909 30.8362636,8.86740909 30.8362636,8.39113636 L30.8362636,7.54990909 L28.5098545,7.54990909 L28.5098545,8.22345455 C28.5098545,10.1609545 30.0316727,10.7358636 31.6634,10.7358636 C33.2246727,10.7358636 34.5168091,10.2032273 34.7239455,8.75609091 C34.8282182,8.00927273 34.7521273,7.52031818 34.7112636,7.33009091 C34.3463091,5.51940909 31.0574909,4.98254545 30.8151273,3.96095455 C30.7742636,3.79186364 30.7855364,3.60586364 30.8038545,3.51145455 C30.8630364,3.23386364 31.0532636,2.93090909 31.5957636,2.93090909 C32.1086727,2.93090909 32.4059909,3.24231818 32.4059909,3.70731818 L32.4059909,4.247 L34.5647182,4.247 L34.5647182,3.63968182 C34.5647182,1.75290909 32.8681727,1.45840909 31.6464909,1.45840909 C30.1035364,1.45840909 28.8381727,1.96004545 28.6155364,3.38181818 C28.5450818,3.76227273 28.5366273,4.1075 28.6324455,4.54854545 C29.0086727,6.32681818 32.0889455,6.83409091 32.5342182,7.95995455" id="Fill-18" fill="#FEFEFE" />
										<path d="M58.1503636,9.04016364 C58.7802273,9.04016364 59.0028636,8.64561818 59.0423182,8.40748182 C59.0578182,8.30884545 59.0648636,8.18343636 59.0634545,8.07211818 L59.0634545,6.80675455 L58.1686818,6.80675455 L58.1686818,5.52166364 L61.2672727,5.52166364 L61.2672727,7.87484545 C61.2672727,8.0383 61.2616364,8.15948182 61.2362727,8.45257273 C61.0925455,10.0378 59.7074091,10.6141182 58.1531818,10.6141182 C56.6045909,10.6141182 55.2265,10.0378 55.0841818,8.45257273 C55.0503636,8.15948182 55.0503636,8.0383 55.0503636,7.87484545 L55.0503636,4.19148182 C55.0503636,4.03366364 55.0686818,3.75748182 55.0912273,3.61657273 C55.2814545,1.97075455 56.6045909,1.4508 58.1531818,1.4508 C59.7074091,1.4508 61.0742273,1.96511818 61.2292273,3.61657273 C61.2616364,3.88711818 61.2461364,4.19148182 61.2461364,4.19148182 L61.2517727,4.47752727 L59.0423182,4.47752727 L59.0423182,3.98857273 C59.0423182,3.98857273 59.0423182,3.77720909 59.0127273,3.65320909 C58.9760909,3.46439091 58.8055909,3.02193636 58.1362727,3.02193636 C57.5078182,3.02193636 57.3161818,3.44184545 57.2682727,3.65320909 C57.2400909,3.77016364 57.2344545,3.92657273 57.2344545,4.0703 L57.2344545,8.07211818 C57.2344545,8.18343636 57.2400909,8.30884545 57.2499545,8.40748182 C57.2936364,8.64561818 57.5134545,9.04016364 58.1503636,9.04016364" id="Fill-20" fill="#FEFEFE" />
									</g>
								</g>
							</g>
						</svg>

						<svg className="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"></path></svg>

					</div>
				</div>
			</Container>
		</FooterWrapper >
	);
}
