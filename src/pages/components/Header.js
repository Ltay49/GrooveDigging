import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const title = "GROOVE DIGGING";

export default function Header() {
  return (
    <header className={styles.headerRow}>
      <Link href="/" className={styles.brandLink}>
        <Image
          src="/logo.png"
          alt="Groove Digging Logo"
          width={80}
          height={80}
          className={styles.logo}
          priority
        />
        <h1 className={styles.title}>
          {title.split("").map((char, i) => (
            <span key={i} className={styles.letter}>
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/records">Shop</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/music">Listen</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
