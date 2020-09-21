import styled from "styled-components";
import { ReactChild } from "react";
import Nav from "./Nav";
import HeaderLogo from "./HeaderLogo";

const HeaderDesktopWrapper = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 0 0;
  background: var(--background);
  font-size: 16px;
  z-index: var(--zIndexFront);
  opacity: 0;
  animation: fadeIn 0.1s ease-in 0.1s forwards;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: var(--maxWidth);
    background: var(--background);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

type Props = {
  children: ReactChild;
};

export default function NavDesktop() {
  return (
    <HeaderDesktopWrapper>
      <Nav>
        <HeaderLogo />
      </Nav>
    </HeaderDesktopWrapper>
  );
}
