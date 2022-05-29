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
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Layout>
      <Container>
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
