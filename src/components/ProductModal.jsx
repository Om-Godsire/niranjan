import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Check, Plus, Minus, Sparkles, ShieldCheck } from 'lucide-react';
import ProductIllustration from './ProductIllustration';
import { useCart } from '../context/useCart';
import { WashiTape } from './Doodles';
import { playPop } from '../utils/audio';

export default function ProductModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  const handleIncrement = () => {
    playPop(520);
    setQuantity((q) => Math.min(q + 1, 10));
  };

  const handleDecrement = () => {
    playPop(420);
    setQuantity((q) => Math.max(q - 1, 1));
  };

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1100);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl border-3 border-stone-900 shadow-[10px_14px_0px_#1C1917] p-6 sm:p-8 z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Top Tape decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <WashiTape color={product.balloonColor} rotate="1deg" className="w-32 h-5" />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-stone-900 bg-white hover:bg-rose-50 flex items-center justify-center text-stone-900 shadow-[2px_2px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable content inside modal */}
          <div className="overflow-y-auto pr-1">
            {/* Header info */}
            <div className="flex items-center gap-2 mb-2">
              <span
                style={{ backgroundColor: product.balloonColor }}
                className="font-display text-xs font-bold px-3 py-1 rounded-full border border-stone-900 shadow-xs"
              >
                Category #{product.categoryNumber}: {product.categoryName}
              </span>
              <span className="font-hand font-bold text-amber-700 text-base">
                ✨ 100% Niranjan-Approved
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2 leading-tight">
              {product.productName}
            </h2>

            <p className="font-hand text-lg sm:text-xl text-stone-600 font-bold mb-6">
              "{product.subtitle}"
            </p>

            {/* Large Black Outline Product Illustration */}
            <div className="w-full bg-[#FAF7F0] rounded-2xl border-2 border-stone-900 flex items-center justify-center p-8 mb-6 shadow-inner relative overflow-hidden">
              <ProductIllustration productId={product.id} className="w-56 h-56 sm:w-64 sm:h-64" />
              
              <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-lg border border-stone-800 text-xs font-display font-bold text-stone-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Hand-Drawn Scrapbook Edition</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-display font-bold text-stone-900 text-base mb-1 uppercase tracking-wider text-xs">
                The Gift Story
              </h3>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* "Why it's so you" section */}
            <div className="bg-amber-50/80 rounded-2xl p-5 border-2 border-dashed border-amber-300 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h4 className="font-display font-bold text-stone-900 text-lg">
                  Why it's so you, Niranjan:
                </h4>
              </div>

              <ul className="space-y-2.5">
                {product.whyItsSoYou.map((reason, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-stone-800 text-sm sm:text-base">
                    <span className="text-amber-600 font-bold text-base mt-0.5">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scrapbook handwritten note */}
            <div className="bg-white p-4 rounded-xl border border-stone-300 mb-6 shadow-xs flex items-center gap-3">
              <div className="text-2xl">🎂</div>
              <div className="font-hand text-base sm:text-lg text-stone-700 font-bold">
                Annotation: <span className="text-rose-700">"{product.scrapbookNote}"</span>
              </div>
            </div>

            {/* Controls Bar: Quantity Selector & Add to Bag */}
            <div className="pt-4 border-t-2 border-stone-200 flex flex-col sm:flex-row items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-2xl border-2 border-stone-900 shadow-[2px_2px_0px_#1C1917]">
                <span className="font-display text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">
                  Quantity:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDecrement}
                    type="button"
                    className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-800 border border-stone-300 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-display font-extrabold text-stone-900 text-base w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    type="button"
                    className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-800 border border-stone-300 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add Button */}
              <motion.button
                onClick={handleAdd}
                whileTap={{ scale: 0.96 }}
                type="button"
                style={{
                  backgroundColor: added ? '#86EFAC' : '#1C1917',
                  color: added ? '#064E3B' : '#FFFFFF',
                }}
                className="flex-1 w-full py-4 px-6 rounded-2xl border-2 border-stone-900 font-display font-bold text-base shadow-[4px_4px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#1C1917] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-900" />
                    <span>Added {quantity} to Bag! 🎉</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add {quantity} to Birthday Bag</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
