"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tactical-electric/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tactical-neon/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Zap className="w-4 h-4 text-tactical-electric" />
          <span className="text-sm text-tactical-muted">
            Elite Tech Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          We Don&apos;t Just Build Apps.
          <br />
          <span className="gradient-text">
            We Build Intelligent Systems.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-tactical-muted max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Transforming manual operations into automated powerhouses. From
          AI-driven workflows (n8n, LangChain) to high-performance custom
          web/mobile apps.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-tactical-electric text-tactical-black font-semibold rounded-lg hover:bg-tactical-electric/90 transition-all duration-300 glow-electric"
          >
            Automate My Business
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="group flex items-center gap-2 px-8 py-4 glass glass-hover rounded-lg font-semibold transition-all duration-300"
          >
            View The Arsenal
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-16 pt-8 border-t border-tactical-light"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-tactical-electric">
              50+
            </div>
            <div className="text-sm text-tactical-muted mt-1">
              Systems Built
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-tactical-neon">
              10x
            </div>
            <div className="text-sm text-tactical-muted mt-1">
              Efficiency Gain
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-tactical-electric">
              24/7
            </div>
            <div className="text-sm text-tactical-muted mt-1">
              Automation
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-tactical-light rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-tactical-electric rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
