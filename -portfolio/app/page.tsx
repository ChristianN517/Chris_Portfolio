"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home-container">

      {/* SECTION 0 */}
      <motion.section
        className="section"
        initial={{ opacity: 0, x: "-40vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="top">
          <h1 className="title">Christian Nielsen</h1>
          <img src="/headshot.jpg" alt="Headshot" className="top-headshot" />
        </div>
      </motion.section>

      {/* SECTION 1 */}
      <motion.section
        className="section"
        initial={{ opacity: 0, x: "40vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="intro">
          <h2>Design Philosophy</h2>
          <p>
            Throughout the course of CPSC 581, I have explored many aspects of design through
            the activities and projects offered in class. These have left me with a more clear idea of my
            design philosphy. In my opinion, simplicity is hard to beat, and I have done my best to follow
            this principle in my projects, whilst also ensuring that things are visually appealing.
            I have rejected more clunky ways of doing things, such as adding unnecessary elements
            (eg, excessive buttons or decorative elements) which disturb the look of pages.
            During the course, I developed a preference for more catchy coulours and fonts, as well
            as motion graphics, and while this may not show as much in my earlier projects,
            I have ensured that this is reflected in this portfolio.
          </p>
        </div>
      </motion.section>

      {/* SECTION 2 - Progress Showcase */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="intro2">
          <h2>Progress Showcase</h2>
          <p>My designs over time.</p>

          <div className="progress-list">

            <div className="progress-item">
              <img src="/image1.png" alt="Progress 1" />
              <p>My early designs for this portfolio
                were more complex and less user friendly,
                and made use of various visual elements which I would strongly
                oppose now. I had a preference for adding more, even if it wasn't necessary,
                which is quite clear in these early drafts, and is something that I have now shaken off,
                being very minimalistic in my additions past what I think is essential to the functioning
                of the application.
                </p>
            </div>

            <div className="progress-item">
              <img src="/image.png" alt="Progress 2" />
              <p>I started experimenting with layout and spacing in the first project,
                but struggled to make things look visually appealing, whilst also leaving things
                quite unrefined I learned a lot about my preferences in design from this project in having a
                lot of creative freedom in approaching it.</p>
            </div>

            <div className="progress-item">
              <img src="/image2.png" alt="Progress 3" />
              <p>I was more limited in creativity with the second project, but I started trying to make
                things look as sleek as I could while keeping things easy to navigate and use.
                I got a better hold on spacing and layout, but still left something to be desired in terms of
                visual appeal.</p>
            </div>

            <div className="progress-item">
              <p>The final showcase of my progress in design is this portfolio. I ensured
                that I applied the design principles I valued most, and kept changing things I didn't like
                such as the background, the direction of the layout, and the fonts among other things until I was satisfied.
                The full finished project referenced above can as well be accessed in full below to see how 
                my approach to design has changed whilst progressing throguh this class. Please Enjoy!
              </p>
            </div>

          </div>
        </div>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section
        className="section"
        initial={{ opacity: 0, x: "-40vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.35 }}
      >
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
      </motion.section>

      {/* SECTION 4 */}
      <motion.section
        className="section"
        initial={{ opacity: 0, x: "40vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2>About</h2>
        <div className="about">
          <p>
            I am a 4th Year Computer Science student at the University of Calgary who likes to work on all kinds of projects
            with a particular interest in large scale data analysis and visualization. I have a strong design philosopy centered around ease of use and simplicity.
            This portfolio is an attempt to display this philosophy and show my work so far.
            Please contact me if you have any questions or want to work together!
          </p>
        </div>
      </motion.section>

      {/* SECTION 5 */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
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
      </motion.section>

    </main>
  );
}
