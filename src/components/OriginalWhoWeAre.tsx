/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import defaultLimpopoImg from '../assets/images/limpopo_mission.jpg';

interface OriginalWhoWeAreProps {
  customImageSrc?: string;
  onImageClick?: () => void;
}

export function OriginalWhoWeAre({
  customImageSrc,
  onImageClick,
}: OriginalWhoWeAreProps) {
  const imageSrc = customImageSrc || defaultLimpopoImg;

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-[#2D5A27]/25 relative group bg-white">
      <div className="bg-[#2D5A27] text-white px-5 py-3 flex items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E8722A]" />
          <span className="font-serif font-bold tracking-wide">
            Historic Outreach &middot; Limpopo, South Africa
          </span>
        </div>
        <span className="bg-[#FFFFFF]/20 px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider">
          April 2021
        </span>
      </div>

      <div
        className="relative cursor-zoom-in overflow-hidden bg-neutral-100"
        onClick={onImageClick}
        title="Click to view full photo in high definition"
      >
        <img
          src={imageSrc}
          alt="Bishop Leona Swartz ('Ma Bishop') and Outreach Team in Limpopo"
          className="w-full h-auto object-cover max-h-[520px] group-hover:scale-101 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold transition-opacity">
          <span className="bg-black/60 px-3.5 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            View Full Photo
          </span>
        </div>
      </div>

      <div className="px-5 py-3 bg-[#FFF9F0] border-t border-[#2D5A27]/15 flex items-center justify-between text-xs text-[#2B2B2B]">
        <span className="font-medium text-[#2D5A27]">
          Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;) &amp; Ministry Delegation
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] text-[#2D5A27]/80 font-medium">
          <svg className="w-3 h-3 text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Permanent Archive
        </span>
      </div>
    </div>
  );
}
