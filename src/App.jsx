import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/useCart';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ShoppingBagDrawer from './components/ShoppingBagDrawer';
import ConfettiReveal from './components/ConfettiReveal';
import Toast from './components/Toast';
import { Heart } from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'category'
  const [activeCategoryId, setActiveCategoryId] = useState('skin-care');
  const { isRevealOpen, closeReveal } = useCart();

  const handleSelectCategory = (categoryId) => {
    setActiveCategoryId(categoryId);
    setCurrentView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-pink-200 selection:text-pink-900">
      {/* Top Navbar */}
      <Navbar
        onNavigateHome={handleNavigateHome}
        currentView={currentView}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <Home onSelectCategory={handleSelectCategory} />
        ) : (
          <CategoryPage
            categoryId={activeCategoryId}
            onBackToHome={handleNavigateHome}
            onSelectCategory={handleSelectCategory}
          />
        )}
      </main>

      {/* Persistent Shopping Bag Drawer */}
      <ShoppingBagDrawer />

      {/* Birthday Reveal Confetti Modal */}
      <ConfettiReveal isOpen={isRevealOpen} onClose={closeReveal} />

      {/* Global Toast Feedback */}
      <Toast />

      {/* Footer: Required subtle "Made with love for Niranjan" */}
      <footer className="w-full py-8 text-center border-t-2 border-stone-200 bg-[#FAF7F0] mt-12">
        <div className="max-w-md mx-auto px-4 space-y-2">
          <p className="font-hand font-bold text-lg sm:text-xl text-stone-700 flex items-center justify-center gap-1.5">
            Made with love for Niranjan{' '}
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500 inline animate-pulse" />
          </p>
          <p className="font-display text-xs text-stone-500 font-medium">
            Niranjan's Birthday Shop • 100% Curated Gifts • No Boring Gifts Allowed
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
