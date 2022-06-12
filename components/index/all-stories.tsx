import * as React from "react";
import PostPreview from "../post/post-preview";
import Post from "../../types/post";
import { Grid, Stack } from "@mui/material";

type Props = {
  posts: Post[];
  page: number;
};

const AllStories = ({ posts, page }: Props) => {
  const index = (page - 1) * 3;
  const result = posts.slice(index, index + 3);
  return (
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

export default AllStories;
