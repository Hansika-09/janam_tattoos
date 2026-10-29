import React, { useState } from 'react';
import {
  PenTool,
  Sparkles,
  CalendarCheck,
  MessageCircle,
  ArrowRight,
  Shield,
  Layers,
  Flame,
  RotateCcw,
  CheckCircle2,
  Brush,
  HeartHandshake,
  Info,
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../config/business';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'tattoos' | 'piercings' | 'general'>('all');

  // Map icons for specific services
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'svc-custom':
        return PenTool;
      case 'svc-large-scale':
        return Layers;
      case 'svc-polynesian':
        return Flame;
      case 'svc-coverups':
        return RotateCcw;
      case 'svc-finishing':
        return Brush;
      case 'svc-touchups':
        return CheckCircle2;
      case 'svc-aftercare':
        return Shield;
      case 'svc-ear-piercing':
      case 'svc-eyebrow-piercing':
      case 'svc-nose-piercing':
      case 'svc-other-piercings':
        return Sparkles;
      case 'svc-tattoo-apt':
      case 'svc-piercing-apt':
      case 'svc-design-consult':
        return CalendarCheck;
      default:
        return HeartHandshake;
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? BUSINESS_CONFIG.services.categories
      : BUSINESS_CONFIG.services.categories.filter((cat) => cat.id.includes(activeTab));

  return (
    <section id="services" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C6A56B]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Exact Requirement */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
              WHAT WE OFFER
            </span>
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
          </div>

          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-tight">
            {BUSINESS_CONFIG.services.sectionTitle}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
            {BUSINESS_CONFIG.services.sectionSubtitle}
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'tattoos', label: 'Tattoos' },
              { id: 'piercings', label: 'Piercings' },
              { id: 'general', label: 'General Enquiries' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#C6A56B] text-[#0B0B0B] shadow-md'
                    : 'bg-[#151515] text-[#A7A7A7] hover:text-[#F5F1EB] border border-[#222222] hover:border-[#C6A56B]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Refined Layout by Category */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-[#121212] border border-[#1f1f1f] p-6 sm:p-8 relative"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[#222222] gap-2">
                <div>
                  <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#F5F1EB] tracking-wider uppercase flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6A56B]" />
                    <span>{category.categoryTitle}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A7A7] mt-1 font-light">
                    {category.categorySubtitle}
                  </p>
                </div>

                <span className="text-[11px] font-mono text-[#C6A56B] uppercase tracking-wider self-start md:self-auto px-3 py-1 rounded-full bg-[#181818] border border-[#C6A56B]/20">
                  {category.items.length} Offerings
                </span>
              </div>

              {/* Items Grid - Refined & Subtle, without excessive cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item) => {
                  const Icon = getServiceIcon(item.id);

                  return (
                    <div
                      key={item.id}
                      className="group rounded-xl bg-[#171717] hover:bg-[#1a1a1a] border border-[#242424] hover:border-[#C6A56B]/50 p-5 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        {/* Header with mini icon & tag */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-[#0B0B0B] border border-[#2a2a2a] group-hover:border-[#C6A56B]/40 text-[#C6A56B] flex items-center justify-center transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>

                          {item.tag && (
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#A7A7A7] bg-[#0B0B0B] px-2.5 py-0.5 rounded-full border border-[#262626]">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="font-['Oswald'] text-base sm:text-lg uppercase tracking-wide text-[#F5F1EB] group-hover:text-[#C6A56B] transition-colors mb-2">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs text-[#A7A7A7] leading-relaxed mb-4 font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* WhatsApp Mini Action */}
                      <div className="pt-3 border-t border-[#222222]">
                        <a
                          href={getWhatsAppLink(item.whatsappMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-between w-full text-[11px] font-semibold uppercase tracking-wider text-[#C6A56B] hover:text-[#DFC89B] transition-colors py-1"
                        >
                          <span className="flex items-center gap-1.5">
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Enquire on WhatsApp</span>
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Branch Clarification & Primary WhatsApp CTA Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#151515] via-[#1a1a1a] to-[#151515] border border-[#C6A56B]/30 p-8 text-center max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C6A56B] mb-2">
            <Info className="w-4 h-4" />
            <span>Studio Service Consultation</span>
          </div>

          <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#F5F1EB] tracking-wide uppercase mb-2">
            HAVE A SPECIFIC VISION OR CUSTOM CONCEPT?
          </h3>

          <p className="text-xs sm:text-sm text-[#A7A7A7] max-w-2xl mx-auto mb-6 leading-relaxed">
            {BUSINESS_CONFIG.services.notice} Every session includes single-use sterilized setup and step-by-step aftercare guidance.
          </p>

          {/* Required DISCUSS YOUR DESIGN button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919607452040?text=Hi%20Janam%20Tattooz%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-[0_0_25px_rgba(198,165,107,0.35)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>DISCUSS YOUR DESIGN</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phone.raw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F5F1EB] bg-[#0B0B0B] hover:bg-[#202020] border border-[#2a2a2a] hover:border-[#C6A56B]/40 transition-all"
            >
              <span>Call: {BUSINESS_CONFIG.phone.display}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
