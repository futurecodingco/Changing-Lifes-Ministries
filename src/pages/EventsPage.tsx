/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LogoEmblem } from '../components/Logo.tsx';
import { MinistryEvent } from '../types/index.ts';
import { Calendar, MapPin, ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';

import herHonourRestoredImg from '../assets/images/her_honour_restored.jpg';
import winterWordWorshipImg from '../assets/images/winter_word_worship.jpg';
import welkomWomenOutreachImg from '../assets/images/welkom_women_outreach.jpg';
import limpopoMissionImg from '../assets/images/limpopo_mission.jpg';
import vendaFellowshipImg from '../assets/images/venda_fellowship.jpg';

interface EventsPageProps {
  uploadedImages: Record<string, string>;
  onOpenLightbox: (src: string, caption: string) => void;
}

export function EventsPage({
  uploadedImages,
  onOpenLightbox,
}: EventsPageProps) {
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  const ministryEvents: MinistryEvent[] = [
    {
      id: 1,
      storageKey: 'WhatsApp Image 2026-10-12 at 13.55.33.jpeg',
      defaultImage: herHonourRestoredImg,
      title: 'Her Honour Is Restored (Haar Eer Is Herstel)',
      badge: 'Women Empowerment Convocation',
      shortTitle: 'Her Honour Is Restored',
      date: '20 September 2025 · 10:00 AM',
      location: '101 9th Avenue, Mid-Ennerdale',
      themeVerse: 'Isaiah 43:19 (NIV)',
      attributes: [
        { label: 'Presiding Host', value: 'Bishop Leona Swartz ("Ma Bishop")' },
        { label: 'Guest Speakers', value: 'Prophetess Claudia Abrahams · Prophetess Elect Monica Shreuder · Pastor Belinda Fortuin' },
        { label: 'Venue Location', value: '101 9th Avenue, Mid-Ennerdale' },
        { label: 'Event Date & Time', value: '20 September 2025 at 10:00 AM' },
        { label: 'RSVP / Catering', value: 'Leona: 081 041 0673 · Naurdine: 073 011 5154' },
      ],
      summary:
        'A milestone spiritual convocation presenting "Her Honour Is Restored (Haar Eer Is Herstel)", bringing women together for uplifting worship, restoration, prophetic ministry, and fellowship in Mid-Ennerdale.',
    },
    {
      id: 2,
      storageKey: 'WhatsApp Image 2026-10-12 at 13.56.14.jpeg',
      defaultImage: winterWordWorshipImg,
      title: 'Winter Word & Worship',
      badge: 'National Worship Gathering',
      shortTitle: 'Winter Word Worship',
      date: '4 June',
      location: 'Johannesburg South, Gauteng',
      themeVerse: 'Isaiah 43:19 (NIV)',
      attributes: [
        { label: 'Presiding Host', value: 'Bishop Leona Swartz ("Ma Bishop")' },
        { label: 'Co-Host', value: 'Dayle Ross' },
        { label: 'Worship Leader', value: 'Ps Mangazi' },
        { label: 'Guest Ministers', value: 'Lauren Napier · Phumzile Kubeka · Pinky Mohale' },
        { label: 'Venue Location', value: 'Johannesburg South' },
        { label: 'Event Date', value: '4 June' },
      ],
      summary:
        'A transformative regional gathering of praise, prophetic prayer, and worship, bringing together leaders and congregants from across Gauteng and neighbouring regions.',
    },
    {
      id: 3,
      storageKey: 'WhatsApp Image 2026-10-12 at 13.56.59.jpeg',
      defaultImage: welkomWomenOutreachImg,
      title: 'Community Celebration & Outreach',
      badge: 'Women Empowerment & Fellowship',
      shortTitle: 'Welkom Outreach',
      date: '20 August 2023',
      location: 'Welkom, Free State',
      attributes: [
        { label: 'Date', value: '20 August 2023' },
        { label: 'Location', value: 'Welkom, Free State' },
        { label: 'Focus Theme', value: 'Women Empowerment, Fellowship & Community Celebration' },
        { label: 'Host Ministry', value: 'Changing Life Ministries Outreach Team' },
      ],
      summary:
        'A milestone community celebration and women empowerment gathering in Welkom, bringing together women and families for fellowship, pastoral care, and community upliftment.',
    },
    {
      id: 4,
      storageKey: 'WhatsApp Image 2026-10-12 at 14.08.52.jpeg',
      defaultImage: limpopoMissionImg,
      title: 'Limpopo Mission Visitation',
      badge: 'Regional Field Mission',
      shortTitle: 'Limpopo Mission',
      date: 'April 2021',
      location: 'Limpopo Province',
      attributes: [
        { label: 'Date', value: 'April 2021' },
        { label: 'Location', value: 'Limpopo Province, South Africa' },
        { label: 'Delegation Leadership', value: 'Bishop Leona Swartz ("Ma Bishop") & Outreach Team' },
        { label: 'Core Mission', value: 'Rural Church Visitation, Pastoral Support & Family Aid' },
      ],
      summary:
        'A historic regional apostolic visitation led by our founder Bishop Leona Swartz, providing critical humanitarian assistance and spiritual fellowship to rural communities.',
    },
    {
      id: 5,
      storageKey: 'WhatsApp Image 2026-10-12 at 13.59.39.jpeg',
      defaultImage: vendaFellowshipImg,
      title: 'Venda Outreach & Fellowship',
      badge: 'Community Fellowship',
      shortTitle: 'Venda Fellowship',
      date: '2020',
      location: 'Venda, Limpopo',
      attributes: [
        { label: 'Date', value: '2020' },
        { label: 'Location', value: 'Venda, Limpopo' },
        { label: 'Mission Focus', value: 'Cross-Cultural Ministry, Elderly Care & Youth Upliftment' },
        { label: 'Partnership', value: 'Local Community Leaders & Faith Assemblies' },
      ],
      summary:
        'Grassroots fellowship and material relief mission to remote villages in Venda, laying the foundation for ongoing youth development and regional ministry collaboration.',
    },
  ];

  const currentEvent = ministryEvents[activeEventIndex] || ministryEvents[0];
  const activeImageSrc = uploadedImages[currentEvent.storageKey] || currentEvent.defaultImage;

  return (
    <div className="bg-[#FFFFFF]">
      {/* Header Banner */}
      <section className="bg-[#2D5A27] text-white py-16 sm:py-24 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F4A261] mb-3">
            Ministry Gatherings &amp; Field Records
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Events &amp; Outreaches
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Reliving transformative gatherings, worship conferences, and field visitations led by Changing Life Ministries across South Africa.
          </p>
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Event Selector Navigation Strip */}
        <div className="flex items-center justify-center gap-2.5 mb-10 flex-wrap">
          {ministryEvents.map((event, idx) => (
            <button
              key={event.id}
              type="button"
              onClick={() => setActiveEventIndex(idx)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full border transition-all cursor-pointer flex items-center gap-2 shadow-xs ${
                activeEventIndex === idx
                  ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-md scale-102'
                  : 'bg-[#FFF9F0] text-[#2B2B2B] border-[#2D5A27]/20 hover:border-[#E8722A] hover:bg-white'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  activeEventIndex === idx ? 'bg-[#F4A261]' : 'bg-[#2D5A27]/40'
                }`}
              />
              <span>{event.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Event Showcase Card */}
        <div className="bg-[#FFF9F0] border border-[#2D5A27]/20 rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {activeImageSrc ? (
                <div className="w-full bg-[#FFFFFF] border-2 border-[#2D5A27]/20 rounded-2xl p-3 shadow-md relative group">
                  <div
                    className="cursor-zoom-in relative overflow-hidden rounded-xl"
                    onClick={() => onOpenLightbox(activeImageSrc, currentEvent.title)}
                    title="Click to view full photo in high definition"
                  >
                    <img
                      src={activeImageSrc}
                      alt={currentEvent.title}
                      className="w-full h-auto max-h-[480px] object-contain rounded-lg group-hover:scale-101 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold transition-opacity">
                      <span className="bg-black/65 px-4 py-2 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                        <ZoomIn className="w-4 h-4" />
                        <span>View Full Image</span>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Archival Event Flyer Artwork Card */
                <div
                  className="w-full aspect-[3/4] bg-gradient-to-b from-[#2D5A27] to-[#1E3D1A] text-white rounded-2xl flex flex-col justify-between p-8 text-center shadow-xl border-4 border-[#F4A261]/30 relative overflow-hidden"
                >
                  <div className="absolute inset-3 border border-white/20 rounded-xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mb-3">
                      <LogoEmblem className="w-9 h-9" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F4A261]">
                      Changing Life Ministries
                    </span>
                  </div>

                  <div className="relative z-10 my-auto py-4">
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
                      {currentEvent.title}
                    </h4>
                    <p className="text-xs text-white/80 max-w-xs mx-auto">
                      {currentEvent.summary}
                    </p>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-white/20 text-xs flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2 text-[#FFF9F0] font-semibold">
                      <span>{currentEvent.date}</span>
                      <span>&middot;</span>
                      <span>{currentEvent.location}</span>
                    </div>
                    <span className="text-[10px] text-[#F4A261] uppercase tracking-wider font-semibold mt-1 inline-flex items-center gap-1">
                      <span>Official Ministry Convocation</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Event Editorial Details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8722A] mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E8722A]" />
                  <span>{currentEvent.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#2D5A27]">
                  {currentEvent.title}
                </h3>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#2B2B2B]/75 mt-1.5 font-medium">
                  <span className="flex items-center gap-1 text-[#2D5A27] font-semibold">
                    <Calendar className="w-4 h-4 text-[#E8722A]" />
                    {currentEvent.date}
                  </span>
                  <span>&middot;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#2D5A27]" />
                    {currentEvent.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#2B2B2B] leading-relaxed">
                {currentEvent.summary}
              </p>

              {/* Structured Event Credentials */}
              <div className="bg-[#FFFFFF] border border-[#2D5A27]/20 rounded-2xl p-6 shadow-xs divide-y divide-[#2D5A27]/10">
                {currentEvent.attributes.map((attr, idx) => (
                  <div
                    key={idx}
                    className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm"
                  >
                    <span className="text-xs uppercase font-bold tracking-wider text-[#2D5A27] sm:w-1/3">
                      {attr.label}
                    </span>
                    <span className="text-sm font-medium text-[#2B2B2B] sm:w-2/3">
                      {attr.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Event Navigation Controls */}
              <div className="pt-3 flex items-center justify-between text-xs text-[#2B2B2B]/75 border-t border-[#2D5A27]/15">
                <button
                  type="button"
                  onClick={() =>
                    setActiveEventIndex((prev) =>
                      prev === 0 ? ministryEvents.length - 1 : prev - 1
                    )
                  }
                  className="inline-flex items-center gap-1.5 font-semibold text-[#2D5A27] hover:text-[#E8722A] transition-colors cursor-pointer py-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Event</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {ministryEvents.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveEventIndex(i)}
                      aria-label={`Go to event ${i + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        activeEventIndex === i
                          ? 'bg-[#2D5A27] w-6'
                          : 'bg-[#2D5A27]/25 hover:bg-[#2D5A27]/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveEventIndex((prev) =>
                      prev === ministryEvents.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="inline-flex items-center gap-1.5 font-semibold text-[#2D5A27] hover:text-[#E8722A] transition-colors cursor-pointer py-1"
                >
                  <span>Next Event</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
