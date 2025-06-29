import Image from "next/image";
import React from "react";
import styles from "../../styles/latestArticle.module.css";

const articles = [
  {
    title: "The Allure of OBI",
    subheading: "Why Japanese Vinyl Records Are Collector Gold",
    body:
      "If you&aposve ever stumbled across a Japanese record with a strange little paper strip running down the side, congrats — you’ve just discovered an OBI strip, one of the most coveted features in vinyl collecting. Japanese vinyl isn’t just about sound — it’s about craft, culture, and collectability.",
    image: "/cover.png",
    date: "29/06/2025",
    author: "GrooveDigging",
  },
  {
    title: "Crate Culture: The Rise of Vinyl Resurgence",
    subheading: "Why Digging Through Records is Back in Style",
    body:
      "Vinyl records are no longer just relics of the past. As streaming saturates the market, collectors and audiophiles alike are returning to crates in search of tangible sound and vintage authenticity. From indie shops to pop-up fairs, crate digging is now a lifestyle.",
    image: "/cover1.png",
    date: "30/06/2025",
    author: "GrooveDigging",
  },
  {
    title: "Neo-Tokyo Grooves",
    subheading: "City Pop and the Global Boom of Japanese 80s Funk",
    body:
      "City Pop, once a domestic phenomenon in Japan, is now spinning on turntables worldwide. The genre’s colorful aesthetics and synth-heavy nostalgia have captivated a new generation of listeners hungry for retro vibes and feel-good funk.",
    image: "/soulTrain.png",
    date: "01/07/2025",
    author: "GrooveDigging",
  },
];

function LatestArticle() {
  return (
    <section className={styles.container}>
      {articles.map((article, index) => (
        <article key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={article.image || "/placeholder.jpg"}
              alt={article.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{article.title}</h3>
            <p className={styles.body}>{article.body}</p>
            <small className={styles.meta}>
              {article.author} • {article.date}
            </small>
          </div>
        </article>
      ))}
    </section>
  );
}

export default LatestArticle;

