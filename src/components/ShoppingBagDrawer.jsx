import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, Gift, Sparkles, Heart } from 'lucide-react';
import { useCart } from '../context/useCart';
import ProductIllustration from './ProductIllustration';
import { playCelebration } from '../utils/audio';

export default function ShoppingBagDrawer() {
  const {
    items,
    totalItems,
    isBagOpen,
    closeBag,
    updateQuantity,
    removeFromCart,
    openReveal
  } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    playCelebration();
    closeBag();
    openReveal();
  };

  return (
    <AnimatePresence>
      {isBagOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBag}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md sm:max-w-lg bg-[#FFFDF9] h-full shadow-2xl border-l-3 border-stone-900 z-10 flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 border-b-2 border-stone-200 bg-[#FAF7F0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-200 border-2 border-stone-900 flex items-center justify-center shadow-[2px_2px_0px_#1C1917]">
                  <Gift className="w-6 h-6 text-stone-900" />
                </div>
                <div>
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-stone-900 leading-tight">
                    Niranjan's Birthday Bag 🎁
                  </h2>
                  <p className="font-hand font-bold text-sm sm:text-base text-stone-600">
                    {totalItems} curated {totalItems === 1 ? 'gift' : 'gifts'} waiting
                  </p>
                </div>
              </div>

              <button
                onClick={closeBag}
                type="button"
                className="w-10 h-10 rounded-full border-2 border-stone-900 bg-white hover:bg-stone-100 flex items-center justify-center text-stone-800 shadow-[2px_2px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bag Item List */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {items.length === 0 ? (
                // Empty Bag State
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-24 h-24 rounded-full bg-amber-100 border-2 border-stone-900 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#1C1917]">
                    <ShoppingBag className="w-12 h-12 text-stone-500 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-stone-800 mb-2">
                    The bag is empty!
                  </h3>
                  <p className="font-hand font-bold text-lg text-stone-600 max-w-xs mb-6">
                    Niranjan can't celebrate with an empty bag. Go pick some gifts from the balloons!
                  </p>
                  <button
                    onClick={closeBag}
                    type="button"
                    className="py-2.5 px-6 rounded-full border-2 border-stone-900 bg-amber-300 font-display font-bold text-stone-900 text-sm shadow-[3px_3px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer hover:bg-amber-400"
                  >
                    Start Gift Hunting 🎈
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 bg-white rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_#1C1917] flex items-center gap-4 relative"
                  >
                    {/* Outline Thumbnail */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FAF7F0] rounded-xl border border-stone-900 shrink-0 flex items-center justify-center p-1 overflow-hidden">
                      <ProductIllustration productId={item.id} className="w-14 h-14" />
                    </div>

                    {/* Gift Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span
                          style={{ backgroundColor: item.balloonColor }}
                          className="font-display font-bold text-[10px] px-2 py-0.2 rounded-full border border-stone-800"
                        >
                          {item.categoryName}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-stone-900 text-sm sm:text-base truncate">
                        {item.productName}
                      </h4>
                      <p className="font-hand font-bold text-xs sm:text-sm text-stone-500 truncate">
                        {item.subtitle}
                      </p>

                      {/* Quantity & Remove */}
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-stone-100">
                        <div className="flex items-center gap-2 bg-stone-50 px-2 py-1 rounded-lg border border-stone-300">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            type="button"
                            className="w-5 h-5 rounded flex items-center justify-center text-stone-600 hover:bg-stone-200 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-display font-bold text-xs text-stone-900 w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            type="button"
                            className="w-5 h-5 rounded flex items-center justify-center text-stone-600 hover:bg-stone-200 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          type="button"
                          className="text-stone-400 hover:text-rose-600 p-1 rounded-md transition-colors cursor-pointer"
                          title="Remove gift"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Drawer Footer with "Get Instant Delivery" */}
            {items.length > 0 && (
              <div className="p-5 sm:p-6 border-t-2 border-stone-200 bg-[#FAF7F0] space-y-4">
                {/* Birthday Summary calculation */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-stone-600">
                    <span className="font-display">Total Birthday Gifts:</span>
                    <span className="font-bold font-display text-stone-900">{totalItems} items</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span className="font-display">Delivery Speed:</span>
                    <span className="font-bold text-emerald-700 font-display">Instant (Spiritual Teleportation)</span>
                  </div>
                  <div className="flex justify-between items-center text-stone-900 pt-2 border-t border-stone-300">
                    <span className="font-display font-extrabold text-base">Cost to Niranjan:</span>
                    <span className="font-display font-extrabold text-xl text-emerald-600 flex items-center gap-1">
                      FREE <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                    </span>
                  </div>
                </div>

                {/* Primary Button: MUST have exact text “Get Instant Delivery” */}
                <motion.button
                  onClick={handleCheckout}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  type="button"
                  className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-900 border-2.5 border-stone-900 font-display font-extrabold text-lg shadow-[4px_6px_0px_#1C1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#1C1917] transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Sparkles className="w-5 h-5 text-stone-900 group-hover:rotate-12 transition-transform" />
                  <span>Get Instant Delivery</span>
                  <Sparkles className="w-5 h-5 text-stone-900 group-hover:-rotate-12 transition-transform" />
                </motion.button>

                <p className="font-hand text-center text-xs text-stone-500 font-bold">
                  ⚡ 0% checkout forms • 100% birthday delight
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
