/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { useRouter, Link } from '../lib/router.tsx';
import { PageRoute } from '../types/index.ts';
import {
  Phone,
  Menu,
  X,
  Heart,
  Flame,
  ShieldCheck,
  ChevronRight,
  Home,
  Info,
  Layers,
  Calendar,
  Users,
  Mail,
} from 'lucide-react';

export function Header() {
  const { currentRoute, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems: { label: string; to: PageRoute; icon: React.ComponentType<{ className?: string }> }[] = [
    { label: 'Home', to: '/', icon: Home },
    { label: 'About Us', to: '/about', icon: Info },
    { label: 'What We Do', to: '/programs', icon: Layers },
    { label: 'Events & Records', to: '/events', icon: Calendar },
    { label: 'Leadership', to: '/leadership', icon: Users },
    { label: 'Contact', to: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* Top Institutional Utility Bar */}
      <div className="bg-[#142811] text-[#E2EBDD] text-xs py-2 px-4 sm:px-8 border-b border-[#2D5A27]/50">
        <div className="max-w-7xl mx-auto">
          {/* Desktop & Tablet View (sm and up) */}
          <div className="hidden sm:flex items-center justify-between gap-4">
            {/* Official NPO Accreditation */}
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1 bg-[#2D5A27] text-white px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase shadow-xs">
                <ShieldCheck className="w-3 h-3 text-[#A8D59D]" />
                NPO 222-986
              </span>
              <span className="text-[#C4D9BF] text-xs font-medium">
                Registered Non-Profit Organization &middot; Serving Communities Across South Africa
              </span>
            </div>

            {/* Commemorative & Contact Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/tribute"
                className="inline-flex items-center gap-1.5 bg-[#F4A261]/15 hover:bg-[#F4A261]/25 text-[#F4A261] hover:text-[#FFF9F0] border border-[#F4A261]/40 px-3 py-1 rounded-full text-xs font-medium transition-all group shadow-xs"
              >
                <Flame className="w-3.5 h-3.5 text-[#F4A261] animate-pulse group-hover:scale-110 transition-transform" />
                <span>In Loving Memory: Miss Jennifer Naude (1969&ndash;2023)</span>
                <span className="text-[10px] text-[#F4A261]/75 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </Link>

              <div className="h-3 w-[1px] bg-white/20" />

              <a
                href="tel:+27810410673"
                className="inline-flex items-center gap-1.5 text-white/90 hover:text-white font-semibold text-xs transition-colors"
                title="Call Changing Life Ministries"
              >
                <Phone className="w-3.5 h-3.5 text-[#F4A261]" />
                <span>+27 81 041 0673</span>
              </a>
            </div>
          </div>

          {/* Mobile View (< sm): Clean, 2-Row Stack with No Overflow or Text Clipping */}
          <div className="sm:hidden flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="bg-[#2D5A27] text-white px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider">
                  NPO 222-986
                </span>
                <span className="text-[#C4D9BF] text-[11px] font-medium">
                  Registered Non-Profit Org
                </span>
              </div>
              <a
                href="tel:+27810410673"
                className="inline-flex items-center gap-1 text-[#F4A261] text-[11px] font-bold"
              >
                <Phone className="w-3 h-3 text-[#F4A261]" />
                <span>+27 81 041 0673</span>
              </a>
            </div>

            <Link
              to="/tribute"
              className="flex items-center justify-center gap-1.5 bg-[#F4A261]/15 hover:bg-[#F4A261]/25 text-[#F4A261] border border-[#F4A261]/30 py-1 px-2.5 rounded-full text-[11px] font-medium text-center transition-colors"
            >
              <Flame className="w-3 h-3 text-[#F4A261] animate-pulse" />
              <span>In Loving Memory: Miss Jennifer Naude (1969&ndash;2023)</span>
              <span className="text-[10px]">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/98 backdrop-blur-md border-b border-[#2D5A27]/15 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Ministry Name */}
          <Link to="/" className="hover:opacity-95 transition-opacity py-1 flex items-center shrink-0">
            <Logo variant="full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {mainNavItems.map((item) => {
              const isActive = currentRoute === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer relative ${
                    isActive
                      ? 'text-[#2D5A27] font-bold bg-[#EBF3E8]'
                      : 'text-[#333333] hover:text-[#2D5A27] hover:bg-[#F7FAF6]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#E8722A] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* In Memory Tribute Link */}
            <Link
              to="/tribute"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentRoute === '/tribute'
                  ? 'bg-[#E8722A] text-white shadow-xs'
                  : 'bg-[#FFF5EB] text-[#C95D1E] hover:bg-[#FFE8D1] border border-[#F4A261]/40'
              }`}
              title="Commemorative tribute to late Company Secretary Miss Jennifer Naude"
            >
              <Flame className="w-3.5 h-3.5 text-[#E8722A] group-hover:scale-110" />
              <span>In Memory</span>
            </Link>

            <div className="h-5 w-[1px] bg-gray-200 mx-1" />

            {/* Primary Action: Donate */}
            <button
              type="button"
              onClick={() => navigate('/donate')}
              style={{
                background: 'linear-gradient(90deg, #E8722A, #F4A261)',
              }}
              className="text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-sm hover:brightness-105 hover:shadow transition-all cursor-pointer flex items-center gap-1.5 ml-1"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
              <span>Donate</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-[#2D5A27] hover:bg-[#F7FAF6] border border-gray-200 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFFFF] border-b border-[#2D5A27]/20 px-5 py-4 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* Accreditation Badge in Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-xs font-semibold text-[#2D5A27] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
                Registered Non-Profit (NPO 222-986)
              </span>
              <span className="text-[11px] text-gray-500 font-medium">South Africa</span>
            </div>

            {/* Main Links with Icons */}
            <div className="space-y-1">
              {mainNavItems.map((item) => {
                const isActive = currentRoute === item.to;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.to}
                    type="button"
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#2D5A27] text-white font-bold'
                        : 'text-[#2B2B2B] hover:bg-[#F7FAF6] hover:text-[#2D5A27]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#666666]'}`} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white/70' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Dedicated In Memory Card in Drawer */}
            <button
              type="button"
              onClick={() => {
                navigate('/tribute');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-[#FFF5EB] to-[#FFF9F0] border border-[#F4A261]/50 cursor-pointer flex items-center justify-between transition-colors hover:border-[#E8722A]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E8722A]/15 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-[#E8722A] animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#8C3A00]">
                    In Loving Memory: Miss Jennifer Naude
                  </div>
                  <div className="text-[11px] text-[#A25010]">
                    Born June 22, 1969 &ndash; August 16, 2023 &middot; Read Tribute &rarr;
                  </div>
                </div>
              </div>
            </button>

            {/* Donate CTA with Bank Preview */}
            <button
              type="button"
              onClick={() => {
                navigate('/donate');
                setMobileMenuOpen(false);
              }}
              style={{
                background: 'linear-gradient(90deg, #E8722A, #F4A261)',
              }}
              className="w-full text-center text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 hover:brightness-105 transition-all"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>Donate Now &middot; Absa Bank Details</span>
            </button>

            {/* Quick Helpline */}
            <div className="text-center pt-1 pb-1">
              <a
                href="tel:+27810410673"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D5A27] hover:text-[#E8722A]"
              >
                <Phone className="w-3.5 h-3.5 text-[#E8722A]" />
                <span>Call Us: +27 81 041 0673</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

