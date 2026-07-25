import Head from "next/head";
import ComingSoon from "./components/ComingSoon";

export default function Records() {
  return (
    <>
      <Head>
        <title>Shop | Groove Digging</title>
        <meta
          name="description"
          content="Shop rare and independent vinyl records at Groove Digging — coming soon."
        />
        <link rel="canonical" href="https://www.groovedigging.com/records" />
      </Head>
      <ComingSoon title="Shop" />
    </>
  );
}
