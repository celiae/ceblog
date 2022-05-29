import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
const HeaderIcon = () => {
  return (
    <>
      <Typography
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        variant="h5"
      >
        <FontAwesomeIcon icon={faBlog} />
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
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
  );
};
export default HeaderIcon;
