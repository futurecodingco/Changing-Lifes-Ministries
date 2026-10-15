/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface OriginalWhoWeAreProps {
  customImageSrc?: string;
  onImageClick?: () => void;
}

export function OriginalWhoWeAre({
  customImageSrc,
  onImageClick,
}: OriginalWhoWeAreProps) {
  if (customImageSrc) {
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
          className="relative cursor-zoom-in overflow-hidden"
          onClick={onImageClick}
          title="Click to view full photo in high definition"
        >
          <img
            src={customImageSrc}
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

  return (
    <div
      className="w-full rounded-2xl overflow-hidden shadow-xl border border-[#2D5A27]/25 bg-[#FFF9F0] flex flex-col hover:shadow-2xl transition-shadow"
    >
      {/* Visual Header Badge */}
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

      {/* Stylized Archival Presentation */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-[#FFFDF9] to-[#F5EFEB] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
        {/* Architectural subtle window grid pattern */}
        <div className="absolute inset-5 border border-[#8D6E63]/20 bg-white/40 grid grid-cols-2 grid-rows-2 opacity-60 pointer-events-none rounded-lg">
          <div className="border-r border-b border-[#8D6E63]/20" />
          <div className="border-b border-[#8D6E63]/20" />
          <div className="border-r border-[#8D6E63]/20" />
          <div />
        </div>

        {/* Center Team Group Silhouette & Dignified Seal */}
        <div className="relative z-10 flex flex-col items-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-[#2D5A27] text-[#FFF9F0] flex items-center justify-center mb-4 shadow-md ring-4 ring-[#E8722A]/20">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>

          <div className="text-[11px] font-bold uppercase tracking-widest text-[#E8722A] mb-1">
            Archival Field Record
          </div>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2D5A27]">
            Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;) &amp; Outreach Team
          </h3>
          <p className="text-xs sm:text-sm text-[#2B2B2B] mt-2 leading-relaxed">
            Community visitation and leadership fellowship on the ground in Limpopo, establishing grassroots support and faith-based community empowerment.
          </p>

          <div className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#2D5A27]/20 text-xs font-semibold text-[#2D5A27] rounded-full shadow-2xs">
            <svg className="w-3.5 h-3.5 text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Official Ministry Record</span>
          </div>
        </div>
      </div>
    </div>
  );
}
