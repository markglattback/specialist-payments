import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import Link from "next/link";

const BrandLogo = styled.div<Props>`
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  z-index: var(--zIndexFront);
  height: ${({ mobile }) => (mobile ? "48px" : "80px")};
  position: ${({ mobile }) => (mobile ? "absolute" : "static")};
  width: ${({ mobile }) => (mobile ? "100%" : "initial")};
  justify-content: center;

  /* ${({ mobile }) => {
    if (mobile)
      return "position: absolute; top:var(--paddingHalf); left:50%; transform: translateX(-75px);";
  }} */

  img {
    display: inline-block;
    cursor: pointer;
    height: 100%;
  }
`;

type Props = {
  mobile?: boolean;
};

export default function HeaderLogo({ mobile }: Props) {
  return (
    <BrandLogo mobile={mobile}>
      <Link href="/">
        <img
          src={mobile ? "/sps-logo.svg" : "/sp-logo-horizontal.svg"}
          alt="Specialist Payments Logo"
        />
      </Link>
    </BrandLogo>
  );
}
