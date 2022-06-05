import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Info from "../../types/alert-info";

const BlogAlert = ({ title, content }: Info) => {
  return (
    <>
      <Alert severity="info" sx={{ position: "fixed", display: "none" }}>
        <AlertTitle>{title}</AlertTitle>
        {content}
      </Alert>
    </>
  );
};
export default BlogAlert;
