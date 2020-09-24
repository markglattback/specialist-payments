import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { forwardRef, SVGProps } from "react";

const BrandLogo = styled.div<Props>`
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  z-index: ${({ open }) => (open ? "0" : "var(--zIndexFront)")};
  height: ${({ mobile }) => (mobile ? "48px" : "80px")};
  position: ${({ mobile }) => (mobile ? "absolute" : "static")};
  width: ${({ mobile }) => (mobile ? "100%" : "initial")};
  justify-content: flex-start;
  align-items: center;
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
  const LinkChild = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    ({ ...props }, ref) => {
      return <Logo {...props} ref={ref} />;
    }
  );

  const router = useRouter();

  return (
    <BrandLogo mobile={mobile} open={open}>
      <Logo
        onClick={() => router.push("/")}
        style={{ height: `${mobile ? "30px" : "48px"}`, cursor: "pointer" }}
      />
    </BrandLogo>
  );
}
