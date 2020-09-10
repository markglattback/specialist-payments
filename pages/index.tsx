import Head from "next/head";
import styled from "styled-components";
import HeroImage from "components/HeroImage";
import HeroSVG from "components/HeroSVG";
import Container from "styled-components/Container";
import MaxContainer from "styled-components/MaxContainer";
import Button from "styled-components/Button";
import Link from "next/link";
import ProductCard from "components/ProductCard";
import { useEffect, useState, MouseEvent } from "react";

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
  }

  div.hero-image {
    display: flex;
    justify-content: center;
    height: 360px;
  }

  @media (max-width: 414px) {
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
  /* background: var(--backgroundTint); */
  background: transparent;
  position: relative;
  padding-bottom: 10rem;

  @media (max-width: 414px) {
    padding-top: 5rem;
  }

  h2 {
    position: relative;
    text-align: center;
    font-size: 1rem;
    z-index: 1;
  }

  div.products {
    display: flex;
    max-width: var(--maxWidth);
    justify-content: space-evenly;
    margin: 0 auto;
    margin-top: var(--padding);
    margin-bottom: 10rem;

    @media (max-width: 414px) {
      flex-direction: column;
    }
  }

  div.colour-scheme {
    margin: 0rem auto;

    button {
      margin: var(--padding) auto;
    }
  }
`;

const EPOSArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: var(--maxWidth);
  margin: 0 auto;

  div.epos-image {
    margin-left: 2.5rem;
    max-width: 400px;
  }

  div.epos-text {
    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--brand);
      margin-bottom: 1.5rem;
      text-align: left;
    }
  }

  @media (max-width: 414px) {
    margin: 0 var(--paddingDouble);
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto);

    div.epos-text {
      text-align: center;

      h2 {
        text-align: center;
      }
    }
  }
`;

const BackgroundSkew = styled.div`
  position: absolute;
  background: var(--backgroundTint);
  top: 10rem;
  height: calc(100% - 10rem);
  width: 100%;
  transform: skewY(-10deg);

  @media (max-width: 414px) {
    top: 0rem;
    height: 100%;
  }
`;

export default function Home() {
  const spsTheme = {
    background: "#142038",
    backgroundTint: "#1e2e3f",
    brandShade: "#43b185",
    brand: "#72cca7",
    brandTint: "#edf7f3",
  };

  const myTheme = {
    background: "#202026",
    backgroundTint: "#313135",
    brandShade: "#2b7a78",
    brand: "#3aafa9",
    brandTint: "#def2f1",
  };

  const [theme, setTheme] = useState(spsTheme);

  function changeColours(e: MouseEvent) {
    e.preventDefault();

    console.log("Button pressed");

    if (theme.background === "#142038") {
      setTheme(myTheme);
    } else {
      setTheme(spsTheme);
    }
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      theme.background
    );
    document.documentElement.style.setProperty(
      "--backgroundTint",
      theme.backgroundTint
    );
    document.documentElement.style.setProperty(
      "--brandShade",
      theme.brandShade
    );
    document.documentElement.style.setProperty("--brand", theme.brand);
    document.documentElement.style.setProperty("--brandTint", theme.brandTint);
  }, [theme]);

  return (
    <div>
      <Head>
        <title>Specialist Payment Solutions</title>
      </Head>
      <section id="company-description" style={{ position: "relative" }}>
        <HeroContainer>
          <div className="headline-container">
            <div className="headline">
              <h1>Payment Services, Made Easy</h1>
              <p>
                We provide bespoke solutions that will help your business grow.
                Our goal is to build lasting relationships built on trust.
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
          <h2>Our Products</h2>
          <div className="products">
            <ProductCard
              product={{
                title: "Card Readers",
                iconComp: "Readers",
                iconSrc: "/product card icons/readers.svg",
                iconAltText: "Illustration of a Card Reader",
                description: lorem,
                href: "/card-readers",
              }}
            />
            <ProductCard
              product={{
                title: "Payment Gateways",
                iconComp: "Gateways",
                iconSrc: "/product card icons/gateways.svg",
                iconAltText: "Illustration of a Payment Gateway",
                description: lorem,
                href: "/payment-gateways",
              }}
            />
            <ProductCard
              product={{
                title: "Payment Links",
                iconComp: "Links",
                iconSrc: "/product card icons/links.svg",
                iconAltText: "Illustration of a Payment Link",
                description: lorem,
                href: "/payment-links",
              }}
            />
            <ProductCard
              product={{
                title: "Phone Payments",
                iconComp: "Phone",
                iconSrc: "/product card icons/phone.svg",
                iconAltText: "Illustration of a Phone",
                description: lorem,
                href: "/phone-payments",
              }}
            />
          </div>
          <EPOSArticle id="epos">
            <div className="epos-image"></div>
            <div className="epos-text">
              <h2>Seamless POS Integration</h2>
              <p>{lorem}</p>
            </div>
          </EPOSArticle>
          <div className="colour-scheme">
            <Button type="button" primary onClick={changeColours}>
              Change Colours
            </Button>
          </div>
        </ProductContainer>
      </section>
    </div>
  );
}
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis maiores quod quo harum hic dolores aspernatur delectus.";
