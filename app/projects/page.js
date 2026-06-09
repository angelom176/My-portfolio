'use client';
import "next/image";
import Link from "next/link";

const projects = [
  {
    title: 'Forge - Electrical Engineering',
    slug: 'electricalEngineer',
    description:
      'A short and clear project description, highlighting the problem solved and the final result.',
    image: '/imagens/electricalEngineer.png',
    tags: ['React', 'CSS', 'UI'],
  },

  {
    title: 'Ayrton Senna Tribute',
    slug: 'ayrtonSennaTribute',
    description:
      'Another project focused on performance, usability and a modern visual experience.',
    image: '/imagens/senna.png',
    tags: ['Frontend', 'Responsive', 'UX'],
  },

  {
    title: 'Game 2D - Fireboy and Watergirl',
    slug: 'fireboyAndWatergirl',
    description:
      'A personal or freelance case with a clean interface and strong presentation.',
    image: '/imagens/game.jpg',
    tags: ['Landing Page', 'Design', 'Web'],
  },

  {
    title: 'Wild West Game',
    slug: 'java-card-game',
    description:
      'A personal or freelance case with a clean interface and strong presentation.',
    image: '/imagens/wildWestGame.png',
    tags: ['Landing Page', 'Design', 'Web'],
  },

  {
    title: 'Project Five',
    description:
      'A personal or freelance case with a clean interface and strong presentation.',
    tags: ['Landing Page', 'Design', 'Web'],
  },

  {
    title: 'Project Six',
    description:
      'A personal or freelance case with a clean interface and strong presentation.',
    tags: ['Landing Page', 'Design', 'Web'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <header className="portfolio-header">
        <div className="container header-inner">
          <h1 className="logo">Ângelo</h1>

          <nav className="nav">
            <Link href="/">Home</Link>
          </nav>
        </div>
      </header>

      <section id="projetos" className="projects container">
        <div className="section-heading">
          <p className="section-tag">Projects</p>
          <h2>Some featured work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a key={project.title} href={`/projects/${project.slug}`}>
              <article className="project-card">
                <div
                  style={{ backgroundImage: `url(${project.image})` }}
                  className="project-image"
                ></div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}