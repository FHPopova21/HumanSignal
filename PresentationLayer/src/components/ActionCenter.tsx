import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/button';
import { RiskBadge } from './RiskBadge';
import { cases } from '../lib/mockData';
import { Calendar, Phone, CheckCircle, ArrowRight, AlertTriangle, Clock, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

interface ActionCenterProps {
  onNavigate: (screen: string) => void;
  onSelectCase: (caseId: string) => void;
}

export function ActionCenter({ onNavigate, onSelectCase }: ActionCenterProps) {
  
  const highRiskCases = cases.filter(c => c.risk === 'High');

  return (
    <div className="p-6 max-w-[1440px] mx-auto space-y-12 animate-in fade-in duration-500 pb-20">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[var(--color-dark-teal)]">Action Center</h1>
        <p className="text-[var(--color-muted-foreground)] text-lg">
          Вашият ежедневен фокус за по-добра грижа.
        </p>
      </div>

      {/* Section 1: Today's Tasks */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--color-deep-blue)]/10 flex items-center justify-center text-[var(--color-deep-blue)]">
              <CheckCircle size={18} />
            </div>
            <h2 className="text-2xl font-semibold text-[var(--color-dark-teal)]">Днес трябва да направя</h2>
          </div>
          
          <Button className="bg-[var(--color-deep-blue)] hover:bg-[var(--color-deep-blue-hover)] text-white rounded-full w-10 h-10 p-0 shadow-md flex items-center justify-center">
            <Plus size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Task Card 1 */}
            <GlassCard className="relative overflow-hidden flex flex-col gap-4 border-l-4 border-l-[var(--color-warm-coral)] min-h-[240px] group hover:shadow-lg transition-all duration-300">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-apricot)]/10 rounded-full blur-2xl group-hover:bg-[var(--color-apricot)]/20 transition-all"></div>
                
                <div className="flex justify-between items-start relative z-10">
                    <span className="text-sm font-bold text-[var(--color-warm-coral)] tracking-wider uppercase">High Risk</span>
                    <span className="text-xs font-medium bg-white/50 dark:bg-white/10 px-2 py-1 rounded-full text-[var(--color-muted-foreground)]">CASE-1024</span>
                </div>
                
                <div className="space-y-1 relative z-10">
                    <h3 className="text-2xl font-bold text-[var(--color-dark-teal)]">Иван Петров</h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                         <AlertTriangle size={14} className="text-[var(--color-warm-coral)]" />
                         <span>No intervention for 7+ days</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--color-border)]/60 relative z-10">
                    <p className="text-sm font-medium text-[var(--color-deep-blue)] mb-3 flex items-center gap-2">
                        <Calendar size={16} />
                        Препоръка: <span className="font-bold">Планирай посещение</span>
                    </p>
                    <Button 
                        onClick={() => onSelectCase('CASE-1024')}
                        className="w-full bg-[var(--color-deep-blue)] hover:bg-[var(--color-deep-blue-hover)] text-white shadow-md"
                    >
                        Виж случая
                    </Button>
                </div>
            </GlassCard>

            {/* Task Card 2 */}
            <GlassCard className="relative overflow-hidden flex flex-col gap-4 border-l-4 border-l-[var(--color-warm-coral)] min-h-[240px] group hover:shadow-lg transition-all duration-300">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-apricot)]/10 rounded-full blur-2xl group-hover:bg-[var(--color-apricot)]/20 transition-all"></div>
                
                <div className="flex justify-between items-start relative z-10">
                    <span className="text-sm font-bold text-[var(--color-warm-coral)] tracking-wider uppercase">High Risk</span>
                    <span className="text-xs font-medium bg-white/50 dark:bg-white/10 px-2 py-1 rounded-full text-[var(--color-muted-foreground)]">CASE-1027</span>
                </div>
                
                <div className="space-y-1 relative z-10">
                    <h3 className="text-2xl font-bold text-[var(--color-dark-teal)]">Елена Василева</h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                         <Clock size={14} className="text-[var(--color-warm-coral)]" />
                         <span>Last contact 10 days ago</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--color-border)]/60 relative z-10">
                    <p className="text-sm font-medium text-[var(--color-deep-blue)] mb-3 flex items-center gap-2">
                        <Phone size={16} />
                        Препоръка: <span className="font-bold">Направи обаждане</span>
                    </p>
                    <Button 
                        onClick={() => onSelectCase('CASE-1027')}
                        className="w-full bg-white/60 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[var(--color-deep-blue)] border border-[var(--color-deep-blue)]/10 backdrop-blur-sm"
                    >
                        Виж случая
                    </Button>
                </div>
            </GlassCard>

            {/* Task Card 3 */}
            <GlassCard className="relative overflow-hidden flex flex-col gap-4 border-l-4 border-l-[var(--color-apricot)] min-h-[240px] group hover:shadow-lg transition-all duration-300">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-deep-blue)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-deep-blue)]/10 transition-all"></div>
                
                <div className="flex justify-between items-start relative z-10">
                    <span className="text-sm font-bold text-[var(--color-apricot)] tracking-wider uppercase">Today</span>
                    <span className="text-xs font-medium bg-white/50 dark:bg-white/10 px-2 py-1 rounded-full text-[var(--color-muted-foreground)]">CASE-1026</span>
                </div>
                
                <div className="space-y-1 relative z-10">
                    <h3 className="text-2xl font-bold text-[var(--color-dark-teal)]">Стефан Димитров</h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                         <Calendar size={14} className="text-[var(--color-deep-blue)]" />
                         <span>Scheduled visit for today</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--color-border)]/60 relative z-10">
                    <p className="text-sm font-medium text-[var(--color-dark-teal)] mb-3 flex items-center gap-2">
                        <CheckCircle size={16} className="text-[var(--color-dark-teal)]/60" />
                        Status: <span className="font-bold">Pending</span>
                    </p>
                    <Button 
                        className="w-full bg-[var(--color-apricot)] hover:bg-[var(--color-apricot)]/90 text-white shadow-md border-none"
                    >
                        Маркирай като изпълнено
                    </Button>
                </div>
            </GlassCard>

        </div>
      </section>

      {/* Section 2: Risk Alerts */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-warm-coral)]/10 flex items-center justify-center text-[var(--color-warm-coral)]">
            <AlertTriangle size={18} />
          </div>
          <h2 className="text-2xl font-semibold text-[var(--color-dark-teal)]">Рискови клиенти</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {highRiskCases.length > 0 ? (
            highRiskCases.map((c) => (
              <GlassCard key={c.id} className="flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-white/60 dark:hover:bg-white/10 transition-colors">
                
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[var(--color-dark-teal)] truncate">{c.name}</h3>
                        <RiskBadge level={c.risk} size="sm" />
                        <span className="text-xs text-[var(--color-muted-foreground)] bg-[var(--color-soft-sand)] dark:bg-white/5 px-2 py-0.5 rounded-md">{c.id}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-muted-foreground)]">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            Last Assessment: {c.lastAssessmentDate}
                        </div>
                        <div className="flex items-center gap-1.5 text-[var(--color-warm-coral)] font-medium">
                            <AlertTriangle size={14} />
                            {c.keyFactors[0] || "High Risk Factor"}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-[var(--color-border)]/50">
                     <Button 
                        variant="ghost" 
                        onClick={() => onSelectCase(c.id)}
                        className="text-[var(--color-deep-blue)] hover:bg-[var(--color-deep-blue)]/5 group-hover:translate-x-1 transition-all"
                     >
                        Виж детайли <ArrowRight className="ml-2 h-4 w-4" />
                     </Button>
                </div>

              </GlassCard>
            ))
          ) : (
             <div className="p-8 text-center text-[var(--color-muted-foreground)] bg-white/30 rounded-xl border border-[var(--color-border)]">
                Няма клиенти с висок риск в момента.
             </div>
          )}
        </div>
      </section>

    </div>
  );
}
