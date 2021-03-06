import { AppProps } from "next/app";
import { useEffect } from "react";
import "styles/normalize.css";
import "styles/globals.css";
import Head from "next/head";
import AppContextProvider, { useAppContext } from "../context/AppContext";
import useRouterWithScroll from "hooks/useRouterWithScroll";
import Layout from "components/Layout";

export default function MyApp(props: AppProps) {
  // enable custom router transitions with scroll to top enabled
  useRouterWithScroll({ behavior: "auto" });

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SCQBJ14NSE"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SCQBJ14NSE', { 'anonymize_ip': true });`,
          }}
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppContextProvider>
        <Layout {...props} />
      </AppContextProvider>
    </>
  );
}
