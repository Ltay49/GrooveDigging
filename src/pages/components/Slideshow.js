import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Slideshow.module.css";
import Head from "next/head";

const images = ["/one.jpeg", "/two.jpeg", "/three.jpeg", "/four.jpeg"];

const records = [
  {
    artist: "WAR",
    album: "Galaxy",
    condition: "VG+",
    price: "£20.00",
    tags: [
      "#Funk",
      "#Disco",
      "#70's",
      "#Essential",
      "#Groovy",
      "#WAR",
      "#Galaxy",
    ],
  },
  {
    artist: "James Brown",
    album: "The Payback",
    condition: "VG",
    price: "£18.00",
    tags: ["#Funk", "#Soul", "#Classic", "#JamesBrown", "#ThePayback"],
  },
  {
    artist: "Chic",
    album: "Risqué",
    condition: "NM",
    price: "£25.00",
    tags: ["#Disco", "#Chic", "#Dance", "#GoodTimes"],
  },
  {
    artist: "Herbie Hancock",
    album: "Head Hunters",
    condition: "VG+",
    price: "£22.50",
    tags: ["#JazzFunk", "#Fusion", "#HerbieHancock", "#Headhunters"],
  },
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImage = (offset = 0) => {
    const i = (currentIndex + offset + images.length) % images.length;
    return images[i];
  };

  const currentRecord = records[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  <Head>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${currentRecord.artist} - ${currentRecord.album}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "GBP",
          price: currentRecord.price.replace("£", ""),
          availability: "https://schema.org/InStock",
        },
        category: "Music",
        brand: {
          "@type": "Brand",
          name: currentRecord.artist,
        },
      })}
    </script>
  </Head>;
  return (
    <section
      className={styles.slideshowContainer}
      aria-label="Featured Record Slideshow"
    >
      <button
        onClick={handlePrev}
        className={`${styles.arrow} ${styles.left}`}
        aria-label="Previous record"
      >
        ❮
      </button>

      <div className={styles.carousel}>
        <div className={styles.sideImage}>
          <Image
            src={getImage(-1)}
            alt={`Album cover of ${currentRecord.artist} - ${currentRecord.album}`}
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.mainContent}>
          <div className={styles.mainImage}>
            <Image
              src={getImage(0)}
              alt={`Album cover of ${currentRecord.artist} - ${currentRecord.album}`}
              fill
              className={styles.image}
            />
          </div>

          <article className={styles.textBox}>
            <header>
              <h2>
                {currentRecord.artist} – {currentRecord.album}
              </h2>
            </header>
            <ul className={styles.recordInfo}>
              <li>
                <strong>Condition:</strong> {currentRecord.condition}
              </li>
              <li>
                <strong>Price:</strong> {currentRecord.price}
              </li>
            </ul>
            <p className={styles.hash} aria-label="Tags">
              {currentRecord.tags.join(" ")}
            </p>
          </article>
        </div>

        <div className={styles.sideImage}>
          <Image src={getImage(1)} alt="next" fill className={styles.image} />
        </div>
      </div>

      <button
        onClick={handleNext}
        className={`${styles.arrow} ${styles.right}`}
        aria-label="Next record"
      >
        ❯
      </button>
    </section>
  );
}
