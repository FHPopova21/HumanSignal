import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Brain, Users, BarChart3, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaveBackground from '../components/home/WaveBackground';
import RiskSlider from '../components/home/RiskSlider';
import FeatureCard from '../components/home/FeatureCard';
import AIModelModal from '../components/home/AIModelModal';
import Footer from '../components/home/Footer';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ui/ThemeToggle';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects for different sections
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const featuresY = useTransform(scrollY, [300, 800], [100, -50]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Wave Background */}
      <WaveBackground />

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Logo width={48} height={48} />
            <span className="font-semibold text-[#264653] dark:text-[#F2E9D8]" style={{ fontSize: '1.25rem' }}>
              HumanSignal
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ThemeToggle />
            <Link
              to="/login"
              className="px-6 py-2 text-[#205781] dark:text-[#F4A261] hover:text-[#E76F51] transition-colors"
            >
              Вход
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 text-[#205781] dark:text-[#F2E9D8] hover:bg-white/60 dark:hover:bg-white/20 transition-all shadow-lg"
            >
              Регистрация
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="relative z-10 pt-20 pb-32 px-6"
        style={{ y: heroY }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles size={16} className="text-[#E76F51]" />
                <span style={{ fontSize: '0.875rem' }} className="text-[#264653] dark:text-[#F2E9D8]">
                  Hackathon 2025 • Powered by AI
                </span>
              </motion.div>

              <h1
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
                className="text-[#264653] dark:text-[#F2E9D8] mb-6"
              >
                AI за социални работници – <span className="text-[#E76F51] dark:text-[#F4A261]">открий риска</span>, спаси човека.
              </h1>

              <p
                style={{ fontSize: '1.25rem' }}
                className="text-[#264653]/80 dark:text-[#F2E9D8]/80 mb-8 max-w-lg"
              >
                Започни първата оценка за 1 минута и помогни на тези, които се нуждаят най-много.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/login"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#205781] to-[#264653] dark:from-[#F4A261] dark:to-[#E76F51] text-white dark:text-[#1a1f2e] hover:shadow-2xl transition-all shadow-xl shadow-[#205781]/30 dark:shadow-[#F4A261]/30 flex items-center gap-2"
                >
                  <span>Влез в приложението</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 text-[#205781] dark:text-[#F4A261] hover:bg-white/60 dark:hover:bg-white/20 transition-all shadow-lg"
                >
                  Научи повече за AI модела
                </button>
              </div>

              {/* Quick stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { value: '89%', label: 'Точност' },
                  { value: '<1мин', label: 'Оценка' },
                  { value: '10k+', label: 'Случаи' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[#E76F51] mb-1" style={{ fontSize: '1.5rem' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.875rem' }} className="text-[#264653]/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Interactive Risk Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <RiskSlider />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="relative z-10 py-24 px-6"
        style={{ y: featuresY }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              className="text-[#264653] mb-4"
            >
              Защо InsightCare?
            </h2>
            <p
              style={{ fontSize: '1.125rem' }}
              className="text-[#264653]/70 max-w-2xl mx-auto"
            >
              Инструменти, създадени с емпатия за социалните работници
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Brain}
              title="Бързо скриниране"
              description="AI анализ идентифицира рискове за секунди, като освобождава време за човешко взаимодействие."
              index={0}
            />
            <FeatureCard
              icon={BarChart3}
              title="Приоритет на нуждаещите се"
              description="Автоматично класифициране по спешност помага да достигнете до най-уязвимите първи."
              index={1}
            />
            <FeatureCard
              icon={Clock}
              title="История и интервенции"
              description="Пълна времева линия на случаите с документирани действия и резултати."
              index={2}
            />
            <FeatureCard
              icon={Users}
              title="Колаборативна работа"
              description="Споделяйте insights и координирайте с екипа в реално време."
              index={3}
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#F4A261]/30 to-[#E76F51]/30 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <h2
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              className="text-[#264653] mb-6"
            >
              Готови да направите разлика?
            </h2>
            <p
              style={{ fontSize: '1.125rem' }}
              className="text-[#264653]/70 mb-8 max-w-2xl mx-auto"
            >
              Присъединете се към социалните работници, които вече използват InsightCare за по-умни и бързи решения.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/login"
                className="group px-10 py-5 rounded-full bg-gradient-to-r from-[#E76F51] to-[#F4A261] text-white hover:shadow-2xl transition-all shadow-xl shadow-[#E76F51]/30 flex items-center gap-3 text-lg"
              >
                <span>Влез в приложението</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-[#205781] hover:bg-white/60 transition-all shadow-lg"
              >
                Научи повече за AI модела
              </button>
            </div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                'GDPR Съвместимост',
                'Анонимизирани данни',
                'Одитиран AI модел'
              ].map((badge, i) => (
                <div
                  key={i}
                  style={{ fontSize: '0.875rem' }}
                  className="flex items-center gap-2 text-[#264653]/60"
                >
                  <div className="w-2 h-2 rounded-full bg-[#E76F51]" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* AI Model Modal */}
      <AIModelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
