import React, { useState } from 'react';
import { GlassCard } from './ui/GlassCard';
import { Case, RiskLevel } from '../lib/mockData';
import { RiskBadge } from './RiskBadge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';

import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';

import { Users, AlertTriangle, Clock, Search, ArrowUpDown, Calendar, Phone, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface DashboardProps {
  onSelectCase: (caseId: string) => void;
  cases: Case[];
}

export function Dashboard({ onSelectCase, cases }: DashboardProps) {
  const [filterRisk, setFilterRisk] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Filter and Sort
  const filteredCases = cases
    .filter(c => {
      const matchesRisk = filterRisk === 'All' || c.risk === filterRisk;
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            c.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRisk && matchesSearch;
    })
    .sort((a, b) => {
      const riskScore = { High: 3, Medium: 2, Low: 1 };
      if (sortOrder === 'desc') {
        return riskScore[b.risk] - riskScore[a.risk];
      } else {
        return riskScore[a.risk] - riskScore[b.risk];
      }
    });

  // Stats
  const totalCases = cases.length;
  const highRiskCount = cases.filter(c => c.risk === 'High').length;
  const pendingInterventionCount = cases.filter(c => !c.lastIntervention && c.risk !== 'Low').length;

  return (
    <div className="p-6 max-w-[1440px] mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="flex items-center gap-4 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-[var(--color-deep-blue)]/10 flex items-center justify-center text-[var(--color-deep-blue)]">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-[var(--color-muted-foreground)]">Общо случаи</p>
            <p className="text-3xl font-bold text-[var(--color-dark-teal)]">{totalCases}</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <Users size={100} />
          </div>
        </GlassCard>

        <GlassCard className="flex items-center gap-4 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-[var(--color-warm-coral)]/10 flex items-center justify-center text-[var(--color-warm-coral)]">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-sm text-[var(--color-muted-foreground)]">Висок риск</p>
            <p className="text-3xl font-bold text-[var(--color-warm-coral)]">{highRiskCount}</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <AlertTriangle size={100} />
          </div>
        </GlassCard>

        <GlassCard className="flex items-center gap-4 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-[var(--color-apricot)]/10 flex items-center justify-center text-[var(--color-apricot)]">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm text-[var(--color-muted-foreground)]">Чакащи интервенция</p>
            <p className="text-3xl font-bold text-[var(--color-dark-teal)]">{pendingInterventionCount}</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <Clock size={100} />
          </div>
        </GlassCard>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-[var(--color-dark-teal)]">Моите случаи</h2>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Търсене по име или ID..." 
                className="pl-9 bg-white/50 dark:bg-white/10 border-[var(--color-border)] focus-visible:ring-[var(--color-deep-blue)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              {['All', 'High', 'Medium', 'Low'].map((level) => (
                <button
                  key={level}
                  onClick={() => setFilterRisk(level)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                    filterRisk === level 
                      ? "bg-[var(--color-deep-blue)] text-white shadow-md" 
                      : "bg-white/50 dark:bg-white/10 text-[var(--color-muted-foreground)] hover:bg-white dark:hover:bg-white/20 border border-transparent"
                  )}
                >
                  {level === 'All' ? 'Всички' : level}
                </button>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
              className="bg-white/50 dark:bg-white/10"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <GlassCard className="p-0 overflow-hidden">
          <Table>
            <TableHeader className="bg-[var(--color-soft-sand)]/30">
              <TableRow className="hover:bg-transparent border-b border-[var(--color-border)]">
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Име</TableHead>
                <TableHead>Възраст</TableHead>
                <TableHead>Риск</TableHead>
                <TableHead>Последна оценка</TableHead>
                <TableHead>Последна интервенция</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCases.map((item) => (
                <TableRow 
                  key={item.id} 
                  className={cn(
                    "cursor-pointer transition-colors hover:bg-[var(--color-deep-blue)]/5 h-[64px]",
                    item.risk === 'High' && "border-l-4 border-l-[var(--color-warm-coral)] bg-[var(--color-warm-coral)]/[0.02]"
                  )}
                  onClick={() => onSelectCase(item.id)}
                >
                  <TableCell className="font-medium text-[var(--color-muted-foreground)]">{item.id}</TableCell>
                  <TableCell className="font-semibold text-[var(--color-dark-teal)]">{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>
                    <RiskBadge level={item.risk} />
                  </TableCell>
                  <TableCell>{item.lastAssessmentDate}</TableCell>
                  <TableCell className="text-[var(--color-muted-foreground)] italic">
                    {item.lastIntervention || "—"}
                  </TableCell>
                  <TableCell className="text-right">
                     <Button variant="ghost" size="sm" className="text-[var(--color-deep-blue)]">
                       Виж детайли
                     </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlassCard>
      </div>
    </div>
  );
}
