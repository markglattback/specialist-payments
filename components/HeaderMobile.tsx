import styled from "styled-components";
import { ReactChild, useState, MouseEvent } from "react";
import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";
import NavToggle from "./NavToggle";
import NavContextProvider, { useNavContext } from "context/NavContext";

const HeaderMobileWrapper = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: var(--paddingHalf) 0;
  background: var(--background);
  font-size: 16px;
  z-index: var(--zIndexFront);
  animation: fadeIn 0.3s ease-in 0.2s;

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
  mobile: boolean;
};

export default function HeaderMobile({ mobile }: Props) {
  const navContext = useNavContext();
  const { state, dispatch } = navContext;

  return (
    <HeaderMobileWrapper>
      <HeaderLogo mobile={mobile} />
      <Nav className={state.open ? "open" : undefined} mobile={mobile} />
      <NavToggle />
    </HeaderMobileWrapper>
  );
}
