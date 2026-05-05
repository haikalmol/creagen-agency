"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, ExternalLink } from "lucide-react";

// Placeholder data - Replace with actual GitHub API integration
const repositories = [
  {
    name: "n8n-ai-pipeline",
    description:
      "Advanced n8n workflows with OpenAI integration for automated content processing and data extraction.",
    tags: ["n8n", "OpenAI", "TypeScript"],
    stars: 127,
    language: "TypeScript",
    url: "https://github.com",
  },
  {
    name: "langchain-agent-framework",
    description:
      "Modular LangChain agent system with memory management and multi-tool orchestration capabilities.",
    tags: ["LangChain", "Python", "AI"],
    stars: 89,
    language: "Python",
    url: "https://github.com",
  },
  {
    name: "crm-metasync-bridge",
    description:
      "Real-time synchronization bridge between popular CRMs and Meta Business API for lead management.",
    tags: ["Meta API", "Node.js", "CRM"],
    stars: 64,
    language: "JavaScript",
    url: "https://github.com",
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function LiveEngineering() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-tactical-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-tactical-neon text-sm font-semibold tracking-wider uppercase">
            Live Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Data Pipelines &{" "}
            <span className="gradient-text">Repositories</span>
          </h2>
          <p className="text-tactical-muted text-lg max-w-2xl mx-auto">
            Real-world systems running in production. Open-source tools and
            internal frameworks powering automation.
          </p>
        </motion.div>

        {/* Repository Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {repositories.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block p-6 rounded-xl glass glass-hover transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <GitBranch className="w-5 h-5 text-tactical-electric" />
                  <h3 className="font-semibold text-lg group-hover:text-tactical-electric transition-colors">
                    {repo.name}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-tactical-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Description */}
              <p className="text-tactical-muted text-sm mb-6 leading-relaxed">
                {repo.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-tactical-light/50 text-tactical-muted rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-tactical-light/50">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        languageColors[repo.language] || "#888",
                    }}
                  />
                  <span className="text-xs text-tactical-muted">
                    {repo.language}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-tactical-muted">
                  <Star className="w-4 h-4" />
                  <span className="text-xs">{repo.stars}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* API Integration Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-tactical-muted">
            Data fetched dynamically via GitHub API •{" "}
            <span className="text-tactical-electric">Live Updates</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
