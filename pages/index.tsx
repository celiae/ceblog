import AllStories from "../components/all-stories";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import VerticalLinearStepper from "../components/vertical-linear-stepper";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Head>
        <title>Ceblog {CMS_NAME}</title>
      </Head>
      <AllStories posts={allPosts} page={page} />
      <Grid container>
        <Grid item sx={{ m: "auto" }}>
          <Pagination
            count={Math.ceil(allPosts.length / 3)}
            defaultPage={1}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid item xs={8}>
          <VerticalLinearStepper />
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={1}>
            <Typography variant="h5" component="legend">
              评价
            </Typography>
            <Rating name="size-large" defaultValue={2} size="large" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "createdate",
    "modifydate",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "smallImage",
  ]);

  return {
    props: { allPosts },
  };
};
