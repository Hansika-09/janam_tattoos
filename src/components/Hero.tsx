import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, MapPin, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Hero: React.FC = () => {
  const handleScrollToGallery = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#tattoos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background with Studio Tattoo Craftsmanship & Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/tattoos/jt1.jpg"
          alt="Tattoo artistry at Janam Tattooz Bengaluru"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125 scale-105 transform motion-safe:transition-transform duration-1000"
          loading="eager"
        />
        {/* Deep luxury radial and linear gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,165,107,0.14)_0%,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Branch Locations & Google Rating Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151515]/90 border border-[#C6A56B]/30 backdrop-blur-md shadow-inner">
            <MapPin className="w-3.5 h-3.5 text-[#C6A56B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
              RAJAJINAGAR & BASAVESHWAR NAGAR, BENGALURU
            </span>
          </div>

          <a
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#reviews')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#151515]/90 border border-[#C6A56B]/40 hover:border-[#C6A56B] transition-all text-xs font-semibold text-[#F5F1EB] backdrop-blur-md shadow-inner group"
          >
            <div className="flex text-[#C6A56B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-[#C6A56B] font-mono">5.0</span>
            <span className="text-[#A7A7A7] text-[11px] font-light">(304 Reviews)</span>
          </a>
        </div>

        {/* Main Heading */}
        <h1 className="font-['Bebas_Neue'] tracking-wider text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F5F1EB] uppercase leading-none max-w-4xl drop-shadow-2xl">
          YOUR STORY. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F1EB] via-[#DFC89B] to-[#C6A56B]">
            YOUR SKIN.
          </span>{' '}
          YOUR ART.
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#A7A7A7] font-light leading-relaxed">
          {BUSINESS_CONFIG.heroSubheadline}
        </p>

        {/* Call to Actions */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={BUSINESS_CONFIG.whatsapp.tattooBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(198,165,107,0.35)] hover:shadow-[0_0_40px_rgba(198,165,107,0.6)] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>BOOK AN APPOINTMENT</span>
          </a>

          <a
            href="#tattoos"
            onClick={handleScrollToGallery}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase text-[#F5F1EB] bg-[#151515]/80 hover:bg-[#222222] border border-[#C6A56B]/30 hover:border-[#C6A56B] transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <span>EXPLORE OUR WORK</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-[#222222]/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left sm:text-center">
          <div className="flex items-center sm:justify-center gap-3 p-2">
            <ShieldCheck className="w-5 h-5 text-[#C6A56B] shrink-0" />
            <div className="text-left">
              <p className="text-xs font-semibold text-[#F5F1EB] uppercase tracking-wide">100% Sterile</p>
              <p className="text-[11px] text-[#A7A7A7]">Disposable single-use needles</p>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3 p-2">
            <Sparkles className="w-5 h-5 text-[#C6A56B] shrink-0" />
            <div className="text-left">
              <p className="text-xs font-semibold text-[#F5F1EB] uppercase tracking-wide">Custom Artwork</p>
              <p className="text-[11px] text-[#A7A7A7]">Bespoke tattoos & tribals</p>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3 p-2">
            <Star className="w-5 h-5 text-[#C6A56B] fill-current shrink-0" />
            <div className="text-left">
              <p className="text-xs font-semibold text-[#F5F1EB] uppercase tracking-wide">5.0 Star Rating</p>
              <p className="text-[11px] text-[#A7A7A7]">Based on 304 Google reviews</p>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3 p-2">
            <MapPin className="w-5 h-5 text-[#C6A56B] shrink-0" />
            <div className="text-left">
              <p className="text-xs font-semibold text-[#F5F1EB] uppercase tracking-wide">Two Branches</p>
              <p className="text-[11px] text-[#A7A7A7]">Rajajinagar & Basaveshwar Ngr</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-10 inline-flex flex-col items-center gap-1 text-[#A7A7A7] hover:text-[#C6A56B] transition-colors focus:outline-none"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C6A56B]" />
        </a>
      </div>
    </section>
  );
};
