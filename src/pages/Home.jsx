import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Gift } from 'lucide-react';
import FloatingSticker from '../components/FloatingSticker';
import CategoryBalloonSection from '../components/CategoryBalloonSection';
import { INITIAL_STICKERS } from '../data/stickers';
import { BIRTHDAY_INFO } from '../data/products';
import { PartyHatDoodle, SparkleDoodle, StarDoodle, HeartDoodle, WashiTape } from '../components/Doodles';
import { playPop } from '../utils/audio';

export default function Home({ onSelectCategory }) {
  const balloonsRef = useRef(null);

  const scrollToBalloons = () => {
    playPop(520);
    balloonsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden pb-16">
      {/* HERO SECTION: The Birthday Party Playground */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[92vh] flex flex-col items-center justify-center px-3 sm:px-4 pt-6 sm:pt-10 pb-12 overflow-hidden">
        
        {/* Desktop: Floating Draggable Photo Stickers in Left and Right Columns */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full max-w-7xl mx-auto pointer-events-auto">
            {INITIAL_STICKERS.map((sticker, idx) => (
              <FloatingSticker key={sticker.id} sticker={sticker} index={idx} isAbsolute={true} />
            ))}
          </div>
        </div>

        {/* Decorative Floating Doodles in Hero Background */}
        <div className="absolute top-10 left-4 sm:left-16 pointer-events-none opacity-80 hidden sm:block">
          <PartyHatDoodle className="w-10 sm:w-12 h-10 sm:h-12 transform -rotate-12" />
        </div>
        <div className="absolute top-16 right-4 sm:right-24 pointer-events-none opacity-80 hidden sm:block">
          <StarDoodle className="w-8 sm:w-10 h-8 sm:h-10 text-amber-400 transform rotate-12" />
        </div>
        <div className="absolute bottom-24 left-6 sm:left-24 pointer-events-none opacity-70 hidden sm:block">
          <SparkleDoodle className="w-7 sm:w-8 h-7 sm:h-8 text-yellow-500" />
        </div>
        <div className="absolute bottom-28 right-8 sm:right-28 pointer-events-none opacity-75 hidden sm:block">
          <HeartDoodle className="w-7 sm:w-8 h-7 sm:h-8 text-rose-400 transform rotate-12" />
        </div>

        {/* Central Hero Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 w-full max-w-2xl text-center px-4 sm:px-6 py-8 sm:py-12 bg-white/90 backdrop-blur-md rounded-3xl border-2.5 sm:border-3 border-stone-900 shadow-[6px_8px_0px_#1C1917] sm:shadow-[8px_10px_0px_#1C1917] mx-auto select-none"
        >
          {/* Top Tape Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape color="#FEF08A" rotate="-2deg" className="w-28 sm:w-32 h-4 sm:h-5" />
          </div>

          {/* Birthday Eyebrow Tag */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-100 text-stone-900 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-stone-900 shadow-xs mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider">
              Special Birthday Edition
            </span>
            <span className="text-xs">🎂</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight sm:leading-none mb-3">
            {BIRTHDAY_INFO.title}
          </h1>

          {/* Playful Subtitle */}
          <p className="font-display font-medium text-stone-700 text-sm sm:text-lg md:text-xl max-w-lg mx-auto mb-4 leading-relaxed">
            {BIRTHDAY_INFO.tagline}
          </p>

          {/* Small Instruction */}
          <div className="bg-amber-50 rounded-2xl py-2 px-3.5 sm:px-4 border border-stone-800/20 inline-block mb-6 sm:mb-8">
            <p className="font-hand font-bold text-base sm:text-xl text-amber-900">
              👉 {BIRTHDAY_INFO.hint} 👈
            </p>
          </div>

          {/* Mobile-Only Interactive Photo Sticker Shelf */}
          <div className="md:hidden w-full mb-6 pt-3 border-t border-stone-200/80">
            <div className="text-center mb-2.5">
              <span className="font-hand font-bold text-xs text-amber-800 bg-amber-100/90 px-3 py-0.5 rounded-full border border-stone-800/20 inline-block">
                ✨ Touch, drag & throw stickers around! ✨
              </span>
            </div>
            <div className="flex items-center gap-3 overflow-x-auto py-3 px-1 no-scrollbar justify-start">
              {INITIAL_STICKERS.map((sticker, idx) => (
                <FloatingSticker key={sticker.id} sticker={sticker} index={idx} isAbsolute={false} />
              ))}
            </div>
          </div>

          {/* Prominent Action Button: “Explore the gifts” */}
          <div>
            <motion.button
              onClick={scrollToBalloons}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              className="py-3.5 px-6 sm:py-4 sm:px-8 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-900 font-display font-extrabold text-base sm:text-xl border-2.5 border-stone-900 shadow-[3px_4px_0px_#1C1917] sm:shadow-[4px_6px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] transition-all inline-flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            >
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-stone-900 group-hover:rotate-12 transition-transform" />
              <span>Explore the gifts</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-stone-900 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Little sticker tape note at bottom */}
          <div className="mt-4 sm:mt-5">
            <span className="font-hand text-xs sm:text-sm text-stone-500 font-bold">
              *Warning: May contain 100% inside accuracy and zero regrets
            </span>
          </div>
        </motion.div>
      </section>

      {/* CATEGORY BALLOONS SECTION AT THE BOTTOM */}
      <div ref={balloonsRef} className="pt-6 sm:pt-8">
        <CategoryBalloonSection onSelectCategory={onSelectCategory} />
      </div>
    </div>
  );
}
