import LinearProgress from "@mui/material/LinearProgress";
import type { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <LinearProgress /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
