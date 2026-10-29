import React from 'react';
import { ShieldCheck, Sparkles, Droplets, Eye } from 'lucide-react';

export const HygieneStandards: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Sizing',
      description:
        'We review your reference, adjust stencil dimensions to fit muscle contours, and finalize custom linework before needle touch.',
      icon: Sparkles,
    },
    {
      step: '02',
      title: 'Hospital-Grade Prep',
      description:
        'Medical barrier films, sterile workspace disinfection, and opening brand-new disposable blister-pack needles in your presence.',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'Precision Craftsmanship',
      description:
        'Executing clean lines, deep black saturation, or piercing placements using medical-grade surgical steel and titanium jewelry.',
      icon: Eye,
    },
    {
      step: '04',
      title: 'Protected Healing & Care',
      description:
        'Application of breathable protective membrane dressing alongside personalized day-by-day aftercare healing instructions.',
      icon: Droplets,
    },
  ];

  return (
    <section className="py-20 bg-[#151515] border-y border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
              OUR PROTOCOL
            </span>
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
          </div>

          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#F5F1EB] tracking-wide uppercase">
            CLEAN PRACTICE. ZERO COMPROMISE.
          </h2>

          <p className="mt-2 text-sm text-[#A7A7A7] font-light">
            Every session at Janam Tattooz adheres to strict hospital-grade hygiene standards for your safety and comfort.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#0B0B0B] border border-[#222222] hover:border-[#C6A56B]/40 transition-colors relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#151515] border border-[#2a2a2a] text-[#C6A56B] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-['Bebas_Neue'] text-[#C6A56B]/50 tracking-wider">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
