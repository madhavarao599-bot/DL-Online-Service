import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { RichImage } from './RichImage';
import { BUSINESS_DATA } from '../data';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Arch picture moves a little slower than the page (subtle parallax)
  const archY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 50]
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 bg-[#FBF5EA] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Words (On mobile sits below arch) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start">
            {/* Small line */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] md:text-[15px] font-medium tracking-wide uppercase text-[rgba(35,35,35,0.7)] mb-5"
            >
              For {BUSINESS_DATA.audience} in {BUSINESS_DATA.city}
            </motion.div>

            {/* Headline with masked line rise animation */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={shouldReduceMotion ? false : { y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif-display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] xl:text-[88px] text-[#232323] leading-[1.0] tracking-tight text-balance"
              >
                Your papers,{' '}
                <span className="italic text-[#E07B24] font-normal font-serif-display">
                  tracked
                </span>{' '}
                till they are done.
              </motion.h1>
            </div>

            {/* Plain line under headline */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="font-body text-[17px] md:text-[18px] text-[#232323] leading-[1.6] max-w-[54ch] mb-9"
            >
              {BUSINESS_DATA.heroSentence}
            </motion.p>

            {/* Buttons: Primary Call & WhatsApp */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <MagneticButton href={BUSINESS_DATA.bookingUrl} variant="primary">
                Book a 20 minute call
              </MagneticButton>

              <a
                href={BUSINESS_DATA.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-[16px] font-medium text-[#232323] hover:text-[#1E6F8C] transition-colors whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#1E6F8C]" />
                Message me on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right Column: Arch Picture & Floating Card (On mobile sits above words) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              style={{ y: archY }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              {/* Tall Arch Frame: Rounded top, square bottom */}
              <div className="relative aspect-[4/5] w-full shadow-[0_20px_50px_rgba(35,35,35,0.08)]">
                <RichImage
                  src="/me.jpg"
                  alt="Madhava Rao"
                  label="MR"
                  arch={true}
                  className="w-full h-full shadow-inner"
                />

                {/* Floating Corner Card */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#FBF5EA] border border-[rgba(35,35,35,0.12)] rounded-2xl px-4 py-3 shadow-[0_12px_32px_rgba(35,35,35,0.08)] max-w-[240px]"
                >
                  <p className="font-body text-[13px] md:text-[14px] font-semibold text-[#232323] leading-snug">
                    {BUSINESS_DATA.name},{' '}
                    <span className="font-normal text-[rgba(35,35,35,0.8)]">
                      founder of {BUSINESS_DATA.businessName}
                    </span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
