import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

import page from "../types/page";

type Props = {
  pages: Array<page>;
};

const MobileHeaderLink = ({ pages }: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page.name}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </>
  );
};
export default MobileHeaderLink;
