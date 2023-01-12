import Head from "next/head";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import "../styles/prism.css";
import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/typeinit-logo.ico"
          type="image/x-icon"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
