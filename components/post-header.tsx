import * as React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  createdate: string;
  modifydate: string;
};

const PostHeader = ({ title, coverImage, createdate, modifydate }: Props) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <PostTitle>{title}</PostTitle>
        </Grid>
      </Grid>
      <Typography>
        <DateFormatter dateString={createdate} />
      </Typography>
      <Typography>
        <DateFormatter dateString={modifydate} />
      </Typography>
      <Image
        src={coverImage}
        width={600}
        height={400}
        objectFit="contain"
        quality={100}
      />
    </>
  );
};

export default PostHeader;
