import { Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <>
      <Typography variant="h2">{children}</Typography>
    </>
  );
};

export default PostTitle;
