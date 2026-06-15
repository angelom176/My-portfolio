'use client'

import { Code2, Briefcase, Rocket } from "lucide-react";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/My-portfolio" : "";

const projects = [
  {
    title: 'Forge - Electrical Engineering',
    slug: 'electricalEngineer',
    description:
      'Professional website developed for an electrical engineering business, focusing on responsive design, performance and user experience.',
    image: '/imagens/electricalEngineer.png',
    tags: ['React', 'CSS', 'UI'],
  },
  {
    title: 'Ayrton Senna Tribute',
    slug: 'ayrtonSennaTribute',
    description:
      'A tribute website created to showcase Ayrton Senna’s legacy while practicing modern front-end development and responsive design techniques.',
    image: '/imagens/senna.png',
    tags: ['Frontend', 'Responsive', 'UX'],
  },
  {
    title: 'Fireboy and Watergirl',
    slug: 'fireboyAndWatergirl',
    description:
      'A 2D game project inspired by Fireboy and Watergirl, developed to explore game mechanics, interaction design and JavaScript programming.',
    image: '/imagens/game.jpg',
    tags: ['JavaScript', 'Game Logic', '2D'],
  },
  {
    title: 'Wild West Card Game',
    slug: 'java-card-game',
    description:
      'Java-based card game project focused on object-oriented programming, game logic implementation and software development fundamentals.',
    image: '/imagens/wildWestGame.png',
    tags: ['Java', 'OOP', 'Game Logic'],
  },
];

export default function PortfolioLayout() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = Math.max(projects.length - visibleCards, 0);

  const handleNext = () => {
    setCurrentIndex(currentIndex < maxIndex ? currentIndex + 1 : 0);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : maxIndex);
  };

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <nav className="nav">
          <a href="#sobre">About</a>
          <Link href="/projects">Projects</Link>
          <a href="#contato">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-text">
            <p className="eyebrow">PORTFOLIO</p>

              <h2>
                Computing Science student building web applications and software solutions.
              </h2>
          

            <p className="hero-description">
                I am a second-year Computing Science student focused on web development and
                software engineering. I build projects using Next.js, React, JavaScript and
                Java while continuously improving my understanding of software design,
                development practices and user experience.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="btn btn-primary">
                View projects
              </a>

              <a href="#contato" className="btn btn-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div
              className="status-card"
              style={{
                backgroundImage: `linear-gradient(
                  180deg,
                  rgba(23, 23, 35, 0) 0%,
                  rgba(61, 61, 90, 0.92) 100%
                ), url(${basePath}/imagens/angelo.jpeg)`,
              }}
            >
              <div>
                <p className="card-label">Current Focus</p>
                <span className="status-dot"></span>
              </div>

              <div>
                <p className="card-label">Learning</p>
                <p className="card-label">Current Focus</p>
                <h3>Next.js, React and Software Development</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-topics">
          <div className="topic-item">
            <Code2 className="topic-icon" />

            <p className="topic-label">Frontend Development</p>

            <h3>
              Building responsive web applications with Next.js, React and modern web
              technologies.
            </h3>
          </div>

          <div className="topic-item">
            <Briefcase className="topic-icon" />

            <p className="topic-label">Software Engineering</p>

            <h3>
              Developing Java applications while studying software architecture and
              object-oriented design.
            </h3>
          </div>

          <div className="topic-item">
            <Rocket className="topic-icon" />

            <p className="topic-label">Computing Science</p>

            <h3>
              Combining academic knowledge with real-world projects and continuous
              learning.
            </h3>
          </div>
        </section>

        <section id="sobre" className="about container">
          <div className="section-heading">
            <p className="section-tag">About me</p>

            <h2>
                Building technical skills through projects, study and continuous development.
            </h2>
          </div>

          <p className="about-text">
            As a Computing Science student, I enjoy building web applications and
            software projects that combine clean design, functionality and problem
            solving. My current interests include Next.js, React, Java development and
            software engineering principles.
          </p>
        </section>

        <section id="projetos" className="projects container">
          <div className="section-heading">
            <p className="section-tag">Projects</p>
            <h2>Some featured work</h2>
          </div>

          <div className="carousel-window">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.title} className="carousel-slide">
                  <article className="project-card">
                    <div
                      style={{
                        backgroundImage: `url(${basePath}${project.image})`,
                      }}
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

                    <Link
                      href={`/projects/${project.slug}`}
                      className="project-link"
                    >
                      View project
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="carousel-controls">
          <button className="carrosel-control" onClick={handlePrev}>
            ‹
          </button>

          <button className="carrosel-control" onClick={handleNext}>
            ›
          </button>
        </div>

        <section id="contato" className="contact container">
          <div className="contact-box">
            <p className="section-tag">Contact</p>

            <h2>
              Let's connect and build something meaningful.
            </h2>

            <p>
              I am currently looking for internships, junior opportunities and projects
              where I can continue growing as a web and software developer.
            </p>

            <a href="mailto:angelo-mmacedo@hotmail.com" className="btn btn-primary">
              Contact me
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}