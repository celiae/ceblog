import AllStories from "../components/all-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <>
        <Head>
          <title>Ceblog {CMS_NAME}</title>
        </Head>
        {allPosts.length > 0 && <AllStories posts={allPosts} />}
      </>
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
  ]);

  return {
    props: { allPosts },
  };
};
