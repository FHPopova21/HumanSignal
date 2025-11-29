import React from 'react';
import { motion } from 'motion/react';
import { Github, Mail, Heart } from 'lucide-react';
import { Logo } from '../Logo';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-[#205781]/10 bg-white/30 dark:bg-[#242938]/30 backdrop-blur-xl overflow-hidden">
      {/* Animated wave icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${i * 15}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M5 20C5 20 10 10 20 10C30 10 35 20 35 20C35 20 30 30 20 30C10 30 5 20 5 20Z"
                stroke="#205781"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <motion.div
              className="mb-4 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Logo width={64} height={64} />
              <span className="font-semibold text-[#264653] dark:text-[#F2E9D8]" style={{ fontSize: '1.5rem' }}>
                HumanSignal
              </span>
            </motion.div>
            <p style={{ fontSize: '0.875rem' }} className="text-[#264653]/70 max-w-xs">
              AI платформа за социални грижи, която подкрепя социалните работници с ранно откриване на рискове.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#264653] mb-4">Навигация</h4>
            <ul className="space-y-2">
              {['За нас', 'Функции', 'Документация', 'Поддръжка'].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href="#"
                    style={{ fontSize: '0.875rem' }}
                    className="text-[#264653]/70 hover:text-[#205781] transition-colors inline-block"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-[#264653] mb-4">Контакт</h4>
            <div className="space-y-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#264653]/70 hover:text-[#205781] transition-colors group"
                style={{ fontSize: '0.875rem' }}
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-white/30 group-hover:bg-white/50 transition-colors">
                  <Github size={18} />
                </div>
                GitHub
              </motion.a>
              <motion.a
                href="mailto:info@insightcare.ai"
                className="flex items-center gap-3 text-[#264653]/70 hover:text-[#205781] transition-colors group"
                style={{ fontSize: '0.875rem' }}
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-white/30 group-hover:bg-white/50 transition-colors">
                  <Mail size={18} />
                </div>
                info@insightcare.ai
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#205781]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div style={{ fontSize: '0.875rem' }} className="text-[#264653]/60">
            © 2025 HumanSignal • Hackathon Project
          </div>
          <div className="flex gap-6">
            {['Поверителност', 'Условия', 'Cookies'].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                style={{ fontSize: '0.875rem' }}
                className="text-[#264653]/60 hover:text-[#205781] transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Decorative gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#205781] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </footer>
  );
}
