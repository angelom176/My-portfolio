'use client';

import Link from 'next/link';
import './projects.css';

const basePath =
  process.env.NODE_ENV === 'production' ? '/My-portfolio' : '';

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
    image: '/imagens/wildWestern.png',
    tags: ['Landing Page', 'Design', 'Web'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <header className="portfolio-header">
        <nav className="nav">
          <Link href="/">Home</Link>
        </nav>
      </header>

      <main className="projects container">
        <div className="section-heading">
          <p className="section-tag">Projects</p>
          <h2>Some featured work</h2>
        </div>

        <div className="projects-list">
          {projects.map(({ title, slug, description, image, tags }) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="project-card-link"
            >
              <article className="project-card">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${basePath}${image})`,
                  }}
                />

                <div className="project-content">
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <div className="tags">
                    {tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}