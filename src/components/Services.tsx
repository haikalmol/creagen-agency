"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Palette, Plug } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI & Custom Automation",
    description:
      "n8n workflows, Agentic AI, LangChain, and automated data pipelines.",
    tags: ["n8n", "LangChain", "AI Agents"],
    featured: true,
  },
  {
    icon: Globe,
    title: "Custom Web & Mobile Apps",
    description:
      "Full-stack development for MVPs and scalable digital platforms.",
    tags: ["Next.js", "React Native", "Node.js"],
    featured: false,
  },
  {
    icon: Palette,
    title: "AI-Assisted Creative Ops",
    description:
      "Video content & UI/UX design powered by AI-driven asset generation.",
    tags: ["Figma", "Midjourney", "Motion"],
    featured: false,
  },
  {
    icon: Plug,
    title: "Smart Integrations",
    description:
      "Connecting your CRM, Meta Ads, and internal tools seamlessly.",
    tags: ["CRM", "Meta API", "Zapier"],
    featured: false,
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
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
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
            Core Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Services Built for{" "}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-tactical-muted text-lg max-w-2xl mx-auto">
            Every solution is engineered to eliminate manual bottlenecks and
            unlock exponential growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`relative group p-8 rounded-2xl glass glass-hover transition-all duration-500 ${
                  service.featured
                    ? "md:col-span-2 lg:col-span-1 border-tactical-electric/30"
                    : ""
                }`}
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute -top-3 left-8 px-3 py-1 bg-tactical-electric text-tactical-black text-xs font-bold rounded-full">
                    FLAGSHIP
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    service.featured
                      ? "bg-tactical-electric/20"
                      : "bg-tactical-light/50"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      service.featured
                        ? "text-tactical-electric"
                        : "text-tactical-muted"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-tactical-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-tactical-light/50 text-tactical-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    service.featured
                      ? "bg-gradient-to-br from-tactical-electric/5 to-transparent"
                      : "bg-gradient-to-br from-white/5 to-transparent"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
