import * as React from "react";
import AllStories from "../components/index/all-stories";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import VerticalLinearStepper from "../components/index/vertical-linear-stepper";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import SearchAppBar from "../components/index/search-bar";
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
      <SearchAppBar />
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
      <Grid mt={5}>
        <Grid xs={8}>
          <VerticalLinearStepper />
        </Grid>
        <Grid xs={4}>
          <Rating
            name="size-large"
            defaultValue={2}
            size="large"
            color="blue"
          />
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
