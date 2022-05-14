import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

const others = () => {
  const blogs = [
    {
      id: "0",
      name: "ArchLinuxStudio",
      url: "https://archlinuxstudio.github.io",
    },
    {
      id: "1",
      name: "",
      url: "",
    },
    {
      id: "2",
      name: "",
      url: "",
    },
    {
      id: "3",
      name: "",
      url: "",
    },
    {
      id: "4",
      name: "",
      url: "",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Other blog</title>
        </Head>
        {blogs.map((blog) => (
          <Link href={blog.url}>
            <div className="bg-black blue flex h10 border-bottom pointer">
              {blog.name}
            </div>
          </Link>
        ))}
      </Layout>
    </>
  );
};
export default others;
