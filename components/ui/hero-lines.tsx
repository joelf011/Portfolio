"use client";

import { motion } from "framer-motion";

export function HeroLines() {
  return (
    <div className="absolute top-0 left-0 w-full h-[600px] z-[-1] pointer-events-none overflow-hidden opacity-30 md:opacity-100">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- BASE TRACKS --- */}
        <path d="M -50 150 H 250 V 300 H 500 V 500 H 800 V 650" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
        <path d="M 1500 100 H 1200 V 250 H 1000 V 150 H 800 V 400 H 650 V 650" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
        <path d="M 400 -50 V 150 H 600 V 350 H 900 V 200 H 1100 V -50" stroke="currentColor" strokeWidth="1" className="text-primary/10" />

        {/* --- ANIMATED GLOW (Hidden on mobile) --- */}
        <g className="hidden md:block">
          <motion.path
            d="M -50 150 H 250 V 300 H 500 V 500 H 800 V 650"
            stroke="currentColor" strokeWidth="2" className="text-primary" filter="url(#glow)"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ pathLength: [0, 0.25, 0.25, 0], pathOffset: [0, 0, 0.75, 1], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 1500 100 H 1200 V 250 H 1000 V 150 H 800 V 400 H 650 V 650"
            stroke="currentColor" strokeWidth="2" className="text-primary" filter="url(#glow)"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ pathLength: [0, 0.25, 0.25, 0], pathOffset: [0, 0, 0.75, 1], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
          <motion.path
            d="M 400 -50 V 150 H 600 V 350 H 900 V 200 H 1100 V -50"
            stroke="currentColor" strokeWidth="1.5" className="text-primary/80" filter="url(#glow)"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ pathLength: [0, 0.2, 0.2, 0], pathOffset: [0, 0, 0.8, 1], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 3 }}
          />
        </g>
      </svg>
    </div>
  );
}