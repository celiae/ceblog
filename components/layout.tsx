import * as React from "react";
import Divider from "@mui/material/Divider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AppBarMenu from "./header/app-bar-menu";
import BottomNavigation from "./bottom-navigation";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Meta from "./meta";
import { Container } from "@mui/system";

type Info = {
  title: string;
  content: string;
};

type Layout = {
  info?: Info;
  children: React.ReactElement;
};

interface ScrollTop {
  props: any;
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: ScrollTop) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}
const Layout = (
  { info = { title: "", content: "" }, children }: Layout,
  { props }: ScrollTop
) => {
  const [alert, setAlert] = React.useState(false);
  React.useEffect(() => {
    function handleAlert() {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
    return function cleanup() {
      handleAlert();
    };
  }, [info.title]);
  return (
    <>
      <Meta />
      <AppBarMenu />
      <Toolbar id="back-to-top-anchor" sx={{ height: "0px" }} />
      {/* <Alert
        severity="info"
        sx={{ position: "fixed", display: alert ? "" : "none" }}
      >
        <AlertTitle>{info.title}</AlertTitle>
        {info.content}
      </Alert> */}
      <Box sx={{ minHeight: "100vh" }}>
        <Container>{children}</Container>
      </Box>
      <Divider />
      <BottomNavigation />
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Layout;
