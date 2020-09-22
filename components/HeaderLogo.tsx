import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import Link from "next/link";

const BrandLogo = styled.div<Props>`
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  z-index: ${({ open }) => (open ? "0" : "var(--zIndexFront)")};
  height: ${({ mobile }) => (mobile ? "48px" : "80px")};
  position: ${({ mobile }) => (mobile ? "absolute" : "static")};
  width: ${({ mobile }) => (mobile ? "100%" : "initial")};
  justify-content: flex-start;
  padding: ${({ mobile }) => (mobile ? "0 var(--padding)" : "0")};

  img {
    display: inline-block;
    cursor: pointer;
    height: 100%;
  }
`;

type Props = {
  mobile?: boolean;
  open?: boolean;
};

export default function HeaderLogo({ mobile, open }: Props) {
  return (
    <BrandLogo mobile={mobile} open={open}>
      <Link href="/">
        <img src="/sp-logo-horizontal.svg" alt="Specialist Payments Logo" />
      </Link>
    </BrandLogo>
  );
}
