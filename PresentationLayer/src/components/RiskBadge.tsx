import React from 'react';
import { cn } from '../lib/utils';

export type RiskLevel = 'Low' | 'Medium' | 'High';

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function RiskBadge({ level, className, size = 'md' }: RiskBadgeProps) {
  const styles = {
    Low: "bg-[rgba(47,157,122,0.12)] text-[#2F9D7A]",
    Medium: "bg-[rgba(244,162,97,0.12)] text-[#F4A261]",
    High: "bg-[rgba(231,111,81,0.12)] text-[#E76F51]" // Warm Coral
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm font-semibold",
    lg: "px-4 py-1.5 text-base font-semibold"
  };

  return (
    <span className={cn(
      "inline-flex items-center justify-center rounded-full",
      styles[level],
      sizeStyles[size],
      className
    )}>
      {level === 'High' && size === 'lg' && (
        <span className="mr-2 h-2 w-2 rounded-full bg-[#E76F51] animate-pulse" />
      )}
      {level === 'Low' ? 'Low Risk' : level === 'Medium' ? 'Medium Risk' : 'High Risk'}
    </span>
  );
}
