/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'emblem';
  inverted?: boolean;
}

export function LogoEmblem({ className = 'w-10 h-10', inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0`}
      aria-label="Changing Life Ministries Logo Emblem"
    >
      <defs>
        {/* Sunset Sunburst Gradient */}
        <linearGradient id="sunburstGrad" x1="20" y1="20" x2="120" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C93B16" />
          <stop offset="50%" stopColor="#E8722A" />
          <stop offset="100%" stopColor="#F4A261" />
        </linearGradient>

        {/* Green Leaf Gradients */}
        <linearGradient id="leftLeafGrad" x1="15" y1="70" x2="65" y2="125" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6E9F2D" />
          <stop offset="100%" stopColor="#3E6B1D" />
        </linearGradient>

        <linearGradient id="rightLeafGrad" x1="65" y1="65" x2="120" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4A8025" />
          <stop offset="100%" stopColor="#2D5A27" />
        </linearGradient>

        {/* Clip path for the upper sunburst dome */}
        <clipPath id="sunburstClip">
          <path d="M 22 70 C 22 36, 45 16, 75 16 C 105 16, 126 36, 126 70 Z" />
        </clipPath>
      </defs>

      {/* --- UPPER SUNBURST ARCH --- */}
      <g clipPath="url(#sunburstClip)">
        {/* Base sunset orange disc */}
        <circle cx="75" cy="70" r="54" fill="url(#sunburstGrad)" />

        {/* Radiating sunburst rays */}
        <polygon points="75,70 20,24 28,16" fill="#FFFFFF" fillOpacity="0.85" />
        <polygon points="75,70 36,12 45,8" fill="#FFFFFF" fillOpacity="0.85" />
        <polygon points="75,70 56,6 66,4" fill="#FFFFFF" fillOpacity="0.85" />
        <polygon points="75,70 77,4 87,6" fill="#FFFFFF" fillOpacity="0.85" />
        <polygon points="75,70 98,10 107,15" fill="#FFFFFF" fillOpacity="0.85" />
        <polygon points="75,70 116,21 124,28" fill="#FFFFFF" fillOpacity="0.85" />
        <polygon points="75,70 128,38 132,48" fill="#FFFFFF" fillOpacity="0.85" />

        {/* Inner glow around cross center */}
        <circle cx="75" cy="70" r="20" fill="#FFFFFF" fillOpacity="0.35" />
      </g>

      {/* --- LOWER GREEN LEAF / HILL SWOOSHES --- */}
      <path
        d="M 23 74 C 23 74, 25 110, 58 124 C 64 126, 68 121, 68 114 C 68 96, 56 80, 32 72 Z"
        fill="url(#leftLeafGrad)"
      />

      <path
        d="M 78 78 C 76 96, 88 116, 108 120 C 117 122, 126 112, 126 98 C 126 84, 114 74, 88 72 Z"
        fill="url(#rightLeafGrad)"
      />

      {/* --- SWEEPING WHITE CROSS --- */}
      <path
        d="M 72 14 C 74 14, 78 14, 79 17 C 80 32, 78 52, 77 68 C 76 86, 73 108, 71 128 C 68 128, 65 127, 65 125 C 66 106, 69 86, 71 68 C 72 50, 71 30, 72 14 Z"
        fill={inverted ? '#2D5A27' : '#FFFFFF'}
        filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.1))"
      />

      <path
        d="M 20 68 C 38 67, 56 68, 74 69 C 94 70, 114 68, 130 63 C 131 65, 131 69, 128 71 C 112 76, 92 77, 74 76 C 54 75, 36 74, 20 72 Z"
        fill={inverted ? '#2D5A27' : '#FFFFFF'}
        filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.1))"
      />

      <ellipse cx="74" cy="71" rx="5" ry="5" fill="#FFFFFF" />
    </svg>
  );
}

export function Logo({ className = '', variant = 'full', inverted = false }: LogoProps) {
  if (variant === 'emblem') {
    return <LogoEmblem className="w-10 h-10" inverted={inverted} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoEmblem className="w-11 h-11 sm:w-12 sm:h-12" inverted={inverted} />

      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-bold tracking-normal leading-tight text-lg sm:text-xl md:text-2xl ${
            inverted ? 'text-white' : 'text-[#2D5A27]'
          }`}
        >
          Changing Life Ministries
        </span>
        {variant === 'full' && (
          <span
            className={`font-serif italic text-[11px] sm:text-xs leading-none tracking-wide mt-0.5 truncate max-w-[260px] sm:max-w-none ${
              inverted ? 'text-white/80' : 'text-[#E8722A]'
            }`}
          >
            "See, I am doing a new thing!" (Isaiah 43:19 NIV)
          </span>
        )}
      </div>
    </div>
  );
}
