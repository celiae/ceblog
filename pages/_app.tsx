import * as React from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";
import Layout from "../components/layout/layout";
function MyApp({ Component, pageProps }: AppProps) {
  const info = {
    title: "Ceblog",
    content: "Celiae likes write blog",
  };
  return (
    <>
      <Layout info={info}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
