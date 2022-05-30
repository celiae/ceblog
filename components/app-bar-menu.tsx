import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MobileHeaderIcon from "./mobile-header-icon";
import HeaderUser from "./header-user";
import HeaderLink from "./header-link";
import MobileHeaderLink from "./mobile-header-link";
import HeaderIcon from "./header-icon";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import MuiSwitch from "./mui-switch";

const pages = [
  { name: "Blog", url: "/" },
  {
    name: "Links",
    url: "/links",
  },
  {
    name: "Framework",
    url: "/framework",
  },
];

const AppBarMenu = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    function handleLoadingChange() {
      setLoading(false);
    }
    return function cleanup() {
      handleLoadingChange();
    };
  }, [router.isReady]);
  return (
    <AppBar position="sticky">
      <Box sx={{ width: "100%", display: loading ? "" : "none" }}>
        <LinearProgress />
      </Box>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderIcon />
          <HeaderLink pages={pages} />
          <MobileHeaderIcon />
          <MobileHeaderLink pages={pages} />

          <MuiSwitch />
          <HeaderUser />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarMenu;
