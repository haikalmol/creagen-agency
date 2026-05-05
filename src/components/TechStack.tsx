"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "n8n", logo: "/img/n8n-logo.png" },
  { name: "AWS", logo: "/img/aws-logo.png" },
  { name: "Meta API", logo: "/img/meta-logo.png" },
  { name: "OpenAI", logo: "/img/openai-logo.png" },
  { name: "Claude", logo: "/img/claude-logo.png" },
  { name: "Next.js", logo: "/img/nextjs-logo.png" },
  { name: "Node.js", logo: "/img/nodejs-logo.png" },
  { name: "Python", logo: "/img/python-logo.png" },
  { name: "Tailwind", logo: "/img/tailwind-logo.png" },
  { name: "React Native", logo: "/img/reactnative-logo.png" },
  { name: "Figma", logo: "/img/figma-logo.png" },
  { name: "LangChain", logo: "/img/langchain-logo.png" },
  { name: "OpenClaw", logo: "/img/openclaw-logo.png" },
];

// Multiply array 4 times for seamless ultra-wide marquee
const marqueeItems = [...techStack, ...techStack, ...techStack, ...techStack];

export default function TechStack() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-tactical-dark">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-4"
      >
        <span className="text-tactical-neon text-sm font-semibold tracking-wider uppercase">
          Trusted Technology
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-4">
          The <span className="gradient-text">Tech Stack</span> Arsenal
        </h2>
      </motion.div>

      {/* Infinite Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-tactical-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-tactical-dark to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-4"
            >
              <div className="flex flex-col items-center justify-center w-28 sm:w-32 h-28 sm:h-32 rounded-xl glass glass-hover transition-all duration-300 hover:scale-105 group">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs sm:text-sm font-medium text-tactical-muted group-hover:text-tactical-electric transition-colors text-center px-2">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="relative overflow-hidden mt-4">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-tactical-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-tactical-dark to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track - Reverse */}
        <div 
          className="flex hover:[animation-play-state:paused]"
          style={{
            animation: "marquee 40s linear infinite reverse",
          }}
        >
          {[...marqueeItems].reverse().map((tech, index) => (
            <div
              key={`${tech.name}-reverse-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-4"
            >
              <div className="flex flex-col items-center justify-center w-28 sm:w-32 h-28 sm:h-32 rounded-xl glass glass-hover transition-all duration-300 hover:scale-105 group">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs sm:text-sm font-medium text-tactical-muted group-hover:text-tactical-neon transition-colors text-center px-2">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
