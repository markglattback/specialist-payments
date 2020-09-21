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

/* Components */
export default function Header() {
  const { state } = useAppContext();
  const { mobile } = state;

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

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
