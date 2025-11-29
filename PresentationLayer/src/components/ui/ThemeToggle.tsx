import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';

interface ThemeToggleProps {
  toggleTheme?: () => void;
  isDarkMode?: boolean;
}

export function ThemeToggle({ toggleTheme, isDarkMode }: ThemeToggleProps) {
  // If props are not provided, we might need internal state or just a placeholder
  // For now, let's assume they are provided or we toggle class manually as fallback
  const handleToggle = () => {
    if (toggleTheme) {
      toggleTheme();
    } else {
      document.documentElement.classList.toggle('dark');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="rounded-full text-[var(--color-dark-teal)] hover:bg-[var(--color-soft-sand)] dark:hover:bg-white/10 dark:text-[#F2E9D8]"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
