import Image from "next/image";
import styles from "../../styles/TrackOfTheDay.module.css";

const tracks = [
  {
    title: "Chameleon",
    artist: "Herbie Hancock",
    album: "Chameleon",
    albumCover: "/one.webp",
    date: "2025-06-25",
    spotifyUrl: "https://open.spotify.com/track/yourtrackid1",
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
];

// Pick the latest track by date (or customize logic as needed)
const getCurrentTrack = () => {
  // Sort descending by date, get first
  const sorted = [...tracks].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return sorted[0];
};

export default function TrackOfTheDay() {
  const currentTrack = getCurrentTrack();

  return (
    <section className={styles.trackContainer}>
      <h1 className={styles.subheading}>Dig Of The Week</h1>{" "}
      <div className={styles.mainContent}>
        <article className={styles.textBox}>
          <h2>
            Title: <span>{currentTrack.title}</span>
          </h2>
          <h2>
            Artist: <span>{currentTrack.artist}</span>
          </h2>
          <h2>
            Album: <span>{currentTrack.album}</span>
          </h2>
          <p className={styles.hash} aria-label="Tags">
            {currentTrack.tags.join(" ")}
          </p>
          <a
            href={currentTrack.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.spotifyBtn}
          >
            Listen on Spotify
          </a>
        </article>

        <div className={styles.currentTrack}>
          <Image
            src={currentTrack.albumCover}
            alt={`${currentTrack.title} cover`}
            width={300}
            height={300}
            className={styles.albumCover}
          />
        </div>
      </div>
    </section>
  );
}
