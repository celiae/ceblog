import * as React from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";
import Layout from "../components/layout/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  amber,
  blue,
  deepOrange,
  grey,
  lightBlue,
  yellow,
} from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
function MyApp({ Component, pageProps }: AppProps) {
  const info = {
    title: "Ceblog",
    content: "Celiae likes write blog",
  };
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Layout info={info}>
        <Component {...pageProps} />
      </Layout>
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
