import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export default function Layout({ children, showNav = true }: LayoutProps) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#F2E9D8] dark:bg-[#1a1f2e] font-sans text-[#264653] dark:text-[#F2E9D8] transition-colors duration-300">
      {/* Background Animated Wave */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[60%] rounded-[100%] bg-gradient-to-r from-[#F4A261] to-[#E76F51] opacity-20 dark:opacity-10 blur-[80px]"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[60%] rounded-[100%] bg-gradient-to-l from-[#205781] to-[#264653] opacity-10 dark:opacity-5 blur-[80px]"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      {showNav && (
        <nav className="relative z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
          <div style={{ fontSize: '1.5rem' }} className="text-[#205781] tracking-tight">
            Insight<span className="text-[#E76F51]">Care</span>
          </div>
          <div className="flex gap-4">
             <Link to="/login" className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#205781] hover:bg-white/50 transition-all">
               Login
             </Link>
             <Link to="/register" className="px-6 py-2 rounded-full bg-[#205781] text-white hover:bg-[#1a4666] transition-all shadow-lg shadow-[#205781]/20">
               Sign Up
             </Link>
          </div>
        </nav>
      )}

      {/* Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
