import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = '', hoverEffect = false }: GlassCardProps) {
  const baseClasses = "bg-white/30 dark:bg-[#242938]/30 backdrop-blur-xl border border-white/40 dark:border-white/20 shadow-lg rounded-2xl p-6 relative overflow-hidden transition-colors duration-300";
  const hoverClasses = hoverEffect ? " hover:bg-white/40 dark:hover:bg-[#242938]/40" : "";
  const combinedClasses = `${baseClasses}${hoverClasses} ${className}`;
  
  return (
    <motion.div
      className={combinedClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle glass highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50" />
      {children}
    </motion.div>
  );
}
