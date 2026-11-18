"use client";

import React, { useState, useEffect } from "react";

export default function BootingScreen() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Only run on client mount
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setVisible(false), 600);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => {
        setFade(true);
        setTimeout(() => setVisible(false), 200);
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black cursor-pointer transition-opacity duration-700 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex space-x-3 mb-6">
        <div className="w-4 h-4 bg-[#d4af37] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.9)] animate-pulse" />
        <div className="w-4 h-4 bg-[#d4af37] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.9)] animate-pulse [animation-delay:200ms]" />
        <div className="w-4 h-4 bg-[#d4af37] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.9)] animate-pulse [animation-delay:400ms]" />
      </div>
      <h2 className="text-xl sm:text-2xl font-black text-white tracking-[0.25em] uppercase">
        Booting Up
      </h2>
      <p className="text-[#d4af37] text-xs sm:text-sm mt-3 font-semibold tracking-[0.2em] uppercase animate-pulse">
        Entering the CodeNest Universe
      </p>
    </div>
  );
}
