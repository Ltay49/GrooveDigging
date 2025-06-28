import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Slideshow.module.css";
import Head from "next/head";
import Link from "next/link";

const images = ["/one.jpeg", "/two.jpeg", "/three.jpeg", "/four.jpeg"];

const toSlug = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const records = [
  {
    artist: "WAR",
    album: "Galaxy",
    condition: "VG+",
    price: "£20.00",
    tags: ["#Funk", "#Disco", "#70's", "#Essential", "#Groovy", "#WAR", "#Galaxy"],
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
  const [showInfo, setShowInfo] = useState(false);

  const getImage = (offset = 0) => {
    const i = (currentIndex + offset + images.length) % images.length;
    return images[i];
  };

  const currentRecord = records[currentIndex];

  const toggleInfo = () => setShowInfo((prev) => !prev);

  return (
    <section className={styles.slideshowContainer} aria-label="Featured Record Slideshow">
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
        className={`${styles.arrow} ${styles.left}`}
        aria-label="Previous record"
      >
        ❮
      </button>

      <div className={styles.carousel}>
        <div className={styles.sideImage}>
          <Image src={getImage(-1)} alt="Previous" fill className={styles.image} />
        </div>

        <div className={styles.mainContent}>
          <div className={styles.mainImage}>
            <Image
              src={getImage(0)}
              alt={`Album cover of ${currentRecord.artist} - ${currentRecord.album}`}
              fill
              className={styles.image}
            />

            {/* Mobile Info Icon */}
            <button onClick={toggleInfo} className={styles.infoIcon} aria-label="Toggle info">
              i
            </button>
          </div>

          {/* Info Box: visible always on desktop, toggled on mobile */}
          <article
            className={`${styles.textBox} ${
              showInfo ? styles.visible : ""
            }`}
          >
            <header className={styles.recordHeader}>
              <h2>Artist: <span>{currentRecord.artist}</span></h2>
              <h2>Album: <span>{currentRecord.album}</span></h2>
            </header>
            <ul className={styles.recordInfo}>
              <li>Condition: <strong>{currentRecord.condition}</strong></li>
              <li>Price: <strong>{currentRecord.price}</strong></li>
            </ul>
            <p className={styles.hash}>{currentRecord.tags.join(" ")}</p>
            <Link
              className={styles.viewBtn}
              href={`/records/${toSlug(currentRecord.artist)}-${toSlug(currentRecord.album)}`}
              passHref
            >
              View More
            </Link>
          </article>
        </div>

        <div className={styles.sideImage}>
          <Image src={getImage(1)} alt="Next" fill className={styles.image} />
        </div>
      </div>

      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className={`${styles.arrow} ${styles.right}`}
        aria-label="Next record"
      >
        ❯
      </button>
    </section>
  );
}
