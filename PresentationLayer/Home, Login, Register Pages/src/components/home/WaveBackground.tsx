import React from 'react';
import { motion } from 'motion/react';

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2E9D8] via-[#F2E9D8]/80 to-[#F2E9D8]/60 dark:from-[#1a1f2e] dark:via-[#1a1f2e]/80 dark:to-[#242938]/60 z-0 transition-colors duration-500" />
      
      {/* Animated waves */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave 1 - Apricot */}
        <motion.path
          d="M0,400 C360,300 720,500 1440,400 L1440,800 L0,800 Z"
          fill="url(#gradient1)"
          opacity={0.3}
          animate={{
            d: [
              "M0,400 C360,300 720,500 1440,400 L1440,800 L0,800 Z",
              "M0,450 C360,550 720,350 1440,450 L1440,800 L0,800 Z",
              "M0,400 C360,300 720,500 1440,400 L1440,800 L0,800 Z",
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Wave 2 - Coral */}
        <motion.path
          d="M0,500 C360,400 720,600 1440,500 L1440,800 L0,800 Z"
          fill="url(#gradient2)"
          opacity={0.25}
          animate={{
            d: [
              "M0,500 C360,400 720,600 1440,500 L1440,800 L0,800 Z",
              "M0,480 C360,580 720,380 1440,480 L1440,800 L0,800 Z",
              "M0,500 C360,400 720,600 1440,500 L1440,800 L0,800 Z",
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Wave 3 - Deep Blue */}
        <motion.path
          d="M0,600 C360,500 720,700 1440,600 L1440,800 L0,800 Z"
          fill="url(#gradient3)"
          opacity={0.2}
          animate={{
            d: [
              "M0,600 C360,500 720,700 1440,600 L1440,800 L0,800 Z",
              "M0,620 C360,720 720,520 1440,620 L1440,800 L0,800 Z",
              "M0,600 C360,500 720,700 1440,600 L1440,800 L0,800 Z",
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F4A261" />
            <stop offset="100%" stopColor="#E76F51" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E76F51" />
            <stop offset="100%" stopColor="#F4A261" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#205781" />
            <stop offset="100%" stopColor="#264653" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating orbs for liquid glass effect */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-[#F4A261]/20 to-[#E76F51]/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-[50%] right-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-[#205781]/15 to-[#264653]/15 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -25, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}
