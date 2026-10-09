import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { playPop } from '../utils/audio';
import { WashiTape, PushPin } from './Doodles';

/**
 * Cutout Photo Sticker for Niranjan
 * Supports continuous floating, drag, flinging with pointer velocity,
 * temporary exit from viewport, and spring return back to original position.
 */
export default function FloatingSticker({ sticker, index, isAbsolute = true }) {
  const [isDragging, setIsDragging] = useState(false);
  const [imgError, setImgError] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Bobbing animation values when idle
  const [bobOffset, setBobOffset] = useState({ y: 0, rotate: sticker.rotation || 0 });

  useEffect(() => {
    if (isDragging) return;

    let isMounted = true;
    const duration = sticker.floatDuration || 5.5;
    const dist = sticker.floatDistance || 12;
    const baseRot = sticker.rotation || 0;

    const interval = setInterval(() => {
      if (!isMounted || isDragging) return;
      setBobOffset((prev) => ({
        y: prev.y === 0 ? -dist : 0,
        rotate: prev.y === 0 ? baseRot + 2.5 : baseRot - 2.5,
      }));
    }, duration * 500);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [isDragging, sticker.floatDuration, sticker.floatDistance, sticker.rotation]);

  const handleDragStart = () => {
    setIsDragging(true);
    playPop(440);
  };

  const handleDragEnd = (_event, info) => {
    setIsDragging(false);
    playPop(620);

    // Calculate throw physics from release velocity
    const velocityFactor = 0.35;
    const targetX = x.get() + info.velocity.x * velocityFactor;
    const targetY = y.get() + info.velocity.y * velocityFactor;

    // First fling towards target (can fly offscreen), then spring back smoothly to 0 (origin)
    animate(x, [x.get(), targetX, 0], {
      times: [0, 0.45, 1],
      duration: 1.8,
      ease: ["easeOut", "backOut"],
    });

    animate(y, [y.get(), targetY, 0], {
      times: [0, 0.45, 1],
      duration: 1.8,
      ease: ["easeOut", "backOut"],
    });
  };

  const pos = sticker.initialPosition;

  return (
    <motion.div
      drag
      dragElastic={0.65}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        ...(isAbsolute ? { left: `${pos.x}%`, top: `${pos.y}%` } : {}),
        x,
        y,
        rotate: isDragging ? 0 : bobOffset.rotate,
      }}
      animate={
        !isDragging
          ? {
              y: bobOffset.y,
              transition: { duration: sticker.floatDuration || 5, ease: "easeInOut" }
            }
          : {}
      }
      whileHover={{
        scale: 1.08,
        cursor: "grab",
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
      whileTap={{ cursor: "grabbing", scale: 0.96 }}
      className={`${
        isAbsolute ? 'absolute' : 'relative shrink-0'
      } touch-none select-none transition-shadow ${
        isDragging ? 'z-50' : 'z-10'
      } group`}
    >
      {/* Attached Floating Balloon if configured */}
      {sticker.hasBalloon && (
        <div className="flex flex-col items-center -mb-2 pointer-events-none">
          <motion.div
            animate={{
              y: [-4, 4, -4],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="filter drop-shadow-sm"
          >
            <svg width="40" height="50" viewBox="0 0 100 120" fill="none">
              <path
                d="M 50 6 C 78 6, 96 30, 96 60 C 96 86, 68 108, 54 112 L 50 113 L 46 112 C 32 108, 4 86, 4 60 C 4 30, 22 6, 50 6 Z"
                fill={sticker.balloonColor || "#BAE6FD"}
                stroke="#1C1917"
                strokeWidth="3"
              />
              <path d="M 44 112 L 56 112 L 58 118 L 42 118 Z" fill="#1C1917" />
              <path d="M 24 24 C 22 38, 28 54, 34 60" stroke="#FFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            </svg>
          </motion.div>
          {/* Balloon string connected to top of sticker */}
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="-mt-1 text-stone-700">
            <path d="M 7 0 Q 12 10, 7 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* Main Sticker Card (Polaroid / Cutout style with white border) */}
      <div className="relative bg-[#FFFDF9] p-2 sm:p-2.5 rounded-2xl border-2.5 border-stone-900 shadow-[4px_6px_0px_#1C1917] group-hover:shadow-[6px_9px_0px_#1C1917] transition-all duration-200 w-28 sm:w-34 lg:w-38">
        {/* Top Tape or Pushpin fastener */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
          {sticker.pinType === 'pin' ? (
            <PushPin color="#EF4444" className="w-5 h-5 -mt-0.5 drop-shadow-xs" />
          ) : (
            <WashiTape
              color={sticker.tapeColor || "#FEF08A"}
              rotate={`${sticker.tapeAngle || -3}deg`}
              className="w-14 h-3.5"
            />
          )}
        </div>

        {/* Sticker Photo Area */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-amber-50 border-2 border-stone-900/80 flex items-center justify-center">
          {!imgError ? (
            <img
              src={sticker.src}
              alt={sticker.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover pointer-events-none"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-1.5 text-center bg-gradient-to-b from-amber-100 to-orange-50 select-none">
              <span className="text-2xl filter drop-shadow-xs">
                {['🎂', '👑', '😎', '✨', '🎈', '⚡'][index % 6]}
              </span>
              <span className="font-display font-bold text-[11px] text-stone-900 mt-0.5">
                Niranjan
              </span>
              <span className="font-hand text-[10px] text-amber-800 font-bold">
                Photo #{index + 1}
              </span>
            </div>
          )}

          {/* Sparkle sticker overlay badge */}
          <div className="absolute bottom-1 right-1 bg-yellow-300 text-stone-900 text-[9px] font-bold px-1.5 py-0.2 rounded-md border border-stone-900 shadow-xs flex items-center gap-0.5">
            <span>✨</span>
          </div>
        </div>

        {/* Handwritten Label underneath photo */}
        <div className="mt-1.5 text-center">
          <div className="inline-block bg-amber-100/70 px-2 py-0.5 rounded-full border border-stone-800/40">
            <span className="font-display font-bold text-[10px] sm:text-xs text-stone-900 block leading-tight">
              {sticker.badge}
            </span>
          </div>
          <p className="font-hand text-stone-600 text-[11px] font-bold mt-0.5 truncate">
            {sticker.subtext}
          </p>
        </div>

        {/* Little drag hint on hover */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
          <span className="bg-stone-900 text-white text-[9px] font-display font-bold px-2 py-0.5 rounded-full shadow-md">
            ✋ Throw me!
          </span>
        </div>
      </div>
    </motion.div>
  );
}
