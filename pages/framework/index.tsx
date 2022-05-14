import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";

const framework = () => {
  const frameworks = [
    {
      id: 0,
      name: "Vue.js",
      creator: "Evan You",
      url: "https://vuejs.org/",
    },
    {
      id: 1,
      name: "React.js",
      creator: "Facebook",
      url: "https://reactjs.org/",
    },
    {
      id: 2,
      name: "Next.js",
      creator: "Guillermo Rauch",
      url: "https://nextjs.org/",
    },
    {
      id: 3,
      name: "Django",
      creator: "Django",
      url: "https://www.djangoproject.com/",
    },
    {
      id: 4,
      name: "Laravel",
      creator: "Taylor Otwell",
      url: "https://laravel.com/",
    },
    {
      id: 5,
      name: "Express.js",
      creator: "TJ Holowaychuk",
      url: "https://expressjs.com/",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Other blog</title>
        </Head>
        {frameworks.map((framework) => (
          <Link href={framework.url} key={framework.id}>
            <div className="bg-black blue grid h10 border-bottom pointer">
              <div>{framework.name}</div>
              <div className="white">{framework.creator}</div>
            </div>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default framework;
