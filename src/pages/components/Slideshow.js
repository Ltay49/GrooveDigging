import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Slideshow.module.css";

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
            <div className={styles.recordInfo}>
              <p>
                <span>Artist:</span> <strong>{currentRecord.artist}</strong>
              </p>
              <p>
                <span>Album:</span> <strong>{currentRecord.album}</strong>
              </p>
              <p>
                <span>Condition:</span>{" "}
                <strong>{currentRecord.condition}</strong>
              </p>
              <p>
                <span>Price:</span> <strong>{currentRecord.price}</strong>
              </p>
            </div>
            <p className={styles.hash}>{currentRecord.tags.join(" ")}</p>
            <button className={styles.viewBtn}>View More</button>
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