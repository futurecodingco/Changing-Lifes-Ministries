/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Heart,
  Copy,
  Check,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Utensils,
  Shirt,
  Sparkles,
  BookOpen,
  ArrowRight,
  Send,
  HelpCircle,
  Clock,
  Share2
} from 'lucide-react';
import { useRouter } from '../lib/router.tsx';

export function DonationsPage() {
  const { navigate } = useRouter();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  // Notification form state
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [notificationData, setNotificationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: 'R250',
    date: new Date().toISOString().split('T')[0],
    referenceUsed: '',
    cause: 'Community Feeding Schemes',
    message: '',
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const causes = [
    {
      id: 'feeding',
      title: 'Community Feeding Schemes',
      icon: Utensils,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      desc: 'Supplying fresh ingredients, gas, and provisions to prepare wholesome meals in Ennerdale and surrounding communities.',
    },
    {
      id: 'clothing',
      title: 'Clothing & Winter Blanket Drives',
      icon: Shirt,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      desc: 'Distributing warm winter wear, jackets, shoes, and blankets to infants, youths, and elderly community members.',
    },
    {
      id: 'youth',
      title: 'Youth Mentorship & Hope',
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      desc: 'Inspiring young people through spiritual discipleship, after-school mentorship, stationery drives, and positive life skills.',
    },
    {
      id: 'general',
      title: 'General Ministry Operations',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      desc: 'Supporting vehicle travel, pastoral visitation, equipment maintenance, and field outreach supplies where needed most.',
    },
  ];

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#2B2B2B]">
      {/* HERO SECTION */}
      <section className="bg-[#2D5A27] text-white py-16 sm:py-24 px-6 sm:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#F4A261]/40 text-[#F4A261] text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#E8722A] text-[#E8722A]" />
            <span>Non-Profit Giving &middot; Direct Bank Transfer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-4 text-white">
            Support Our Ministry &amp; Outreach
          </h1>

          <p className="text-base sm:text-xl text-[#E2EBDD] max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            Every contribution directly empowers community feeding schemes, warm clothing drives, and transformative outreach missions across South Africa.
          </p>

          <div className="max-w-2xl mx-auto px-5 py-3.5 bg-black/20 backdrop-blur-sm border border-white/15 rounded-xl">
            <p className="font-serif italic text-sm sm:text-base text-[#FFF9F0]">
              &ldquo;Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done.&rdquo; &mdash; Proverbs 19:17
            </p>
          </div>
        </div>
      </section>

      {/* OFFICIAL BANKING DETAILS SECTION (HERO EMPHASIS) */}
      <section className="py-12 sm:py-16 px-6 sm:px-8 -mt-8 relative z-20 max-w-5xl mx-auto">
        <div className="bg-[#FFFFFF] border-2 border-[#2D5A27] rounded-3xl shadow-2xl overflow-hidden">
          {/* Card Header Strip */}
          <div className="bg-[#1F3E1B] text-white px-6 sm:px-10 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2D5A27]/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <Building2 className="w-5 h-5 text-[#F4A261]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261] block">
                  Official Electronic Funds Transfer (EFT)
                </span>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-white">
                  Absa Bank Verified Account Details
                </h2>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#2D5A27] px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-[#FFF9F0]">
              <ShieldCheck className="w-4 h-4 text-[#F4A261]" />
              <span>Registered NPO 222-986</span>
            </div>
          </div>

          {/* Details Content Grid */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-[#FFFDF9] to-[#FFFFFF] space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account Number Box (High Prominence) */}
              <div className="md:col-span-2 bg-[#FFF9F0] border-2 border-[#E8722A]/40 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div>
                  <span className="text-xs uppercase font-bold text-[#E8722A] tracking-wider block mb-1">
                    Absa Account Number
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-[#1F3E1B] tracking-wider">
                      9348796699
                    </span>
                    <span className="text-xs bg-[#2D5A27]/10 text-[#2D5A27] font-bold px-2 py-0.5 rounded-md">
                      Current / Cheque
                    </span>
                  </div>
                  <p className="text-xs text-[#2B2B2B]/75 mt-1">
                    Use this 10-digit number for all domestic South African online EFTs &amp; banking app transfers.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy('9348796699', 'account-number')}
                  className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer flex items-center gap-2 shrink-0 ${
                    copiedField === 'account-number'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#2D5A27] text-white hover:bg-[#1F3E1B]'
                  }`}
                >
                  {copiedField === 'account-number' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Account No.</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bank Name */}
              <div className="bg-white border border-[#2D5A27]/20 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#2B2B2B]/60 block">Bank Name</span>
                  <strong className="text-base text-[#1F3E1B]">Absa Bank</strong>
                  <span className="text-xs text-[#2B2B2B]/70 block">South Africa</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('Absa Bank', 'bank-name')}
                  className="p-2 text-[#2D5A27] hover:text-[#E8722A] hover:bg-[#FFF9F0] rounded-lg transition-colors cursor-pointer"
                  title="Copy bank name"
                >
                  {copiedField === 'bank-name' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Account Holder Name */}
              <div className="bg-white border border-[#2D5A27]/20 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#2B2B2B]/60 block">Account Holder / Name</span>
                  <strong className="text-base text-[#1F3E1B]">Changing Lives Ministries</strong>
                  <span className="text-xs text-[#2B2B2B]/70 block">Registered NPO &amp; Associated NPC</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('Changing Lives Ministries', 'account-name')}
                  className="p-2 text-[#2D5A27] hover:text-[#E8722A] hover:bg-[#FFF9F0] rounded-lg transition-colors cursor-pointer"
                  title="Copy account name"
                >
                  {copiedField === 'account-name' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Branch Name & Code */}
              <div className="bg-white border border-[#2D5A27]/20 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#2B2B2B]/60 block">Branch &amp; Code</span>
                  <strong className="text-base text-[#1F3E1B]">Lenasia Branch</strong>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-mono font-bold text-[#E8722A]">Branch Code: 632005</span>
                    <span className="text-[10px] bg-neutral-100 text-[#2B2B2B]/70 px-1.5 py-0.5 rounded">Universal</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('632005', 'branch-code')}
                  className="p-2 text-[#2D5A27] hover:text-[#E8722A] hover:bg-[#FFF9F0] rounded-lg transition-colors cursor-pointer"
                  title="Copy branch code"
                >
                  {copiedField === 'branch-code' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Account Type & SWIFT */}
              <div className="bg-white border border-[#2D5A27]/20 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#2B2B2B]/60 block">Account Type / SWIFT</span>
                  <strong className="text-base text-[#1F3E1B]">Cheque / Current Account</strong>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-mono text-[#2B2B2B]/80">SWIFT Code: ABSAZAJJ</span>
                    <span className="text-[10px] bg-neutral-100 text-[#2B2B2B]/70 px-1.5 py-0.5 rounded">International</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('ABSAZAJJ', 'swift-code')}
                  className="p-2 text-[#2D5A27] hover:text-[#E8722A] hover:bg-[#FFF9F0] rounded-lg transition-colors cursor-pointer"
                  title="Copy SWIFT code"
                >
                  {copiedField === 'swift-code' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Payment Reference & POP Instructions */}
            <div className="bg-[#1F3E1B]/5 border border-[#2D5A27]/25 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#2D5A27] tracking-wider block">
                  Recommended Payment Reference (POP)
                </span>
                <p className="text-sm text-[#2B2B2B] leading-relaxed">
                  Please use your <strong>Name / Company + Cause</strong> as the banking reference (e.g., <code className="bg-white px-2 py-0.5 rounded border border-[#2D5A27]/30 font-mono text-xs text-[#2D5A27] font-bold">J.SMITH-FEEDING</code> or <code className="bg-white px-2 py-0.5 rounded border border-[#2D5A27]/30 font-mono text-xs text-[#2D5A27] font-bold">DONATION-NAME</code>).
                </p>
                <p className="text-xs text-[#2B2B2B]/70">
                  Forward your Proof of Payment to Bishop Leona Swartz: <a href="mailto:Leonaswartz510@gmail.com" className="font-semibold text-[#E8722A] hover:underline">Leonaswartz510@gmail.com</a> or WhatsApp <a href="tel:+27810410673" className="font-semibold text-[#2D5A27] hover:underline">+27 81 041 0673</a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full sm:w-auto">
                <a
                  href="mailto:Leonaswartz510@gmail.com?subject=Proof%20of%20Payment%20-%20Donation%20Changing%20Lives%20Ministries"
                  className="px-4 py-2 bg-[#E8722A] text-white text-xs font-semibold rounded-lg hover:brightness-105 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Proof of Payment</span>
                </a>
                <a
                  href="https://wa.me/27810410673?text=Good%20day%20Bishop%20Leona,%20I%20have%20made%20a%20donation%20to%20Changing%20Lives%20Ministries.%20Here%20is%20my%20payment%20confirmation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#2D5A27] text-white text-xs font-semibold rounded-lg hover:bg-[#1F3E1B] transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick 1-Click All Info Copy */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2B2B2B]/75 gap-3 border-t border-[#2D5A27]/15">
              <span>Need all details in one formatted text snippet?</span>
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    `BANKING DETAILS FOR CHANGING LIVES MINISTRIES:\nBank: Absa Bank\nAccount Name: Changing Lives Ministries\nAccount Number: 9348796699\nBranch: Lenasia Branch\nUniversal Branch Code: 632005\nAccount Type: Cheque / Current\nSWIFT: ABSAZAJJ\nNPO Registration: 222-986\nNPC: 2021/582044/08\nSend POP to: Leonaswartz510@gmail.com / WhatsApp: +27 81 041 0673`,
                    'full-snippet'
                  )
                }
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D5A27] hover:text-[#E8722A] cursor-pointer"
              >
                {copiedField === 'full-snippet' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>All Details Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Full Banking Text to Paste into Notes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* FOCUS CAUSES / WHERE FUNDS ARE DEPLOYED */}
      <section className="py-16 px-6 sm:px-8 bg-[#FFFDF9] border-t border-[#2D5A27]/15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs uppercase font-bold tracking-widest text-[#E8722A] mb-2">
              Transparent Ministry Allocation
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D5A27]">
              Four Pillars of Our Community Work
            </h2>
            <p className="text-sm sm:text-base text-[#2B2B2B]/80 mt-2">
              Donors can earmark their giving for specific projects by adding the keyword to their EFT reference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {causes.map((cause) => {
              const IconComp = cause.icon;
              return (
                <div
                  key={cause.id}
                  className="bg-white border border-[#2D5A27]/20 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${cause.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl text-[#2D5A27]">
                      {cause.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2B2B2B]/80 leading-relaxed">
                      {cause.desc}
                    </p>
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-[#E8722A] uppercase tracking-wider">
                        Keyword Reference: {cause.title.split(' ')[0].toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IN-KIND / MATERIAL DONATIONS SECTION */}
      <section className="py-16 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="bg-[#FFF9F0] border-2 border-[#2D5A27]/25 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs uppercase font-bold tracking-wider text-[#E8722A]">
                Material &amp; In-Kind Contributions
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D5A27]">
                We Gladly Accept Food &amp; Clothing Donations
              </h2>
              <p className="text-sm sm:text-base text-[#2B2B2B]/85 leading-relaxed">
                If you are a local business, grocery store, church congregation, or individual donor who would prefer to contribute bulk goods rather than an EFT, we gladly receive:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-white p-3 rounded-xl border border-[#2D5A27]/15 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>Dry groceries: maize, rice, beans, sugar, oil</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#2D5A27]/15 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>Fresh vegetables, potatoes, onions, soup ingredients</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#2D5A27]/15 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>Warm winter blankets, jackets, &amp; knitwear</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#2D5A27]/15 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>School shoes, sneakers, and children’s socks</span>
                </div>
              </div>

              <div className="pt-2 flex items-start gap-2.5 text-xs text-[#2B2B2B]">
                <MapPin className="w-4 h-4 text-[#E8722A] shrink-0 mt-0.5" />
                <span>
                  <strong>Drop-off Location:</strong> 77/6 Skeleton Street, Mid-Ennerdale, Johannesburg, Gauteng, 1830. Please call ahead at <a href="tel:+27810410673" className="font-bold text-[#2D5A27] hover:underline">+27 81 041 0673</a> so our outreach team can receive you.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#2D5A27]/25 rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#2D5A27]">
                Corporate &amp; Church Partnerships
              </h3>
              <p className="text-xs text-[#2B2B2B]/80 leading-relaxed">
                Are you looking to align your corporate social responsibility (CSR) initiatives with a registered South African Non-Profit Organization?
              </p>
              <ul className="space-y-2 text-xs text-[#2B2B2B]/90">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E8722A] shrink-0" />
                  <span>Registered NPO No: <strong>222-986</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E8722A] shrink-0" />
                  <span>Associated NPC No: <strong>2021/582044/08</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E8722A] shrink-0" />
                  <span>SARS Tax Reference: <strong>2223342151</strong></span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full py-3 bg-[#2D5A27] text-white text-xs font-semibold rounded-xl hover:bg-[#1F3E1B] transition-colors cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <span>Inquire About Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION NOTIFICATION / CONFIRMATION FORM */}
      <section className="py-16 px-6 sm:px-8 max-w-4xl mx-auto border-t border-[#2D5A27]/15">
        <div className="bg-white border border-[#2D5A27]/25 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs uppercase font-bold tracking-widest text-[#E8722A] mb-2">
              Payment Record &amp; Acknowledgment
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D5A27]">
              Notify Us of Your Donation
            </h2>
            <p className="text-xs sm:text-sm text-[#2B2B2B]/75 mt-2">
              If you have performed an Absa EFT or direct deposit, let us know here so Bishop Leona Swartz and our executive officers can send an official thank-you receipt and keep proper records.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#FFF9F0] border-2 border-[#2D5A27] rounded-2xl p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#2D5A27] rounded-full mx-auto flex items-center justify-center text-white">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2D5A27]">
                Thank You for Your Generous Blessing!
              </h3>
              <p className="text-sm text-[#2B2B2B] leading-relaxed max-w-lg mx-auto">
                Your donation notification has been transmitted to Bishop Leona Swartz (&ldquo;Ma Bishop&rdquo;) and our finance team. Your support brings nourishment and hope to vulnerable communities.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-[#E8722A] hover:underline cursor-pointer"
                >
                  Submit Another Record
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNotificationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="donor-fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Your Full Name / Organisation
                  </label>
                  <input
                    id="donor-fullName"
                    type="text"
                    required
                    value={notificationData.fullName}
                    onChange={(e) => setNotificationData({ ...notificationData, fullName: e.target.value })}
                    placeholder="e.g. Sister Maria Naude"
                    className="w-full bg-[#FFFDF9] border border-[#2D5A27]/30 rounded-xl px-4 py-2.5 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A]"
                  />
                </div>

                <div>
                  <label htmlFor="donor-email" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Email Address (for Receipt)
                  </label>
                  <input
                    id="donor-email"
                    type="email"
                    required
                    value={notificationData.email}
                    onChange={(e) => setNotificationData({ ...notificationData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-[#FFFDF9] border border-[#2D5A27]/30 rounded-xl px-4 py-2.5 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="donor-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="donor-phone"
                    type="tel"
                    value={notificationData.phone}
                    onChange={(e) => setNotificationData({ ...notificationData, phone: e.target.value })}
                    placeholder="+27 00 000 0000"
                    className="w-full bg-[#FFFDF9] border border-[#2D5A27]/30 rounded-xl px-4 py-2.5 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A]"
                  />
                </div>

                <div>
                  <label htmlFor="donor-amount" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Amount Contributed (ZAR)
                  </label>
                  <input
                    id="donor-amount"
                    type="text"
                    required
                    value={notificationData.amount}
                    onChange={(e) => setNotificationData({ ...notificationData, amount: e.target.value })}
                    placeholder="e.g. R500"
                    className="w-full bg-[#FFFDF9] border border-[#2D5A27]/30 rounded-xl px-4 py-2.5 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A]"
                  />
                </div>

                <div>
                  <label htmlFor="donor-date" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Transfer Date
                  </label>
                  <input
                    id="donor-date"
                    type="date"
                    value={notificationData.date}
                    onChange={(e) => setNotificationData({ ...notificationData, date: e.target.value })}
                    className="w-full bg-[#FFFDF9] border border-[#2D5A27]/30 rounded-xl px-4 py-2.5 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="donor-reference" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Reference Used on Bank EFT
                  </label>
                  <input
                    id="donor-reference"
                    type="text"
                    value={notificationData.referenceUsed}
                    onChange={(e) => setNotificationData({ ...notificationData, referenceUsed: e.target.value })}
                    placeholder="e.g. NAUDE-FEEDING"
                    className="w-full bg-[#FFFDF9] border border-[#2D5A27]/30 rounded-xl px-4 py-2.5 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A]"
                  />
                </div>

                <div>
                  <label htmlFor="donor-cause" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Designated Ministry Project
                  </label>
                  <select
                    id="donor-cause"
                    value={notificationData.cause}
                    onChange={(e) => setNotificationData({ ...notificationData, cause: e.target.value })}
                    className="w-full bg-[#FFFDF9] border border-[#2D5A27]/30 rounded-xl px-4 py-2.5 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A] cursor-pointer"
                  >
                    <option value="Community Feeding Schemes">Community Feeding Schemes</option>
                    <option value="Clothing & Blanket Drives">Clothing &amp; Winter Blanket Drives</option>
                    <option value="Youth Mentorship">Youth Mentorship &amp; Education</option>
                    <option value="General Ministry Operations">General Ministry Operations</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="donor-message" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] mb-1">
                  Prayer Request or Note of Blessing (Optional)
                </label>
                <textarea
                  id="donor-message"
                  rows={3}
                  value={notificationData.message}
                  onChange={(e) => setNotificationData({ ...notificationData, message: e.target.value })}
                  placeholder="Share a message or prayer request with Ma Bishop..."
                  className="w-full bg-[#FFFDF9] border border-[#2D5A27]/30 rounded-xl px-4 py-2.5 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#E8722A]"
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(90deg, #E8722A, #F4A261)',
                }}
                className="w-full text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:brightness-105 transition-all cursor-pointer text-sm inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Donation Confirmation to Ministry Office</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* INSTITUTIONAL GOVERNANCE & TRUST FOOTNOTE */}
      <section className="bg-[#FFF9F0] py-12 px-6 sm:px-8 border-t border-[#2D5A27]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2D5A27] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#E8722A]" />
            <span>Audited Transparency &amp; Non-Profit Compliance</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-[#1F3E1B]">
            Changing Lives Ministries (NPO 222-986)
          </h3>
          <p className="text-xs sm:text-sm text-[#2B2B2B]/75 max-w-2xl mx-auto leading-relaxed">
            Registered with the Department of Social Development under the Nonprofit Organisations Act, 1997. Associated Non-Profit Company Registration 2021/582044/08. South African Revenue Service Tax Reference 2223342151. Every donation directly supports community beneficiaries.
          </p>
        </div>
      </section>
    </div>
  );
}
