import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import type { GalleryItem } from '../data/galleryData';
import { getWhatsAppLink } from '../config/business';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onSelectIndex,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectIndex(currentIndex - 1);
    } else {
      onSelectIndex(items.length - 1);
    }
  }, [currentIndex, items, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelectIndex(currentIndex + 1);
    } else {
      onSelectIndex(0);
    }
  }, [currentIndex, items, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0B0B]/95 backdrop-blur-xl animate-fade-in"
    >
      {/* Background click to close */}
      <div
        className="absolute inset-0 cursor-zoom-out"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full bg-[#151515] border border-[#C6A56B]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]">
        
        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0B0B0B]/80 text-[#F5F1EB] hover:text-[#C6A56B] hover:bg-[#222222] border border-[#333333] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display Area with Nav Controls */}
        <div className="relative flex-1 bg-[#0B0B0B] flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[55vh] md:max-h-[85vh] overflow-hidden group">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full max-h-[80vh] object-contain select-none"
          />

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0B0B0B]/80 text-[#F5F1EB] hover:text-[#C6A56B] hover:bg-[#151515] border border-[#333333] transition-all shadow-md focus:outline-none cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0B0B0B]/80 text-[#F5F1EB] hover:text-[#C6A56B] hover:bg-[#151515] border border-[#333333] transition-all shadow-md focus:outline-none cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Index Counter */}
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#0B0B0B]/80 border border-[#333333] text-[11px] font-mono text-[#A7A7A7]">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Sidebar Info & Action */}
        <div className="w-full md:w-80 lg:w-96 p-6 flex flex-col justify-between bg-[#151515] border-t md:border-t-0 md:border-l border-[#222222] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C6A56B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>

            <h3 className="font-['Oswald'] text-2xl text-[#F5F1EB] uppercase tracking-wide mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-[#A7A7A7] leading-relaxed mb-5 font-light">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#0B0B0B] border border-[#262626] text-[11px] font-mono text-[#A7A7A7]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* WhatsApp Direct Enquiry Action */}
          <div className="pt-4 border-t border-[#222222] flex flex-col gap-3">
            <a
              href={getWhatsAppLink(item.enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire via WhatsApp</span>
            </a>

            <p className="text-[11px] text-[#A7A7A7] text-center leading-tight">
              Pre-filled enquiry for this design directly with Janam Tattooz studio.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
