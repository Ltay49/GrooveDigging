import Image from "next/image";
import styles from "../../styles/TrackOfTheDay.module.css";

const tracks = [
  {
    title: "Chameleon",
    artist: "Herbie Hancock",
    albumCover: "/one.jpeg",
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

// Helper to get "Today", "Yesterday", or date string
function formatDate(dateString) {
  const today = new Date();
  const date = new Date(dateString);
  const diffTime = today - date;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  return date.toLocaleDateString();
}

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
      <h1 className={styles.subheading}>
        {"Dig Of The Day".split("").map((char, i) => (
          <span key={i} className={styles.letterSubH}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>{" "}
      <div className={styles.mainContent}>
        <article className={styles.textBox}>
          <h3>Title {currentTrack.title}</h3>
          <p>
            <strong>Artist:</strong> {currentTrack.artist}
          </p>
          <p>
            <strong>Album:</strong> {currentTrack.artist}
          </p>
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
