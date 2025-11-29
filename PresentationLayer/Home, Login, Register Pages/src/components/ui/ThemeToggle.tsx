import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all hover:scale-105 hover:border-white/40"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute"
      >
        <Moon className="w-5 h-5" style={{ color: '#F4A261' }} />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute"
      >
        <Sun className="w-5 h-5" style={{ color: '#E76F51' }} />
      </motion.div>
    </motion.button>
  );
}
