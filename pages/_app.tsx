import Head from "next/head";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import "../styles/prism.css";
import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A lightweight JavaScript library for creating smooth typing animations on websites. Enhance user experience with customizable, responsive, and fast-loading text animations."
        />
        <link rel="shortcut icon" href="/typeinit-logo.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
