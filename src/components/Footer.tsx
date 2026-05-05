"use client";

import { motion } from "framer-motion";
import { Zap, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-tactical-black"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tactical-electric/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stop doing robot work.
            <br />
            <span className="gradient-text">
              Let&apos;s build your system.
            </span>
          </h2>
          <p className="text-tactical-muted text-lg mb-10 max-w-2xl mx-auto">
            Ready to transform your operations? Book a free strategy call and
            let&apos;s architect your automation roadmap.
          </p>

          {/* Main CTA Button */}
          <motion.a
            href="https://calendly.com/haikal-maulana1623/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-tactical-electric text-tactical-black font-bold text-lg rounded-xl hover:bg-tactical-electric/90 transition-all duration-300 glow-electric"
          >
            <Zap className="w-6 h-6" />
            Book a Strategy Call
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-tactical-light/50 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-tactical-electric flex items-center justify-center">
                  <Zap className="w-5 h-5 text-tactical-black" />
                </div>
                <span className="text-xl font-bold">Creagen</span>
              </div>
              <p className="text-sm text-tactical-muted">
                © {currentYear} Haikal. Engineered for Automation.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/haikalmol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-tactical-light transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-tactical-muted" />
              </a>
              <a
                href="https://www.linkedin.com/in/haikal-fairuzi-maulana-4227ab213/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-tactical-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-tactical-muted" />
              </a>
              <a
                href="https://x.com/HaikalFairuziM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-tactical-light transition-colors"
                aria-label="X"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-tactical-muted"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:haikal.maulana1623@gmail.com"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-tactical-light transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-tactical-muted" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-tactical-light/30">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-tactical-muted">
            <a href="#services" className="hover:text-tactical-electric transition-colors">
              Services
            </a>
            <a href="#packages" className="hover:text-tactical-electric transition-colors">
              Packages
            </a>
            <span className="hidden sm:inline">•</span>
            <span>Built with Next.js + Tailwind + Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
