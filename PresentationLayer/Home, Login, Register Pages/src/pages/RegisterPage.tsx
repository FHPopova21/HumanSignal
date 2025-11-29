import React from 'react';
import Layout from '../components/Layout';
import GlassCard from '../components/ui/GlassCard';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Briefcase, ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ui/ThemeToggle';

export default function RegisterPage() {
  return (
    <Layout showNav={false}>
      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
        {/* Theme Toggle - Positioned at top right */}
        <div className="absolute top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
        >
          <GlassCard className="w-full p-8 md:p-10 border-white/60 shadow-2xl">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex flex-col items-center gap-3 mb-4">
                <Logo width={80} height={80} />
                <span className="font-semibold text-[#264653] dark:text-[#F2E9D8]" style={{ fontSize: '1.5rem' }}>
                  HumanSignal
                </span>
              </Link>
              <h2 style={{ fontSize: '1.875rem' }} className="text-[#205781] dark:text-[#F4A261] mb-2">Create Your Account</h2>
              <p className="text-[#264653]/70 dark:text-[#F2E9D8]/70">Join the human-first social care platform.</p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-[#205781] dark:text-[#F4A261] ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#264653]/40 dark:text-[#F2E9D8]/40" size={18} />
                  <input 
                    type="text" 
                    className="w-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/20 rounded-xl py-3 pl-10 pr-4 text-[#264653] dark:text-[#F2E9D8] placeholder:text-[#264653]/30 dark:placeholder:text-[#F2E9D8]/30 focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:bg-white/60 dark:focus:bg-white/10 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#205781] dark:text-[#F4A261] ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#264653]/40 dark:text-[#F2E9D8]/40" size={18} />
                  <input 
                    type="email" 
                    className="w-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/20 rounded-xl py-3 pl-10 pr-4 text-[#264653] dark:text-[#F2E9D8] placeholder:text-[#264653]/30 dark:placeholder:text-[#F2E9D8]/30 focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:bg-white/60 dark:focus:bg-white/10 transition-all"
                    placeholder="name@organization.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[#205781] dark:text-[#F4A261] ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#264653]/40 dark:text-[#F2E9D8]/40" size={18} />
                    <input 
                      type="password" 
                      className="w-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/20 rounded-xl py-3 pl-10 pr-4 text-[#264653] dark:text-[#F2E9D8] placeholder:text-[#264653]/30 dark:placeholder:text-[#F2E9D8]/30 focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:bg-white/60 dark:focus:bg-white/10 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[#205781] dark:text-[#F4A261] ml-1">Confirm</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#264653]/40 dark:text-[#F2E9D8]/40" size={18} />
                    <input 
                      type="password" 
                      className="w-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/20 rounded-xl py-3 pl-10 pr-4 text-[#264653] dark:text-[#F2E9D8] placeholder:text-[#264653]/30 dark:placeholder:text-[#F2E9D8]/30 focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:bg-white/60 dark:focus:bg-white/10 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#205781] dark:text-[#F4A261] ml-1">Role</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-[#264653]/40 dark:text-[#F2E9D8]/40" size={18} />
                  <select 
                    defaultValue=""
                    className="w-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/20 rounded-xl py-3 pl-10 pr-4 text-[#264653] dark:text-[#F2E9D8] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:bg-white/60 dark:focus:bg-white/10 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="social_worker">Social Worker</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="admin">Administrator</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-t-[5px] border-t-[#264653]/50 dark:border-t-[#F2E9D8]/50 border-x-[4px] border-x-transparent"></div>
                </div>
              </div>

              <button type="submit" className="w-full mt-2 py-3 rounded-xl bg-[#205781] dark:bg-[#F4A261] text-white dark:text-[#1a1f2e] hover:bg-[#1a4666] dark:hover:bg-[#E76F51] transition-all shadow-lg shadow-[#205781]/20 dark:shadow-[#F4A261]/20 flex items-center justify-center gap-2 group">
                Register <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#264653]/70 dark:text-[#F2E9D8]/70">
                Already have an account?{' '}
                <Link to="/login" className="text-[#E76F51] dark:text-[#F4A261] hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </Layout>
  );
}
