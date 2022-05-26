import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import * as React from "react";
import AppBarMenu from "./app-bar-menu";
import BottomNavigation from "./bottom-navigation";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactElement;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <AppBarMenu />
      <Box sx={{ minHeight: "100vh" }}>{children}</Box>
      <Divider />
      <BottomNavigation />
    </>
  );
};

export default Layout;
