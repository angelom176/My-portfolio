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
      "Full stack event management platform with JWT authentication, role-based admin dashboard, and MySQL-backed registration system handling CRUD operations for events and attendees. You can acess the admin dashboard using the following credentials: Email: email@test.com | Password: password123",
    image: '/imagens/eventSystem.png',
    tags: ['React', 'Node.js', 'MySQL'],
  },
  
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
                        className="main-project-link">
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