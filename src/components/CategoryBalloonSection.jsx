import React, { useState, useEffect } from 'react';
import Balloon from './Balloon';
import { CATEGORIES_DATA } from '../data/products';
import { SparkleDoodle } from './Doodles';

export default function CategoryBalloonSection({ onSelectCategory, activeCategoryId }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Staggered offsets for a natural, loosely floating bouquet look on desktop
  const verticalOffsets = [0, -16, 8, -20, 12, -12, 16, -8, 4];

  return (
    <section className="relative w-full py-10 sm:py-14 px-3 sm:px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8 relative">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white px-3 sm:px-4 py-1.5 rounded-full border-2 border-stone-900 shadow-[2px_2px_0px_#1C1917] mb-2 sm:mb-3">
          <SparkleDoodle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
          <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider text-stone-900">
            Click A Balloon To Open Gifts
          </span>
          <SparkleDoodle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
        </div>

        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Pick Niranjan's Category 🎈
        </h2>
        <p className="font-hand text-lg sm:text-2xl text-stone-700 font-bold mt-1">
          Each balloon holds one suspiciously curated surprise
        </p>
      </div>

      {/* Balloons Display Container */}
      {/* Desktop: Staggered horizontal flow; Mobile: Responsive 3-column grid */}
      <div className="relative pt-4 pb-8 sm:pb-12">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:flex-nowrap items-end justify-items-center md:justify-between gap-3 sm:gap-4 md:gap-3 lg:gap-4 max-w-lg md:max-w-none mx-auto">
          {CATEGORIES_DATA.map((cat, idx) => {
            const vOffset = isMobile ? 0 : verticalOffsets[idx % verticalOffsets.length];
            const isSelected = activeCategoryId === cat.id;

            return (
              <div
                key={cat.id}
                style={{ transform: `translateY(${vOffset}px)` }}
                className="transition-transform duration-500 flex justify-center w-full md:w-auto"
              >
                <Balloon
                  color={cat.balloonColor}
                  accentColor={cat.balloonShadow}
                  size={isMobile ? 78 : 105}
                  label={cat.categoryName}
                  number={cat.categoryNumber}
                  onClick={() => onSelectCategory(cat.id)}
                  delay={idx * 0.2}
                  duration={4 + (idx % 3) * 0.6}
                  isActive={isSelected}
                  className="z-10"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Playful scrapbook quote banner beneath balloons */}
      <div className="mt-2 sm:mt-4 text-center">
        <span className="font-hand text-base sm:text-xl text-stone-600 bg-amber-100/60 px-3.5 sm:px-4 py-1 rounded-full border border-stone-800/20 inline-block rotate-1">
          💡 Pro-tip: No boring gifts allowed on this birthday!
        </span>
      </div>
    </section>
  );
}
