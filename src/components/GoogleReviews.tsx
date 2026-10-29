import React, { useRef, useState } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquareHeart,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { GoogleIcon } from './icons/GoogleIcon';
import { BUSINESS_CONFIG } from '../config/business';

export const GoogleReviews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const reviews = BUSINESS_CONFIG.googleReviews.reviews;

  // Carousel Arrow Scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = Math.max(clientWidth * 0.75, 320);
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section id="reviews" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C6A56B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#222222] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[1px] w-8 bg-[#C6A56B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                CLIENT TRUST & FEEDBACK
              </span>
            </div>

            {/* Exact required title */}
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-none">
              {BUSINESS_CONFIG.googleReviews.sectionTitle}
            </h2>

            {/* Exact required supporting text */}
            <p className="mt-3 text-base sm:text-lg text-[#A7A7A7] max-w-xl font-light">
              {BUSINESS_CONFIG.googleReviews.sectionSubtitle}
            </p>
          </div>

          {/* Desktop Carousel Arrow Navigation Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-[#737373] font-mono mr-2">
              Scroll Reviews
            </span>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-[#151515] hover:bg-[#222222] border border-[#2a2a2a] text-[#F5F1EB] hover:text-[#C6A56B] hover:border-[#C6A56B]/50 transition-colors shadow-md focus:outline-none cursor-pointer"
              aria-label="Previous customer review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-[#151515] hover:bg-[#222222] border border-[#2a2a2a] text-[#F5F1EB] hover:text-[#C6A56B] hover:border-[#C6A56B]/50 transition-colors shadow-md focus:outline-none cursor-pointer"
              aria-label="Next customer review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Prominent Business Rating Showcase Card */}
        <div className="mb-14 rounded-2xl bg-gradient-to-br from-[#151515] via-[#121212] to-[#181818] border border-[#C6A56B]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Google Rating Hero Metrics */}
            <div className="md:col-span-5 flex flex-col items-start border-b md:border-b-0 md:border-r border-[#262626] pb-6 md:pb-0 md:pr-8">
              {/* Recognizable Google Logo Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0B0B] border border-[#2e2e2e] mb-4">
                <GoogleIcon className="w-4 h-4" />
                <span className="text-xs font-semibold text-[#F5F1EB] tracking-wide">
                  Google Reviews
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Primary Rating Number: 5.0 */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-['Bebas_Neue'] text-6xl sm:text-7xl md:text-8xl text-[#F5F1EB] tracking-tight leading-none">
                  {BUSINESS_CONFIG.googleReviews.rating.toFixed(1)}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#A7A7A7]">
                    out of 5.0
                  </span>
                  {/* Five Gold Stars */}
                  <div className="flex text-[#C6A56B] gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Exact required subtext underneath */}
              <p className="text-sm font-medium text-[#F5F1EB] mt-1">
                {BUSINESS_CONFIG.googleReviews.ratingSubtext}
              </p>
              <p className="text-xs text-[#737373] mt-0.5">
                Verified customer ratings from Bengaluru visitors
              </p>
            </div>

            {/* Context & Transparency Information */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#C6A56B]/10 text-[#C6A56B] shrink-0 mt-0.5">
                  <MessageSquareHeart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide">
                    Artistic Excellence & Client Satisfaction
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A7A7A7] mt-1 leading-relaxed font-light">
                    Every review reflects the dedication our artists put into each custom tattoo stencil, tribal flow, and piercing procedure. Whether visiting our Rajajinagar or Basaveshwar Nagar studio, we prioritize your comfort and safety.
                  </p>
                </div>
              </div>

              {/* Required Transparency Disclaimer Note */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#0B0B0B]/80 border border-[#222222] text-[11px] text-[#737373] leading-relaxed">
                <Info className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                <span>
                  <strong>Transparency Note:</strong> Rating details (5.0 rating across 304 reviews) were supplied from the studio's Google listing. We present authentic review excerpts without independent live polling.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Customer Review Carousel */}
        {reviews.length > 0 ? (
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            tabIndex={0}
            role="region"
            aria-label="Customer Reviews Carousel"
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[400px] rounded-2xl bg-[#151515] border border-[#222222] hover:border-[#C6A56B]/60 p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1 relative"
              >
                {/* Background Watermark Quote */}
                <div className="absolute top-5 right-6 opacity-10 text-[#C6A56B] pointer-events-none">
                  <Quote className="w-12 h-12" />
                </div>

                <div>
                  {/* Review Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#0B0B0B] text-[#C6A56B] border border-[#C6A56B]/30">
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span>{review.source}</span>
                    </div>

                    <span className="text-[11px] font-mono text-[#737373] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#C6A56B]" />
                      <span>{review.verifiedLabel}</span>
                    </span>
                  </div>

                  {/* Five Gold Stars */}
                  <div className="flex text-[#C6A56B] gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Exact Supplied Review Excerpt */}
                  <blockquote className="text-base sm:text-lg text-[#F5F1EB] font-light italic leading-relaxed mb-6">
                    "{review.excerpt}"
                  </blockquote>
                </div>

                {/* Review Card Footer: Direct Link to Read Original Review */}
                <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A7A7A7]">
                      Reviewer #{index + 1}
                    </p>
                    <p className="text-[11px] text-[#737373] mt-0.5">
                      Janam Tattooz • Bengaluru
                    </p>
                  </div>

                  <a
                    href={BUSINESS_CONFIG.googleReviews.readAllReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C6A56B] hover:text-[#DFC89B] transition-colors group-hover:underline"
                    aria-label="Read original reviews on Google Maps"
                  >
                    <span>Read on Google</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Clear Fallback if content cannot be loaded */
          <div className="p-12 text-center rounded-2xl bg-[#151515] border border-[#222222]">
            <p className="text-sm text-[#A7A7A7] mb-3">
              Review excerpts are currently loading. You can read all authentic customer stories directly on Google.
            </p>
            <a
              href={BUSINESS_CONFIG.googleReviews.readAllReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-[#C6A56B]"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Mobile Swipe Hint */}
        <div className="mt-4 flex sm:hidden items-center justify-center gap-2 text-[11px] text-[#737373] font-mono uppercase tracking-wider">
          <span>← Swipe horizontally to explore more reviews →</span>
        </div>

        {/* Call to Action Buttons Below Carousel */}
        <div className="mt-12 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Prominent Primary CTA: READ ALL GOOGLE REVIEWS */}
          <a
            href={BUSINESS_CONFIG.googleReviews.readAllReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-[0_0_25px_rgba(198,165,107,0.3)] cursor-pointer"
          >
            <GoogleIcon className="w-4 h-4" />
            <span>READ ALL GOOGLE REVIEWS</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>

          {/* Secondary CTA: LEAVE US A REVIEW */}
          <a
            href={BUSINESS_CONFIG.googleReviews.leaveReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-[#F5F1EB] bg-[#151515] hover:bg-[#222222] border border-[#2a2a2a] hover:border-[#C6A56B]/50 transition-all cursor-pointer"
          >
            <Star className="w-4 h-4 text-[#C6A56B]" />
            <span>LEAVE US A REVIEW</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#737373]" />
          </a>
        </div>

      </div>
    </section>
  );
};
