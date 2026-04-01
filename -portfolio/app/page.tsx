"use client";

import { motion } from "framer-motion";

function Section({ children, index }: { children: React.ReactNode; index: number }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.section
      className="section"
      initial={{
        opacity: 0,
        x: fromLeft ? "-40vw" : "40vw"
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{
        once: true,
        amount: 0.35
      }}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="home-container">

      <Section index={0}>
        <h1 className="title">Christian Nielsen</h1>
      </Section>

        <Section index={1}>
        <div className="intro">
          <h2>Introduction</h2>

          <p>
            This is where you can describe yourself, your interests, and what
            kind of work you focus on. Replace this text with anything you
            want—your technical focus, goals, or background.
          </p>

          <p>
            For example, you might talk about your Computer Science studies,
            your interest in UX design, or the projects you're currently
            building.
          </p>
        </div>
      </Section>

      <Section index={1}>
        <h2>Projects</h2>

  <div className="projects">

    <div className="project-card">
      <img src="/project1.png" alt="Project 1" />

      <h3>Family of Buttons Project</h3>
      <p>Interactive React + Three.js interface.</p>

      <div className="project-links">
        <a href="https://cpsc-button-project.vercel.app/" target="_blank">Live Demo</a>
        <a href="https://github.com/graceeilori/button-project" target="_blank">Code</a>
      </div>
    </div>

    <div className="project-card">
      <img src="/project2.png" alt="Project 2" />

      <h3>CAD Learning Platform</h3>
      <p>Integrated CAD Application.</p>

      <div className="project-links">
        <a href="https://project-two.vercel.app" target="_blank">Live Demo</a>
        <a href="https://github.com/yourusername/project2" target="_blank">Code</a>
      </div>
    </div>

  </div>
</Section>

      <Section index={2}>
        <h2>About</h2>

        <div className="about">
          <img src="/profile.jpg" className="profile-photo"/>
          <p>
            Computer Science student at the University of Calgary focused on
            clean architecture, UX design, and scalable backend systems.
          </p>
        </div>
      </Section>

      <Section index={3}>
  <h2>Contact</h2>

  <div className="contact-icons">
    <a href="https://github.com/ChristianN517" target="_blank">
      <img src="icons/github.png" alt="GitHub" />
    </a>

    <a href="https://www.linkedin.com/in/christian-nielsen-1a1ba8292/" target="_blank">
      <img src="icons/linkedin.png" alt="LinkedIn" />
    </a>

    <a href="mailto:youremail@example.com">
      <img src="icons/gmail.png" alt="Email" />
    </a>
  </div>
</Section>
    </main>
  );
}