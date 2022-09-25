import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MobileHeaderIcon from "./mobile-header-icon";
import HeaderUser from "./header-user";
import HeaderLink from "./mobile-header-link";
import MobileHeaderLink from "./header-link";
import HeaderIcon from "./header-icon";
import MuiSwitch from "./mui-switch";

const pages = [
  {
    name: "Blog",
    url: "/",
  },
  {
    name: "Links",
    url: "/links",
  },
];

const AppBarMenu = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderIcon />
          <HeaderLink pages={pages} />
          <MobileHeaderIcon />
          <MobileHeaderLink pages={pages} />
          <MuiSwitch />
          {/* <HeaderUser /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarMenu;
