import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slideshow from "./components/Slideshow";
import BannerSlide from "./components/BannerSlide";

const title = "GROOVE DIGGING";
const imageNamesR = ["two", "four"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Groove Digging | Vinyl Records, Music Blogs &amp; Sharing</title>
        <meta
          name="description"
          content="Groove Digging is your destination for curated vinyl records, music blogs, and community sharing. Discover rare finds and underground favorites."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.groovedigging.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Groove Digging | Vinyl Records, Music Blogs & Sharing"
        />
        <meta
          property="og:description"
          content="Explore vinyl records, read unique music blogs, and share tracks with a passionate community."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.groovedigging.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Groove Digging" />
        <meta
          name="twitter:description"
          content="Buy vinyl, read blogs, share your groove."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Groove Digging",
              url: "https://www.groovedigging.com",
              logo: "https://www.groovedigging.com/logo.png",
              sameAs: [
                "https://twitter.com/groovedigging",
                "https://instagram.com/groovedigging",
              ],
            }),
          }}
        />
      </Head>

      <main className={styles.main}>
        <header className={styles.headerRow}>
          <Image
            src="/logo.png"
            alt="Groove Digging Logo"
            width={80}
            height={80}
            className={styles.logo}
            priority
          />
          <h1 className={styles.title}>
            {title.split("").map((char, i) => (
              <span key={i} className={styles.letter}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/records">Shop</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/music">Listen</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className={styles.banner}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.bannerDiana}
              src="/cover1.png"
              width={500}
              height={400}
              alt="Classic soul record cover"
            />
            <div className={styles.overlay}></div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              className={styles.bannerDiana}
              src="/cover.png"
              width={500}
              height={400}
              alt="Rare funk vinyl cover"
            />
            <div className={styles.overlay}>
              <h1>
                <span className={styles.can}>CAN</span>
                <span className={styles.you}>
                  {"YOOOOOOU".split("").map((char, i) => (
                    <span
                      key={i}
                      className={styles.youLetter}
                      style={{ fontSize: `${5 + i * 0.5}rem` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className={styles.dig}>DIG</span>
                <span className={styles.it}>IT?</span>
              </h1>
            </div>
          </div>
        </section>
       <BannerSlide />
        <section>
          <div className={styles.subHeadingContainer}>
            <h1 className={styles.subheading}>
              {"Latest Records".split("").map((char, i) => (
                <span key={i} className={styles.letterSubH}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>{" "}
            <a className={styles.moreRecords}>see more</a>
          </div>
          <Slideshow />
        </section>

        <section className={styles.features}>
          <article className={styles.card}>
            <h2>🎵 Record Store</h2>
            <p>
              Browse our curated collection of vinyl records from funk, jazz,
              soul, hip-hop, and more.
            </p>
            <Link href="/records" className={styles.link}>
              Shop Records &rarr;
            </Link>
          </article>

          <article className={styles.card}>
            <h2>📝 Music Blog</h2>
            <p>
              Read interviews, underground artist highlights, and deep dives
              into music history.
            </p>
            <Link href="/blog" className={styles.link}>
              Read Blogs &rarr;
            </Link>
          </article>

          <article className={styles.card}>
            <h2>🎧 Music Sharing</h2>
            <p>
              Submit your own playlists and connect with others through shared
              sounds.
            </p>
            <Link href="/music" className={styles.link}>
              Explore Music &rarr;
            </Link>
          </article>
        </section>
      </main>
    </>
  );
}
