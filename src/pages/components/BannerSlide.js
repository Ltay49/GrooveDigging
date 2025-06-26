import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/BannerSlide.module.css";

const slides = [
  { text: "Buy records", img: "/logo.png" },
  { text: "Read music content", img: "/logo.png" },
  { text: "Discover something new", img: "/logo.png" },
  { text: "Join the community", img: "/logo.png" },
  { text: "Buy records", img: "/logo.png" },
  { text: "Read music content", img: "/logo.png" },
  { text: "Discover something new", img: "/logo.png" },
  { text: "Join the community", img: "/logo.png" },
  { text: "Buy records", img: "/logo.png" },
  { text: "Read music content", img: "/logo.png" },
  { text: "Discover something new", img: "/logo.png" },
  { text: "Join the community", img: "/logo.png" },
  { text: "Buy records", img: "/logo.png" },
  { text: "Read music content", img: "/logo.png" },
  { text: "Discover something new", img: "/logo.png" },
  { text: "Join the community", img: "/logo.png" },
];

export default function DescriptionCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // Change every 3s

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={styles.descriptionContainer}
      aria-roledescription="carousel"
      aria-label="Promotional messages about Groove Digging"
    >
      <div className={styles.carouselTrack}>
        {[...slides, ...slides].map((slide, i) => (
          <div
            key={i}
            className={styles.description}
            aria-hidden={i >= slides.length ? "true" : "false"}
          >
            <Image
              src={slide.img}
              alt={`Groove Digging - ${slide.text}`}
              width={80}
              height={80}
              className={styles.bannerLogo}
            />
            <p>{slide.text}</p>{" "}
            {/* use <p> or <h3> instead of span for clarity */}
          </div>
        ))}
      </div>
    </section>
  );
}
