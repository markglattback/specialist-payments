import { AppProps } from "next/app";
import { useEffect } from "react";
import { useAppContext } from "./AppContext";
import Nav from "./Nav";
import styled from "styled-components";

const Main = styled.main`
  padding: calc(16px * 2 + 3rem) 0;
`;

export default function Layout({ Component, pageProps }: AppProps) {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    function calcWidth() {
      const width = window.screen.width;

      if (width <= 414) {
        dispatch({ type: "ENTER_MOBILE_MODE" });
      } else {
        dispatch({ type: "EXIT_MOBILE_MODE" });
      }
    }

    calcWidth();

    window.addEventListener("resize", calcWidth);

    return () => {
      window.removeEventListener("resize", calcWidth);
    };
  }, []);

  return (
    <>
      <Nav compact={false} />
      <Main onClick={(e) => console.log(e.target)}>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
