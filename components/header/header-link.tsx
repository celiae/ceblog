import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Link from "next/link";
import page from "../../types/page";

type Props = {
  pages: page[];
};

const HeaderLink = ({ pages }: Props) => {
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
          <Link key={page.name} href={page.url}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.name}
            </Button>
          </Link>
        ))}
        {/* <Locales /> */}
      </Box>
    </>
  );
};
export default HeaderLink;
