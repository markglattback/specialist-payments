import Head from "next/head";
import styled from "styled-components";
import HeroSVG from "components/HeroSVG";
import EPOS from "components/Product Illustrations/EPOS";
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
  background: transparent;
  position: relative;
  padding-bottom: 7rem;

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
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: var(--maxWidth);
  margin: 10rem auto;
  /* color: var(--bodyColorTint); */

  :nth-of-type(1) {
    margin-top: 0;
  }
  :nth-of-type(2) {
    margin-bottom: 0;
  }

  div.article-image {
    max-width: 400px;
  }

  div.article-text {
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
  height: calc(100%);
  width: 100%;
  transform: skewY(-5deg);

  @media (max-width: 414px) {
    top: 0rem;
    height: 100%;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Specialist Payment Solutions</title>
      </Head>
      <section id="company-description" style={{ position: "relative" }}>
        <HeroContainer>
          <div className="headline-container">
            <div className="headline">
              <h1>Our Service, Your Vision</h1>
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
          <Article id="epos">
            <div className="article-image">
              <EPOS style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="article-text">
              <h2>Seamless POS Integration</h2>
              <p>{lorem}</p>
            </div>
          </Article>
          <Article id="finance">
            <div className="article-text">
              <h2>Business Finance</h2>
              <p>{lorem}</p>
            </div>
            <div className="article-image"></div>
          </Article>
        </ProductContainer>
      </section>
    </div>
  );
}
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis maiores quod quo harum hic dolores aspernatur delectus.";
