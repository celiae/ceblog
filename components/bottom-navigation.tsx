import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Stack justifyContent="center">
          <Chip label="Just for fun" variant="outlined" onClick={handleClick} />
        </Stack>
        <Stack justifyContent="center">
          <Chip label="Welcome to Ceblog" onClick={handleClick} />
        </Stack>
        <Link href="https://github.com/celiae">
          <BottomNavigationAction label="Gtihub" icon={<GitHubIcon />} />
        </Link>
        <Link href="https://twitter.com/ceeliatt">
          <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        </Link>
        <Link href="https://gmail.com">
          <BottomNavigationAction label="Email" icon={<EmailIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
