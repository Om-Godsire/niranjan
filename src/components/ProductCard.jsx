import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Check, Heart, Sparkles } from 'lucide-react';
import ProductIllustration from './ProductIllustration';
import { useCart } from '../context/useCart';
import { WashiTape } from './Doodles';
import { playPop } from '../utils/audio';

export default function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleView = () => {
    playPop(500);
    if (onViewDetails) {
      onViewDetails(product);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative max-w-xl mx-auto w-full bg-[#FFFDF9] rounded-3xl border-2.5 border-stone-900 shadow-[8px_10px_0px_#1C1917] p-6 sm:p-8 overflow-hidden group"
    >
      {/* Decorative Washi Tape on card top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
        <WashiTape color={product.balloonColor} rotate="-1.5deg" className="w-28 h-5" />
      </div>

      {/* Rarity / Category Badge */}
      <div className="flex items-center justify-between mb-4 mt-2">
        <span
          style={{ backgroundColor: product.tagColor }}
          className="font-display text-xs sm:text-sm font-bold text-stone-900 px-3.5 py-1 rounded-full border border-stone-900 shadow-xs flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          {product.badgeText}
        </span>

        <span className="font-hand font-bold text-base sm:text-lg text-stone-600">
          {product.birthdayDetail}
        </span>
      </div>

      {/* Black Outline Illustration Frame (Strictly black doodle on cream background) */}
      <div
        onClick={handleView}
        className="relative cursor-pointer w-full aspect-4/3 sm:aspect-16/10 bg-[#FAF7F0] rounded-2xl border-2 border-stone-900 flex items-center justify-center p-6 mb-6 group-hover:bg-amber-50/50 transition-colors"
      >
        <div className="transform group-hover:scale-105 transition-transform duration-300">
          <ProductIllustration productId={product.id} className="w-48 h-48 sm:w-56 sm:h-56" />
        </div>

        {/* Hover hint */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-stone-800 text-xs font-display font-medium text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-xs">
          <Eye className="w-3.5 h-3.5" />
          <span>Click to inspect</span>
        </div>

        {/* Stamp in corner */}
        <div className="absolute top-3 right-3 rotate-12 border-2 border-dashed border-stone-400 rounded-md px-2 py-0.5 pointer-events-none">
          <span className="font-display font-bold text-[10px] text-stone-500 uppercase tracking-wider">
            Approved ✔️
          </span>
        </div>
      </div>

      {/* Product Title */}
      <div className="mb-4">
        <div className="text-xs uppercase font-display tracking-widest text-stone-500 mb-1">
          Gift #{product.categoryNumber} • {product.categoryName}
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug">
          {product.productName}
        </h3>
      </div>

      {/* Personalized Description */}
      <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
        {product.description}
      </p>

      {/* Handwritten Scrapbook Note */}
      <div className="bg-amber-50 rounded-xl p-3.5 border-1.5 border-dashed border-amber-300 mb-6 flex items-start gap-2.5">
        <span className="text-xl shrink-0 mt-0.5">📌</span>
        <div>
          <span className="font-hand font-bold text-lg text-amber-950 block leading-tight">
            Note for Niranjan:
          </span>
          <p className="font-hand text-base text-stone-700 font-bold leading-snug">
            "{product.scrapbookNote}"
          </p>
        </div>
      </div>

      {/* Price tag equivalent (Priceless / Birthday gift) */}
      <div className="flex items-center justify-between py-2 border-t border-stone-200 mb-6">
        <div>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            Birthday Value
          </span>
          <span className="font-display font-extrabold text-xl text-stone-900 flex items-center gap-1.5">
            Priceless <Heart className="w-4 h-4 fill-rose-500 text-rose-500 inline" />
          </span>
        </div>

        <div className="text-right">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            Eligibility
          </span>
          <span className="font-display font-bold text-sm text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
            Niranjan Only ✨
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={handleView}
          type="button"
          className="w-full py-3.5 px-4 rounded-2xl border-2 border-stone-900 bg-white hover:bg-stone-50 font-display font-bold text-stone-900 text-base shadow-[3px_3px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#1C1917] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Eye className="w-4 h-4 text-stone-700" />
          <span>View Gift</span>
        </button>

        <motion.button
          onClick={handleAdd}
          whileTap={{ scale: 0.96 }}
          type="button"
          style={{
            backgroundColor: justAdded ? '#86EFAC' : '#1C1917',
            color: justAdded ? '#064E3B' : '#FFFFFF',
          }}
          className="w-full py-3.5 px-4 rounded-2xl border-2 border-stone-900 font-display font-bold text-base shadow-[4px_4px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#1C1917] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {justAdded ? (
            <>
              <Check className="w-5 h-5 text-emerald-900" />
              <span>Added to Bag! 🎉</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Bag</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
