'use client';

import { Code2, Briefcase, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import './mainPage.css';
import {motion} from 'framer-motion';

export function FeatureCard({icon, title, text}) {
  return(
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="feature-card"
    >
      {icon}
      <h4>{title}</h4>
      <p>{text}</p>
    </motion.div>
  )
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const basePath =
  process.env.NODE_ENV === 'production' ? '/My-portfolio' : '';

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
    title: 'Punch 2 Learn - Educational Platform',
    slug: 'punch2learn',
    description:
      'An educational platform designed to make learning fun and interactive through engaging activities and gamification elements.',
    image: '/imagens/punch2learn.png',
    tags: ['HTML', 'CSS', 'UI'],
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
    image: '/imagens/wildWestern.png',
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
      <header className="main-header">
        <nav className="main-nav">
          <a href="#sobre">About</a>
          <Link href="/projects">Projects</Link>
          <a href="#contato">Contact</a>
        </nav>
      </header>

      <main>
        <section className="main-hero main-container">
          <motion.div
            className="main-topic-item"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0 }}
    >
          <div className="main-hero-text">
            <p className="main-eyebrow">PORTFOLIO</p>

            <h2>
              Computing Science student building web applications and software
              solutions.
            </h2>

            <p className="main-hero-description">
              I am a second-year Computing Science student focused on web
              development and software engineering. I build projects using
              Next.js, React, JavaScript and Java while continuously improving
              my understanding of software design, development practices and
              user experience.
            </p>

            <div className="main-hero-actions">
              <a href="#projetos" className="main-btn main-btn-primary">
                View projects
              </a>

              <a href="#contato" className="main-btn main-btn-secondary">
                Get in touch
              </a>
            </div>
          </div>
          </motion.div>

          <motion.div
            className="main-topic-item"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
          <div className="main-hero-card">
            <div
              className="main-status-card"
              style={{
                backgroundImage: `linear-gradient(
                  180deg,
                  rgba(23, 23, 35, 0) 0%,
                  rgba(61, 61, 90, 0.92) 100%
                ), url(${basePath}/imagens/angelo.jpeg)`,
              }}
            >
              <div>
                <p className="main-card-label">Current Focus</p>
                <span className="main-status-dot"></span>
              </div>

              <div>
                <p className="main-card-label">Learning</p>
                <p className="main-card-label">Current Focus</p>
                <h3>Next.js, React and Software Development</h3>
              </div>
            </div>
          </div>
          </motion.div>

        </section>

        <section className="main-topics">
          <motion.div
            className="main-topic-item"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0 }}
          >

          <Code2 className="main-topic-icon" />
          <p className="main-topic-label">Frontend Development</p>
          <h3>
            Building responsive web applications with Next.js, React and modern web technologies.
          </h3>
        </motion.div>

        <motion.div
          className="main-topic-item"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Briefcase className="main-topic-icon" />

          <p className="main-topic-label">Software Engineering</p>

          <h3>
            Developing Java applications while studying software architecture and
            object-oriented design.
          </h3>
        </motion.div>

        <motion.div
          className="main-topic-item"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
            <Rocket className="main-topic-icon" />

            <p className="main-topic-label">Computing Science</p>

            <h3>
              Combining academic knowledge with real-world projects and continuous
              learning.
            </h3>
          </motion.div>
          </section>


        <section id="sobre" className="main-about main-container">
          <div className="main-section-heading">
            <p className="main-section-tag">About me</p>

            <h2>
              Building technical skills through projects, study and continuous
              development.
            </h2>
          </div>

          <p className="main-about-text">
            As a Computing Science student, I enjoy building web applications
            and software projects that combine clean design, functionality and
            problem solving. My current interests include Next.js, React, Java
            development and software engineering principles.
          </p>
          </section>
        
        <section id="projetos" className="main-projects main-container">
          <div className="main-section-heading">
            <p className="main-section-tag">Projects</p>
            <h2>Some featured work</h2>
          </div>

          <div className="main-carousel-window">
            <div
              className="main-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.title} className="main-carousel-slide">
                  <article className="main-project-card">
                    <div
                      className="main-project-image"
                      style={{
                        backgroundImage: `url(${basePath}${project.image})`,
                      }}
                    />

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="main-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="main-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="main-project-link"
                    >
                      View project
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="main-carousel-controls">
          <button className="main-carousel-control" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>

          <button className="main-carousel-control" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        </div>

        <section id="contato" className="main-contact main-container">
          <div className="main-contact-box">
            <p className="main-section-tag">Contact</p>

            <h2>Let's connect and build something meaningful.</h2>

            <p>
              I am currently looking for internships, junior opportunities and
              projects where I can continue growing as a web and software
              developer.
            </p>

            <a
              href="mailto:angelo-mmacedo@hotmail.com"
              className="main-btn main-btn-primary"
            >
              Contact me
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}