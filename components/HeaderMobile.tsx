import styled from "styled-components";
import { ReactChild, useState, MouseEvent } from "react";
import HeaderLogo from "./HeaderLogo";
import NavToggle from "./NavToggle";

const HeaderMobileWrapper = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: var(--paddingHalf) 0;
  background: var(--background);
  font-size: 16px;
  z-index: var(--zIndexFront);

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    align-items: flex-start;
    top: 0px;
    right: 0px;
    width: 100vw;
    height: 100vh;
    transform: translateX(100vw);
    transition: 0.15s ease-in;
    background: var(--backgroundShade);
    padding-top: 2rem;
  }

  nav.open {
    transform: translateX(0px);
    transition: 0.15s ease-out;
  }
`;

type Props = {
  children: ReactChild;
};

export default function HeaderMobile({ children }: Props) {
  const [open, setOpen] = useState(false);

  function toggleMenu(e: MouseEvent) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <HeaderMobileWrapper>
      <HeaderLogo />
      <nav className={open ? "open" : undefined}>{children}</nav>
      <NavToggle open={open} onClick={toggleMenu} />
    </HeaderMobileWrapper>
  );
}
