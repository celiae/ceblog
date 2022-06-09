import * as React from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";
import Layout from "../components/layout/layout";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};
function MyApp({ Component, pageProps }: AppProps) {
  const info = {
    title: "Ceblog",
    content: "Celiae likes write blog",
  };

  return (
    <>
      <Provider store={store}>
        <Layout info={info}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
