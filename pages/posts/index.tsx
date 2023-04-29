import { getAllPosts } from "@/lib/parse-post";
import PostType from "@/types/post";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Posts.module.css";
type PostsProps = {
  posts: PostType[];
};
const Posts = ({ posts }: PostsProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [postList, setPostList] = useState(posts);
  const toArticle = (slug: string) => {
    router.push(slug);
  };

  return (
    <div className="py-1 px-5">
      <Head>
        <title>{t("Post list")}</title>
        <meta
          name="description"
          content="Ceblog's blog list; All blog; total blog"
        />
      </Head>
      <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2">
        {postList.map((p, index) => (
          <div
            key={index}
            className={`${styles.postItem} dark:hover:bg-stone-800 dark:bg-stone-700`}
            onClick={() => {
              toArticle(`/posts/${p.slug}`);
            }}
          >
            <div className="text-xl text-teal-500 font-extrabold">
              {p.title}
            </div>
            <div className="text-lg">
              {p.excerpt.length > 15
                ? p.excerpt.slice(0, 15) + "..."
                : p.excerpt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
export const getStaticProps = async () => {
  const posts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "createdate",
    "modifydate",
    "content",
    "category",
  ]);

  return {
    props: { posts },
  };
};
