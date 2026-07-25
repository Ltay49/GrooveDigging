import Link from "next/link";
import Header from "./Header";
import styles from "../../styles/ComingSoon.module.css";

export default function ComingSoon({ title }) {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <span className={styles.badge}>Work In Progress</span>
        <h1 className={styles.heading}>{title} is coming soon</h1>
        <p className={styles.body}>
          We&apos;re still digging through the crates on this one. Check back
          soon.
        </p>
        <Link href="/" className={styles.homeLink}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
