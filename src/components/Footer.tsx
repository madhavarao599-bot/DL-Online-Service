import React from 'react';
import { BUSINESS_DATA } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer
      data-ink-section="true"
      className="relative bg-[#232323] text-[#FBF5EA] border-t border-[rgba(251,245,234,0.1)] py-16 md:py-20 overflow-hidden"
    >
      {/* Real film grain noise layer */}
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-30" />

      <div className="relative max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-[rgba(251,245,234,0.1)]">
          {/* Left: logo.png on small cream rounded panel & City */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="bg-[#FBF5EA] rounded-xl px-3.5 py-2 inline-flex items-center gap-2 shadow-sm">
              <img
                src="/logo.png"
                alt={BUSINESS_DATA.businessName}
                className="h-8 w-auto object-contain block"
              />
              <span className="font-semibold text-[16px] text-[#232323] tracking-tight">
                {BUSINESS_DATA.businessName}
              </span>
            </div>

            <span className="text-[14px] text-[rgba(251,245,234,0.7)] font-medium">
              {BUSINESS_DATA.city}
            </span>
          </div>

          {/* Center/Right: The three contact links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-[15px] text-[rgba(251,245,234,0.85)]">
            <a
              href={BUSINESS_DATA.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07B24] transition-colors"
            >
              Book a 20 minute call
            </a>
            <a
              href={BUSINESS_DATA.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07B24] transition-colors"
            >
              Message me on WhatsApp
            </a>
            <a
              href={BUSINESS_DATA.emailUrl}
              className="hover:text-[#E07B24] transition-colors"
            >
              {BUSINESS_DATA.email}
            </a>
          </div>
        </div>

        {/* Bottom line: Year and Business name */}
        <div className="pt-8 flex items-center justify-between text-[14px] text-[rgba(251,245,234,0.6)]">
          <p>© 2026 {BUSINESS_DATA.businessName}</p>
        </div>
      </div>
    </footer>
  );
};
