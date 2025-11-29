import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Brain, ArrowRight, Database, Zap } from 'lucide-react';

interface AIModelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIModelModal({ isOpen, onClose }: AIModelModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-[#264653]/60 dark:bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/40 dark:bg-[#242938]/40 backdrop-blur-2xl border border-white/50 dark:border-white/20 rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/30 dark:bg-white/10 hover:bg-white/50 dark:hover:bg-white/20 transition-colors"
              >
                <X size={24} className="text-[#264653] dark:text-[#F2E9D8]" />
              </button>

              {/* Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[#F4A261]/20 to-[#E76F51]/20 dark:from-[#F4A261]/10 dark:to-[#E76F51]/10">
                  <Brain size={32} className="text-[#E76F51] dark:text-[#F4A261]" />
                </div>
                <h2 className="text-[#264653] dark:text-[#F2E9D8]">
                  Как работи AI моделът?
                </h2>
              </div>

              {/* Flow visualization */}
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: Database,
                    title: "Входни данни",
                    description: "Социални, здравни и демографски показатели",
                    color: "#205781"
                  },
                  {
                    icon: Brain,
                    title: "AI обработка",
                    description: "Машинно обучение идентифицира рискови модели",
                    color: "#F4A261"
                  },
                  {
                    icon: Zap,
                    title: "Рискова оценка",
                    description: "Приоритизирани препоръки за действие",
                    color: "#E76F51"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div 
                      className="p-3 rounded-xl shrink-0"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <step.icon size={24} style={{ color: step.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#264653] dark:text-[#F2E9D8] mb-1">
                        {step.title}
                      </div>
                      <p style={{ fontSize: '0.875rem' }} className="text-[#264653]/70 dark:text-[#F2E9D8]/70">
                        {step.description}
                      </p>
                    </div>
                    {index < 2 && (
                      <div className="flex items-center">
                        <ArrowRight size={20} className="text-[#264653]/30 dark:text-[#F2E9D8]/30" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Visual representation */}
              <div className="bg-gradient-to-r from-[#205781]/10 via-[#F4A261]/10 to-[#E76F51]/10 dark:from-[#205781]/5 dark:via-[#F4A261]/5 dark:to-[#E76F51]/5 rounded-2xl p-6 border border-white/30 dark:border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div style={{ fontSize: '0.875rem' }} className="text-[#264653]/70 dark:text-[#F2E9D8]/70">
                    Точност на модела
                  </div>
                  <div className="text-[#205781] dark:text-[#F4A261]">
                    89.3%
                  </div>
                </div>
                <div className="h-3 bg-white/40 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#205781] via-[#F4A261] to-[#E76F51] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "89.3%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                <p style={{ fontSize: '0.75rem' }} className="text-[#264653]/60 dark:text-[#F2E9D8]/60 mt-3">
                  Моделът е обучен върху анонимизирани данни от 10,000+ случая, валидирани от социални работници.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <p style={{ fontSize: '0.875rem' }} className="text-[#264653]/70 dark:text-[#F2E9D8]/70">
                  AI е инструмент за подпомагане. Окончателното решение винаги е в ръцете на социалния работник.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
