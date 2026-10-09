import React, { useState, useEffect } from 'react';
import { playBagAdd, playPop } from '../utils/audio';
import { CartContext } from './CartContextObject';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('niranjan_birthday_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isRevealOpen, setIsRevealOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('niranjan_birthday_cart', JSON.stringify(items));
    } catch {}
  }, [items]);

  const showToast = (message) => {
    const id = Date.now();
    setToast({ message, id });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 2800);
  };

  const addToCart = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });

    playBagAdd();
    showToast(`Added "${product.productName}" to Niranjan's Bag! 🎁`);
  };

  const updateQuantity = (productId, delta) => {
    playPop(520);
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    playPop(340);
    setItems((prev) => prev.filter((item) => item.id !== productId));
    showToast('Removed gift from bag');
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        isBagOpen,
        openBag: () => {
          playPop(480);
          setIsBagOpen(true);
        },
        closeBag: () => setIsBagOpen(false),
        isRevealOpen,
        openReveal: () => setIsRevealOpen(true),
        closeReveal: () => setIsRevealOpen(false),
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toast,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
