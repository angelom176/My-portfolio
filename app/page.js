'use client'
import Image from "next/image";
import "./globals.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    slug: 'wildWestGame',
    description:
      'A short and clear project description, highlighting the problem solved and the final result.',
    image: '/imagens/wildWestGame.png',
    tags: ['React', 'CSS', 'UI'],
  },
  {
    title: 'Project Five',
    description:
      'Another project focused on performance, usability and a modern visual experience.',
    tags: ['Frontend', 'Responsive', 'UX'],
  },
  {
    title: 'Project Six',
    description:
      'A personal or freelance case with a clean interface and strong presentation.',
    tags: ['Landing Page', 'Design', 'Web'],
  },
];

export default function PortfolioLayout() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = Math.max(projects.length - visibleCards, 0);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
  };

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <div className="container header-inner">
          <h1 className="logo">Ângelo</h1>

          <nav className="nav">
            <a href="#sobre">About</a>
            <a href="/projects">Projects</a>
            <a href="#contato">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-text">
            <p className="eyebrow">PORTFOLIO</p>

            <h2>
              Designer and developer creating elegant digital experiences.
            </h2>

            <p className="hero-description">
              I build modern, responsive interfaces focused on visual clarity.
              This portfolio was designed to showcase my work in a professional way,
              with enough space to highlight my identity and technical skills.
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
            <div className="status-card">
              <div>
                <p className="card-label">Available for freelance</p>

                <span className="status-dot"></span>
              </div>

              <div>
                <p className="card-label">Specialty</p>
                <h3>React, UI and modern front-end</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="about container">
          <div className="section-heading">
            <p className="section-tag">About me</p>
            <h2>
              I build products focused on aesthetics, clarity and performance.
            </h2>
          </div>

          <p className="about-text">
            I use this space to share my background, skills, workflow and the
            type of projects I enjoy building. My goal is to create clean,
            functional and visually strong digital experiences.
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
                      key={project.title}
                      style={{
                        backgroundImage: `url(${project.image})`,
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

            <h2>Let’s build something interesting together.</h2>

            <p>
              Add your email, LinkedIn, GitHub or a simple contact form here.
            </p>

            <a
              href="mailto:youremail@example.com"
              className="btn btn-primary"
            >
              Contact me
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}