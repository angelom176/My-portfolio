import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

const servicos = [
  {
    src: "/imagens/fluxoPotencia.jpeg",
    titulo: "Power Flow Study",
    descricao:
      "Detailed analysis of electrical power flow to improve system efficiency, stability and reliability.",
  },
  {
    src: "/imagens/protecaoSeletividade.jpeg",
    titulo: "Protection and Selectivity Study",
    descricao:
      "Evaluation of protection devices and coordination settings to improve safety and reduce downtime.",
  },
  {
    src: "/imagens/arcFlash.jpeg",
    titulo: "Arc Flash Analysis",
    descricao:
      "Assessment of arc flash risks to support safer operations and better protection for electrical workers.",
  },
  {
    src: "/imagens/cabos.jpeg",
    titulo: "Cable Sizing",
    descricao:
      "Proper cable sizing based on load requirements, voltage drop, thermal limits and installation safety.",
  },
  {
    src: "/imagens/motores.jpeg",
    titulo: "Electric Motor Study",
    descricao:
      "Performance and efficiency analysis of electric motors to optimize energy use and operational reliability.",
  },
];


export default function Home() {
  return (
    <main className={styles.forgePage}>
      <section className={styles.heroSection}>
        <Image
          className={styles.backgroundImage}
          src="/imagens/Firefly.jpg"
          alt=""
          fill
          priority
        />

        <header className={styles.header}>
          <h1>Forge</h1>

          <nav>
            <Link href="/projects/">Back To Portfolio</Link>
            <a href="#contato">Contact</a>
            <a href="#projetos">Projects</a>
            <a href="#servicos">Services</a>
          </nav>

          <a href="#contato" className={styles.headerButton}>
            Request Quote
          </a>
        </header>

        <div className={styles.heroContent}>
          <h2>
            Studies for the best of your <strong>electrical system</strong>
          </h2>

          <p>
            Focus on efficient and safe solutions for your electrical infrastructure.
          </p>

          <div className={styles.heroButtons}>
            <a href="#contato" className={`${styles.button} ${styles.buttonPrimary}`}>
              Converse with a consultant
            </a>

            <a href="#contato" className={`${styles.button} ${styles.buttonSecondary}`}>
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}