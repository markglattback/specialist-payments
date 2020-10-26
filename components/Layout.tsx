import { AppProps } from "next/app";
import { useLayoutEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";

const Main = styled.main`
  padding: calc(16px * 2 + 3rem) 0 0 0;
  flex: 1 0 auto;
`;

export default function Layout({ Component, pageProps }: AppProps) {
  const { state, dispatch } = useAppContext();

  useLayoutEffect(() => {
    function calcWidth() {
      const width = window.screen.width;

      if (width <= 480) {
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
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer mobile={state.mobile} />
      <CookieConsent
        style={{
          background: "var(--backgroundShade)",
          color: "var(--white)",
        }}
        buttonStyle={{
          background: "var(--brand)",
          color: "var(--background)",
          margin: "1rem",
        }}
        contentStyle={{
          margin: "1rem",
        }}
      >
        This website uses cookies to track usage and to improve user experience.
      </CookieConsent>
    </>
  );
}
