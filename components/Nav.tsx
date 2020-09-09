import styled from "styled-components";
import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";
import NavToggle from "./NavToggle";
import { useEffect, useState, MouseEvent } from "react";
import { useAppContext } from "./AppContext";

/* TYPES */
type Props = {
  compact: boolean;
};

/* STYLES */
const Header = styled.header<{ open: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: var(--paddingHalf) 0;
  background: transparent;
  font-size: 16px;
  z-index: var(--zIndexFront);

  @media (max-width: 414px) {
    height: 100%;
    padding: 0;
  }

  nav {
    max-width: var(--maxWidth);
    background: var(--background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 414px) {
      position: absolute;
      flex-direction: column;
      align-items: flex-start;
      right: 0px;
      width: 100vw;
      height: 100%;
      background: var(--black);
      transform: translateX(100vw);
      transition: 0.15s ease-in;
      padding-top: 2rem;
    }
  }

  nav.mobile {
    transform: translateX(0px);
    transition: 0.15s ease-out;
  }

  div.brand-logo {
    display: flex;
    font-weight: 700;
    font-size: 1rem;

    @media (max-width: 414px) {
      display: none;
    }
  }

  div.nav-background {
    display: ${({ open }) => (open ? "none" : "block")};
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 48px;
    background: var(--background);
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 414px) {
      flex-direction: column;
    }
  }

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
export default function Nav({ compact }: Props) {
  const [open, setOpen] = useState(false);

  const { state } = useAppContext();
  const { mobile } = state;

  function toggleMenu(e: MouseEvent) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <Header open={open}>
      <div className="nav-background"></div>
      <nav className={open ? "mobile" : undefined}>
        <div className="brand-logo">
          <span>Specialist Payments</span>
        </div>
        <ul>
          <NavDropdown
            category="Products"
            links={[{ text: "Card Readers", href: "/card-machines" }]}
            mobile={mobile}
          />
          <NavLink href="/about-us" text="About Us" />
        </ul>
      </nav>
      <NavToggle open={open} onClick={toggleMenu} />
    </Header>
  );
}
