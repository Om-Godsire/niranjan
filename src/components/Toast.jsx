import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/useCart';
import { Sparkles } from 'lucide-react';

export default function Toast() {
  const { toast } = useCart();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none px-4 w-full max-w-md">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-white border-2.5 border-stone-900 rounded-2xl py-3 px-5 shadow-[4px_6px_0px_#1C1917] flex items-center gap-3 text-stone-900"
          >
            <div className="w-8 h-8 rounded-full bg-amber-300 border-1.5 border-stone-900 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-stone-900" />
            </div>
            <p className="font-display font-bold text-sm sm:text-base leading-snug">
              {toast.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
