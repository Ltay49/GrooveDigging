import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/BannerCarousel.module.css";

const albumCovers = [
  { src: "/war.webp", alt: "War" },
  { src: "/prince.webp", alt: "Prince" },
  { src: "/otis.webp", alt: "Otis" },
  { src: "/db.webp", alt: "David Bowie" },
  { src: "/two.webp", alt: "Bowie 2" },
  { src: "/four.webp", alt: "Bowie 3" },
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * albumCovers.length);
      } while (randomIndex === activeIndex); // avoid repeat
      setActiveIndex(randomIndex);
    }, 3000); // slower loop for smoother effect

    return () => clearInterval(interval);
  }, [activeIndex]);

  const midpoint = Math.ceil(albumCovers.length / 2);
  const firstRow = albumCovers.slice(0, midpoint);
  const secondRow = albumCovers.slice(midpoint);

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.lightUpContainer}>
        <div className={styles.row}>
          <span className={styles.l1}>L</span>
          <span className={styles.l1}>I</span>
          <span className={styles.l1}>G</span>
          <span className={styles.l1}>H</span>
          <span className={styles.l1}>T</span>
        </div>

        <div className={styles.row}>
          <span className={styles.l2}>UP</span>
        </div>

        <div className={styles.row}>
          <span className={styles.l3}>YOUR</span>
        </div>

        <div className={styles.row}>
          <span className={styles.l4}>COLLECTION</span>
        </div>
      </div>
      <div className={styles.albumGridWrapper}>
        <a href="/articles" className={styles.viewAllLink}>
          View all records for sale →
        </a>
        <div className={styles.albumRow}>
          {firstRow.map((album, index) => (
            <div key={index} className={styles.albumWrap}>
              <Image
                src={album.src}
                alt={album.alt}
                width={350}
                height={350}
                sizes="(max-width: 768px) 100vw, 300px" // 👈 Add this
                className={`${styles.albumImage} ${
                  activeIndex === index ? styles.active : ""
                }`}
              />
            </div>
          ))}
        </div>
        <div className={styles.albumRow}>
          {secondRow.map((album, index) => (
            <div key={index + midpoint} className={styles.albumWrap}>
              <Image
                src={album.src}
                alt={album.alt}
                width={350}
                height={350}
                sizes="(max-width: 768px) 100vw, 350px"
                className={`${styles.albumImage} ${
                  activeIndex === index + midpoint ? styles.active : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
