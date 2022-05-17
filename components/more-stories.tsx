import * as React from "react";
import Stack from "@mui/material/Stack";
import PostPreview from "./post-preview";
import Post from "../types/post";
import { Grid } from "@mui/material";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <Grid container>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </Grid>
  );
};

export default MoreStories;
