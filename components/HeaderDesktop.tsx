import styled from "styled-components";
import { ReactChild } from "react";
import HeaderLogo from "./HeaderLogo";

const HeaderDesktopWrapper = styled.header`
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
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: var(--maxWidth);
    background: var(--background);
  }
`;

type Props = {
  children: ReactChild;
};

export default function NavDesktop({ children }: Props) {
  return (
    <HeaderDesktopWrapper>
      <nav>
        <HeaderLogo />
        {children}
      </nav>
    </HeaderDesktopWrapper>
  );
}
