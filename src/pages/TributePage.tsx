/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../lib/router.tsx';
import { loadStoredImages } from '../lib/storage.ts';
import jenniferDefaultPortrait from '../assets/images/jennifer_naude_1791975308457.jpg';
import {
  Heart,
  Flame,
  BookOpen,
  Award,
  ShieldCheck,
  Calendar,
  Phone,
  Send,
  CheckCircle2,
  Share2,
  Printer,
  Sparkles,
  ArrowRight,
  Check,
  Quote,
  Feather
} from 'lucide-react';

interface CondolenceMessage {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
  isOfficial?: boolean;
}

const INITIAL_TRIBUTES: CondolenceMessage[] = [
  {
    id: 'tribute-1',
    name: 'Bishop Leona Swartz ("Ma Bishop")',
    relation: 'Founder & Spiritual Leader, Changing Lives Ministries',
    message:
      'My dearest sister Jennifer, you were my armor-bearer, my prayer partner, and the quiet steady hand that kept our ministry in godly order. Whenever the storms blew, your gentle voice and unwavering faith reminded us that God is our refuge. Your ledger was spotless, your heart was pure, and your love for the children across our feeding schemes will never be forgotten. Rest softly in the bosom of your Saviour, my beloved friend.',
    date: 'October 14, 2026',
    isOfficial: true,
  },
  {
    id: 'tribute-2',
    name: 'Mr. Derrick Swartz',
    relation: 'Chief Executive Officer (CEO)',
    message:
      'Behind every soup kitchen, every food parcel distributed, and every provincial outreach stood Miss Jennifer Naude. She worked tirelessly behind the scenes ensuring our compliance with the Department of Social Development and keeping our records flawless. She bore administrative burdens with grace so our teams could minister with confidence. Changing Lives Ministries owes an eternal debt of gratitude to our faithful Company Secretary.',
    date: 'October 14, 2026',
    isOfficial: true,
  },
  {
    id: 'tribute-3',
    name: 'Mr. Warren Jansen',
    relation: 'Chief Financial Officer (CFO)',
    message:
      'Working alongside Jennifer on our board minutes, statutory filings, and non-profit governance was an honor. Her integrity was beyond reproach. She taught everyone around her that transparency before authorities is an act of Christian worship. Her legacy of excellence and accountability will remain our standard forever.',
    date: 'October 14, 2026',
    isOfficial: true,
  },
  {
    id: 'tribute-4',
    name: 'The Sunday School & Community Outreach Team',
    relation: 'Welkom & Ennerdale Feeding Volunteers',
    message:
      'Thank you, Auntie Jennifer, for always checking that the children were fed, clothed, and prayed over. Even when you were working on official paperwork, you always had a warm smile, an encouraging scripture, and time to listen. We will carry your heartbeat for our communities forward.',
    date: 'October 14, 2026',
    isOfficial: false,
  },
];

