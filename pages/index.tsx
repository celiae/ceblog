import * as React from "react";
import BlogPosts from "../components/index/blog-posts";
import { getAllPosts } from "./api/api";
import Head from "next/head";
import Post from "../types/post";
import VerticalLinearStepper from "../components/index/vertical-linear-stepper";
import Grid from "@mui/material/Grid";
import SearchAppBar from "../components/index/search-bar";
import { useAppSelector, useAppDispatch } from "./api/hooks";
import CeblogAnimate from "./ceblog-animate";
import BlogPagination from "../components/index/blog-pagination";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const currentPage = useAppSelector((state) => state.blog.currentPage);
  const searchActive = useAppSelector((state) => state.blog.searchActive);
  const searchResults = useAppSelector((state) => state.blog.searchResults);

  return (
    <>
      <Head>
        <title>Ceblog </title>
      </Head>
      <SearchAppBar allPosts={allPosts} />
      <Grid container spacing={2}>
        <Grid item xs={12} lg>
          {!searchActive && <BlogPosts posts={allPosts} page={currentPage} />}
          {searchActive && <BlogPosts posts={searchResults} page={1} />}
          {!searchActive && <BlogPagination allPosts={allPosts} />}
        </Grid>
        {/* <VerticalLinearStepper /> */}
      </Grid>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "createdate",
    "modifydate",
    "content",
    "coverImage",
    "excerpt",
    "smallImage",
  ]);

  return {
    props: { allPosts },
  };
};
