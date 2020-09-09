import { AppProps } from "next/app";
import { useEffect } from "react";
import "styles/normalize.css";
import "styles/globals.css";
import Head from "next/head";
import AppContextProvider, { useAppContext } from "../components/AppContext";
import Layout from "components/Layout";

export default function MyApp(props: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <AppContextProvider>
        <Layout {...props} />
      </AppContextProvider>
    </>
  );
}
