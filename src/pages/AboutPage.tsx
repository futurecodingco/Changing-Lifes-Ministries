/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { OriginalWhoWeAre } from '../components/OriginalWhoWeAre.tsx';
import { useRouter } from '../lib/router.tsx';
import { ShieldCheck, BookOpen, Compass, Award, ArrowRight, Heart } from 'lucide-react';

interface AboutPageProps {
  whoWeAreImageSrc?: string;
  onOpenLightbox: (src: string, caption: string) => void;
}

export function AboutPage({ whoWeAreImageSrc, onOpenLightbox }: AboutPageProps) {
  const { navigate } = useRouter();

  return (
    <div className="bg-[#FFFFFF]">
      {/* Page Header Banner */}
      <section className="bg-[#2D5A27] text-white py-16 sm:py-24 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F4A261] mb-3">
            <span>Faith in Action Since 2016</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            About Changing Life Ministries
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Reaching hearts, restoring dignity, and transforming South African communities through active, compassionate service.
          </p>
        </div>
      </section>

      {/* Main Narrative & Founder Story */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
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

          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E8722A]">
              Founder &amp; Visionary
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D5A27]">
              Our Heritage &amp; Founding Story
            </h2>
            <div
              className="h-1 w-16 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #E8722A, #F4A261)',
              }}
            />

            <p className="text-base text-[#2B2B2B] leading-relaxed">
              Changing Life Ministries was founded under the spiritual leadership and steadfast dedication of <strong>Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;)</strong>. Recognizing the devastating socioeconomic hardships affecting families and children across impoverished townships and rural settlements, Ma Bishop established an active, mobile outreach dedicated to meeting immediate physical needs while renewing spiritual hope.
            </p>

            <p className="text-base text-[#2B2B2B] leading-relaxed">
              From our early community outreaches to today&rsquo;s structured provincial feeding schemes and youth development programs, the ministry continues to travel directly to those in need, operating with transparency, integrity, and deep compassion.
            </p>

            <div className="bg-[#FFF9F0] border-l-4 border-[#2D5A27] p-5 rounded-r-xl">
              <h4 className="font-serif font-bold text-base text-[#2D5A27] mb-1">
                Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;)
              </h4>
              <p className="text-xs sm:text-sm text-[#2B2B2B]/85 leading-relaxed">
                Founder and spiritual mother of Changing Life Ministries, leading community missions and mentoring families with unyielding faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="bg-[#FFF9F0] py-20 px-6 sm:px-8 lg:px-12 border-t border-[#2D5A27]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D5A27] mb-4">
              Our Vision &amp; Mandate
            </h2>
            <div
              className="h-1 w-16 mx-auto rounded-full mb-4"
              style={{
                background: 'linear-gradient(90deg, #E8722A, #F4A261)',
              }}
            />
            <p className="text-sm sm:text-base text-[#2B2B2B]/80 max-w-xl mx-auto">
              Guided by Scripture, driven by love, and verified by measurable impact in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#2D5A27]/20 rounded-2xl p-8 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FFF9F0] border border-[#2D5A27]/20 flex items-center justify-center text-[#2D5A27] mb-5">
                <Compass className="w-6 h-6 text-[#E8722A]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2D5A27] mb-3">Our Vision</h3>
              <p className="text-sm text-[#2B2B2B] leading-relaxed">
                To see broken individuals restored, vulnerable youth empowered with dignity and purpose, and destitute communities flourishing through living faith and shared resources.
              </p>
            </div>

            <div className="bg-white border border-[#2D5A27]/20 rounded-2xl p-8 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FFF9F0] border border-[#2D5A27]/20 flex items-center justify-center text-[#2D5A27] mb-5">
                <Heart className="w-6 h-6 text-[#E8722A]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2D5A27] mb-3">Our Mission</h3>
              <p className="text-sm text-[#2B2B2B] leading-relaxed">
                To mobilize humanitarian relief, community care, and life mentorship to uplift individuals and families across South African communities.
              </p>
            </div>

            <div className="bg-white border border-[#2D5A27]/20 rounded-2xl p-8 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FFF9F0] border border-[#2D5A27]/20 flex items-center justify-center text-[#2D5A27] mb-5">
                <BookOpen className="w-6 h-6 text-[#E8722A]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2D5A27] mb-3">Scriptural Anchor</h3>
              <p className="text-sm text-[#2B2B2B] leading-relaxed italic">
                &ldquo;See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.&rdquo; — Isaiah 43:19
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Legal Registrations */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="bg-[#FFFFFF] border-2 border-[#2D5A27]/25 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-7 h-7 text-[#2D5A27]" />
            <h3 className="font-serif font-bold text-2xl text-[#2D5A27]">
              Legal Governance &amp; Registrations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-[#FFF9F0]/60 p-4 rounded-xl border border-[#2D5A27]/10">
              <span className="text-xs uppercase font-bold text-[#E8722A] block mb-1">Organization Name</span>
              <strong className="text-base text-[#2B2B2B] block">Changing Life Ministries</strong>
            </div>

            <div className="bg-[#FFF9F0]/60 p-4 rounded-xl border border-[#2D5A27]/10">
              <span className="text-xs uppercase font-bold text-[#E8722A] block mb-1">NPO Registration</span>
              <strong className="text-base text-[#2D5A27] block">222-986 NPO</strong>
              <span className="text-xs text-[#2B2B2B]/70">Department of Social Development</span>
            </div>

            <div className="bg-[#FFF9F0]/60 p-4 rounded-xl border border-[#2D5A27]/10">
              <span className="text-xs uppercase font-bold text-[#E8722A] block mb-1">Associated NPC</span>
              <strong className="text-base text-[#2B2B2B] block">House of Broken Vessels</strong>
              <span className="text-xs text-[#2B2B2B]/70">2021/582044/08</span>
            </div>

            <div className="bg-[#FFF9F0]/60 p-4 rounded-xl border border-[#2D5A27]/10">
              <span className="text-xs uppercase font-bold text-[#E8722A] block mb-1">SARS Tax Reference</span>
              <strong className="text-base text-[#2B2B2B] block">2223342151</strong>
            </div>

            <div className="bg-[#FFF9F0]/60 p-4 rounded-xl border border-[#2D5A27]/10">
              <span className="text-xs uppercase font-bold text-[#E8722A] block mb-1">Legislation Act</span>
              <span className="text-sm font-medium text-[#2B2B2B] block">Nonprofit Organisations Act, 1997</span>
            </div>

            <div className="bg-[#FFF9F0]/60 p-4 rounded-xl border border-[#2D5A27]/10">
              <span className="text-xs uppercase font-bold text-[#E8722A] block mb-1">National Office</span>
              <span className="text-xs font-medium text-[#2B2B2B] block">Mid-Ennerdale, Johannesburg South</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#2D5A27]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#2B2B2B]/75">
              Changing Life Ministries complies with all statutory non-profit governance regulations in the Republic of South Africa.
            </p>
            <button
              type="button"
              onClick={() => navigate('/leadership')}
              className="px-5 py-2.5 bg-[#2D5A27] text-white text-xs font-semibold rounded-lg hover:bg-[#1F3E1B] transition-colors cursor-pointer shrink-0 inline-flex items-center gap-1.5"
            >
              <span>View Executive Leadership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
