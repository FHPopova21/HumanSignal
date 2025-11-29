import React, { useState } from 'react';
import { Case, RiskLevel, Intervention } from '../lib/mockData';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/button';
import { ArrowLeft, Plus, Calendar, Activity, CheckCircle2 } from 'lucide-react';
import { RiskBadge } from './RiskBadge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { cn } from '../lib/utils';

interface CaseDetailProps {
  caseData: Case;
  onBack: () => void;
}

export function CaseDetail({ caseData, onBack }: CaseDetailProps) {
  const [isAddInterventionOpen, setIsAddInterventionOpen] = useState(false);
  const [interventions, setInterventions] = useState<Intervention[]>(caseData.interventions);

  const riskColor = 
    caseData.risk === 'Low' ? 'bg-[#2F9D7A]' :
    caseData.risk === 'Medium' ? 'bg-[#F4A261]' :
    'bg-[#E76F51]';

  const riskSummary = 
    caseData.risk === 'Low' ? 'Нисък риск — Препоръчителна профилактика на 3 месеца.' :
    caseData.risk === 'Medium' ? 'Среден риск — Изисква повишено внимание и регулярна комуникация.' :
    'Висок риск — Препоръчително посещение до 7 дни и медицинска консултация.';

  const handleSaveIntervention = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, gather data from form
    const newIntervention: Intervention = {
      id: Math.random().toString(),
      date: new Date().toISOString().split('T')[0],
      type: "Посещение", // Mock
      note: "Нова интервенция добавена."
    };
    setInterventions([newIntervention, ...interventions]);
    setIsAddInterventionOpen(false);
  };

  return (
    <div className="max-w-[1440px] mx-auto p-6 animate-in slide-in-from-right-8 duration-500 space-y-8 pb-20">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-[var(--color-muted-foreground)] pl-0 hover:bg-transparent hover:text-[var(--color-deep-blue)]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад към моите случаи
        </Button>
        <div className="text-right">
          <span className="text-sm text-[var(--color-muted-foreground)]">ID: {caseData.id}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column: Patient Info & Risk */}
        <div className="w-full md:w-1/3 space-y-6">
          <GlassCard className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-[var(--color-dark-teal)]">{caseData.name}</h1>
              <p className="text-lg text-[var(--color-muted-foreground)]">{caseData.age} години • {caseData.gender === 'Male' ? 'Мъж' : 'Жена'}</p>
            </div>
            
            <div className="pt-4 border-t border-[var(--color-border)]">
               <div className="flex justify-between text-sm mb-2">
                 <span className="text-[var(--color-muted-foreground)]">Мобилност:</span>
                 <span className="font-medium text-[var(--color-dark-teal)] text-right">{caseData.mobility}</span>
               </div>
               <div className="flex justify-between text-sm mb-2">
                 <span className="text-[var(--color-muted-foreground)]">Хронични заболявания:</span>
                 <span className="font-medium text-[var(--color-dark-teal)]">{caseData.chronicConditions}</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-[var(--color-muted-foreground)]">CASP Score:</span>
                 <span className="font-medium text-[var(--color-dark-teal)]">{caseData.caspScore}</span>
               </div>
            </div>
          </GlassCard>

          <GlassCard className={cn("border-l-8", 
            caseData.risk === 'High' ? "border-l-[var(--color-warm-coral)]" :
            caseData.risk === 'Medium' ? "border-l-[var(--color-apricot)]" :
            "border-l-[#2F9D7A]"
          )}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[var(--color-dark-teal)]">Рисков профил</h3>
              <RiskBadge level={caseData.risk} size="lg" />
            </div>
            
            {/* 3-segment progress bar */}
            <div className="flex gap-1 h-3 mb-4">
              <div className={cn("flex-1 rounded-l-full bg-[#2F9D7A]/20", caseData.risk === 'Low' && "bg-[#2F9D7A]")}></div>
              <div className={cn("flex-1 bg-[#F4A261]/20", caseData.risk === 'Medium' && "bg-[#F4A261]")}></div>
              <div className={cn("flex-1 rounded-r-full bg-[#E76F51]/20", caseData.risk === 'High' && "bg-[#E76F51]")}></div>
            </div>

            <p className="text-sm font-medium leading-relaxed text-[var(--color-dark-teal)]">
              {riskSummary}
            </p>
          </GlassCard>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">Ключови фактори</h4>
            {caseData.keyFactors.map((factor, idx) => (
              <GlassCard key={idx} className="py-3 px-4 flex items-start gap-3">
                <Activity className="h-5 w-5 text-[var(--color-deep-blue)] mt-0.5 shrink-0" />
                <span className="text-sm text-[var(--color-dark-teal)]">{factor}</span>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right Column: Actions & History */}
        <div className="w-full md:w-2/3 space-y-8">
          
          {/* Recommendations */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-dark-teal)] mb-4">Препоръчани действия</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseData.recommendations.map((rec, idx) => (
                <div key={idx} className="bg-white/40 border border-[var(--color-border)] rounded-xl p-4 flex items-start gap-3 hover:bg-white/60 transition-colors cursor-pointer group">
                   <div className="h-6 w-6 rounded-full bg-[var(--color-apricot)]/20 text-[var(--color-apricot)] flex items-center justify-center group-hover:bg-[var(--color-apricot)] group-hover:text-white transition-colors">
                     <CheckCircle2 size={14} />
                   </div>
                   <span className="text-[var(--color-dark-teal)] font-medium">{rec}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Interventions History */}
          <section>
             <div className="flex items-center justify-between mb-4">
               <h2 className="text-xl font-semibold text-[var(--color-dark-teal)]">История на интервенциите</h2>
               
               <Dialog open={isAddInterventionOpen} onOpenChange={setIsAddInterventionOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-[var(--color-deep-blue)] hover:bg-[var(--color-deep-blue-hover)] text-white rounded-lg shadow-md">
                      <Plus className="mr-2 h-4 w-4" />
                      Добави интервенция
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white/90 backdrop-blur-xl border-[var(--color-border)] sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Добавяне на интервенция</DialogTitle>
                      <DialogDescription>
                        Въведете детайли за извършената или планирана дейност.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleSaveIntervention} className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Дата</Label>
                          <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div className="space-y-2">
                          <Label>Тип</Label>
                          <Select defaultValue="visit">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="visit">Посещение</SelectItem>
                              <SelectItem value="call">Обаждане</SelectItem>
                              <SelectItem value="program">Групова програма</SelectItem>
                              <SelectItem value="referral">Насочване (Referral)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Бележка</Label>
                        <Textarea placeholder="Опишете резултата от интервенцията..." className="resize-none h-24" />
                      </div>
                      <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setIsAddInterventionOpen(false)}>Отказ</Button>
                        <Button type="submit" className="bg-[var(--color-deep-blue)] text-white">Запази</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
               </Dialog>
             </div>

             <GlassCard className="p-0 overflow-hidden">
               {interventions.length > 0 ? (
                 <table className="w-full text-sm text-left">
                   <thead className="bg-[var(--color-soft-sand)]/50 text-[var(--color-muted-foreground)] uppercase text-xs font-semibold">
                     <tr>
                       <th className="px-6 py-4">Дата</th>
                       <th className="px-6 py-4">Тип</th>
                       <th className="px-6 py-4">Бележка</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-[var(--color-border)]">
                     {interventions.map((int) => (
                       <tr key={int.id} className="hover:bg-white/40 transition-colors">
                         <td className="px-6 py-4 font-medium whitespace-nowrap text-[var(--color-dark-teal)]">
                           <div className="flex items-center gap-2">
                             <Calendar size={14} className="text-[var(--color-muted-foreground)]" />
                             {int.date}
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <span className="inline-block px-2 py-1 rounded bg-[var(--color-deep-blue)]/5 text-[var(--color-deep-blue)] font-medium text-xs">
                             {int.type}
                           </span>
                         </td>
                         <td className="px-6 py-4 text-[var(--color-muted-foreground)] max-w-xs truncate">
                           {int.note}
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               ) : (
                 <div className="p-8 text-center text-[var(--color-muted-foreground)]">
                   Няма записани интервенции за този случай.
                 </div>
               )}
             </GlassCard>
          </section>

        </div>
      </div>
    </div>
  );
}
