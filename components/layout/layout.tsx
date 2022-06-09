import * as React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBarMenu from "../header/app-bar-menu";
import BottomNavigation from "../bottom-navigation";
import Meta from "../meta";
import { Container } from "@mui/system";
import ScrollTop from "./scroll-top";
import BlogAlert from "./alert";
import Layout from "../../types/layout";

interface ScrollTop {
  props: any;
  window?: () => Window;
  children: React.ReactElement;
}
const Layout = (
  { info = { title: "", content: "" }, children }: Layout,
  { props }: ScrollTop
) => {
  return (
    <>
      <Meta />
      <AppBarMenu />
      {/* <Toolbar  sx={{ height: "0px" }} /> */}
      <BlogAlert {...info} />
      <Box sx={{ minHeight: "100vh" }}>
        <Container>{children}</Container>
      </Box>
      <Divider />
      <BottomNavigation />
      <ScrollTop {...props} />
    </>
  );
};

export default Layout;
