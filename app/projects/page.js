'use client';

import Link from 'next/link';
import styles from './projects.module.css';


const projects = [
  {
    type: 'FULL STACK',
    title: 'Event Management System',
    slug: 'eventManagement',
    url: 'https://eventhub-smoky-tau.vercel.app/',
    description:
      'A full stack application to manage events, users, and registrations with authencation and admin dashboard',
    image: '/imagens/eventSystem.png',
    tags: ['React', 'Node.js', 'MySQL'],
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

export default function ProjectsPage() {
  return (
    <main className={styles.projectsContainer}>
      <header className={styles.portfolioHeader}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className={`${styles.projects} ${styles.container}`}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionTag}>Projects</p>
          <h2>Some featured work</h2>
        </div>

        <div className={styles.projectsList}>
          {projects.map((project, index) => (
                
                  <article className={`main-project-card ${index % 2 === 0 ? "left" : "right"}`} key={project.slug}>
                  
                    
                    <div
                      className={`main-project-image image-${project.slug}`}
                      style={{
                        backgroundImage: `url(${project.image})`,
                      }}
                    />

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
                      target={project.url ? '_blank' : 'undefined'}
                      className="main-project-link"
                    >
                      View project
                    </Link>
                    </div>
                  </article>
             
          ))}
        </div>
      </section>
    </main>
  );
}