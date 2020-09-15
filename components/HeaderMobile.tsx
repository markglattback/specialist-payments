import styled from "styled-components";
import { ReactChild, useState, MouseEvent } from "react";
import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";
import NavToggle from "./NavToggle";
import { useNavContext } from "context/NavContext";

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
  mobile: boolean;
};

export default function HeaderMobile({ mobile }: Props) {
  // const [open, setOpen] = useState(false);

  const navContext = useNavContext();
  const { state, dispatch } = navContext;

  function toggleMenu(e: MouseEvent) {
    e.preventDefault();
    if (state.open) {
      dispatch({ type: "CLOSE" });
    } else {
      dispatch({ type: "OPEN" });
    }
  }

  return (
    <HeaderMobileWrapper>
      <HeaderLogo mobile={mobile} />
      <Nav className={state.open ? "open" : undefined} mobile={mobile} />
      <NavToggle />
    </HeaderMobileWrapper>
  );
}
