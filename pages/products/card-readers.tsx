import styled from "styled-components";
import CardReaders from "components/Product Illustrations/CardReaders";
import EPOS from "components/Product Illustrations/EPOS";
import ProductHeroWrapper from "styled-components/ProductHeroWrapper";
import ProductDetailWrapper from "styled-components/ProductDetailWrapper";
import Container from "styled-components/Container";
import SkewedBackgroundTint from "styled-components/SkewedBackgroundTint";
import ProductArticle from "styled-components/ProductArticle";
import QuoteSection from "components/QuoteSection";
import Head from "next/head";
import MaxContainer from "styled-components/MaxContainer";

const EPOSArticle = styled.article`
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
      height: 100%;
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
  clip-path: polygon(
    calc(50% - 1000px) 0,
    calc(50% + 1000px) 0,
    calc(50% + 1000px) 100%,
    calc(50% - 1000px) 100%
  );
`;

const CustomProductArticle = styled(ProductArticle)`
  margin-bottom: 7rem;

  :nth-of-type(2) {
    margin-bottom: 0;

    @media screen and (max-width: 480px) {
      margin-top: 3rem;
    }
  }

  div.article-image {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
  }

  div.article-image.large-image {
    height: 400px;

    @media screen and (max-width: 480px) {
      grid-row-start: 2;
      height: 300px;
    }
  }

  img {
    width: 100%;
  }

  div.article-text {
    h3 {
      margin-bottom: 1.5rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  div.article-text.centred {
    margin: 0 auto;
  }
`;

export default function CardReaderPage() {
	return (
		<>
			<Head>
				<title>Card Readers | Specialist Payments</title>
				<meta
					name="description"
					content="Take card payments with modern wireless card readers from the industry's favourite brands."
				/>
			</Head>
			<section id="card-reader-heading">
				<ProductHeroWrapper>
					<div className="information">
						<h1>Card Readers</h1>
						<p>
							Get your business set up to take card payments with our wireless
							card readers from the most popular brands in the industry.
            </p>
					</div>
					<div className="illustration">
						<CardReaders style={{ height: "100%" }} />
					</div>
				</ProductHeroWrapper>
			</section>
			<section id="card-reader-detail">
				<ProductDetailWrapper>
					<SkewedBackground />
					<Container>
						<CustomProductArticle>
							<div className="article-text">
								<h2>Powerful hardware in a stylish design</h2>
								<p>
									The revolutionary terminal that started it all. The Pax A920
									combines the full features of an Android tablet with a
									powerful POS payment terminal, all in a sleek and compact
									design.
                </p>
							</div>
							<div className="article-image">
								<img src="/A920.webp" alt="Pax A920 Card Reader" />
							</div>
						</CustomProductArticle>
						<CustomProductArticle>
							<div className="article-image large-image">
								<img
									src="/a920-branded-front.png"
									alt="Pax A920 Card Reader"
									style={{ height: "100%", width: "auto" }}
								/>
							</div>
							<div className="article-text centred">
								<h3>Key Features</h3>
								<ul>
									<li>Powered by Android 7.1</li>
									<li>Cortex A7 Processor</li>
									<li>5" Capacitive Touch Screen</li>
									<li>4G + WIFI + GPS</li>
									<li>5250mAh capacity battery</li>
									<li>Front and Rear Cameras</li>
									<li>NFC Contactless</li>
									<li>PIN on glass</li>
									<li>PCI PTS 5.x SRED</li>
									<li>ATEX Certified</li>
									<li>Optional Docking Station</li>
								</ul>
							</div>
						</CustomProductArticle>
					</Container>
				</ProductDetailWrapper>
				{/* <ProductDetailWrapper>
          <Container>
            <EPOSArticle>
              <div className="article-text">
                <h2>Seamless POS Integration</h2>
                <p>
                  Whether you need a terminal which sits by your till, something
                  portable you can take around your business premises or a
                  terminal which you can take on the go, we have something for
                  you. All of our card machines are EPOS compatible, possess the
                  latest technology and as such are equipped with contactless
                  capabilities as well as smart phone acceptance.{" "}
                </p>
              </div>
              <div className="illustration">
                <EPOS />
              </div>
            </EPOSArticle>
          </Container>
        </ProductDetailWrapper> */}
			</section>
			<QuoteSection />
		</>
	);
}
