import * as React from "react";
import PostPreview from "../post/post-preview";
import Post from "../../types/post";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  posts: Post[];
  page: number;
};

const BlogPosts = ({ posts = [], page = 1 }: Props) => {
  const index = (page - 1) * 3;
  const result = posts.slice(index, index + 3);
  return result.length === 0 ? (
    <>
      <Box
        sx={{
          backgroundColor: "warning.main",
          color: "white",
          padding: "1rem",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h5">Sorry~ No such blog ~~</Typography>
      </Box>
    </>
  ) : (
    <>
      <Stack>
        <Grid container spacing={1}>
          {result.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              createdate={post.createdate}
              modifydate={post.modifydate}
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

export default BlogPosts;
