"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Bot, Workflow, Brain, Smartphone, Server, Code, Linkedin } from "lucide-react";

const experience = [
  {
    period: "Present",
    role: "Business Owner & Automation Lead",
    company: "CREAGEN",
    description: "Building intelligent automation systems for agencies and media buyers.",
  },
  {
    period: "2023-2024",
    role: "IT Development & Digital Marketing",
    company: "CV GLOBAL LANATI INDUSTRI",
    description: "Built full-stack e-commerce & marketing integrations.",
  },
  {
    period: "2022-2024",
    role: "IT Development",
    company: "IPEMKA",
    description: "Led digital event platforms & AI tech initiatives.",
  },
];

const skills = [
  { name: "AWS", sub: "CloudFront, S3, IAM", icon: Cloud },
  { name: "Agentic AI", sub: "LangChain, OpenClaw", icon: Bot },
  { name: "n8n", sub: "Workflow Automation", icon: Workflow },
  { name: "Machine Learning", sub: "TensorFlow", icon: Brain },
  { name: "Meta API", sub: "Ads & Marketing", icon: Code },
  { name: "React Native", sub: "Mobile Apps", icon: Smartphone },
  { name: "Node.js", sub: "Backend Runtime", icon: Server },
  { name: "Python", sub: "Data & AI", icon: Cpu },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Architect() {
  return (
    <section id="architect" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-tactical-electric text-sm font-semibold tracking-wider uppercase">
            Behind The Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet <span className="gradient-text">The Architect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src="/img/hd-series.jpg"
                    alt="Haikal Fairuzi Maulana"
                    className="w-16 h-16 rounded-full object-cover border-2 border-tactical-electric glow-electric"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Haikal Fairuzi Maulana</h3>
                  <p className="text-tactical-muted text-sm">
                    Marketing Data Automation Engineer
                  </p>
                </div>
              </div>

              <p className="text-tactical-muted leading-relaxed mb-6">
                I am Haikal, a Marketing Data Automation Engineer and Full-Stack Developer. 
                I specialize in saving media buyers and agencies 15+ hours a week by engineering 
                custom AI agents, automated data pipelines (n8n/Meta API), and scalable cloud infrastructure.
              </p>

              {/* LinkedIn CTA */}
              <a
                href="https://www.linkedin.com/in/haikal-fairuzi-maulana-4227ab213/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-lg border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white font-semibold transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                View My LinkedIn
              </a>

              {/* Skills Grid */}
              <div>
                <h4 className="text-sm font-semibold text-tactical-electric uppercase tracking-wider mb-4">
                  Core Arsenal
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group p-3 rounded-lg bg-tactical-light/30 hover:bg-tactical-light/50 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-tactical-electric mb-2" />
                        <div className="text-xs font-semibold">{skill.name}</div>
                        <div className="text-[10px] text-tactical-muted">{skill.sub}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-tactical-neon uppercase tracking-wider mb-6">
              Experience Timeline
            </h4>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  variants={itemVariants}
                  className="relative pl-8 pb-6 border-l-2 border-tactical-light last:pb-0 last:border-transparent"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-tactical-electric border-4 border-tactical-black" />
                  
                  <div className="glass rounded-xl p-5 hover:bg-tactical-light/30 transition-colors">
                    <span className="text-xs font-semibold text-tactical-neon bg-tactical-neon/10 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                    <h5 className="text-lg font-bold mt-2">{exp.role}</h5>
                    <p className="text-tactical-electric text-sm font-medium">
                      {exp.company}
                    </p>
                    <p className="text-tactical-muted text-sm mt-2">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
