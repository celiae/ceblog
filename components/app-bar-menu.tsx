import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import HeaderIcon from "./header-icon";
import MobileHeaderIcon from "./mobile-header-icon";
import HeaderUser from "./header-user";
import HeaderLink from "./header-link";
import MobileHeaderLink from "./mobile-header-link";
const pages = [
  { name: "Blog", url: "/" },
  {
    name: "Others",
    url: "/others",
  },
  {
    name: "Framework",
    url: "/framework",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AppBarMenu = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderIcon />
          <HeaderLink pages={pages} />
          <MobileHeaderIcon />
          <MobileHeaderLink pages={pages} />
          <HeaderUser />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarMenu;
