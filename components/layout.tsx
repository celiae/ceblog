import Divider from "@mui/material/Divider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AppBarMenu from "./app-bar-menu";
import BottomNavigation from "./bottom-navigation";
import Meta from "./meta";

type Layout = {
  preview?: boolean;
  children: React.ReactElement;
};

interface ScrollTop {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  props: any;
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: ScrollTop) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
const Layout = ({ preview, children }: Layout, { props }: ScrollTop) => {
  return (
    <>
      <Meta />
      <AppBarMenu />
      <Toolbar id="back-to-top-anchor" />
      <Box sx={{ minHeight: "100vh" }}>{children}</Box>
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
