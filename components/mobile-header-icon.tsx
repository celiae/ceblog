import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
const MobileHeaderIcon = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
      >
        <FontAwesomeIcon icon={faBlog} />
      </Typography>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
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
export default MobileHeaderIcon;
