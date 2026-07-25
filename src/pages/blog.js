import Head from "next/head";
import ComingSoon from "./components/ComingSoon";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Groove Digging</title>
        <meta
          name="description"
          content="Stories, artist features, and collector tips from Groove Digging — coming soon."
        />
        <link rel="canonical" href="https://www.groovedigging.com/blog" />
      </Head>
      <ComingSoon title="Blog" />
    </>
  );
}
