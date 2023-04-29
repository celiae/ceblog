import GetIn from "@/components/button/get-in/get-in";
import Search from "@/components/search/search";
import Greeting from "@/components/typing/greeting";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Home.module.css";
interface PropsType {
  locale: string;
}

export default function Home(props: PropsType) {
  const router = useRouter();
  const { t } = useTranslation();

  const toPosts = () => {
    router.push("/posts");
  };

  return (
    <>
      <Head>
        <title>{t("site name")}</title>
        <meta
          name="description"
          content="Ceblog home page; Cheng bo home; 程博"
        />
      </Head>
      <main className="md:px-10">
        <div className={styles.imgBox}>
          <div className={styles.buttonWrapper}>
            <GetIn msg={t("Get in posts")} toPosts={toPosts} />
          </div>
        </div>
        <div className={`${styles.greetingWrapper} dark:bg-neutral-900`}>
          <Greeting />
        </div>
        <div className={styles.inputContainer}>
          <div
            className={`${styles.inputWrapper}
            gap-4 md:gap-7 lg:gap-10`}
          >
            <input
              type="text"
              className={`${styles.searchInput}
                dark:bg-zinc-700 w-44 md:w-60 lg:w-72 md:text-xl`}
            />
            <Search msg={t("search")} toPosts={toPosts} />
          </div>
        </div>
      </main>
    </>
  );
}
