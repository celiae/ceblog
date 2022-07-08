import * as React from "react";
import AllStories from "../components/index/all-stories";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import VerticalLinearStepper from "../components/index/vertical-linear-stepper";
import Grid from "@mui/material/Grid";
import SearchAppBar from "../components/index/search-bar";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import CeblogAnimate from "./ceblog-animate";
import BlogPagination from "../components/index/blog-pagination";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const currentPage = useAppSelector((state) => state.blog.currentPage);

  return (
    <>
      <Head>
        <title>Ceblog {CMS_NAME}</title>
      </Head>
      <SearchAppBar />
      <Grid container spacing={2}>
        <Grid item xs={12} lg>
          <AllStories posts={allPosts} page={currentPage} />
          <BlogPagination allPosts={allPosts} />
        </Grid>
        <Grid item>
          <VerticalLinearStepper />
          <CeblogAnimate />
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
