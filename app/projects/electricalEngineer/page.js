import Image from "next/image";
import "./style.css";

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
    <main className="forgePage">
      <section className="heroSection">
        <Image
          className="backgroundImage"
          src="/imagens/Firefly.jpg"
          alt=""
          fill
          priority
        />

        <header className="header">
          <h1>Forge</h1>

         

          <nav>
            <a href="/projects/">Back To Portfolio</a>
            <a href="#contato">Contact</a>
            <a href="#projetos">Projects</a>
            <a href="#servicos">Services</a>
          </nav>

          <a href="#contato" className="headerButton">
            Request Quote
          </a>
        </header>

        <div className="heroContent">
          <h2>
            Studies for the best of your{" "}
            <strong>electrical system</strong>
          </h2>

          <p>
            Focus on efficient and safe solutions for your electrical infrastructure.
          </p>

          <div className="heroButtons">
            <a href="#contato" className="button buttonPrimary">
              Converse with a consultant
            </a>

            <a href="#contato" className="button buttonSecondary">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      <section className="aboutSection">
        <h2>What we do?</h2>

        <p>
          We provide technical studies for electrical systems with a focus on safety,
          efficiency and reliability. Our work helps companies reduce operational risks,
          improve system performance and make better engineering decisions.
        </p>
      </section>

      <section id="servicos" className="servicesSection">
        <div className="sectionHeading">
          <p>Services</p>
          <h2>Study Areas</h2>
        </div>

        <div className="servicesGrid">
          {servicos.map((item) => (
            <article className="serviceCard" key={item.src}>
              <Image
                src={item.src}
                alt={item.titulo}
                width={400}
                height={300}
              />

              <div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="whySection">
        <Image
          className="whyBackground"
          src="/imagens/engenheiroEletrecista.jpg"
          alt=""
          fill
        />

        <div className="whyContent">
          <div>
            <h2>Why choose Forge?</h2>

            <p>
              We have specialized professionals in the analysis of electrical systems
              of low, medium and high voltage.
            </p>

            <h3>Accuracy and Reliability</h3>
            <p>
              More than delivering a technical study, we understand the reality of
              your operation and adapt our solutions to your needs.
            </p>

            <h3>Best Cost-Benefit</h3>
            <p>
              As a lean and specialized team, we can offer competitive prices without compromising on technical excellence.
            </p>
          </div>

          <Image
            className="raio"
            src="/imagens/raio.png"
            alt="Ícone de raio"
            width={260}
            height={260}
          />
        </div>
      </section>

      <section id="projetos" className="projectsSection">
        <p>Projects</p>
        <h2>The choice of those who recognize the importance of electrical engineering</h2>

        <div className="projectsGrid">
          <div className="projectBox"></div>
          <div className="projectBox"></div>
          <div className="projectBox"></div>
        </div>
      </section>

      <section id="contato" className="contactSection">
        <div className="contactBox">
          <h2>Contact Us</h2>
          <p>Get in touch to discuss your needs.</p>

          <form>
            <label htmlFor="nome">Name</label>
            <input id="nome" type="text" name="nome" />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />

            <label htmlFor="telefone">Phone</label>
            <input id="telefone" type="tel" name="telefone" />

            <label htmlFor="mensagem">Message</label>
            <textarea id="mensagem" name="mensagem" rows={4}></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <Image
          className="footerBackground"
          src="/imagens/engenheiroEletrecista.jpg"
          alt=""
          fill
        />

        <Image
          src="/imagens/logo.png"
          alt="Logo da Forge"
          width={200}
          height={100}
        />

        <p>contact@forge.ie</p>
        <p>(083) 234-4932</p>
        <p>Av. Example, 123 - Dublin, Co. Dublin</p>
        <p>linkedin.com/in/forge</p>

        <small>© 2024 Forge. All rights reserved.</small>
      </footer>
    </main>
  );
}