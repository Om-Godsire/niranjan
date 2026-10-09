import React from 'react';
import { motion } from 'framer-motion';
import { playPop } from '../utils/audio';

export default function Balloon({
  color = "#BAE6FD",
  accentColor = "#7DD3FC",
  size = 110, // px width
  label,
  number,
  onClick,
  isInteractive = true,
  className = "",
  delay = 0,
  duration = 4.5,
  isActive = false
}) {
  const handleClick = (e) => {
    if (onClick) {
      playPop(580);
      onClick(e);
    }
  };

  const balloonHeight = Math.round(size * 1.25);
  const stringHeight = Math.round(size * 0.9);

  return (
    <motion.div
      className={`relative inline-flex flex-col items-center select-none ${isInteractive ? 'cursor-pointer group' : ''} ${className}`}
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [-6, 6, -6],
        rotate: [-2, 2.5, -2],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      whileHover={
        isInteractive
          ? {
              scale: 1.08,
              y: -14,
              transition: { type: "spring", stiffness: 350, damping: 15 }
            }
          : {}
      }
      whileTap={isInteractive ? { scale: 0.94 } : {}}
      onClick={handleClick}
    >
      {/* Balloon Body SVG */}
      <div className="relative filter drop-shadow-md">
        <svg
          width={size}
          height={balloonHeight}
          viewBox="0 0 100 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Main Oval Balloon */}
          <path
            d="M 50 4 
               C 80 4, 98 32, 98 62 
               C 98 90, 68 114, 54 118 
               L 50 119 
               L 46 118 
               C 32 114, 2 90, 2 62 
               C 2 32, 20 4, 50 4 Z"
            fill={color}
            stroke="#1C1917"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Balloon knot at bottom */}
          <path
            d="M 44 118 L 56 118 L 58 124 L 42 124 Z"
            fill={accentColor || color}
            stroke="#1C1917"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Glossy light reflection highlight on top-left */}
          <path
            d="M 22 24 C 20 42, 28 62, 36 68"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.65"
          />
          <circle cx="28" cy="18" r="3.5" fill="#FFFFFF" opacity="0.75" />

          {/* Optional Category Number Badge inside */}
          {number && (
            <g transform="translate(50, 42)">
              <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" opacity="0.9" />
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontSize="14"
                fontWeight="800"
                fill="#1C1917"
                fontFamily="'Fredoka', sans-serif"
              >
                #{number}
              </text>
            </g>
          )}
        </svg>

        {/* Balloon Label inside or overlay */}
        {label && !number && (
          <div className="absolute inset-0 flex items-center justify-center p-3 text-center pointer-events-none">
            <span className="font-display font-bold text-xs sm:text-sm text-stone-900 tracking-tight leading-snug px-2 py-0.5 bg-white/70 backdrop-blur-xs rounded-full border border-stone-800/60 shadow-xs">
              {label}
            </span>
          </div>
        )}
      </div>

      {/* Balloon String (Curved animated string) */}
      <svg
        width="28"
        height={stringHeight}
        viewBox="0 0 28 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-1 text-stone-700 pointer-events-none"
      >
        <path
          d="M 14 0 Q 22 25, 8 45 T 14 80"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2 0"
        />
      </svg>

      {/* Label beneath balloon if label exists */}
      {label && (
        <motion.div
          className={`-mt-1 px-3 py-1 rounded-full text-center transition-all ${
            isActive
              ? 'bg-stone-900 text-white font-bold ring-2 ring-stone-900 shadow-md'
              : 'bg-white text-stone-800 font-semibold border-2 border-stone-900 shadow-[2px_2px_0px_#1C1917] group-hover:bg-amber-100'
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-display text-xs sm:text-sm whitespace-nowrap block">
            {label}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
