import React from 'react';
import { PenTool, CheckCircle, Shield, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#151515] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A56B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A56B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Studio Logo & Brand Emblem */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#C6A56B]/20 via-transparent to-[#C6A56B]/30 blur-sm pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-[#0B0B0B] border border-[#C6A56B]/30 shadow-2xl p-6 sm:p-8">
                {/* Studio Logo presentation */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#C6A56B] shadow-[0_0_30px_rgba(198,165,107,0.35)] mb-6 bg-black flex items-center justify-center p-1">
                    <img
                      src="/images/logo.jpg"
                      alt="Janam Tattooz Official Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#F5F1EB] tracking-wider mb-1">
                    {BUSINESS_CONFIG.name.toUpperCase()}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C6A56B] mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tattoos • Piercings • Polynesian Tribal</span>
                  </div>

                  <p className="text-xs text-[#A7A7A7] leading-relaxed mb-6 italic max-w-xs">
                    "Every tattoo is a legacy etched in skin. We bring your vision to reality with technical mastery, genuine care, and absolute hygiene."
                  </p>

                  <div className="w-full pt-4 border-t border-[#222222] flex items-center justify-between text-xs text-[#A7A7A7]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C6A56B]" /> Bengaluru
                    </span>
                    <span className="text-[#C6A56B] font-medium font-mono">
                      ★ 5.0 (304 Reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Accent Tag */}
              <div className="absolute -bottom-4 right-6 bg-[#0B0B0B] border border-[#C6A56B] px-4 py-1.5 rounded-full shadow-lg">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C6A56B]">
                  Bespoke Body Art
                </span>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#C6A56B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                ABOUT THE STUDIO
              </span>
            </div>

            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-tight mb-6">
              ART THAT STAYS WITH YOU.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
              <p>
                Every tattoo tells a story. At <strong className="text-[#F5F1EB] font-medium">{BUSINESS_CONFIG.name}</strong> (also known as {BUSINESS_CONFIG.alternateName}), we dedicate our craft to bringing your unique ideas, memories, and personal statements to life.
              </p>
              <p>
                Serving Bengaluru across our locations in <strong className="text-[#C6A56B] font-medium">Rajajinagar</strong> and <strong className="text-[#C6A56B] font-medium">Basaveshwar Nagar</strong>, our studio specializes in bespoke custom designs, large-scale Polynesian tribal pieces, cover-ups, and gentle, medical-grade body piercings.
              </p>
              <p className="text-sm sm:text-base text-[#8e8e8e]">
                With a stellar 5.0 rating across 304 customer reviews on Google, our reputation is built upon creative excellence, clean and sterile protocols, and welcoming every client with patient consultation.
              </p>
            </div>

            {/* Three Required Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Feature 1 */}
              <div className="p-5 rounded-xl bg-[#0B0B0B]/80 border border-[#222222] hover:border-[#C6A56B]/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#C6A56B]/10 flex items-center justify-center text-[#C6A56B] mb-3">
                  <PenTool className="w-5 h-5" />
                </div>
                <h4 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide mb-1.5">
                  Custom & Tribal Art
                </h4>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  Bespoke concepts, Polynesian tribal patterns, and artistic cover-ups tailored to your anatomy.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-xl bg-[#0B0B0B]/80 border border-[#222222] hover:border-[#C6A56B]/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#C6A56B]/10 flex items-center justify-center text-[#C6A56B] mb-3">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide mb-1.5">
                  Precision Craft
                </h4>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  Smooth gradient shading, solid black saturation, and fine lines designed to age beautifully.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-xl bg-[#0B0B0B]/80 border border-[#222222] hover:border-[#C6A56B]/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#C6A56B]/10 flex items-center justify-center text-[#C6A56B] mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide mb-1.5">
                  Sterile Standards
                </h4>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  Hospital-grade single-use needles, sterile piercing instruments, and medical-grade aftercare.
                </p>
              </div>
            </div>

            {/* Studio Action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_CONFIG.whatsapp.discussDesignUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-md"
              >
                <span>Discuss Your Idea</span>
              </a>
              <span className="text-xs text-[#A7A7A7]">
                Branches in Rajajinagar (560010) & Basaveshwar Nagar (560055)
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
