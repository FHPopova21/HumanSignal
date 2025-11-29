import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = '', width = 48, height = 48 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left figure - Coral */}
      <path
        d="M70 80 C70 65, 60 55, 50 55 C40 55, 30 65, 30 80 L30 95 C30 100, 32 105, 35 108 L50 123 L65 108 C68 105, 70 100, 70 95 Z"
        fill="#E76F51"
      />
      <circle cx="50" cy="45" r="12" fill="#E76F51" />
      
      {/* Right figure - Apricot */}
      <path
        d="M170 80 C170 65, 160 55, 150 55 C140 55, 130 65, 130 80 L130 95 C130 100, 132 105, 135 108 L150 123 L165 108 C168 105, 170 100, 170 95 Z"
        fill="#F4A261"
      />
      <circle cx="150" cy="45" r="12" fill="#F4A261" />
      
      {/* Connection - gradient path */}
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#E76F51', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#F4A261', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Connecting arc */}
      <path
        d="M65 100 Q100 85, 135 100"
        stroke="url(#connectionGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Heart in the middle */}
      <path
        d="M100 90 L95 95 L100 100 L105 95 Z"
        fill="#264653"
        opacity="0.6"
      />
    </svg>
  );
}
