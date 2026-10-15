/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LogoEmblem } from '../components/Logo.tsx';
import { useRouter } from '../lib/router.tsx';
import { OriginalWhoWeAre } from '../components/OriginalWhoWeAre.tsx';
import {
  ArrowRight,
  Heart,
  Users,
  Sparkles,
  Calendar,
  MapPin,
  ShieldCheck,
  ChevronRight,
  Building2,
  Flame,
  Copy,
  Check,
  CreditCard,
  BookOpen,
  Award,
} from 'lucide-react';

interface HomePageProps {
  whoWeAreImageSrc?: string;
  onOpenLightbox: (src: string, caption: string) => void;
}

export function HomePage({ whoWeAreImageSrc, onOpenLightbox }: HomePageProps) {
  const { navigate } = useRouter();
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('9348796699');
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="bg-[#2D5A27] text-white py-16 sm:py-24 lg:py-28 px-6 sm:px-8 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          {/* Memorial Ribbon */}
          <button
            type="button"
            onClick={() => navigate('/tribute')}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/35 backdrop-blur-md border border-[#F4A261]/60 text-xs text-white hover:bg-black/55 active:scale-[0.98] transition-all cursor-pointer shadow-md group"
          >
            <div className="w-5 h-5 rounded-full bg-[#E8722A]/20 flex items-center justify-center">
              <Flame className="w-3.5 h-3.5 text-[#F4A261] animate-pulse" />
            </div>
            <span className="font-semibold text-[#FFF9F0]">In Loving Memory: Miss Jennifer Naude &middot; Born June 22, 1996 &ndash; August 16, 2023</span>
            <span className="text-[#F4A261] font-bold group-hover:translate-x-1 transition-transform flex items-center">
              &middot; Read Tribute &rarr;
            </span>
          </button>

          <div className="mb-6 p-3 bg-white rounded-2xl shadow-2xl inline-flex items-center justify-center ring-4 ring-white/20 hover:scale-105 transition-transform duration-300">
            <LogoEmblem className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6">
            Changing Lives Ministries
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed mb-6 font-light">
            A ministry on the move — reaching hearts, transforming communities.
          </p>

          <div className="max-w-3xl mx-auto mb-10 px-6 py-4 bg-[#FFFFFF]/10 backdrop-blur-md border border-[#F4A261]/40 rounded-2xl shadow-inner">
            <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#FFF9F0] leading-relaxed">
              &ldquo;See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.&rdquo; &mdash; Isaiah 43:19 (NIV)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => navigate('/donate')}
              style={{
                background: 'linear-gradient(90deg, #E8722A, #F4A261)',
              }}
              className="w-full sm:w-auto text-white text-base sm:text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:brightness-105 active:scale-[0.97] transition-all cursor-pointer inline-flex items-center justify-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-4 h-4 fill-white text-white" />
              </div>
              <span>Donate (Absa EFT)</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 active:scale-[0.97] text-white border border-white/30 text-base sm:text-lg font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all cursor-pointer inline-flex items-center justify-center gap-2 group"
            >
              <BookOpen className="w-4 h-4 text-[#F4A261] group-hover:scale-110 transition-transform" />
              <span>Discover Our Story</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto text-white/90 hover:text-white active:scale-[0.97] text-sm font-semibold px-5 py-3 cursor-pointer inline-flex items-center justify-center gap-1.5 group"
            >
              <span>Contact Office</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* VERIFIED NON-PROFIT REGISTRATION & GOVERNANCE STRIP */}
      <section className="bg-[#FFF9F0] border-b border-[#2D5A27]/15 py-8 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 border-r border-[#2D5A27]/10 last:border-none flex flex-col items-center group">
            <div className="w-9 h-9 rounded-xl bg-[#2D5A27]/10 flex items-center justify-center text-[#2D5A27] mb-2 group-hover:scale-110 transition-transform shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D5A27] mb-1">
              222-986
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#E8722A]">
              Registered NPO
            </div>
            <div className="text-[11px] text-[#2B2B2B]/70 mt-1">
              Dept. of Social Development (RSA)
            </div>
          </div>

          <div className="p-4 border-r border-[#2D5A27]/10 last:border-none flex flex-col items-center group">
            <div className="w-9 h-9 rounded-xl bg-[#E8722A]/10 flex items-center justify-center text-[#E8722A] mb-2 group-hover:scale-110 transition-transform shadow-2xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#2D5A27] mb-1">
              2021/582044/08
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#E8722A]">
              Associated NPC
            </div>
            <div className="text-[11px] text-[#2B2B2B]/70 mt-1">
              House of Broken Vessels
            </div>
          </div>

          <div className="p-4 border-r border-[#2D5A27]/10 last:border-none flex flex-col items-center group">
            <div className="w-9 h-9 rounded-xl bg-[#2D5A27]/10 flex items-center justify-center text-[#2D5A27] mb-2 group-hover:scale-110 transition-transform shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D5A27] mb-1">
              2223342151
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#E8722A]">
              SARS Tax Reference
            </div>
            <div className="text-[11px] text-[#2B2B2B]/70 mt-1">
              South African Revenue Service
            </div>
          </div>

          <div className="p-4 flex flex-col items-center group">
            <div className="w-9 h-9 rounded-xl bg-[#F4A261]/20 flex items-center justify-center text-[#C95D1E] mb-2 group-hover:scale-110 transition-transform shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D5A27] mb-1">
              Isaiah 43:19
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#E8722A]">
              Biblical Mandate
            </div>
            <div className="text-[11px] text-[#2B2B2B]/70 mt-1">
              &ldquo;I am doing a new thing&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORY: WHO WE ARE */}
      <section className="bg-[#FFFFFF] py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full">
            <OriginalWhoWeAre
              customImageSrc={whoWeAreImageSrc}
              onImageClick={() => {
                if (whoWeAreImageSrc) {
                  onOpenLightbox(
                    whoWeAreImageSrc,
                    'Historic Field Mission in Limpopo (April 2021) — Bishop Leona Swartz and Outreach Team'
                  );
                }
              }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8722A] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E8722A]" />
              Faith in Action &middot; Established 2016
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D5A27] mb-6">
              Who We Are
            </h2>

            <div
              className="h-1 w-16 mb-6 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #E8722A, #F4A261)',
              }}
            />

            <p className="text-base sm:text-lg leading-relaxed text-[#2B2B2B] mb-5">
              Changing Lives Ministries is a registered South African non-profit organization dedicated to lifting up individuals, families, and vulnerable youth across our nation. Established to demonstrate living faith through tangible community action, our teams travel across provinces to provide nutritional relief, educational mentorship, and holistic care.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#2B2B2B] mb-6">
              Founded and spiritually guided by <strong>Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;)</strong>, the ministry continues with enduring commitment to restore human dignity, nurture potential, and bring everlasting hope to every community we serve.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('/about')}
                className="text-[#2D5A27] font-semibold hover:text-[#E8722A] transition-colors inline-flex items-center gap-1.5 cursor-pointer text-sm"
              >
                <span>Read Full Ministry Biography</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CORE PILLARS PREVIEW */}
      <section className="bg-[#FFF9F0] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#2D5A27]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E8722A] mb-2">
              Our Core Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D5A27] mb-4">
              What We Do
            </h2>
            <div
              className="h-1 w-16 mx-auto rounded-full mb-4"
              style={{
                background: 'linear-gradient(90deg, #E8722A, #F4A261)',
              }}
            />
            <p className="text-sm sm:text-base text-[#2B2B2B]/80 max-w-2xl mx-auto">
              Our initiatives address both the physical and spiritual needs of underprivileged communities with sustainable programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFFFF] border border-[#2D5A27]/20 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFF5EB] to-[#FFEAD4] border border-[#E8722A]/30 flex items-center justify-center mb-6 text-[#E8722A] group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                <Heart className="w-8 h-8 fill-[#E8722A]/20 text-[#E8722A]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2D5A27] mb-3">
                Outreach &amp; Nutrition
              </h3>
              <p className="text-sm text-[#2B2B2B] leading-relaxed mb-6">
                Providing meals, nutritional support, and care for vulnerable families and community members in need of assistance.
              </p>
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="mt-auto text-xs font-bold uppercase tracking-wider text-[#E8722A] hover:text-[#C95D1E] active:scale-95 inline-flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#FFF5EB] transition-all"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-[#FFFFFF] border border-[#2D5A27]/20 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EBF3E8] to-[#DCEBD8] border border-[#2D5A27]/30 flex items-center justify-center mb-6 text-[#2D5A27] group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-xs">
                <Users className="w-8 h-8 text-[#2D5A27]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2D5A27] mb-3">
                Community Mentorship
              </h3>
              <p className="text-sm text-[#2B2B2B] leading-relaxed mb-6">
                Equipping women and youth with practical life skills, moral education, and peer support to break generational cycles of poverty.
              </p>
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="mt-auto text-xs font-bold uppercase tracking-wider text-[#2D5A27] hover:text-[#1F3E1B] active:scale-95 inline-flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#EBF3E8] transition-all"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-[#FFFFFF] border border-[#2D5A27]/20 rounded-2xl p-8 sm:p-10 text-center flex flex-col items-center shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFF5EB] to-[#FFEAD4] border border-[#E8722A]/30 flex items-center justify-center mb-6 text-[#E8722A] group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                <Sparkles className="w-8 h-8 text-[#E8722A]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2D5A27] mb-3">
                Spiritual Renewal
              </h3>
              <p className="text-sm text-[#2B2B2B] leading-relaxed mb-6">
                Delivering pastoral care, church fellowship, and the message of Isaiah 43:19 to uplift and inspire vulnerable communities across RSA.
              </p>
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="mt-auto text-xs font-bold uppercase tracking-wider text-[#E8722A] hover:text-[#C95D1E] active:scale-95 inline-flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#FFF5EB] transition-all"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION & ABSA EFT BANNER */}
      <section className="bg-[#FFF9F0] py-16 px-6 sm:px-8 border-t border-[#2D5A27]/15">
        <div className="max-w-6xl mx-auto bg-white border-2 border-[#2D5A27]/25 rounded-3xl p-8 sm:p-12 shadow-md hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5A27]/10 text-[#2D5A27] text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-[#E8722A] fill-[#E8722A]" />
                <span>Partner With Changing Lives Ministries</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3E1B]">
                Direct Absa Bank Donations
              </h3>
              <p className="text-sm sm:text-base text-[#2B2B2B]/85 leading-relaxed max-w-2xl">
                Support our hot meal feeding schemes, clothing distribution drives, and community revival missions. Transfer directly to our verified Absa Bank account or view our dedicated donations page for reference guidance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-[#FFF9F0] p-3.5 rounded-xl border border-[#2D5A27]/15 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2D5A27]/10 flex items-center justify-center shrink-0 text-[#2D5A27]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#2B2B2B]/60 uppercase text-[10px] block font-bold">Bank &amp; Branch</span>
                    <strong className="text-sm text-[#1F3E1B] block font-serif">Absa &middot; Lenasia</strong>
                  </div>
                </div>

                <div className="bg-[#FFF9F0] p-3.5 rounded-xl border border-[#E8722A]/30 flex items-start justify-between gap-2 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E8722A]/15 flex items-center justify-center shrink-0 text-[#E8722A]">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[#E8722A] uppercase text-[10px] block font-bold">Account Number</span>
                      <strong className="text-base font-mono text-[#2D5A27] block font-black">9348796699</strong>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAccount}
                    title="Copy Account Number"
                    className="p-1.5 rounded-lg bg-white border border-[#2D5A27]/20 text-[#2D5A27] hover:text-[#E8722A] hover:bg-[#FFF5EB] active:scale-90 transition-all cursor-pointer shrink-0"
                  >
                    {copiedAccount ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="bg-[#FFF9F0] p-3.5 rounded-xl border border-[#2D5A27]/15 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2D5A27]/10 flex items-center justify-center shrink-0 text-[#2D5A27]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#2B2B2B]/60 uppercase text-[10px] block font-bold">Branch Code</span>
                    <strong className="text-sm font-mono text-[#1F3E1B] block font-semibold">632005 (Universal)</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end">
              <button
                type="button"
                onClick={() => navigate('/donate')}
                style={{
                  background: 'linear-gradient(90deg, #E8722A, #F4A261)',
                }}
                className="w-full sm:w-auto text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-md hover:brightness-105 active:scale-[0.97] transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
              >
                <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Open Donations Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-xs text-[#2B2B2B]/70 text-left lg:text-right">
                Official NPO 222-986 &middot; NPC 2021/582044/08
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* GATHERINGS TEASER */}
      <section className="bg-[#FFFFFF] py-20 px-6 sm:px-8 border-t border-[#2D5A27]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#2D5A27] to-[#1F3E1B] text-white p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F4A261] flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#F4A261]/20 flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-[#F4A261]" />
              </div>
              <span>Field Missions &amp; Conferences</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold">
              Explore Our Field Records &amp; Events
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              From Winter Word Worship in Johannesburg to regional outreaches in Welkom, Limpopo, and Venda, review our milestone gatherings.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/events')}
            className="shrink-0 px-8 py-4 bg-white text-[#2D5A27] hover:bg-[#FFF9F0] active:scale-[0.97] text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 group"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
