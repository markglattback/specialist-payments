import Head from "next/head";
import styled from "styled-components";
import HeroSVG from "components/HeroSVG";
import EPOS from "components/Product Illustrations/EPOS";
import Container from "styled-components/Container";
import MaxContainer from "styled-components/MaxContainer";
import Button from "styled-components/Button";
import Link from "next/link";
import ProductCard from "components/ProductCard";
import Benefit from "components/Benefit";
import BusinessFinance from "components/Product Illustrations/BusinessFinance";
import QuoteSection from "components/QuoteSection";

const HeroContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 7rem;
  margin-bottom: 10rem;

  div.headline-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5rem;

    h1 {
      margin: 1.6rem 0;
      opacity: 0;
      animation: fade-in 0.8s forwards;
    }

    p {
      margin: 1.6rem 0;
      opacity: 0;
      animation: fade-in 0.675s 0.15s forwards;
    }

    button {
      opacity: 0;
      animation: fade-in 0.55s 0.3s forwards;
    }
  }

  div.hero-image {
    display: flex;
    justify-content: center;
    height: 360px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
    margin-bottom: 5rem;

    div.headline-container {
      text-align: center;
      margin: 0 var(--paddingDouble);
      margin-bottom: 4rem;
    }

    div.hero-image {
      height: 180px;
    }

    button {
      margin: var(--padding) auto;
    }
  }
