'use client';

import { Code2, Database, GitBranch, Cog,  Monitor, Server, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
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



const projects = [
  {
    type: 'FULL STACK',
    title: 'Event Management System',
    slug: 'eventManagement',
    url: 'https://eventhub-smoky-tau.vercel.app/',
    description:
      'A full stack application to manage events, users, and registrations with authencation and admin dashboard',
    image: '/imagens/eventSystem.png',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  /*
  {
    type: 'Educational Platform',
    title: 'Punch 2 Learn - Educational Platform',
    slug: 'punch2learn',
    description:
      'An educational platform designed to make learning fun and interactive through engaging activities and gamification elements.',
    image: '/imagens/punch2learn.png',
    tags: ['HTML', 'CSS', 'UI'],
  },
  
  {
    type: 'Java',
    title: 'Fireboy and Watergirl',
    slug: 'fireboyAndWatergirl',
    description:
      'A 2D game project inspired by Fireboy and Watergirl, developed to explore game mechanics, interaction design and JavaScript programming.',
    image: '/imagens/game.jpg',
    tags: ['JavaScript', 'Game Logic', '2D'],
  },*/
  {
    type: 'Java',
    title: 'Wild West Card Game',
    slug: 'java-card-game',
    description:
      'Java-based card game project focused on object-oriented programming, game logic implementation and software development fundamentals.',
    image: '/imagens/ibm.png',
    tags: ['Java', 'OOP', 'Game Logic'],
  },
];

export default function PortfolioLayout() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = Math.max(projects.length - visibleCards, 0);

 

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
            className="main-topic-item" variants={fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}>

            <div className="main-hero-card">

              <div className="main-status-card" style={{
                  backgroundImage: `linear-gradient(180deg,
                    rgba(23, 23, 35, 0) 0%,
                    rgba(61, 61, 90, 0.92) 100%
                  ), url(/imagens/angelo.jpeg)`,
                }}>

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

        <p className="skills-tag">Skills</p>
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
          <p className="main-topic-label">Programming</p>
          <h3>
            Building Java and JavaScript applications with clean code and OOP principles.          
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
          <Monitor className="main-topic-icon" />

          <p className="main-topic-label">Frontend Development</p>

          <h3>
            Creating responsive interfaces with Next.js, React, HTML, and CSS.
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
            <Server className="main-topic-icon" />

            <p className="main-topic-label">Backend Development</p>

            <h3>
              Developing REST APIs with Node.js and scalable server-side solutions.
            </h3>
          </motion.div>

          <motion.div
            className="main-topic-item"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0 }}
          >

          <Database className="main-topic-icon" />
          <p className="main-topic-label">Database</p>
          <h3>
         Designing MySQL databases with efficient queries and reliable data models.
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
          <Cog className="main-topic-icon" />

          <p className="main-topic-label">Software Engineering</p>

          <h3>
            Applying software design, data structures, and algorithms to real-world solutions.
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
            <GitBranch className="main-topic-icon" />

            <p className="main-topic-label">Development Tools</p>

            <h3>
             Using Git, GitHub, GitLab, JUnit, and debugging tools throughout development.
            </h3>
          </motion.div>
          </section>


        <section id="sobre" className="main-about">
          <div className="main-container">
            <div className="main-section-heading">
            <p className="main-section-tag">About me</p>

            <h2>
              Building technical skills through projects, study and continuous
              development.
            </h2>
          </div>

          <p className="main-about-text">
            As a Computing Science student, I am passionate about creating web applications and software that combine clean design, practical functionality, and thoughtful problem-solving. I enjoy turning ideas into real, user-friendly projects while continuously improving my skills in Next.js, React, Java, and full-stack development. I am especially interested in software engineering principles and eager to gain professional experience, contribute to meaningful projects, and grow as a developer.

          </p>
          </div>
          </section>
        
        <section id="projetos" className="main-projects main-container">
           
           <Code2 className="projects-topic-icon" />
            <h2 className="h2-featured-projects">Featured Projects</h2>
            <p className="p-projects-description">
              A selection of projects that showcase my skills<br></br> and experience in different tecnologies.
            </p>

            
              {projects.map((project, index) => (
                  <article className={`main-project-card ${index % 2 === 0 ? "left" : "right"}`} key={project.slug}>
                  
                    <div
                      className={`main-project-image image-${project.slug}`}
                      style={{backgroundImage: `url(${project.image})`,
                      }}/>

                      <div className="main-project-content">

                        <p className="main-project-type">{project.type}</p>
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
                        href={project.url ?? `/projects/${project.slug}`}
                        target={project.url ? '_blank' : undefined}
                        className="main-project-link">
                        View project
                      </Link>
                    </div>
                  </article>
                
              ))}
            
        
        </section>

        

        <section id="contato" className="main-contact main-container">
          <div className="main-contact-box">
            <p>Contact</p>

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