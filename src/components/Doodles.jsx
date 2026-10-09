import React from 'react';

export function StarDoodle({ className = "w-6 h-6 text-amber-400" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="#18181B" strokeWidth="1.5" className={className}>
      <path d="M12 2 L14.5 8.5 L21.5 9 L16 14 L17.5 21 L12 17.5 L6.5 21 L8 14 L2.5 9 L9.5 8.5 Z" />
    </svg>
  );
}

export function SparkleDoodle({ className = "w-6 h-6 text-yellow-400" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#18181B" strokeWidth="2" strokeLinecap="round" className={className}>
      <path d="M12 3 L12 21 M3 12 L21 12 M5.5 5.5 L18.5 18.5 M18.5 5.5 L5.5 18.5" />
    </svg>
  );
}

export function PartyHatDoodle({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Pom-pom */}
      <circle cx="20" cy="8" r="4" fill="#FED7AA" stroke="#18181B" strokeWidth="1.8" />
      {/* Cone */}
      <path d="M11 34 L20 12 L29 34 Z" fill="#FBCFE8" stroke="#18181B" strokeWidth="2" />
      {/* Stripes */}
      <path d="M14 27 L26 27" stroke="#18181B" strokeWidth="1.8" />
      <path d="M17 20 L23 20" stroke="#18181B" strokeWidth="1.8" />
    </svg>
  );
}

export function PushPin({ color = "#EF4444", className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="12" r="7" fill={color} stroke="#18181B" strokeWidth="2" />
      <circle cx="14" cy="10" r="2.5" fill="#FFFFFF" opacity="0.6" />
      <path d="M16 19 L16 28" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function WashiTape({ color = "#FEF08A", rotate = "-2deg", className = "" }) {
  return (
    <div
      style={{
        backgroundColor: color,
        transform: `rotate(${rotate})`,
      }}
      className={`h-5 w-24 border-l-2 border-r-2 border-dashed border-stone-800/20 shadow-xs opacity-90 pointer-events-none ${className}`}
    />
  );
}

export function HeartDoodle({ className = "w-6 h-6 text-rose-400" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="#18181B" strokeWidth="1.8" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
