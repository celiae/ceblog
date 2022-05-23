import Box from "@mui/material/Box";
import * as React from "react";
import AppBarMenu from "./app-bar-menu";
import BottomNavigation from "./bottom-navigation";
import Meta from "./meta";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#008bf1",
//       light: "#53b8fe",
//       dark: "#0049ad",
//     },
//     secondary: {
//       main: "#ef901d",
//       light: "#f4a935",
//       dark: "#d85b13",
//     },
//     background: {
//       default: "#262626",
//       paper: "#434343",
//     },
//     info: {
//       main: "#0088ef",
//       dark: "#0047ab",
//       light: "#87cafe",
//     },
//     text: {
//       primary: "#ffffff",
//       disabled: "#818181",
//       secondary: "#c2c2c2",
//     },
//   },
// });

type Props = {
  preview?: boolean;
  children: React.ReactElement;
};

const Layout = ({ preview, children }: Props) => {
  return (
    // <ThemeProvider theme={theme}>
    <>
      <Meta />
      <AppBarMenu />
      <Box sx={{ minHeight: "100vh" }}>{children}</Box>
      <BottomNavigation />
    </>
    // </ThemeProvider>
  );
};

export default Layout;
