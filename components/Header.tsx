import styled from "styled-components";
import Nav from "./Nav";
import NavToggle from "./NavToggle";
import { useEffect, useState, MouseEvent, useRef } from "react";
import { useAppContext } from "../context/AppContext";
import NavContextProvider from "context/NavContext";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

/* TYPES */
type Props = {
  compact: boolean;
};

/* STYLES */
const HeaderWrapper = styled.header<{ open: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: var(--paddingHalf) 0;
  background: var(--background);
  font-size: 16px;
  z-index: var(--zIndexFront);

  @media (max-width: 414px) {
    background: transparent;
    padding: 0;
  }

  div.brand-logo {
    display: flex;
    font-weight: 700;
    font-size: 1rem;
    z-index: var(--zIndexFront);
    height: 100px;

    @media (max-width: 414px) {
      display: none;
    }

    img {
      display: inline-block;
    }
  }

  /* div.nav-background {
    display: ${({ open }) =>
    open
      ? "none"
      : "block"};
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 48px;
    background: var(--background);
  } */

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
export default function Header() {
  const { state } = useAppContext();
  const { mobile } = state;

  return (
    <>
      {mobile && (
        <NavContextProvider>
          <HeaderMobile mobile={mobile} />
        </NavContextProvider>
      )}
      {!mobile && <HeaderDesktop />}
    </>
  );
}
