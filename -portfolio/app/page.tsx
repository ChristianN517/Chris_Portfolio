"use client";

import { motion } from "framer-motion";

function Section({ children, index }: { children: React.ReactNode; index: number }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.section
      className="section"
      initial={{
        opacity: 0,
        x: fromLeft ? "-100vw" : "100vw"
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1]  // smoother easing curve
      }}
      viewport={{
        once: false,
        amount: 0.4
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
        <h2>Projects</h2>
        <p>Selected work and experiments.</p>
      </Section>

      <Section index={2}>
        <h2>About</h2>
        <p>Computer Science student focused on clean architecture and UX.</p>
      </Section>

      <Section index={3}>
        <h2>Contact</h2>
        <p>Let’s build something interesting.</p>
      </Section>

    </main>
  );
}