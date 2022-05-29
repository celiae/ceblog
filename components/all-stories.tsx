import * as React from "react";
import PostPreview from "./post-preview";
import Post from "../types/post";
import { Grid, Stack } from "@mui/material";

type Props = {
  posts: Post[];
};

const AllStories = ({ posts }: Props) => {
  return (
    <>
      <Stack>
        <Grid container spacing={1}>
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              smallImage={post.smallImage}
            />
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default AllStories;
