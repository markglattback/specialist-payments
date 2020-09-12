import styled from "styled-components";
import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";
import NavToggle from "./NavToggle";
import { useEffect, useState, MouseEvent, useRef } from "react";
import { useAppContext } from "./AppContext";

/* TYPES */
type Props = {
  mobile: boolean;
};

const BrandLogo = styled.div<Props>`
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  z-index: var(--zIndexFront);
  height: 100px;
  align-self: ${({ mobile }) => (mobile ? "center" : "auto")};

  img {
    display: inline-block;
  }
`;

const NavUL = styled.ul<Props>`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: var(--padding) 0;
  }

  li.active > a,
  li:hover > a {
    border-bottom: 2px solid var(--brand);
  }

  li:hover {
    transition-duration: 0.3s;
  }

  a {
    display: inline-block;
    box-sizing: content-box;
    margin: 0 calc(var(--padding) * 2);
    white-space: nowrap;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transform: translateY(calc((1rem - 16px) / 2));
  }

  li:first-of-type a {
    margin-left: 0;
  }
`;

/* Components */
export default function Nav({ mobile }: Props) {
  return (
    <>
      <NavUL mobile={mobile}>
        <NavDropdown
          category="Products"
          links={[
            { text: "Card Readers", href: "/card-machines" },
            { text: "Payment Gateways", href: "/payment-gateways" },
            { text: "Payment Links", href: "/payment-links" },
            { text: "Phone Payments", href: "/phone-payments" },
          ]}
          mobile={mobile}
        />
        <NavLink href="/about-us" text="About Us" />
      </NavUL>
    </>
  );
}
