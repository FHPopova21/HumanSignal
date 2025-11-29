import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, LayoutGrid, Activity, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onNavigate: (screen: string) => void;
  activeScreen: string;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export function Navbar({ onNavigate, activeScreen, toggleTheme, isDarkMode }: NavbarProps) {
  return (
    <nav className="w-full h-16 sticky top-0 z-50 px-6 flex items-center justify-between bg-white/60 dark:bg-[#0F1720]/60 backdrop-blur-md border-b border-[rgba(15,23,32,0.06)] dark:border-white/10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('dashboard')}>
          <div className="w-8 h-8 bg-[var(--color-deep-blue)] rounded-lg flex items-center justify-center text-white">
            <LayoutGrid size={18} />
          </div>
          <h1 className="text-xl font-semibold text-[var(--color-dark-teal)] tracking-tight hidden sm:block">
            AI Social Screening
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
           <Button 
             variant="ghost" 
             onClick={() => onNavigate('dashboard')}
             className={activeScreen === 'dashboard' ? "bg-white/50 dark:bg-white/10 text-[var(--color-deep-blue)]" : "text-[var(--color-muted-foreground)]"}
           >
             Табло
           </Button>
           <Button 
             variant="ghost" 
             onClick={() => onNavigate('action-center')}
             className={activeScreen === 'action-center' ? "bg-white/50 dark:bg-white/10 text-[var(--color-deep-blue)]" : "text-[var(--color-muted-foreground)]"}
           >
             <Activity className="mr-2 h-4 w-4" />
             Action Center
           </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full text-[var(--color-dark-teal)] hover:bg-[var(--color-soft-sand)] dark:hover:bg-white/10"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>

        {activeScreen !== 'new-assessment' && (
          <Button 
            onClick={() => onNavigate('new-assessment')}
            className="bg-[var(--color-deep-blue)] hover:bg-[var(--color-deep-blue-hover)] text-white rounded-[10px] shadow-[0_6px_18px_rgba(32,87,129,0.12)]"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Assessment
          </Button>
        )}
        
        <div className="h-8 w-px bg-[var(--color-border)] mx-2 hidden sm:block"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-[var(--color-dark-teal)]">Maria Ivanova</p>
            <p className="text-xs text-[var(--color-muted)]">Social Worker</p>
          </div>
          <Avatar className="h-10 w-10 border-2 border-white dark:border-white/10 shadow-sm cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>MI</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
