import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Date from "./date";
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
      <Date msg="发布日期" dateString={createdate} />
      <Date msg="修改日期" dateString={modifydate} />
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
