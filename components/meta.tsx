import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../pages/api/constants";

const Meta = () => {
  return (
    <Head>

      <link rel="icon"  href="/favicon.svg" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
};

export default Meta;