`;

const ProductContainer = styled(MaxContainer)`
  background: transparent;
  position: relative;
  padding-bottom: 7rem;

  @media screen and (max-width: 480px) {
    padding-top: 5rem;
  }

  h2 {
    position: relative;
    text-align: center;
    font-size: 1rem;
    z-index: 1;
  }

  h2.benefits {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--brand);
    margin-bottom: 1.5rem;
  }

  div.products {
    display: flex;
    max-width: var(--maxWidth);
    justify-content: space-between;
    align-items: stretch;
    margin: 0 auto;
    margin-top: var(--padding);
    margin-bottom: 10rem;

    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
`;

const SectionContainer = styled.div`
  padding: 7rem 0;

  @media (max-width: 1024px) {
    padding: 7rem var(--padding);
  }

  @media screen and (max-width: 480px) {
    padding: 7rem 0;
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: var(--maxWidth);
  margin: 0 auto;

  :nth-of-type(1) {
    margin-top: 0;
  }
  :nth-of-type(2) {
    margin-bottom: 0;
  }

  :nth-of-type(2) > div.article-image {
    margin-left: 2.5rem;

    @media screen and (max-width: 480px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  div.article-image {
    max-width: 400px;
  }

  div.article-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--brand);
      margin-bottom: 1.5rem;
      text-align: left;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 0 var(--paddingDouble);
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto);

    :not(:first-of-type) {
      margin-top: 7rem;
    }

    div.article-text {
      text-align: center;

      h2 {
        text-align: center;
      }
    }

    div.article-image {
      max-width: 100%;
      grid-row-start: 2;
      margin-top: var(--paddingDouble);
    }
  }
`;

const BackgroundSkew = styled.div`
  position: absolute;
  background: var(--backgroundTint);
  top: 10rem;
  height: calc(100% - 10rem);
  width: 100%;
  transform: skewY(-5deg);

  @media screen and (max-width: 480px) {
    top: 0rem;
    height: 100%;
  }
`;

export default function Home() {
	return (
		<div>
			<Head>
				<title>Merchant Payment Services | Specialist Payments</title>
				<meta
					name="description"
					content="At Specialist Payments we focus on helping businesses streamline the way they take payments to maximise revenue by offering the cheapest card machine service."
				/>
			</Head>
			<section id="company-description" style={{ position: "relative" }}>
				<HeroContainer>
					<div className="headline-container">
						<div className="headline">
							<h1>
								Take Payments,
                <br />
                Increase Revenue,
                <br />
                Prosper.
              </h1>
							<p>
								We help businesses streamline the way they take payments to
								maximise their revenue.
              </p>
							<Link href="/quote">
								<Button type="button" primary>
									Get a Quote
                </Button>
							</Link>
						</div>
					</div>
					<div className="hero-image">
						<HeroSVG style={{ height: "100%" }} />
					</div>
				</HeroContainer>
			</section>
			<section id="products" style={{ position: "relative" }}>
				<BackgroundSkew />

				<ProductContainer>
					<article id="products">
						<h2>Payment Solutions</h2>
						<div className="products">
							<ProductCard
								product={{
									title: "Card Readers",
									iconComp: "Readers",
									iconSrc: "/product card icons/readers.svg",
									iconAltText: "Illustration of a Card Reader",
									description:
										"Take card payments with products from the most popular brands in the industry.",
									href: "/products/card-readers",
								}}
							/>
							<ProductCard
								product={{
									title: "Payment Gateways",
									iconComp: "Gateways",
									iconSrc: "/product card icons/gateways.svg",
									iconAltText: "Illustration of a Payment Gateway",
									description:
										"Open up your business to the world of e-commerce with our easy to use payment gateways.",
									href: "/products/online-payments",
								}}
							/>
							<ProductCard
								product={{
									title: "Payment Links",
									iconComp: "Links",
									iconSrc: "/product card icons/links.svg",
									iconAltText: "Illustration of a Payment Link",
									description:
										"Simple and secure payment links make it easy for your customers to pay you.",
									href: "/products/online-payments",
								}}
							/>
							<ProductCard
								product={{
									title: "Phone Payments",
									iconComp: "Phone",
									iconSrc: "/product card icons/phone.svg",
									iconAltText: "Illustration of a Phone",
									description:
										"Take advantage of low rates if your customers need to call you to make a payment.",
									href: "/products/online-payments",
								}}
							/>
						</div>
					</article>
					<article id="why-us">
						<h2 className="benefits">Client Benefits</h2>
						<Benefit
							icon="/benefits/support.svg"
							title="24/7 Support"
							details="We're confident you won't need us often, but when you do we'll be there for you, all day, every day."
						/>
						<Benefit
							icon="/benefits/account-manager.svg"
							title="Dedicated Account Manager"
							details="We'll assign you a dedicated account manager to guide you on your journey with us."
						/>
						<Benefit
							icon="/benefits/next-day-funding.svg"
							title="Next Day Funds"
							details="Next day settlements available to help with your business cashflow."
						/>
						<Benefit
							icon="/benefits/next-day-delivery.svg"
							title="Next Day Delivery"
							details="Once you're signed up you'll receive your new equipment the next day. No waiting."
						/>
						<Benefit
							icon="/benefits/fast-setup.svg"
							title="Fast Setup"
							details="Installing your new equipment couldn't be easier. You'll be up and running within minutes."
						/>
						<Benefit
							icon="/benefits/pci-compliance.svg"
							title="PCI Compliance"
							details="We'll take care of your PCI Compliance so you can focus on running your business."
						/>
					</article>
				</ProductContainer>
			</section>
			<section id="epos-business-finance">
				<SectionContainer>
					{/* <Article id="epos">
            <div className="article-image">
              <EPOS style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="article-text">
              <h2>Seamless POS Integration</h2>
              <p>
                Our products can integrate seamslessly with POS systems. We'll
                help you get set up whether you have an existing system or
                require a new one.
              </p>
            </div>
          </Article> */}
					<Article id="finance">
						<div className="article-text">
							<h2>Flexible Business Finance</h2>
							<p>
								Pay us back when you get paid with our amazingly flexible
								lending scheme. We agree a sum for you to borrow and a fixed %
								to repay each month. If you have a bad month sales wise, relax,
								you can pay us next month. No late penalties, no increases in
								repayments and no hidden costs. Whether its a few hundred pounds
								or a few million, we are simply here to support your business in
								a way that suits you.
              </p>
						</div>
						<div className="article-image">
							<BusinessFinance style={{ height: "100%", width: "100%" }} />
						</div>
					</Article>
				</SectionContainer>
			</section>
			<QuoteSection />
		</div>
	);
}
let lorem =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis maiores quod quo harum hic dolores aspernatur delectus.";
