import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { CodeOffOutlined, Home, Info } from "@mui/icons-material";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link href="/others">
            <BottomNavigationAction label="Ohters" icon={<Info />} />
          </Link>
          <Link href="/">
            <BottomNavigationAction label="Home" icon={<Home />} />
          </Link>
          <Link href="/framework">
            <BottomNavigationAction
              label="Framework"
              icon={<CodeOffOutlined />}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
