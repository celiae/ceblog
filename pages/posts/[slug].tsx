import markdownToHtml from "@/lib/markdownToHtml";
import { getAllPosts, getPostBySlug } from "@/lib/parse-post";
import PostType from "@/types/post";
import Head from "next/head";
import React from "react";
type ArticleProps = {
  post: PostType;
};
const Article = ({ post }: ArticleProps) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Ceblog Article; Blog content" />
      </Head>
      <div className="px-10 py-3 bg-stone-100 dark:bg-neutral-700">
        <div className="text-3xl underline">{post.title}</div>
        <div className="text-xl mb-5">{post.excerpt}</div>
      </div>
      <article
        className="px-8 prose prose-zinc prose-xl prose-img:rounded-xl
       dark:prose-invert m-auto"
      >
        <div
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </article>
    </div>
  );
};

export default Article;

type Params = {
  params: {
    slug: string;
  };
};
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
