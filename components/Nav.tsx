import styled from "styled-components";
import NavLink from "./NavLink";
import ResponsiveNavButton from "./ResponsiveNavButton";
import NavDropdown from "./NavDropdown";
import NavToggle from "./NavToggle";
import { MouseEvent, HTMLAttributes, FC } from "react";

/* TYPES */
interface Props {
  mobile?: boolean;
}

const NavUL = styled.ul<{ mobile: boolean | undefined }>`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  list-style: none;
  margin: 0;
  padding: 0;
  /* font-weight: bold; */

  li {
    display: inline-flex;
    margin: var(--padding) 0;
    align-items: center;
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
    margin: 0 var(--padding);
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
export default function Nav({
  className,
  mobile,
  children,
}: HTMLAttributes<HTMLDivElement> & Props) {
  return (
    <nav className={className}>
      {children}
      <NavUL mobile={mobile}>
        <NavDropdown
          category="Products"
          links={[
            { text: "Card Readers", href: "/products/card-readers" },
            { text: "Online Payments", href: "/products/online" },
          ]}
          mobile={mobile}
        />
        <NavLink href="/business-finance" text="Business Finance" />
        <NavLink href="/partners" text="Partners" />
        <NavLink href="/about" text="About Us" />
        <NavLink href="/contact" text="Contact" />
        <ResponsiveNavButton mobile={mobile} href="/quote" text="Get a Quote" />
      </NavUL>
    </nav>
  );
}
