import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function CodeNestLogo({ className = "", showTagline = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/" className={`flex items-center space-x-3 group relative shrink-0 ${className}`}>
      {/* Logo Icon Mark */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl overflow-hidden bg-gradient-to-br from-[#121820] to-[#05070a] p-1.5 shadow-lg border border-[#d4af37]/30 group-hover:border-[#d4af37] group-hover:scale-105 transition-all duration-300 flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cn-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff4b8" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#9a7008" />
            </linearGradient>
          </defs>
          {/* Hexagonal Nest Border */}
          <path
            d="M50 8 L85 28 L85 72 L50 92 L15 72 L15 28 Z"
            stroke="url(#cn-gold)"
            strokeWidth="5"
            strokeLinejoin="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />
          {/* Left Bracket < */}
          <path
            d="M40 34 L26 50 L40 66"
            stroke="url(#cn-gold)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Bracket > */}
          <path
            d="M60 34 L74 50 L60 66"
            stroke="url(#cn-gold)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Nest Core Slash & Center Node */}
          <path
            d="M55 32 L45 68"
            stroke="url(#cn-gold)"
            strokeWidth="4"
            strokeLinecap="round"
            className="opacity-80"
          />
          <circle cx="50" cy="50" r="4.5" fill="url(#cn-gold)" />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col leading-none">
        <span className={`${textSizes[size]} font-black tracking-tight text-white flex items-center`}>
          Code <span className="text-[#d4af37] ml-1 group-hover:text-[#f3d36b] transition-colors">Nest</span>
        </span>
        {showTagline && (
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] mt-1 text-gray-400 group-hover:text-gray-300 transition-colors">
            Innovate. Build. Scale.
          </span>
        )}
      </div>
    </Link>
  );
}
