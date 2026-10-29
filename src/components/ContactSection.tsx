import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  ExternalLink,
  Sparkles,
  Info,
} from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { BUSINESS_CONFIG } from '../config/business';

export const ContactSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('rajajinagar');

  const selectedBranch =
    BUSINESS_CONFIG.branches.find((b) => b.id === selectedBranchId) ||
    BUSINESS_CONFIG.branches[0];

  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6A56B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C6A56B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Required Title & Supporting Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
              START YOUR PROJECT
            </span>
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
          </div>

          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-tight">
            READY FOR YOUR NEXT PIECE?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
            Whether you're planning your first tattoo, looking for a cover-up, or exploring a new piercing, connect with Janam Tattooz to discuss your ideas.
          </p>
        </div>

        {/* Three Primary Conversion Action Buttons */}
        <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Button 1: BOOK A TATTOO */}
          <a
            href={BUSINESS_CONFIG.whatsapp.tattooBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-[0_4px_25px_rgba(198,165,107,0.35)] cursor-pointer text-center"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>BOOK A TATTOO</span>
          </a>

          {/* Button 2: ENQUIRE ABOUT PIERCING */}
          <a
            href={BUSINESS_CONFIG.whatsapp.piercingEnquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-[#F5F1EB] bg-[#151515] hover:bg-[#202020] border border-[#C6A56B]/50 hover:border-[#C6A56B] active:scale-95 transition-all shadow-md cursor-pointer text-center"
          >
            <Sparkles className="w-4 h-4 text-[#C6A56B] shrink-0" />
            <span>ENQUIRE ABOUT PIERCING</span>
          </a>

          {/* Button 3: CALL THE STUDIO */}
          <a
            href={BUSINESS_CONFIG.phone.telLink}
            className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-[#F5F1EB] bg-[#151515] hover:bg-[#202020] border border-[#2a2a2a] hover:border-[#C6A56B]/50 active:scale-95 transition-all shadow-md cursor-pointer text-center"
          >
            <Phone className="w-4 h-4 text-[#C6A56B] shrink-0" />
            <span>CALL THE STUDIO</span>
          </a>
        </div>

        {/* Studio Locations: Dual Branch Cards & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Branch Cards & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Branch Switcher Tabs */}
            <div className="flex rounded-xl bg-[#151515] p-1.5 border border-[#222222]">
              {BUSINESS_CONFIG.branches.map((branch) => (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedBranchId === branch.id
                      ? 'bg-[#C6A56B] text-[#0B0B0B] shadow-md font-bold'
                      : 'text-[#A7A7A7] hover:text-[#F5F1EB]'
                  }`}
                >
                  {branch.area.split(',')[0]}
                </button>
              ))}
            </div>

            {/* Selected Branch Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#151515] border border-[#222222] shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#222222]">
                <h3 className="font-['Bebas_Neue'] text-2xl text-[#F5F1EB] tracking-wide uppercase flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C6A56B]" />
                  <span>{selectedBranch.branchName}</span>
                </h3>
                <span className="text-[11px] font-mono text-[#C6A56B] uppercase tracking-wider">
                  PIN: {selectedBranch.pincode}
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#A7A7A7]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C6A56B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#F5F1EB] font-medium leading-snug">
                      {selectedBranch.addressLine}
                    </p>
                    <p className="text-xs text-[#A7A7A7] mt-0.5">
                      {selectedBranch.area}
                    </p>
                    <p className="text-xs text-[#A7A7A7]">
                      {selectedBranch.city}, {selectedBranch.state} - {selectedBranch.pincode}
                    </p>
                    {selectedBranch.note && (
                      <p className="text-[11px] text-[#737373] mt-2 italic">
                        {selectedBranch.note}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-3 border-t border-[#222222]">
                  <Phone className="w-5 h-5 text-[#C6A56B] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#737373] block uppercase tracking-wider">
                      Studio Phone & WhatsApp
                    </span>
                    <a
                      href={BUSINESS_CONFIG.phone.telLink}
                      className="text-[#F5F1EB] hover:text-[#C6A56B] transition-colors font-mono font-medium"
                    >
                      {BUSINESS_CONFIG.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-3 border-t border-[#222222]">
                  <InstagramIcon className="w-5 h-5 text-[#C6A56B] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#737373] block uppercase tracking-wider">
                      Official Instagram
                    </span>
                    <a
                      href={BUSINESS_CONFIG.social.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5F1EB] hover:text-[#C6A56B] transition-colors font-mono font-medium"
                    >
                      {BUSINESS_CONFIG.social.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-[#222222]">
                  <Clock className="w-5 h-5 text-[#C6A56B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-[#737373] block uppercase tracking-wider">
                      Opening Hours
                    </span>
                    <p className="text-xs font-semibold text-[#F5F1EB]">
                      {BUSINESS_CONFIG.hours.reportedText}
                    </p>
                    <p className="text-[11px] text-[#737373] mt-1 leading-relaxed">
                      {BUSINESS_CONFIG.hours.disclaimer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Branch Direct Actions */}
              <div className="mt-6 pt-5 border-t border-[#222222] flex flex-wrap gap-3">
                <a
                  href={selectedBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#F5F1EB] bg-[#0B0B0B] hover:bg-[#202020] border border-[#2a2a2a] hover:border-[#C6A56B]/50 transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={BUSINESS_CONFIG.whatsapp.defaultEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Address Configuration & Appointment Transparency Note */}
            <div className="p-4 rounded-xl bg-[#151515]/60 border border-[#2a2a2a] text-xs text-[#A7A7A7] leading-relaxed">
              <div className="flex items-center gap-2 text-[#C6A56B] font-semibold mb-1">
                <Info className="w-4 h-4" />
                <span>Notice on Appointments & Branches:</span>
              </div>
              <p className="text-[11px]">
                To ensure undivided attention and personalized care, consultations and appointments are confirmed individually with our artists via WhatsApp. We do not use automated or unverified bookings.
              </p>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Dual Branch Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#151515] border border-[#222222] shadow-2xl h-[420px] sm:h-[480px]">
              {/* Google Maps Embed iframe with selected branch query */}
              <iframe
                title={`${selectedBranch.branchName} Map`}
                src={selectedBranch.embedQuery}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Overlay Branch Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-4 z-10">
                <a
                  href={selectedBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between sm:justify-start gap-3 px-4 py-2.5 rounded-xl bg-[#0B0B0B]/95 backdrop-blur-md border border-[#C6A56B]/50 text-xs font-medium text-[#F5F1EB] hover:text-[#C6A56B] shadow-xl transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#C6A56B]" />
                    <span>Open {selectedBranch.branchName} on Maps</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Quick Cards for Both Branches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUSINESS_CONFIG.branches.map((b) => (
                <div
                  key={b.id}
                  onClick={() => setSelectedBranchId(b.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedBranchId === b.id
                      ? 'bg-[#181818] border-[#C6A56B]/60 shadow-md'
                      : 'bg-[#151515] border-[#242424] hover:border-[#383838]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-['Oswald'] text-sm uppercase text-[#F5F1EB]">
                      {b.branchName}
                    </span>
                    <span className="text-[10px] font-mono text-[#C6A56B] bg-[#0B0B0B] px-2 py-0.5 rounded border border-[#222]">
                      {b.pincode}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A7A7A7] line-clamp-2">
                    {b.fullAddress}
                  </p>
                  <div className="mt-2 text-[10px] text-[#C6A56B] font-mono flex items-center gap-1">
                    <span>Click to view on map</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
