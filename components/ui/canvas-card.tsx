"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CanvasCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function CanvasCard({ title, description, icon, className }: CanvasCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      className={cn(
        "group relative flex h-[300px] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm transition-colors hover:border-primary/50",
        className
      )}
    >
      {/* Background Grid - Visible on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      
      {/* Background Gradient - Added background blend to ensure text readability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-0 bg-gradient-to-t from-primary/20 via-background/80 to-transparent"
      />

      {/* Icon - Disappears and moves out of the way on hover */}
      <motion.div
        animate={{ y: hovered ? -40 : 0, opacity: hovered ? 0 : 1, scale: hovered ? 0.8 : 1 }}
        transition={{ duration: 0.3 }}
        className="z-10 flex items-center justify-center"
      >
        {icon}
      </motion.div>

      {/* Content (Title & Description) - Revealed on hover/tap */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="absolute z-10 flex flex-col items-center p-6 text-center"
      >
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm font-medium text-foreground/90">{description}</p>
      </motion.div>
    </div>
  );
}