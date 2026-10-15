/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LeaderProfile } from '../types/index.ts';
import { useRouter, Link } from '../lib/router.tsx';
import { Phone, Mail, Copy, Check, ShieldCheck, Award, Flame, ArrowRight } from 'lucide-react';

export function LeadershipPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const leaders: LeaderProfile[] = [
    {
      name: 'Bishop Leona Swartz ("Ma Bishop")',
      role: 'Founder & Spiritual Leader',
      phone: '+27 81 041 0673',
      email: 'Leonaswartz510@gmail.com',
      notes:
        'Visionary founder who established Changing Lives Ministries to bring humanitarian care, child nutrition, and enduring faith across South Africa.',
    },
    {
      name: 'Mr. Derrick Swartz',
      role: 'Chief Executive Officer (CEO)',
      phone: '+27 82 320 0492',
      notes:
        'Oversees operational strategy, provincial mission deployments, government liaison, and daily executive administration.',
    },
    {
      name: 'Miss Jennifer Naude',
      role: 'Company Secretary',
      phone: '+27 64 774 5884',
      notes:
        'Maintains regulatory statutory compliance, non-profit records, board minutes, and institutional reporting with the Department of Social Development.',
    },
    {
      name: 'Mr. Warren Jansen',
      role: 'Chief Financial Officer (CFO) / Financial Manager',
      phone: '+27 79 153 7059',
      notes:
        'Directs financial management, donor reporting, annual accounting audits, and stewardship of feeding scheme resources.',
    },
    {
      name: 'Mrs. Phelan Richards',
      role: 'Treasury Officer',
      phone: '+27 81 544 7324',
      notes:
        'Responsible for treasury administration, distribution accounting, and receipting of community donations.',
    },
    {
      name: 'Mr. Leslie Young',
      role: 'Chief Investment Officer (CIO)',
      phone: '+27 78 829 0637',
      notes:
        'Leads long-term outreach investments, partner relations, and capital mobilization for community infrastructure projects.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Page Header */}
      <section className="bg-[#2D5A27] text-white py-16 sm:py-24 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F4A261] mb-3">
            Governance &middot; Accountability &middot; Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Leadership &amp; Office Bearers
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Meet the executive council and leadership team guiding Changing Lives Ministries with integrity and stewardship.
          </p>
        </div>
      </section>

      {/* Founder Spotlight Card */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="bg-[#FFF9F0] border-2 border-[#2D5A27]/25 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#2D5A27]/15">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8722A] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#E8722A]" />
                <span>Founder &amp; Spiritual Mother</span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#2D5A27]">
                Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;)
              </h2>
              <span className="text-sm text-[#2B2B2B]/75 font-medium block mt-0.5">
                Also known as Leona Naude &middot; Changing Lives Ministries
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+27810410673"
                className="px-5 py-2.5 bg-[#2D5A27] text-white text-xs font-semibold rounded-lg hover:bg-[#1F3E1B] transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +27 81 041 0673</span>
              </a>
              <a
                href="mailto:Leonaswartz510@gmail.com"
                className="px-5 py-2.5 bg-white border border-[#2D5A27]/30 text-[#2D5A27] hover:text-[#E8722A] text-xs font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
            <div className="md:col-span-8 space-y-4">
              <p className="text-base text-[#2B2B2B] leading-relaxed">
                As the founding leader and visionary of Changing Lives Ministries, Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;) has spearheaded community feeding schemes, children&rsquo;s clothing drives, and faith empowerment initiatives across multiple provinces. Her pastoral ministry continues to provide spiritual counsel, family restoration, and loving guidance to vulnerable families.
              </p>
              <div className="bg-white p-4 rounded-xl border border-[#2D5A27]/15 text-xs text-[#2B2B2B]/85 leading-relaxed italic">
                &ldquo;Our mission has always been clear: to go directly to where people are hurting, bring living hope, feed the hungry, and prove that God makes a way in every wasteland.&rdquo; &mdash; Bishop Leona Swartz
              </div>
            </div>

            <div className="md:col-span-4 bg-white p-5 rounded-2xl border border-[#2D5A27]/15 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] block">
                Direct Contact Details
              </span>

              <div className="space-y-1">
                <span className="text-[11px] text-[#2B2B2B]/60 uppercase block">Direct Phone &amp; WhatsApp</span>
                <div className="flex items-center justify-between">
                  <a href="tel:+27810410673" className="text-base font-bold text-[#2D5A27] hover:underline">
                    +27 81 041 0673
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText('+27810410673', 'bishop-phone')}
                    className="text-xs text-[#E8722A] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    {copiedKey === 'bishop-phone' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-[#2D5A27]/10">
                <span className="text-[11px] text-[#2B2B2B]/60 uppercase block">Official Email</span>
                <div className="flex items-center justify-between">
                  <a href="mailto:Leonaswartz510@gmail.com" className="text-xs font-bold text-[#2D5A27] hover:underline break-all">
                    Leonaswartz510@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText('Leonaswartz510@gmail.com', 'bishop-email')}
                    className="text-xs text-[#E8722A] hover:underline cursor-pointer flex items-center gap-1 shrink-0 ml-2"
                  >
                    {copiedKey === 'bishop-email' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IN MEMORIAM BANNER FOR MISS JENNIFER NAUDE */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto -mt-6 mb-12">
        <div className="bg-gradient-to-r from-[#1C3318] via-[#2D5A27] to-[#1C3318] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#F4A261]/40 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-black/25 border border-[#F4A261]/40 flex items-center justify-center shrink-0">
              <Flame className="w-8 h-8 text-[#F4A261] animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#F4A261] tracking-wider mb-1">
                <span>In Loving Memory &middot; Born June 22, 1996 &ndash; August 16, 2023</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-white">
                Miss Jennifer Naude &middot; Company Secretary
              </h3>
              <p className="text-xs text-white/80 max-w-xl mt-1 leading-relaxed">
                Remembering her invaluable lifetime of service maintaining statutory compliance, non-profit records, board minutes, and institutional reporting with the Department of Social Development.
              </p>
            </div>
          </div>

          <Link
            to="/tribute"
            className="px-6 py-3 bg-[#E8722A] hover:bg-[#D4601A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Read Tribute &amp; Good Bye</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Executive Council Grid */}
      <section className="py-6 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="font-serif font-bold text-2xl text-[#2D5A27]">
            Executive Council &amp; Officers
          </h3>
          <p className="text-sm text-[#2B2B2B]/75">
            Registered officers responsible for fiduciary oversight, operations, and governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.slice(1).map((leader, idx) => {
            const isJennifer = leader.name.includes('Jennifer');

            if (isJennifer) {
              return (
                <div
                  key={idx}
                  className="bg-[#FFF9F0] border-2 border-[#E8722A]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden ring-1 ring-[#E8722A]/20"
                >
                  <div className="absolute top-0 right-0 bg-[#E8722A] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3 h-3 text-white" />
                    <span>In Memoriam</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold text-[#E8722A] tracking-wider block mb-1">
                      {leader.role} &middot; Born June 22, 1996 &ndash; August 16, 2023
                    </span>
                    <h4 className="font-serif font-bold text-xl text-[#2D5A27] mb-2">
                      {leader.name}
                    </h4>
                    <p className="text-xs text-[#2B2B2B] leading-relaxed mb-4">
                      {leader.notes}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2D5A27]/15 space-y-3">
                    <Link
                      to="/tribute"
                      className="w-full py-2 px-3 bg-[#2D5A27] hover:bg-[#1F3E1B] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Flame className="w-3.5 h-3.5 text-[#F4A261]" />
                      <span>Memorial &amp; Farewell Page</span>
                    </Link>

                    <div className="flex items-center justify-between text-xs text-[#2B2B2B]/70">
                      <span className="text-[11px] font-medium">Memorial Contact:</span>
                      <a href={`tel:${leader.phone.replace(/\s+/g, '')}`} className="font-semibold text-[#2D5A27] hover:underline">
                        {leader.phone}
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="bg-[#FFF9F0] border border-[#2D5A27]/20 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs uppercase font-bold text-[#E8722A] tracking-wider block mb-1">
                    {leader.role}
                  </span>
                  <h4 className="font-serif font-bold text-xl text-[#2D5A27] mb-2">
                    {leader.name}
                  </h4>
                  <p className="text-xs text-[#2B2B2B] leading-relaxed mb-4">
                    {leader.notes}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2D5A27]/10 flex items-center justify-between">
                  <a
                    href={`tel:${leader.phone.replace(/\s+/g, '')}`}
                    className="text-xs font-semibold text-[#2D5A27] hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E8722A]" />
                    <span>{leader.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyText(leader.phone, `leader-${idx}`)}
                    className="text-xs text-[#2B2B2B]/60 hover:text-[#E8722A] cursor-pointer"
                    title="Copy telephone"
                  >
                    {copiedKey === `leader-${idx}` ? <Check className="w-3.5 h-3.5 text-[#2D5A27]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
