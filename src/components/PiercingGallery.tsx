import React, { useState } from 'react';
import { Eye, MessageCircle, ShieldCheck, ZoomIn } from 'lucide-react';
import { PIERCING_GALLERY } from '../data/galleryData';
import type { GalleryItem } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';
import { BUSINESS_CONFIG } from '../config/business';

export const PiercingGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleSelectIndex = (index: number) => {
    if (index >= 0 && index < PIERCING_GALLERY.length) {
      setSelectedItem(PIERCING_GALLERY[index]);
    }
  };

  return (
    <section id="piercings" className="py-24 bg-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#222222] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[1px] w-8 bg-[#C6A56B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                BODY PIERCINGS
              </span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-none">
              MAKE YOUR STATEMENT.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A7A7A7] max-w-xl font-light">
              Safe, gentle, and sterile body piercings with medical-grade jewelry and anatomical placement at Janam Tattooz.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.whatsapp.piercingEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Piercing Enquiry</span>
            </a>
          </div>
        </div>

        {/* Piercing Hygiene Trust Bar */}
        <div className="mb-10 p-4 rounded-xl bg-[#0B0B0B] border border-[#C6A56B]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#C6A56B]/10 text-[#C6A56B]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F5F1EB] uppercase tracking-wide">
                Medical-Grade Sterilization Protocols
              </p>
              <p className="text-[11px] text-[#A7A7A7]">
                Single-use sterile surgical needles • Titanium & hypoallergenic body jewelry
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#C6A56B] uppercase tracking-wider">
            Safe & Gentle Piercing
          </span>
        </div>

        {/* Responsive Piercing Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PIERCING_GALLERY.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-[#0B0B0B] border border-[#222222] hover:border-[#C6A56B]/60 transition-all duration-500 shadow-xl flex flex-col ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Container with Hover Overlay */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111] cursor-pointer"
                onClick={() => handleOpenLightbox(item)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#0B0B0B]/80 text-[#C6A56B] border border-[#C6A56B]/30 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Click to expand hover hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0B0B0B]/50 backdrop-blur-[2px]">
                  <div className="p-3 rounded-full bg-[#C6A56B] text-[#0B0B0B] shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Meta & Action */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#0B0B0B]">
                <div>
                  <h3 className="font-['Oswald'] text-xl text-[#F5F1EB] group-hover:text-[#C6A56B] transition-colors uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#A7A7A7] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#222222] flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#737373] tracking-wide"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C6A56B] hover:text-[#DFC89B] transition-colors cursor-pointer"
                  >
                    <span>View</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Piercing Lightbox */}
        <LightboxModal
          item={selectedItem}
          items={PIERCING_GALLERY}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          onSelectIndex={handleSelectIndex}
        />
      </div>
    </section>
  );
};
