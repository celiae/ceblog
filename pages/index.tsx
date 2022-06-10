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
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { toPage } from "../features/blog/blog-slice";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.blog.currentPage);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(toPage(value));
  };

  return (
    <>
      <Head>
        <title>Ceblog {CMS_NAME}</title>
      </Head>
      <SearchAppBar />
      <AllStories posts={allPosts} page={currentPage} />
      <Grid container>
        <Grid item sx={{ m: "auto" }}>
          <Pagination
            count={Math.ceil(allPosts.length / 3)}
            page={currentPage}
            onChange={handleChange}
            color="primary"
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid>
          <VerticalLinearStepper />
        </Grid>
        <Grid>
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
