
import Link from 'next/link';
import styles from './eventManager.module.css';

export default function ProjectsPage() {
  return (
    <main>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </header>

      <section className={`${styles.app} ${styles.container}`}>
        <img src="/imagens/mainPage.png" alt="Main Page" width="100%" height="auto" className={styles.imagem}  />
      </section>
      <div className={styles.sectionHeading}>
        <p className={styles.sectionTag}>Projects</p>
        <h2>Main Page</h2>
      <p>This is our main page for the event management system.</p>
              <img src="/imagens/login.png" alt="Main Page" width="100%" height="auto" className={styles.imagem}  />

      </div>
    </main>
  );
}