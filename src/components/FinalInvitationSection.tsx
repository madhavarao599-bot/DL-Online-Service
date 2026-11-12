import React from 'react';
import { MagneticButton } from './MagneticButton';
import { BUSINESS_DATA } from '../data';

export const FinalInvitationSection: React.FC = () => {
  return (
    <section
      id="invitation"
      data-ink-section="true"
      className="relative bg-[#232323] text-[#FBF5EA] py-24 sm:py-32 lg:py-44 overflow-hidden"
    >
      {/* Real film grain noise layer at 5% opacity */}
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-30" />

      <div className="relative max-w-[1040px] mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        <h2 className="font-serif-display text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] text-[#FBF5EA] leading-[1.05] tracking-tight max-w-[18ch] mb-10 text-balance">
          Let's give your evenings back.
        </h2>

        {/* Booking Button in Accent Colour */}
        <div className="mb-8">
          <MagneticButton href={BUSINESS_DATA.bookingUrl} variant="primary">
            Book a 20 minute call
          </MagneticButton>
        </div>

        {/* WhatsApp and Email as plain links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 font-body text-[16px] text-[rgba(251,245,234,0.8)]">
          <a
            href={BUSINESS_DATA.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E07B24] transition-colors underline underline-offset-4"
          >
            Message me on WhatsApp
          </a>

          <span className="hidden sm:inline text-[rgba(251,245,234,0.3)]">·</span>

          <a
            href={BUSINESS_DATA.emailUrl}
            className="hover:text-[#E07B24] transition-colors underline underline-offset-4"
          >
            {BUSINESS_DATA.email}
          </a>
        </div>
      </div>
    </section>
  );
};
