import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Heart, PartyPopper, Share2 } from 'lucide-react';
import { useCart } from '../context/useCart';
import { BIRTHDAY_INFO } from '../data/products';
import { playCelebration, playPop } from '../utils/audio';
import { PartyHatDoodle } from './Doodles';

export default function ConfettiReveal({ isOpen, onClose }) {
  const { items, showToast } = useCart();

  const triggerConfettiCannons = () => {
    playCelebration();

    // Side cannons
    const end = Date.now() + 1.2 * 1000;
    const colors = ['#BAE6FD', '#FEF08A', '#BBF7D0', '#FED7AA', '#FBCFE8', '#E9D5FF', '#FECDD3'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.7 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.7 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  useEffect(() => {
    if (isOpen) {
      triggerConfettiCannons();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleShare = () => {
    playPop(520);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Copied Birthday Shop link! Send it to Niranjan! 🎁');
    } else {
      showToast('Happy Birthday Niranjan! 🎉');
    }
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
          className="fixed inset-0 bg-stone-900/70 backdrop-blur-md cursor-pointer"
        />

        {/* Floating background decorative balloons */}
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
          <motion.div
            initial={{ y: "100vh", x: "10vw" }}
            animate={{ y: "-20vh", x: "15vw" }}
            transition={{ duration: 7, ease: "easeOut" }}
            className="absolute text-5xl"
          >
            🎈
          </motion.div>
          <motion.div
            initial={{ y: "100vh", x: "80vw" }}
            animate={{ y: "-20vh", x: "75vw" }}
            transition={{ duration: 8.5, delay: 0.5, ease: "easeOut" }}
            className="absolute text-6xl"
          >
            🎂
          </motion.div>
          <motion.div
            initial={{ y: "100vh", x: "45vw" }}
            animate={{ y: "-25vh", x: "50vw" }}
            transition={{ duration: 9, delay: 1, ease: "easeOut" }}
            className="absolute text-5xl"
          >
            🎈
          </motion.div>
        </div>

        {/* Celebration Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          className="relative w-full max-w-xl bg-[#FFFDF9] rounded-3xl border-3 border-stone-900 shadow-[12px_16px_0px_#1C1917] p-6 sm:p-8 z-20 text-center overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-stone-900 bg-white hover:bg-stone-100 flex items-center justify-center text-stone-900 shadow-[2px_2px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer z-30"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Party Icon & Hat */}
          <div className="relative inline-block mb-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-200 border-2.5 border-stone-900 flex items-center justify-center shadow-[4px_4px_0px_#1C1917] mx-auto text-4xl sm:text-5xl">
              🎉
            </div>
            <div className="absolute -top-3 -right-2">
              <PartyHatDoodle className="w-10 h-10 drop-shadow-xs" />
            </div>
          </div>

          {/* Core Birthday Message */}
          <div className="mb-4">
            <span className="font-hand font-extrabold text-xl sm:text-2xl text-amber-800 bg-amber-100 px-4 py-1 rounded-full border border-stone-900/30 inline-block mb-3 rotate-[-1deg]">
              ✨ SPECIAL INSTANT DELIVERY DISPATCH ✨
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight leading-tight">
              {BIRTHDAY_INFO.revealMessage}
            </h2>
          </div>

          {/* Affectionate subtext */}
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6 max-w-md mx-auto">
            {BIRTHDAY_INFO.revealSubtext}
          </p>

          {/* Manifested Gift Manifest Certificate Box */}
          <div className="bg-[#FAF7F0] rounded-2xl border-2 border-stone-900 p-4 sm:p-5 text-left mb-6 shadow-inner">
            <div className="flex items-center justify-between border-b border-stone-300 pb-2.5 mb-3">
              <div>
                <span className="font-display font-bold text-xs text-stone-500 uppercase tracking-widest block">
                  Delivery Manifest
                </span>
                <span className="font-display font-extrabold text-stone-900 text-sm sm:text-base">
                  Order #{BIRTHDAY_INFO.orderNumber}
                </span>
              </div>
              <span className="font-display font-bold text-xs bg-emerald-100 text-emerald-800 border border-emerald-400 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Delivered in Spirit
              </span>
            </div>

            {/* List of items manifested */}
            <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm py-1 border-b border-stone-200/60 last:border-0">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <span className="text-base">🎁</span>
                    <span className="font-display font-bold text-stone-800 truncate">
                      {item.productName}
                    </span>
                    <span className="text-stone-500 text-xs">({item.categoryName})</span>
                  </div>
                  <span className="font-display font-bold text-stone-900 shrink-0">
                    x{item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-2.5 border-t border-stone-300 flex items-center justify-between text-xs text-stone-600">
              <span className="font-hand font-bold text-sm text-stone-700">Recipient: Niranjan (Main Character)</span>
              <span className="font-display font-bold text-rose-600 flex items-center gap-1">
                Friendship: 100% Guaranteed <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
              </span>
            </div>
          </div>

          {/* Interactive buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={triggerConfettiCannons}
              type="button"
              className="py-3.5 px-4 rounded-2xl bg-amber-300 hover:bg-amber-200 text-stone-900 border-2 border-stone-900 font-display font-bold text-base shadow-[3px_3px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PartyPopper className="w-5 h-5" />
              <span>Blast More Confetti!</span>
            </button>

            <button
              onClick={handleShare}
              type="button"
              className="py-3.5 px-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-900 font-display font-bold text-base shadow-[3px_3px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 className="w-5 h-5 text-stone-700" />
              <span>Share Shop Link</span>
            </button>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="mt-4 text-xs font-display font-bold text-stone-500 hover:text-stone-800 underline decoration-dashed underline-offset-4 cursor-pointer"
          >
            Close & Keep Exploring the Shop
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
