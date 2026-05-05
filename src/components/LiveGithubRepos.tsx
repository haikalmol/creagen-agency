"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, ExternalLink } from "lucide-react";

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
}

const fallbackRepos: Repo[] = [
  {
    name: "n8n-ai-pipeline",
    description: "Advanced n8n workflows with OpenAI integration for automated content processing and data extraction.",
    language: "TypeScript",
    html_url: "https://github.com",
    stargazers_count: 127,
  },
  {
    name: "langchain-agent-framework",
    description: "Modular LangChain agent system with memory management and multi-tool orchestration capabilities.",
    language: "Python",
    html_url: "https://github.com",
    stargazers_count: 89,
  },
  {
    name: "crm-metasync-bridge",
    description: "Real-time synchronization bridge between popular CRMs and Meta Business API for lead management.",
    language: "JavaScript",
    html_url: "https://github.com",
    stargazers_count: 64,
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C#": "#178600",
  Java: "#b07219",
  Go: "#00ADD8",
  Ruby: "#701516",
  PHP: "#4F5D95",
};

function formatRepoName(name: string): string {
  return name.replace(/-/g, " ").replace(/_/g, " ");
}

function truncateDescription(desc: string | null, maxLength: number = 120): string {
  if (!desc) return "No description available";
  if (desc.length <= maxLength) return desc;
  return desc.substring(0, maxLength).trim() + "...";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LiveGithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/haikalmol/repos?sort=updated&per_page=3",
          { headers: { Accept: "application/vnd.github.v3+json" } }
        );

        if (!response.ok) {
          throw new Error("GitHub API error");
        }

        const data: Repo[] = await response.json();
        setRepos(data);
      } catch {
        setError(true);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const displayRepos = repos.length > 0 ? repos : fallbackRepos;

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-tactical-dark">
      <div className="max-w-7xl mx-auto">
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

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-tactical-electric border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {displayRepos.map((repo) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group block p-6 rounded-xl glass glass-hover transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <GitBranch className="w-5 h-5 text-tactical-electric" />
                      <h3 className="font-semibold text-lg group-hover:text-tactical-electric transition-colors capitalize">
                        {formatRepoName(repo.name)}
                      </h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-tactical-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-tactical-muted text-sm mb-6 leading-relaxed">
                    {truncateDescription(repo.description)}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-tactical-light/50">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: languageColors[repo.language || ""] || "#888",
                        }}
                      />
                      <span className="text-xs text-tactical-muted">
                        {repo.language || "Unknown"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-tactical-muted">
                      <Star className="w-4 h-4" />
                      <span className="text-xs">{repo.stargazers_count}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-8"
            >
              <p className="text-xs text-tactical-muted">
                {error ? "Showing fallback data • " : "Data fetched via GitHub API • "}
                <span className={error ? "text-tactical-neon" : "text-tactical-electric"}>
                  {error ? "Offline Mode" : "Live Updates"}
                </span>
              </p>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
