import React from 'react';
import { MessageCircle, Phone, MapPin, ArrowUp, Star } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { GoogleIcon } from './icons/GoogleIcon';
import { BUSINESS_CONFIG } from '../config/business';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Studio', href: '#about' },
    { name: 'Tattoo Portfolio', href: '#tattoos' },
    { name: 'Body Piercings', href: '#piercings' },
    { name: 'Our Services', href: '#services' },
    { name: 'Google Reviews (5.0★)', href: '#reviews' },
    { name: 'Locations & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#1f1f1f] text-[#A7A7A7] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1c1c1c]">
          
          {/* Brand Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#C6A56B]/60 bg-black flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="Janam Tattooz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-['Bebas_Neue'] text-2xl text-[#F5F1EB] tracking-wider block leading-tight">
                  {BUSINESS_CONFIG.name.toUpperCase()}
                </span>
                <span className="text-[11px] font-mono text-[#A7A7A7] uppercase tracking-widest">
                  {BUSINESS_CONFIG.alternateName}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A7A7A7] leading-relaxed max-w-sm">
              Custom tattoo artistry, large-scale Polynesian tribal tattoos, and sterile piercing services in Bengaluru. Trusted by our community with a 5.0 rating on Google across 304 customer reviews.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#151515] border border-[#2a2a2a] flex items-center justify-center text-[#A7A7A7] hover:text-[#C6A56B] hover:border-[#C6A56B]/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_CONFIG.whatsapp.defaultEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#151515] border border-[#2a2a2a] flex items-center justify-center text-[#A7A7A7] hover:text-[#C6A56B] hover:border-[#C6A56B]/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telLink}
                className="w-9 h-9 rounded-full bg-[#151515] border border-[#2a2a2a] flex items-center justify-center text-[#A7A7A7] hover:text-[#C6A56B] hover:border-[#C6A56B]/40 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_CONFIG.googleReviews.readAllReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#151515] border border-[#2a2a2a] flex items-center justify-center text-[#A7A7A7] hover:text-[#C6A56B] hover:border-[#C6A56B]/40 transition-colors"
                aria-label="Google Reviews"
              >
                <GoogleIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-['Oswald'] text-sm uppercase tracking-widest text-[#F5F1EB] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#C6A56B] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Locations & Contacts */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-['Oswald'] text-sm uppercase tracking-widest text-[#F5F1EB] mb-4">
              Studio Branches
            </h4>

            {BUSINESS_CONFIG.branches.map((b) => (
              <div key={b.id} className="text-xs space-y-1">
                <span className="text-[#F5F1EB] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>{b.branchName} (PIN: {b.pincode})</span>
                </span>
                <p className="text-[11px] text-[#888888] pl-5">
                  {b.fullAddress}
                </p>
              </div>
            ))}

            <div className="flex items-center gap-2.5 text-xs text-[#A7A7A7] pt-2 border-t border-[#1e1e1e]">
              <Phone className="w-4 h-4 text-[#C6A56B] shrink-0" />
              <a href={BUSINESS_CONFIG.phone.telLink} className="hover:text-[#C6A56B] transition-colors font-mono">
                {BUSINESS_CONFIG.phone.display}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.whatsapp.tattooBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Book Via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>
            © {currentYear} {BUSINESS_CONFIG.name} ({BUSINESS_CONFIG.alternateName}). All rights reserved. Bengaluru, Karnataka.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#A7A7A7] hover:text-[#C6A56B] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
