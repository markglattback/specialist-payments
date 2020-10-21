import styled from "styled-components";
import dynamic from "next/dynamic";
import { FunctionComponent, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCardWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 60px auto 1fr;
  grid-template-columns: 1fr;
  grid-gap: var(--padding);
  padding: var(--padding);
  max-width: 230px;
  margin: 0 var(--paddingHalf);
  background: var(--brand);
  color: var(--background);
  font-size: 16px;
  border-radius: var(--paddingHalf);
  z-index: 1;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 0 3px var(--brandTint);
  }

  @media (max-width: 414px) {
    max-width: 100%;
    margin: var(--padding) var(--padding);
  }

  div.icon {
    width: 60px;
    height: 60px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
    line-height: 1;
    color: inherit;
  }

  a {
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

type Props = {
  product: Product;
};

type Product = {
  title: string;
  iconComp: string;
  iconSrc: string;
  iconAltText: string;
  description: string;
  href: string;
};

export default function ProductCard({ product }: Props) {
  let IconComponent = null;

  if (product.iconComp) {
    IconComponent = dynamic(
      () => import(`./Card Icons/${product.iconComp}`)
    ) as any;
  }

  const router = useRouter();

  function handleClick(e: MouseEvent) {
    router.push(product.href);
  }

  return (
    <ProductCardWrapper onClick={handleClick}>
      <div className="icon">
        <IconComponent />
      </div>
      <div className="title">
        <h3>{product.title}</h3>
      </div>
      <div className="description">{product.description}</div>
      <div>
        <Link href={product.href}>
          <a>Find out more</a>
        </Link>
      </div>
    </ProductCardWrapper>
  );
}
