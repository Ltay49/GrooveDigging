import Head from "next/head";
import Header from "./components/Header";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:hello@groovedigging.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Head>
        <title>Contact | Groove Digging</title>
        <meta
          name="description"
          content="Get in touch with Groove Digging — record recommendations, questions, or just want to talk vinyl."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.groovedigging.com/contact" />
      </Head>

      <main className={styles.main}>
        <Header />

        <section className={styles.contactSection}>
          <h1 className={styles.heading}>Get In Touch</h1>
          <p className={styles.intro}>
            Got a record to recommend, a question, or just want to talk
            vinyl? Drop us a line below.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                type="text"
                name="name"
                required
              />
            </label>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                type="email"
                name="email"
                required
              />
            </label>
            <label className={styles.label}>
              Message
              <textarea
                className={styles.textarea}
                name="message"
                rows={6}
                required
              />
            </label>
            <button className={styles.button} type="submit">
              Send Message
            </button>
          </form>

          <div className={styles.altContact}>
            <p>Or find us directly:</p>
            <a
              href="mailto:hello@groovedigging.com"
              className={styles.contactLink}
            >
              hello@groovedigging.com
            </a>
            <a
              href="https://www.instagram.com/groovedigging"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              @groovedigging on Instagram
            </a>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              title="Groove Digging location"
              src="https://maps.google.com/maps?q=Camden%20Market%2C%20London&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </main>
    </>
  );
}
