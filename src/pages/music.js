import Head from "next/head";
import ComingSoon from "./components/ComingSoon";

export default function Music() {
  return (
    <>
      <Head>
        <title>Listen | Groove Digging</title>
        <meta
          name="description"
          content="Listen to tracks and discover new grooves at Groove Digging — coming soon."
        />
        <link rel="canonical" href="https://www.groovedigging.com/music" />
      </Head>
      <ComingSoon title="Listen" />
    </>
  );
}
