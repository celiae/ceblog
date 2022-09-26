import * as React from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { store } from "./api/store";
import { Provider } from "react-redux";

import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
