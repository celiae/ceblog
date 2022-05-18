import LinearProgress from "@mui/material/LinearProgress";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <LinearProgress /> */}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
