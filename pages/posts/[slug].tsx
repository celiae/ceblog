import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/post/post-body";
import PostHeader from "../../components/post/post-header";
import { getPostBySlug, getAllPosts } from "../api/api";
import Head from "next/head";
import markdownToHtml from "../api/markdownToHtml";
import PostType from "../../types/post";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{post.title} | Ceblog</title>
        <title> | Ceblog</title>
      </Head>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        createdate={post.createdate}
        modifydate={post.modifydate}
      />
      <PostBody content={post.content} />
    </>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "createdate",
    "modifydate",
    "content",
    "coverImage",
    "excerpt",
    "smallImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
