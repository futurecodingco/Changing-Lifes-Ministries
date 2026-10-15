/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  image: { src: string; caption: string } | null;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#2D5A27] text-white">
          <span className="text-sm font-medium truncate pr-4 font-serif">
            {image.caption}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image inspection"
            className="text-white hover:text-[#F4A261] transition-colors p-1 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-auto p-4 flex items-center justify-center bg-neutral-950">
          <img
            src={image.src}
            alt={image.caption}
            className="max-h-[75vh] w-auto object-contain rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
