import React, { useState } from 'react';
import { ShoppingBag, Volume2, VolumeX, Home } from 'lucide-react';
import { useCart } from '../context/useCart';
import { toggleMute, getIsMuted, playPop } from '../utils/audio';

export default function Navbar({ onNavigateHome, currentView }) {
  const { totalItems, openBag } = useCart();
  const [muted, setMuted] = useState(getIsMuted());

  const handleSoundToggle = () => {
    const isNowMuted = toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) {
      playPop(520);
    }
  };

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6 max-w-7xl mx-auto w-full">
      <nav className="bg-white/95 backdrop-blur-md rounded-full border-2.5 border-stone-900 shadow-[4px_4px_0px_#1C1917] py-2.5 px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => {
            playPop(480);
            onNavigateHome();
          }}
          type="button"
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-300 border-2 border-stone-900 flex items-center justify-center text-lg sm:text-xl shadow-[1.5px_1.5px_0px_#1C1917] group-hover:rotate-12 transition-transform">
            🎂
          </div>
          <div>
            <span className="font-display font-extrabold text-sm sm:text-lg text-stone-900 tracking-tight leading-none block">
              Niranjan's Birthday Shop
            </span>
            <span className="font-hand font-bold text-xs text-amber-800 leading-tight block">
              100% Curated for Him ✨
            </span>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Home button (if currently in Category view) */}
          {currentView !== 'home' && (
            <button
              onClick={() => {
                playPop(420);
                onNavigateHome();
              }}
              type="button"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-stone-900 bg-stone-100 hover:bg-stone-200 text-stone-900 font-display font-bold text-xs shadow-[2px_2px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>All Balloons</span>
            </button>
          )}

          {/* Sound Toggle Button */}
          <button
            onClick={handleSoundToggle}
            type="button"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-stone-900 bg-white hover:bg-amber-50 flex items-center justify-center text-stone-800 shadow-[2px_2px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            title={muted ? "Unmute playful sounds" : "Mute sounds"}
          >
            {muted ? (
              <VolumeX className="w-4 h-4 text-stone-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-600" />
            )}
          </button>

          {/* Shopping Bag Button with Live Item Count */}
          <button
            onClick={openBag}
            type="button"
            className="relative px-3.5 sm:px-4 py-2 rounded-full border-2 border-stone-900 bg-amber-400 hover:bg-amber-300 text-stone-900 font-display font-extrabold text-xs sm:text-sm shadow-[3px_3px_0px_#1C1917] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#1C1917] transition-all flex items-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-stone-900" />
            <span className="hidden xs:inline">Bag</span>
            <span className="bg-stone-900 text-white font-mono text-xs px-2 py-0.5 rounded-full min-w-5 text-center font-bold">
              {totalItems}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
