import AllStories from "../components/all-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import VerticalLinearStepper from "../components/vertical-linear-stepper";
import { Container } from "@mui/system";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Container>
        <Head>
          <title>Ceblog {CMS_NAME}</title>
        </Head>

        {allPosts.length > 0 && <AllStories posts={allPosts} />}
        <Grid container>
          <Grid item sx={{ m: "auto" }}>
            <Pagination count={allPosts.length / 5} color="primary" />
          </Grid>
        </Grid>
        <VerticalLinearStepper />
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
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
