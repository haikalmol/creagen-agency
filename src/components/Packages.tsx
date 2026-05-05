"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "The Digital Pioneer",
    description: "For startups ready to digitize",
    features: [
      "MVP Development",
      "Basic UI/UX",
      "Lead Capture Automations",
      "Email Workflows",
    ],
    highlighted: false,
    cta: "Start Your Journey",
  },
  {
    name: "The Smart Business",
    description: "For growing agencies needing automated pipelines",
    features: [
      "Custom Web App",
      "CRM Integration",
      "Mid-level n8n Automations",
      "Meta Ads Lead Sync",
    ],
    highlighted: false,
    cta: "Scale Operations",
  },
  {
    name: "The AI-Powered Enterprise",
    description: "For scaling operations demanding cutting-edge AI",
    features: [
      "Full Stack Custom Platform",
      "Agentic AI (OpenClaw/LangChain)",
      "Advanced n8n Data Pipelines",
      "Multi-CRM Orchestration",
    ],
    highlighted: true,
    cta: "Deploy Enterprise AI",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Packages() {
  return (
    <section
      id="packages"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
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
            Scalable Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Choose Your{" "}
            <span className="gradient-text">Battle Plan</span>
          </h2>
          <p className="text-tactical-muted text-lg max-w-2xl mx-auto">
            Every package is designed to meet you where you are and scale with
            your ambition.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                pkg.highlighted
                  ? "bg-gradient-to-b from-tactical-electric/10 to-tactical-gray border-2 border-tactical-electric/50 scale-105 z-10"
                  : "glass glass-hover"
              }`}
            >
              {/* Popular Badge */}
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-tactical-electric text-tactical-black text-sm font-bold rounded-full flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  MOST POPULAR
                </div>
              )}

              {/* Package Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-tactical-muted text-sm">
                  {pkg.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        pkg.highlighted
                          ? "text-tactical-neon"
                          : "text-tactical-electric"
                      }`}
                    />
                    <span className="text-sm text-tactical-muted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-tactical-electric text-tactical-black hover:bg-tactical-electric/90 glow-electric"
                    : "glass glass-hover"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solutions Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-tactical-muted">
            Need something custom?{" "}
            <a
              href="#contact"
              className="text-tactical-electric hover:underline"
            >
              Let&apos;s architect your solution
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
