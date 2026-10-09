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
      <section className="relative w-full min-h-[92vh] sm:min-h-[96vh] flex flex-col items-center justify-center px-4 pt-10 pb-14 overflow-hidden">
        
        {/* Floating Draggable Photo Stickers of Niranjan */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Enable pointer events on individual stickers */}
          <div className="relative w-full h-full max-w-7xl mx-auto pointer-events-auto">
            {INITIAL_STICKERS.map((sticker, idx) => (
              <FloatingSticker key={sticker.id} sticker={sticker} index={idx} />
            ))}
          </div>
        </div>

        {/* Decorative Floating Doodles in Hero Background */}
        <div className="absolute top-12 left-6 sm:left-16 pointer-events-none opacity-80">
          <PartyHatDoodle className="w-12 h-12 transform -rotate-12" />
        </div>
        <div className="absolute top-20 right-8 sm:right-24 pointer-events-none opacity-80">
          <StarDoodle className="w-10 h-10 text-amber-400 transform rotate-12" />
        </div>
        <div className="absolute bottom-28 left-8 sm:left-24 pointer-events-none opacity-70">
          <SparkleDoodle className="w-8 h-8 text-yellow-500" />
        </div>
        <div className="absolute bottom-32 right-10 sm:right-28 pointer-events-none opacity-75">
          <HeartDoodle className="w-8 h-8 text-rose-400 transform rotate-12" />
        </div>

        {/* Central Hero Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-20 max-w-2xl text-center px-6 py-10 sm:py-12 bg-white/85 backdrop-blur-md rounded-3xl border-3 border-stone-900 shadow-[8px_10px_0px_#1C1917] mx-auto select-none"
        >
          {/* Top Tape Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape color="#FEF08A" rotate="-2deg" className="w-32 h-5" />
          </div>

          {/* Birthday Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 bg-amber-100 text-stone-900 px-4 py-1.5 rounded-full border border-stone-900 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="font-display font-bold text-xs uppercase tracking-wider">
              Special Birthday Edition
            </span>
            <span className="text-sm">🎂</span>
          </div>

          {/* Main Title: Exact required heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-none mb-3">
            {BIRTHDAY_INFO.title}
          </h1>

          {/* Playful Subtitle */}
          <p className="font-display font-medium text-stone-700 text-base sm:text-lg md:text-xl max-w-lg mx-auto mb-4 leading-relaxed">
            {BIRTHDAY_INFO.tagline}
          </p>

          {/* Small Instruction: Exact required text */}
          <div className="bg-amber-50 rounded-2xl py-2 px-4 border border-stone-800/20 inline-block mb-8">
            <p className="font-hand font-bold text-lg sm:text-xl text-amber-900">
              👉 {BIRTHDAY_INFO.hint} 👈
            </p>
          </div>

          {/* Prominent Action Button: “Explore the gifts” */}
          <div>
            <motion.button
              onClick={scrollToBalloons}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="py-4 px-8 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-900 font-display font-extrabold text-lg sm:text-xl border-2.5 border-stone-900 shadow-[4px_6px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#1C1917] transition-all inline-flex items-center gap-3 cursor-pointer group"
            >
              <Gift className="w-5 h-5 text-stone-900 group-hover:rotate-12 transition-transform" />
              <span>Explore the gifts</span>
              <ArrowDown className="w-5 h-5 text-stone-900 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Little sticker tape note at bottom */}
          <div className="mt-5">
            <span className="font-hand text-sm text-stone-500 font-bold">
              *Warning: May contain 100% inside accuracy and zero regrets
            </span>
          </div>
        </motion.div>
      </section>

      {/* CATEGORY BALLOONS SECTION AT THE BOTTOM */}
      <div ref={balloonsRef} className="pt-8">
        <CategoryBalloonSection onSelectCategory={onSelectCategory} />
      </div>
    </div>
  );
}
