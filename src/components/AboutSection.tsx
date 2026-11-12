import React from 'react';
import { MagneticButton } from './MagneticButton';
import { RichImage } from './RichImage';
import { BUSINESS_DATA } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-36 bg-[#FBF5EA] text-[#232323]">
      <div className="max-w-[760px] mx-auto px-6 md:px-10">
        <div className="border border-[rgba(35,35,35,0.12)] rounded-[28px] p-8 md:p-14 bg-[#FBF5EA] shadow-[0_12px_40px_rgba(35,35,35,0.03)]">
          {/* Header with me.jpg small and round */}
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 border border-[rgba(35,35,35,0.15)] shadow-sm">
              <RichImage
                src="/me.jpg"
                alt="Madhava Rao"
                label="MR"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <span className="text-[13px] font-medium tracking-wide uppercase text-[rgba(35,35,35,0.7)] block">
                Founder
              </span>
              <h2 className="font-serif-display text-[32px] md:text-[40px] leading-tight text-[#232323]">
                A note from {BUSINESS_DATA.name}
              </h2>
            </div>
          </div>

          {/* Letter Body in slightly larger reading size */}
          <div className="space-y-5 font-body text-[19px] md:text-[21px] text-[#232323] leading-[1.65] mb-10">
            <p>
              {BUSINESS_DATA.aboutMeText}
            </p>
          </div>

          {/* Signature in Caveat handwritten font */}
          <div className="mb-10">
            <div className="font-signature text-[44px] md:text-[52px] text-[#232323] select-none leading-none -rotate-2">
              {BUSINESS_DATA.firstName}
            </div>
          </div>

          {/* Button: Book a 20 minute call with Madhava */}
          <div>
            <MagneticButton href={BUSINESS_DATA.bookingUrl} variant="primary">
              Book a 20 minute call with {BUSINESS_DATA.firstName}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
