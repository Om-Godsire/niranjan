import React from 'react';
import Balloon from './Balloon';
import { CATEGORIES_DATA } from '../data/products';
import { SparkleDoodle } from './Doodles';

export default function CategoryBalloonSection({ onSelectCategory, activeCategoryId }) {
  // Staggered offsets for a natural, loosely floating bouquet look on desktop
  const verticalOffsets = [0, -16, 8, -20, 12, -12, 16, -8, 4];

  return (
    <section className="relative w-full py-12 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 relative">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border-2 border-stone-900 shadow-[2px_2px_0px_#1C1917] mb-3">
          <SparkleDoodle className="w-4 h-4 text-amber-500" />
          <span className="font-display font-bold text-xs uppercase tracking-wider text-stone-900">
            Click A Balloon To Open Gifts
          </span>
          <SparkleDoodle className="w-4 h-4 text-amber-500" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Pick Niranjan's Category 🎈
        </h2>
        <p className="font-hand text-xl sm:text-2xl text-stone-700 font-bold mt-1">
          Each balloon holds one suspiciously curated surprise
        </p>
      </div>

      {/* Balloons Display Container */}
      {/* Desktop: Staggered horizontal flow; Mobile: Wrapping flex / scroll friendly */}
      <div className="relative pt-6 pb-12">
        <div className="flex flex-wrap md:flex-nowrap items-end justify-center md:justify-between gap-4 sm:gap-6 md:gap-3 lg:gap-4 overflow-x-auto md:overflow-visible py-4 px-2 no-scrollbar">
          {CATEGORIES_DATA.map((cat, idx) => {
            const vOffset = verticalOffsets[idx % verticalOffsets.length];
            const isSelected = activeCategoryId === cat.id;

            return (
              <div
                key={cat.id}
                style={{ transform: `translateY(${vOffset}px)` }}
                className="transition-transform duration-500 shrink-0"
              >
                <Balloon
                  color={cat.balloonColor}
                  accentColor={cat.balloonShadow}
                  size={105}
                  label={cat.categoryName}
                  number={cat.categoryNumber}
                  onClick={() => onSelectCategory(cat.id)}
                  delay={idx * 0.25}
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
      <div className="mt-4 text-center">
        <span className="font-hand text-lg sm:text-xl text-stone-600 bg-amber-100/60 px-4 py-1 rounded-full border border-stone-800/20 inline-block rotate-1">
          💡 Pro-tip: No boring gifts allowed on this birthday!
        </span>
      </div>
    </section>
  );
}
