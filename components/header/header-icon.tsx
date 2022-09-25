import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";

const HeaderIcon = () => {
  return (
    <Link href="/">
      <>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          CEBLOG
        </Typography>
      </>
    </Link>
  );
};
export default HeaderIcon;
