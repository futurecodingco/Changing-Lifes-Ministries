/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LogoEmblem } from './Logo.tsx';
import { Link, useRouter } from '../lib/router.tsx';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export function Footer() {
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#172D14] text-[#E2EBDD] border-t border-[#2D5A27]/40 pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
        {/* Brand & Mandate */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-md">
              <LogoEmblem className="w-full h-full" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-white tracking-wide">
                Changing Lives Ministries
              </h3>
              <p className="text-xs text-[#F4A261] font-semibold tracking-wider uppercase">
                Changing Lives &middot; NPO 222-986
              </p>
            </div>
          </div>

          <p className="text-sm text-[#C2D6BA] leading-relaxed max-w-md">
            A ministry on the move — reaching hearts, transforming communities through compassionate feeding schemes, clothing distribution, youth mentorship, and spiritual revival across South Africa.
          </p>

          <div className="pt-2 text-xs italic text-[#FFF9F0]/80 border-l-2 border-[#E8722A] pl-3 py-1">
            &ldquo;See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.&rdquo; — Isaiah 43:19
          </div>
        </div>

        {/* Quick Multi-Page Links */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs uppercase font-bold tracking-widest text-[#F4A261]">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-[#E2EBDD] hover:text-white transition-colors block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[#E2EBDD] hover:text-white transition-colors block">
                About Us &amp; Mission
              </Link>
            </li>
            <li>
              <Link to="/programs" className="text-[#E2EBDD] hover:text-white transition-colors block">
                What We Do &amp; Feeding Schemes
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-[#E2EBDD] hover:text-white transition-colors block">
                Events &amp; Outreach Records
              </Link>
            </li>
            <li>
              <Link to="/leadership" className="text-[#E2EBDD] hover:text-white transition-colors block">
                Leadership &amp; Office Bearers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#E2EBDD] hover:text-white transition-colors block">
                Contact Office
              </Link>
            </li>
            <li>
              <Link to="/tribute" className="text-[#F4A261] hover:text-white transition-colors block">
                In Memory: Miss Jennifer Naude
              </Link>
            </li>
            <li>
              <Link to="/donate" className="text-[#F4A261] font-semibold hover:text-white transition-colors block flex items-center gap-1">
                <span>Donate &middot; Absa EFT Details</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Direct Contacts */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="text-xs uppercase font-bold tracking-widest text-[#F4A261]">
            Direct Ministry Contacts
          </h4>
          <div className="space-y-2.5 text-xs text-[#C2D6BA]">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm font-serif">Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;)</strong>
                <span className="text-[11px] text-[#C2D6BA]/80">Founder &amp; Spiritual Leader</span>
                <div className="mt-1 flex items-center gap-3">
                  <a href="tel:+27810410673" className="text-white hover:text-[#F4A261] font-semibold">
                    +27 81 041 0673
                  </a>
                  <span>&middot;</span>
                  <a href="mailto:Leonaswartz510@gmail.com" className="text-[#F4A261] hover:underline break-all">
                    Leonaswartz510@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
              <Phone className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium block">Executive Office</span>
                <span>CEO Mr. Derrick Swartz: <a href="tel:+27823200492" className="text-white hover:underline">+27 82 320 0492</a></span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
              <MapPin className="w-4 h-4 text-[#F4A261] shrink-0 mt-0.5" />
              <div>
                <span>77/6 Skeleton Street, Mid-Ennerdale, Johannesburg, Gauteng, 1830</span>
                <span className="block text-[11px] text-[#C2D6BA]/70">Postal: PO Box 553, Ennerdale, 1826</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Strip */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#C2D6BA]/75 gap-4">
        <div>
          <span>&copy; {new Date().getFullYear()} Changing Lives Ministries. Registered South African Non-Profit Organization (NPO 222-986) &middot; NPC 2021/582044/08 &middot; SARS 2223342151.</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Nonprofit Organisations Act, 1997</span>
          <span>&middot;</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#F4A261] hover:text-white font-semibold cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
