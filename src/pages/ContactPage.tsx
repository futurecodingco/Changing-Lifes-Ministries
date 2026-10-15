/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useRouter, Link } from '../lib/router.tsx';
import { Phone, Mail, MapPin, Copy, Check, ShieldCheck, Send, CheckCircle2, Heart, Building2, ArrowRight, Flame } from 'lucide-react';

export function ContactPage() {
  const { navigate } = useRouter();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Partner & Sponsor Outreach',
    message: '',
  });

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FFFFFF]">
      {/* Header Banner */}
      <section className="bg-[#2D5A27] text-white py-16 sm:py-24 px-6 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F4A261] mb-3">
            Connect &middot; Partner &middot; Uplift
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Contact &amp; Partner With Us
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            We welcome corporate sponsors, church partners, volunteers, and community supporters across South Africa.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="font-serif font-bold text-3xl text-[#2D5A27] mb-3">
                Reach Out Directly
              </h2>
              <p className="text-sm sm:text-base text-[#2B2B2B] leading-relaxed">
                Connect directly with our founder or executive office for program inquiries, sponsorships, or pastoral counseling.
              </p>
            </div>

            {/* Founder Direct Contact Card */}
            <div className="bg-[#FFF9F0] border-2 border-[#2D5A27]/25 rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E8722A]" />
                  <span className="text-xs uppercase font-bold text-[#E8722A] tracking-wider">
                    Founder Direct Office
                  </span>
                </div>
                <span className="text-[11px] bg-[#2D5A27]/10 text-[#2D5A27] px-2.5 py-0.5 rounded-full font-semibold">
                  Primary Line
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-[#2D5A27]">
                Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;)
              </h3>
              <p className="text-xs text-[#2B2B2B]/75 mb-6">
                Founder &amp; Spiritual Leader &middot; Changing Lives Ministries
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-white p-4 rounded-xl border border-[#2D5A27]/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF9F0] text-[#2D5A27] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#2D5A27]" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#2B2B2B]/60 block">Direct Telephone &amp; WhatsApp</span>
                      <a href="tel:+27810410673" className="text-base font-bold text-[#2D5A27] hover:underline">
                        +27 81 041 0673
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyText('+27810410673', 'bishop-phone')}
                      className="p-2 text-[#2D5A27] hover:text-[#E8722A] hover:bg-[#FFF9F0] rounded-lg transition-colors cursor-pointer"
                      title="Copy phone"
                    >
                      {copiedKey === 'bishop-phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href="tel:+27810410673"
                      className="px-3 py-1.5 bg-[#2D5A27] text-white text-xs font-semibold rounded-md hover:bg-[#1F3E1B] transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-4 rounded-xl border border-[#2D5A27]/15 flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#FFF9F0] text-[#2D5A27] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#2D5A27]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#2B2B2B]/60 block">Official Email Address</span>
                      <a href="mailto:Leonaswartz510@gmail.com" className="text-sm font-bold text-[#2D5A27] hover:underline truncate block">
                        Leonaswartz510@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <button
                      type="button"
                      onClick={() => copyText('Leonaswartz510@gmail.com', 'bishop-email')}
                      className="p-2 text-[#2D5A27] hover:text-[#E8722A] hover:bg-[#FFF9F0] rounded-lg transition-colors cursor-pointer"
                      title="Copy email"
                    >
                      {copiedKey === 'bishop-email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href="mailto:Leonaswartz510@gmail.com"
                      className="px-3 py-1.5 bg-[#E8722A] text-white text-xs font-semibold rounded-md hover:brightness-105 transition-colors"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office & Operations Card */}
            <div className="bg-[#FFFFFF] border border-[#2D5A27]/20 rounded-2xl p-6 shadow-xs space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#2D5A27]">
                Executive Administration
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#FFF9F0] p-3.5 rounded-xl border border-[#2D5A27]/10">
                  <span className="text-[#2B2B2B]/60 uppercase font-semibold block text-[10px]">Chief Executive Officer</span>
                  <strong className="text-sm text-[#2B2B2B] block">Mr. Derrick Swartz</strong>
                  <a href="tel:+27823200492" className="text-[#2D5A27] font-semibold hover:underline mt-1 inline-block">
                    +27 82 320 0492
                  </a>
                </div>
                <div className="bg-[#FFF9F0] p-3.5 rounded-xl border-2 border-[#E8722A]/30 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[#E8722A] uppercase font-bold block text-[10px] flex items-center gap-1">
                      <Flame className="w-3 h-3 text-[#E8722A]" />
                      <span>Company Secretary &middot; In Memoriam</span>
                    </span>
                  </div>
                  <strong className="text-sm text-[#2B2B2B] block mt-0.5">Miss Jennifer Naude</strong>
                  <span className="text-[11px] text-[#8C3A00] font-medium block">
                    Born June 22, 1996 &ndash; August 16, 2023
                  </span>
                  <div className="flex items-center justify-between mt-1 text-xs">
                    <a href="tel:+27647745884" className="text-[#2D5A27] font-semibold hover:underline">
                      +27 64 774 5884
                    </a>
                    <Link to="/tribute" className="text-[11px] font-bold text-[#E8722A] hover:underline flex items-center gap-0.5">
                      <span>Tribute Page &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Physical Address */}
              <div className="pt-2 flex items-start gap-3 text-xs text-[#2B2B2B]">
                <MapPin className="w-5 h-5 text-[#E8722A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D5A27] block text-sm">National Physical Office:</strong>
                  <span>77/6 Skeleton Street, Mid-Ennerdale, Johannesburg, Gauteng, 1830, South Africa</span>
                  <span className="block text-[#2B2B2B]/70 mt-0.5">Postal Address: PO Box 553, Ennerdale, 1826</span>
                </div>
              </div>
            </div>

            {/* Direct Bank Donation Card */}
            <div className="bg-[#1F3E1B] text-white rounded-2xl p-6 sm:p-7 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#F4A261] fill-[#F4A261]" />
                  <span className="text-xs uppercase font-bold text-[#F4A261] tracking-wider">
                    Make a Direct Contribution
                  </span>
                </div>
                <span className="text-[11px] bg-white/10 text-white px-2 py-0.5 rounded font-mono">
                  Absa Bank
                </span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-xl text-white">
                  Absa Account: 9348796699
                </h4>
                <p className="text-xs text-[#E2EBDD] mt-1 leading-relaxed">
                  Branch: <strong>Lenasia</strong> &middot; Universal Branch Code: <strong>632005</strong>. Every Rand directly funds hot meals, blankets, and school clothing for vulnerable children.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate('/donate')}
                style={{
                  background: 'linear-gradient(90deg, #E8722A, #F4A261)',
                }}
                className="w-full text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-sm hover:brightness-105 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Full Absa Bank Details &amp; Giving Tiers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFF9F0] border border-[#2D5A27]/20 rounded-3xl p-6 sm:p-10 shadow-md">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#2D5A27] mb-2">
                Send an Online Message
              </h3>
              <p className="text-xs sm:text-sm text-[#2B2B2B]/75 mb-6">
                Fill in the details below and an executive officer will respond to your message promptly.
              </p>

              {formSubmitted ? (
                <div className="bg-white border border-[#2D5A27] rounded-2xl p-8 text-center space-y-4 shadow-sm">
                  <div className="w-14 h-14 bg-[#FFF9F0] rounded-full mx-auto flex items-center justify-center text-[#2D5A27]">
                    <CheckCircle2 className="w-8 h-8 text-[#2D5A27]" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2D5A27]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-[#2B2B2B] leading-relaxed">
                    Thank you for reaching out to Changing Lives Ministries. Your message has been routed to our executive office.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        interest: 'Partner & Sponsor Outreach',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold text-[#E8722A] hover:underline cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full bg-white border border-[#2D5A27]/30 rounded-xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-white border border-[#2D5A27]/30 rounded-xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+27 00 000 0000"
                        className="w-full bg-white border border-[#2D5A27]/30 rounded-xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                      Program / Inquiry Category
                    </label>
                    <select
                      id="contact-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-white border border-[#2D5A27]/30 rounded-xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A] transition-colors cursor-pointer"
                    >
                      <option value="Partner & Sponsor Outreach">Partner &amp; Sponsor Outreach</option>
                      <option value="Feeding Program Funding">Nutritional Feeding Scheme Support</option>
                      <option value="Clothing Drive Support">Clothing Drive &amp; Material Aid</option>
                      <option value="Volunteer Work">Volunteer &amp; Community Mission Work</option>
                      <option value="Pastoral & Prayer Counsel">Pastoral &amp; Prayer Counsel</option>
                      <option value="General Inquiry">General Executive Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share how you would like to partner, donate, or connect..."
                      className="w-full bg-white border border-[#2D5A27]/30 rounded-xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(90deg, #E8722A, #F4A261)',
                    }}
                    className="w-full text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:brightness-105 transition-all cursor-pointer text-sm inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Office</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
