/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useRouter } from '../lib/router.tsx';
import { Heart, Users, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export function ProgramsPage() {
  const { navigate } = useRouter();

  const programs = [
    {
      title: 'Community Outreach & Nutritional Support',
      subtitle: 'Grassroots Food & Relief Assistance',
      icon: Heart,
      accent: '#E8722A',
      metrics: 'Community Relief Initiative',
      description:
        'Providing meals, emergency grocery parcels, and compassionate food support to vulnerable families and children facing economic hardship.',
      highlights: [
        'Nutritional support and meal distributions during community outreaches',
        'Emergency food hampers provided to vulnerable households in need',
        'Grassroots outreach coordinated in partnership with local community members',
      ],
    },
    {
      title: 'Material Aid & Clothing Relief',
      subtitle: 'Warmth, Footwear & Everyday Essentials',
      icon: Sparkles,
      accent: '#2D5A27',
      metrics: 'Humanitarian Relief Support',
      description:
        'Distributing warm clothing, schoolwear, footwear, and blankets to assist underprivileged children and families during harsh winter seasons.',
      highlights: [
        'Seasonal warmth and blanket distribution drives',
        'Clothing packages and essential shoes for school-going youth',
        'Direct material support for families experiencing distress',
      ],
    },
    {
      title: 'Women & Youth Empowerment Mentorship',
      subtitle: 'Life Skills, Leadership & Capacity Building',
      icon: Users,
      accent: '#E8722A',
      metrics: 'Mentorship & Fellowship',
      description:
        'Empowering mothers, young women, and adolescents through mentorship gatherings, counseling, and practical encouragement led by founder Bishop Leona Swartz.',
      highlights: [
        'Empowerment conferences and community seminars',
        'Life skills, household budgeting, and moral encouragement',
        'Pastoral guidance, prayer support, and family mediation',
      ],
    },
    {
      title: 'Field Missions & Fellowship Outreaches',
      subtitle: 'Pastoral Care & Regional Gatherings',
      icon: MapPin,
      accent: '#2D5A27',
      metrics: 'Apostolic Field Ministry',
      description:
        'Mobile outreach visitations delivering humanitarian aid, pastoral encouragement, and Gospel ministry to remote villages and urban settlements.',
      highlights: [
        'Field visitations to local faith communities and rural areas',
        'Direct fellowship and care packages delivered to community elders and families',
        'Praise, worship, and spiritual revival gatherings',
      ],
    },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Header Banner */}
      <section className="bg-[#2D5A27] text-white py-16 sm:py-24 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F4A261] mb-3">
            Our Core Initiatives &amp; Relief Programs
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            What We Do
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Delivering holistic humanitarian care, family support, and community empowerment through active faith.
          </p>
        </div>
      </section>

      {/* Program Detailed Cards */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-12">
        {programs.map((program, idx) => {
          const Icon = program.icon;
          return (
            <div
              key={idx}
              className="bg-[#FFF9F0] border border-[#2D5A27]/20 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#2D5A27]/20 flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" style={{ color: program.accent }} />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#2D5A27]">
                      {program.title}
                    </h2>
                    <span className="text-xs font-medium text-[#E8722A] uppercase tracking-wider block">
                      {program.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-base text-[#2B2B2B] leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
                    Key Program Highlights:
                  </div>
                  {program.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-[#2B2B2B]">
                      <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-white border border-[#2D5A27]/20 rounded-2xl p-6 text-center shadow-xs flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs uppercase font-bold text-[#2D5A27]/70 block mb-1">
                    Program Focus
                  </span>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#E8722A] mb-3">
                    {program.metrics}
                  </div>
                  <p className="text-xs text-[#2B2B2B]/75 leading-relaxed">
                    Operated in accordance with our registered non-profit mandate (NPO 222-986).
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="mt-6 w-full py-3 bg-[#2D5A27] hover:bg-[#1F3E1B] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Sponsor This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Call to Action Bar */}
      <section className="bg-[#FFF9F0] py-16 px-6 sm:px-8 border-t border-[#2D5A27]/15">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="font-serif text-3xl font-bold text-[#2D5A27]">
            Partner With Our Outreach Work
          </h3>
          <p className="text-base text-[#2B2B2B] leading-relaxed max-w-2xl mx-auto">
            Whether through grocery sponsorships, material aid, or volunteer service, your partnership supports vulnerable South African families.
          </p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            style={{
              background: 'linear-gradient(90deg, #E8722A, #F4A261)',
            }}
            className="px-8 py-4 text-white text-base font-semibold rounded-xl shadow-lg hover:brightness-105 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Connect With Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
