import * as React from "react";
import Box from "@mui/material/Box";
import AppBarMenu from "../header/app-bar-menu";
import BottomNavigation from "../bottom-navigation";
import Meta from "../meta";
import { Container } from "@mui/system";
import ScrollTop from "./scroll-top";
import BlogAlert from "./alert";
import Layout from "../../types/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAppSelector } from "../../pages/api/hooks";
import { lightThemeOption } from "./lightThemeOption";
import { darkThemeOption } from "./darkThemeOption";
import { Paper, Toolbar } from "@mui/material";

interface ScrollTop {
  props: any;
  window?: () => Window;
  children: React.ReactElement;
}
const Layout = (
  { info = { title: "", content: "" }, children }: Layout,
  { props }: ScrollTop
) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  let theme = lightTheme;
  if (isDarkMode) {
    theme = darkTheme;
  } else {
    theme = lightTheme;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Meta />
        <Paper>
          <AppBarMenu />
          <Toolbar id="back-to-top-anchor" />
          <BlogAlert {...info} />
          <Box sx={{ minHeight: "100vh" }}>
            <Container>{children}</Container>
          </Box>
          <BottomNavigation />
          <ScrollTop {...props} />
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Layout;

const lightTheme = createTheme(lightThemeOption);
const darkTheme = createTheme(darkThemeOption);
