import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { StarDoodle, HeartDoodle } from '../components/Doodles';
import { playPop } from '../utils/audio';

export default function CategoryPage({ categoryId, onBackToHome, onSelectCategory }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentIndex = CATEGORIES_DATA.findIndex((c) => c.id === categoryId);
  const category = CATEGORIES_DATA[currentIndex] || CATEGORIES_DATA[0];

  const handlePrev = () => {
    playPop(480);
    const prevIdx = (currentIndex - 1 + CATEGORIES_DATA.length) % CATEGORIES_DATA.length;
    onSelectCategory(CATEGORIES_DATA[prevIdx].id);
  };

  const handleNext = () => {
    playPop(480);
    const nextIdx = (currentIndex + 1) % CATEGORIES_DATA.length;
    onSelectCategory(CATEGORIES_DATA[nextIdx].id);
  };

  return (
    <div className="relative min-h-screen px-4 pt-6 pb-20 max-w-5xl mx-auto">
      {/* Top Bar with Back Button and Category Switcher */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <button
          onClick={() => {
            playPop(400);
            onBackToHome();
          }}
          type="button"
          className="inline-flex items-center gap-2 py-2.5 px-4 rounded-full bg-white hover:bg-stone-50 text-stone-900 font-display font-bold text-sm border-2 border-stone-900 shadow-[3px_3px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Quick Prev / Next category switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            type="button"
            className="w-9 h-9 rounded-full bg-white hover:bg-stone-50 border-2 border-stone-900 flex items-center justify-center text-stone-800 shadow-[2px_2px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
            title="Previous category"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="font-display font-bold text-xs text-stone-600 px-2 hidden sm:inline">
            Category {category.categoryNumber} of 9
          </span>

          <button
            onClick={handleNext}
            type="button"
            className="w-9 h-9 rounded-full bg-white hover:bg-stone-50 border-2 border-stone-900 flex items-center justify-center text-stone-800 shadow-[2px_2px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
            title="Next category"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Header */}
      <motion.div
        key={category.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center mb-8 relative"
      >
        {/* Floating decorative doodles */}
        <div className="absolute top-0 left-4 sm:left-12 pointer-events-none opacity-60 hidden sm:block">
          <StarDoodle className="w-8 h-8 text-amber-400" />
        </div>
        <div className="absolute top-2 right-4 sm:right-12 pointer-events-none opacity-60 hidden sm:block">
          <HeartDoodle className="w-7 h-7 text-rose-400" />
        </div>

        {/* Category Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border-2 border-stone-900 shadow-[2px_2px_0px_#1C1917] mb-3" style={{ backgroundColor: category.balloonColor }}>
          <span className="font-display font-extrabold text-xs uppercase tracking-wider text-stone-900">
            Category #{category.categoryNumber}
          </span>
          <span className="text-xs">🎈</span>
        </div>

        {/* Large Category Heading */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight mb-2">
          {category.categoryName}
        </h1>

        {/* Personalized Subtitle */}
        <p className="font-hand font-bold text-xl sm:text-2xl text-stone-700 max-w-xl mx-auto">
          "{category.subtitle}"
        </p>
      </motion.div>

      {/* Main Product Card */}
      <div className="mb-14">
        <ProductCard
          product={category}
          onViewDetails={(prod) => setSelectedProduct(prod)}
        />
      </div>

      {/* Category Quick-Jump Strip at bottom */}
      <div className="pt-8 border-t-2 border-stone-200">
        <div className="text-center mb-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-stone-500">
            Jump to another balloon category
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES_DATA.map((c) => {
            const isSelected = c.id === category.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  playPop(520);
                  onSelectCategory(c.id);
                }}
                type="button"
                style={{
                  backgroundColor: isSelected ? c.balloonColor : '#FFFFFF',
                }}
                className={`py-2 px-3.5 rounded-full border-2 border-stone-900 font-display font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1C1917] transition-all cursor-pointer ${
                  isSelected ? 'ring-2 ring-stone-900 scale-105' : 'hover:bg-stone-50 opacity-80 hover:opacity-100'
                }`}
              >
                #{c.categoryNumber} {c.categoryName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
