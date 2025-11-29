import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard } from '@/components/ui/GlassCard';
import { LayoutGrid, Plus, Activity } from 'lucide-react';

export function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-6 space-y-12 animate-in fade-in duration-700">
      
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-5xl font-bold text-[var(--color-dark-teal)] tracking-tight">
          Здравейте, Мария
        </h1>
        <p className="text-xl text-[var(--color-muted-foreground)]">
          Добре дошли в системата за социален скрининг. Какво искате да направите днес?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        
        <GlassCard 
          className="group cursor-pointer hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 border-t-4 border-t-[var(--color-deep-blue)] flex flex-col items-center text-center gap-6 p-10 hover:-translate-y-1"
          onClick={() => navigate('/dashboard')}
        >
          <div className="w-20 h-20 rounded-3xl bg-[var(--color-deep-blue)]/10 flex items-center justify-center text-[var(--color-deep-blue)] group-hover:scale-110 transition-transform duration-300">
            <LayoutGrid size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-dark-teal)]">Табло</h3>
            <p className="text-base text-[var(--color-muted-foreground)] mt-3 leading-relaxed">
              Преглед на всички случаи, статистика и филтри.
            </p>
          </div>
        </GlassCard>

        <GlassCard 
          className="group cursor-pointer hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 border-t-4 border-t-[var(--color-apricot)] flex flex-col items-center text-center gap-6 p-10 hover:-translate-y-1"
          onClick={() => navigate('/action-center')}
        >
          <div className="w-20 h-20 rounded-3xl bg-[var(--color-apricot)]/10 flex items-center justify-center text-[var(--color-apricot)] group-hover:scale-110 transition-transform duration-300">
             <Activity size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-dark-teal)]">Action Center</h3>
            <p className="text-base text-[var(--color-muted-foreground)] mt-3 leading-relaxed">
              Приоритетни задачи за деня и спешни действия.
            </p>
          </div>
        </GlassCard>

        <GlassCard 
          className="group cursor-pointer hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 border-t-4 border-t-[var(--color-warm-coral)] flex flex-col items-center text-center gap-6 p-10 hover:-translate-y-1"
          onClick={() => navigate('/assessment/new')}
        >
          <div className="w-20 h-20 rounded-3xl bg-[var(--color-warm-coral)]/10 flex items-center justify-center text-[var(--color-warm-coral)] group-hover:scale-110 transition-transform duration-300">
            <Plus size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-dark-teal)]">Нова оценка</h3>
            <p className="text-base text-[var(--color-muted-foreground)] mt-3 leading-relaxed">
              Започни скрининг на нов пациент за риск.
            </p>
          </div>
        </GlassCard>

      </div>
    </div>
  );
}
