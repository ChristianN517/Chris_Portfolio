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
        <div className="top">
        <h1 className="title">Christian Nielsen</h1>

         <img
      src="/headshot.jpg"
      alt="Headshot"
      className="top-headshot"
    />
        </div>
      </Section>

        <Section index={1}>
        <div className="intro">
          <h2>Design Philosophy</h2>

          <p>
            Throughout the course of CPSC 581, I have explored many aspects of design through
            the activities and projects offered in class. These have left me with a more clear idea of my
            design philosphy. In my opinion, simplicity is hard to beat, and I have done my best to follow 
            this principle in my projects, whilst also ensuring that things are visually appealing. During the course, I
            developed a preference for more catchy coulours and fonts, as well as motion graphics, and while this may not show 
            as much in my earlier projects, I have ensured that this is reflected in this portfolio. Less buttons, a single page, catchy colors, 
            and motion graphics are all design choices I have made in this portfolio to reflect my design philosophy, and I hope you enjoy
            exploring how I have implemented these principles in my projects as well!

          </p>
        </div>
      </Section>

      <Section index={2}>
        <h2 className="proj_title">Projects</h2>

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
      <p>Integrated CAD Learning Application</p>

      <div className="project-links">
        <a href="https://rbrick.vercel.app/" target="_blank">Live Demo</a>
        <a href="https://github.com/ChristianN517/CPSC-581-Group-Project-2" target="_blank">Code</a>
      </div>
    </div>

     <div className="project-card">
      <img src="/project3.png" alt="Project 3" />

      <h3>Portfolio Website</h3>
      <p>Personal portfolio website showing my work</p>

      <div className="project-links">
        <a href="https://chris-portfolio-psi-one.vercel.app/" target="_blank">Live Demo</a>
        <a href="https://github.com/ChristianN517/Chris_Portfolio" target="_blank">Code</a>
      </div>
    </div>

  </div>
</Section>

      <Section index={3}>
        <h2>About</h2>

        <div className="about">
          <p>
            I am a 4th Year Computer Science student at the University of Calgary who likes to work on all kinds of projects
            with a particular interest in large scale data analysis and visualization. I have a strong design philosopy centered around ease of use and 
            simplicity. This portfolio is an attempt to display this philosophy and show my work so far. 
            Please contact me if you have any questions or want to work together!
          </p>
        </div>
      </Section>

      <Section index={4}>
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