import * as React from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Avatar alt={author.name} src={author.picture} />
          <Typography>{author.name}</Typography>
        </Grid>
        <Grid item>
          <PostTitle>{title}</PostTitle>
        </Grid>
      </Grid>
      <Typography>
        <DateFormatter dateString={date} />
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
