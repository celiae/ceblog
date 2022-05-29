import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import type { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      <Box sx={{ width: "100%", display: loading ? "" : "none" }}>
        <LinearProgress />
      </Box>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
