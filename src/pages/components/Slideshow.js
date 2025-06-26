import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Slideshow.module.css";

const images = ["/one.jpeg", "/two.jpeg", "/three.jpeg", "/four.jpeg"];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const getImage = (offset) =>
    images[(index + offset + images.length) % images.length];

  return (
    <div className={styles.slideshowContainer}>
      <button onClick={handlePrev} className={`${styles.arrow} ${styles.left}`}>
        ❮
      </button>

      <div className={styles.carousel}>
        <div className={styles.sideImage}>
          <Image
            src={getImage(-1)}
            alt="previous"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.mainContent}>
          <div className={styles.mainImage}>
            <Image
              src={getImage(0)}
              alt="current"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textBox}>
            <p>Artist: <strong>WAR</strong></p>
            <p>Album: <strong>Galaxy</strong></p>
            <p>Condition: <strong>VG+</strong></p>
            <p>Price: <strong>£20.00</strong></p>
            <p className={styles.hash}>#Funk #Disco #70s #Essential #Groovy #WAR #Galaxy</p>
            <button>View More</button>
          </div>
        </div>

        <div className={styles.sideImage}>
          <Image src={getImage(1)} alt="next" fill className={styles.image} />
        </div>
      </div>

      <button
        onClick={handleNext}
        className={`${styles.arrow} ${styles.right}`}
      >
        ❯
      </button>
    </div>
  );
}