export function TributePage() {
  const { navigate } = useRouter();

  // Permanent memorial portrait
  const [photoSrc, setPhotoSrc] = useState<string>(jenniferDefaultPortrait);

  // Candles lit state
  const [candleCount, setCandleCount] = useState<number>(142);
  const [hasLitCandle, setHasLitCandle] = useState<boolean>(false);
  const [candleFlicker, setCandleFlicker] = useState<boolean>(true);

  // Guestbook & Condolence messages
  const [messages, setMessages] = useState<CondolenceMessage[]>(INITIAL_TRIBUTES);
  const [newName, setNewName] = useState('');
  const [newRelation, setNewRelation] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Load persisted photo & custom tributes from storage
  useEffect(() => {
    try {
      const storedPhoto = localStorage.getItem('clm_jennifer_photo');
      if (storedPhoto) {
        setPhotoSrc(storedPhoto);
      } else {
        loadStoredImages().then((stored) => {
          if (stored['jennifer_naude_memorial.jpg']) {
            setPhotoSrc(stored['jennifer_naude_memorial.jpg']);
          }
        }).catch(() => {});
      }

      const storedCandles = localStorage.getItem('clm_jennifer_candles');
      if (storedCandles) {
        setCandleCount(parseInt(storedCandles, 10));
      }

      const storedUserCandle = localStorage.getItem('clm_jennifer_user_lit');
      if (storedUserCandle === 'true') {
        setHasLitCandle(true);
      }

      const storedTributes = localStorage.getItem('clm_jennifer_tributes');
      if (storedTributes) {
        const parsed = JSON.parse(storedTributes);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages([...parsed, ...INITIAL_TRIBUTES]);
        }
      }
    } catch {
      // storage unavailable
    }
  }, []);

  const handleLightCandle = () => {
    if (hasLitCandle) return;
    const newCount = candleCount + 1;
    setCandleCount(newCount);
    setHasLitCandle(true);
    try {
      localStorage.setItem('clm_jennifer_candles', newCount.toString());
      localStorage.setItem('clm_jennifer_user_lit', 'true');
    } catch {
      // ignore
    }
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;

    const tribute: CondolenceMessage = {
      id: `custom-${Date.now()}`,
      name: newName.trim(),
      relation: newRelation.trim() || 'Friend & Supporter',
      message: newMessage.trim(),
      date: new Date().toLocaleDateString('en-ZA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      isOfficial: false,
    };

    const updated = [tribute, ...messages];
    setMessages(updated);
    setFormSubmitted(true);
    setNewName('');
    setNewRelation('');
    setNewMessage('');

    try {
      const customOnly = updated.filter((m) => m.id.startsWith('custom-'));
      localStorage.setItem('clm_jennifer_tributes', JSON.stringify(customOnly));
    } catch {
      // ignore
    }

    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2B2B2B]">
      {/* Top Memorial Ribbon */}
      <div className="bg-[#1C3318] text-[#F4A261] py-2.5 px-4 text-center text-xs font-semibold tracking-wider uppercase border-b border-[#2D5A27]/40 flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 text-[#F4A261] animate-pulse" />
        <span>In Loving Memory &middot; Miss Jennifer Naude &middot; Born June 22, 1996 &ndash; August 16, 2023</span>
        <Flame className="w-4 h-4 text-[#F4A261] animate-pulse" />
      </div>

      {/* Hero Memorial Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F3E1B] via-[#2D5A27] to-[#1F3E1B] text-white py-16 sm:py-24 px-6 sm:px-12 text-center">
        {/* Soft Background Accents */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4A261_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-[#F4A261]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Born June 22, 1996 &ndash; August 16, 2023 &middot; Forever In God&rsquo;s Peace</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Thank You &amp; Farewell, <br className="hidden sm:inline" />
            <span className="text-[#F4A261] italic font-serif">Miss Jennifer Naude</span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-medium tracking-wide">
            Company Secretary &middot; Pillar of Statutory Compliance &middot; Born June 22, 1996 &ndash; August 16, 2023 &middot; Changing Lives Ministries
          </p>

          {/* Scripture Verse Plaque */}
          <div className="max-w-2xl mx-auto bg-black/25 backdrop-blur-sm border border-white/15 p-5 sm:p-6 rounded-2xl text-left shadow-lg">
            <Quote className="w-6 h-6 text-[#F4A261] mb-2 opacity-80" />
            <p className="italic text-sm sm:text-base text-[#FFF4E6] leading-relaxed font-serif">
              &ldquo;I have fought the good fight, I have finished the race, I have kept the faith. Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day.&rdquo;
            </p>
            <span className="block text-right text-xs font-semibold text-[#F4A261] uppercase tracking-wider mt-2">
              &mdash; 2 Timothy 4:7-8
            </span>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleLightCandle}
              disabled={hasLitCandle}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer ${
                hasLitCandle
                  ? 'bg-[#E8722A] text-white cursor-default'
                  : 'bg-white text-[#2D5A27] hover:bg-[#FFF9F0]'
              }`}
            >
              <Flame className={`w-4 h-4 ${hasLitCandle ? 'text-white' : 'text-[#E8722A]'}`} />
              <span>{hasLitCandle ? 'Your Candle is Lit' : 'Light a Memorial Candle'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#F4A261]" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedLink ? 'Link Copied' : 'Share Memorial'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Keepsake</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Memorial Body */}
      <section className="py-12 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Interactive Candle */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 border-[#2D5A27]/20 rounded-3xl p-6 sm:p-8 shadow-md text-center relative overflow-hidden">
              {/* Decorative Laurel Header */}
              <div className="text-xs uppercase tracking-widest text-[#E8722A] font-bold mb-3 flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>In Eternal Remembrance</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              {/* Portrait Frame (Clean, unobstructed, permanent) */}
              <div className="relative mx-auto w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#F4A261]/60 shadow-xl bg-[#2D5A27]/10">
                <img
                  src={photoSrc}
                  alt="Miss Jennifer Naude - Company Secretary Memorial"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dignified Memorial Inscription & Dates */}
              <div className="mt-5 space-y-1 text-center">
                <h3 className="font-serif font-bold text-2xl text-[#2D5A27]">
                  Miss Jennifer Naude
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#E8722A] font-bold">
                  Company Secretary &middot; Changing Lives Ministries
                </p>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF9F0] border border-[#E8722A]/30 text-xs font-semibold text-[#8C3A00] mt-2 shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-[#E8722A]" />
                  <span>Born June 22, 1996 &ndash; August 16, 2023</span>
                </div>
              </div>

              {/* Live Virtual Candle Display */}
              <div className="mt-6 bg-[#FFF9F0] border border-[#2D5A27]/15 rounded-2xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8722A] opacity-35" />
                    <Flame className="w-6 h-6 text-[#E8722A]" />
                  </span>
                  <span className="font-serif font-bold text-2xl text-[#2D5A27]">
                    {candleCount}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#2B2B2B]/75 block uppercase tracking-wider">
                  Memorial Candles Lit in Her Honor
                </span>

                <button
                  type="button"
                  onClick={handleLightCandle}
                  disabled={hasLitCandle}
                  className={`mt-3 w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                    hasLitCandle
                      ? 'bg-[#2D5A27] text-white cursor-default'
                      : 'bg-[#E8722A] hover:bg-[#D4601A] text-white shadow-sm hover:shadow'
                  }`}
                >
                  {hasLitCandle ? '✓ Your Candle Shines in Memory' : 'Light a Memorial Candle'}
                </button>
              </div>

              {/* Official Record Badge */}
              <div className="mt-5 text-left text-xs text-[#2B2B2B]/80 space-y-1.5 bg-[#F4F6F3] p-4 rounded-xl border border-[#2D5A27]/10">
                <div className="font-bold text-[#2D5A27] uppercase text-[11px] tracking-wider mb-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E8722A]" />
                  <span>Statutory Office Held</span>
                </div>
                <p>
                  <strong>Designation:</strong> Company Secretary &amp; Public Officer
                </p>
                <p>
                  <strong>Organization:</strong> Changing Lives Ministries (NPO 222-986 &amp; NPC 2021/582044/08)
                </p>
                <p>
                  <strong>Service Portfolio:</strong> Department of Social Development regulatory compliance, board minutes, founding non-profit governance, and statutory filings.
                </p>
                <p>
                  <strong>Life &amp; Remembrance:</strong> Born June 22, 1996 &ndash; August 16, 2023
                </p>
                <p>
                  <strong>Memorial Contact:</strong> +27 64 774 5884
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tribute Bio, Leadership Letters & Condolence Book */}
          <div className="lg:col-span-7 space-y-8">
            {/* The Life & Service Story */}
            <div className="bg-white border border-[#2D5A27]/20 rounded-3xl p-8 shadow-xs space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8722A]">
                <Feather className="w-4 h-4" />
                <span>Our Tribute of Gratitude</span>
              </div>

              <h2 className="font-serif font-bold text-3xl text-[#2D5A27]">
                A Faithful Hand at the Helm of Ministry
              </h2>

              <p className="text-base text-[#2B2B2B] leading-relaxed">
                When people think of ministry outreach, they often envision the soup pots, the warm clothes handed to shivering children, and the pastors preaching under the open sky. Yet behind every single bag of mealie meal delivered and every child clothed stood the meticulous, tireless, and godly devotion of <strong>Miss Jennifer Naude</strong>.
              </p>

              <p className="text-sm text-[#2B2B2B]/90 leading-relaxed">
                As Company Secretary of Changing Lives Ministries, Jennifer carried the vital responsibility of maintaining full regulatory statutory compliance, non-profit records, board minutes, and institutional reporting with the <strong>Department of Social Development (DSD)</strong> under South African non-profit legislation. She understood that doing God&rsquo;s work required doing it with absolute transparency, honesty, and legal excellence before God and the nation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className="bg-[#FFF9F0] p-4 rounded-xl border border-[#2D5A27]/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#2D5A27] font-bold text-xs uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-[#E8722A]" />
                    <span>Statutory Excellence</span>
                  </div>
                  <p className="text-xs text-[#2B2B2B]/80 leading-relaxed">
                    Maintained pristine documentation for NPO 222-986 and NPC registration, ensuring every donor rand was accounted for.
                  </p>
                </div>

                <div className="bg-[#FFF9F0] p-4 rounded-xl border border-[#2D5A27]/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#2D5A27] font-bold text-xs uppercase tracking-wide">
                    <Heart className="w-4 h-4 text-[#E8722A]" />
                    <span>Pastoral Heart</span>
                  </div>
                  <p className="text-xs text-[#2B2B2B]/80 leading-relaxed">
                    Prayed over staff, encouraged volunteers, and remained an irreplaceable confidante to Bishop Leona Swartz and the executive team.
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#2B2B2B]/90 leading-relaxed">
                Her departure leaves an aching void in the corridors of Changing Lives Ministries and in the hearts of everyone who had the privilege of knowing her warm laughter, her gentle wisdom, and her quiet strength. We bid her farewell not as those without hope, but as those who know she has entered into the glorious rest prepared for the faithful.
              </p>
            </div>

            {/* Leadership Tributes */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-2xl text-[#2D5A27] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#E8722A]" />
                  <span>Words from the Executive Council</span>
                </h3>
                <span className="text-xs text-[#2B2B2B]/60 font-medium">Official Ministry Tributes</span>
              </div>

              <div className="space-y-4">
                {messages
                  .filter((m) => m.isOfficial)
                  .map((tribute) => (
                    <div
                      key={tribute.id}
                      className="bg-[#FFFFFF] border-l-4 border-[#2D5A27] border-y border-r border-[#2D5A27]/15 rounded-2xl p-6 shadow-xs relative"
                    >
                      <Quote className="w-5 h-5 text-[#F4A261] absolute top-5 right-5 opacity-40" />
                      <div className="mb-2">
                        <strong className="text-base font-serif font-bold text-[#2D5A27] block">
                          {tribute.name}
                        </strong>
                        <span className="text-xs text-[#E8722A] font-semibold block">
                          {tribute.relation}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed italic mb-3">
                        &ldquo;{tribute.message}&rdquo;
                      </p>
                      <span className="text-[11px] text-[#2B2B2B]/50 block">
                        Recorded on {tribute.date}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Condolence & Farewell Guestbook */}
            <div className="bg-white border border-[#2D5A27]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8722A] mb-1">
                  <Heart className="w-4 h-4 fill-[#E8722A]" />
                  <span>Condolence &amp; Farewell Book</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#2D5A27]">
                  Leave a Thank You &amp; Farewell Message
                </h3>
                <p className="text-xs text-[#2B2B2B]/75 mt-1">
                  Share your words of gratitude, personal memories, or prayers for Miss Jennifer Naude and her family. All messages are permanently preserved on the site.
                </p>
              </div>

              {/* Submission Form */}
              <form onSubmit={handleMessageSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D5A27] uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g. Pastor David Jacobs / Sister Mary"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#2D5A27]/25 focus:ring-2 focus:ring-[#2D5A27] focus:outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D5A27] uppercase tracking-wider mb-1">
                      Your Relationship / Church Affiliation
                    </label>
                    <input
                      type="text"
                      value={newRelation}
                      onChange={(e) => setNewRelation(e.target.value)}
                      placeholder="e.g. Ennerdale Resident / Church Member / Colleague"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#2D5A27]/25 focus:ring-2 focus:ring-[#2D5A27] focus:outline-none text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D5A27] uppercase tracking-wider mb-1">
                    Your Farewell Message or Tribute *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Share how Miss Jennifer impacted your life, words of comfort to her loved ones, or scripture..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2D5A27]/25 focus:ring-2 focus:ring-[#2D5A27] focus:outline-none text-xs leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#2D5A27] hover:bg-[#1F3E1B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Tribute Message</span>
                  </button>

                  {formSubmitted && (
                    <span className="text-xs font-semibold text-green-700 flex items-center gap-1.5 animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Thank you! Your tribute has been added to the book.
                    </span>
                  )}
                </div>
              </form>

              {/* Community Tributes List */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#2D5A27]">
                  Recent Messages of Comfort &amp; Gratitude
                </h4>

                <div className="space-y-3.5">
                  {messages
                    .filter((m) => !m.isOfficial)
                    .map((msg) => (
                      <div
                        key={msg.id}
                        className="bg-[#FFF9F0] border border-[#2D5A27]/15 rounded-xl p-4 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <strong className="text-xs font-bold text-[#2D5A27] block">
                              {msg.name}
                            </strong>
                            <span className="text-[11px] text-[#E8722A] font-medium">
                              {msg.relation}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#2B2B2B]/50">{msg.date}</span>
                        </div>
                        <p className="text-xs text-[#2B2B2B]/90 leading-relaxed">
                          {msg.message}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scriptures of Comfort Banner */}
      <section className="bg-[#1F3E1B] text-white py-14 px-6 sm:px-8 border-t border-[#2D5A27]/40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
            <h5 className="font-serif font-bold text-base text-[#F4A261] mb-2">
              Revelation 14:13
            </h5>
            <p className="text-xs text-white/80 leading-relaxed italic">
              &ldquo;Blessed are the dead who die in the Lord from now on... they will rest from their labor, for their deeds will follow them.&rdquo;
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
            <h5 className="font-serif font-bold text-base text-[#F4A261] mb-2">
              Psalm 116:15
            </h5>
            <p className="text-xs text-white/80 leading-relaxed italic">
              &ldquo;Precious in the sight of the Lord is the death of his faithful servants.&rdquo;
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
            <h5 className="font-serif font-bold text-base text-[#F4A261] mb-2">
              Matthew 25:21
            </h5>
            <p className="text-xs text-white/80 leading-relaxed italic">
              &ldquo;Well done, good and faithful servant! You have been faithful with a few things; enter into the joy of your master.&rdquo;
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F4A261]" />
            <span>
              Changing Lives Ministries will forever honor the memory and statutory leadership of Miss Jennifer Naude.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/leadership" className="text-[#F4A261] hover:underline font-semibold flex items-center gap-1">
              <span>View Leadership Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
