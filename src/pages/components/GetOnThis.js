import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/getOnThis.module.css";

const albumCovers = [
  { src: "/war.jpeg", alt: "War" },
  { src: "/prince.jpeg", alt: "Prince" },
  { src: "/otis.jpeg", alt: "Otis" },
  { src: "/db.jpeg", alt: "David Bowie" },
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

  const midpoint = Math.ceil(albumCovers.length / 1);
  const firstRow = albumCovers.slice(0, midpoint);
  const secondRow = albumCovers.slice(midpoint);

  return (
    <div className={styles.bannerWrapper}>
<div className={styles.lightUpContainer}>
<div className={styles.row}>
    <span className={styles.l1}>'ERE</span>
  </div>
  <div className={styles.row}>
    <span className={styles.l2}>GET</span>
  </div>

  <div className={styles.row}>
    <span className={styles.l3}>ON</span>
  </div>

  <div className={styles.row}>
    <span className={styles.l4}>THIS</span>
  </div>
</div>
      <div className={styles.albumGridWrapper}>
        <div className={styles.albumRow}>
          {firstRow.map((album, index) => (
            <div key={index} className={styles.albumWrap}>
              <Image
                src={album.src}
                alt={album.alt}
                width={300}
                height={300}
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
                width={300}
                height={300}
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
