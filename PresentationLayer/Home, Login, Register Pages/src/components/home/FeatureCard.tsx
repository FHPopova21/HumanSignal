import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-white/30 dark:bg-[#242938]/30 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
        {/* Glass highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 dark:via-white/30 to-transparent opacity-50" />
        
        {/* Icon container with gradient background */}
        <motion.div
          className="relative mb-6 inline-block"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F4A261] to-[#E76F51] rounded-2xl blur-lg opacity-30 dark:opacity-20" />
          <div className="relative p-4 bg-gradient-to-br from-[#F4A261]/20 to-[#E76F51]/20 dark:from-[#F4A261]/10 dark:to-[#E76F51]/10 rounded-2xl border border-white/30 dark:border-white/20">
            <Icon size={32} className="text-[#E76F51] dark:text-[#F4A261]" />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-[#205781] dark:text-[#F4A261] mb-4">
          {title}
        </h3>

        {/* Description */}
        <motion.p
          className="text-[#264653]/70 dark:text-[#F2E9D8]/70"
          animate={{
            opacity: isHovered ? 1 : 0.7
          }}
        >
          {description}
        </motion.p>

        {/* Floating description on hover */}
        <motion.div
          className="absolute -bottom-4 left-0 right-0 mx-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : -10
          }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: 'none' }}
        >
          <div className="bg-[#205781] dark:bg-[#F4A261] text-white dark:text-[#1a1f2e] px-4 py-2 rounded-xl text-center shadow-xl" style={{ fontSize: '0.875rem' }}>
            Научи повече →
          </div>
        </motion.div>

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#E76F51]"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.5, 1, 0.5] : 0.3
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0
          }}
        />
      </div>
    </motion.div>
  );
}
