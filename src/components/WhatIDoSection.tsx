import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { RichImage } from './RichImage';
import { BUSINESS_DATA } from '../data';

export const WhatIDoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate horizontal translation on desktop
  // 3 cards: cards move sideways as you scroll down
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.6%']);

  return (
    <section id="what-i-do" className="relative bg-[#FBF5EA] text-[#232323]">
      {/* DESKTOP PINNED SECTION (Disabled if reduced motion is true) */}
      {!shouldReduceMotion && (
        <div ref={containerRef} className="hidden md:block relative h-[300vh]">
          <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-8 lg:px-16">
            {/* Pinned Heading */}
            <div className="max-w-[1240px] w-full mx-auto mb-10 shrink-0">
              <span className="text-[14px] font-medium tracking-wide uppercase text-[rgba(35,35,35,0.7)] block mb-2">
                What I set up
              </span>
              <h2 className="font-serif-display text-[54px] lg:text-[68px] leading-[1.0] tracking-tight">
                What I do
              </h2>
            </div>

            {/* Horizontal sliding track */}
            <div className="w-full overflow-visible">
              <motion.div style={{ x }} className="flex gap-8 w-fit pl-2 pr-16">
                {BUSINESS_DATA.cards.map((card) => (
                  <div
                    key={card.num}
                    className="w-[70vw] max-w-[820px] h-[540px] lg:h-[580px] bg-[#FBF5EA] border border-[rgba(35,35,35,0.12)] rounded-[28px] overflow-hidden flex flex-col shrink-0 shadow-[0_12px_36px_rgba(35,35,35,0.04)]"
                  >
                    {/* Top 60%: Work Picture */}
                    <div className="h-[60%] w-full relative overflow-hidden bg-[#232323]">
                      <RichImage
                        src={card.image}
                        alt={card.title}
                        label={card.num}
                        className="w-full h-full rounded-none"
                      />
                    </div>

                    {/* Bottom 40%: Content */}
                    <div className="h-[40%] p-6 lg:p-8 flex flex-col justify-between bg-[#FBF5EA]">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-serif-display text-[32px] text-[#232323] italic">
                          {card.num}
                        </span>
                        <h3 className="font-serif-display text-[28px] lg:text-[32px] text-[#232323] leading-none">
                          {card.title}
                        </h3>
                      </div>

                      <div className="space-y-2.5 font-body text-[15px] lg:text-[16px] leading-[1.5]">
                        <p className="text-[rgba(35,35,35,0.75)]">
                          <strong className="font-semibold text-[#232323]">Today:</strong>{' '}
                          {card.today}
                        </p>
                        <p className="text-[#232323]">
                          <strong className="font-semibold text-[#1E6F8C]">
                            With DL Online Service:
                          </strong>{' '}
                          {card.withService}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE (or Reduced Motion): Stack & Swipe Sideways */}
      <div
        className={`${
          shouldReduceMotion ? 'block' : 'block md:hidden'
        } py-16 px-6 max-w-[1240px] mx-auto`}
      >
        <div className="mb-8">
          <span className="text-[13px] font-medium tracking-wide uppercase text-[rgba(35,35,35,0.7)] block mb-2">
            What I set up
          </span>
          <h2 className="font-serif-display text-[44px] leading-[1.0] tracking-tight">
            What I do
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 no-scrollbar -mx-6 px-6">
          {BUSINESS_DATA.cards.map((card) => (
            <div
              key={card.num}
              className="w-[85vw] max-w-[360px] snap-center bg-[#FBF5EA] border border-[rgba(35,35,35,0.12)] rounded-[28px] overflow-hidden flex flex-col shrink-0 shadow-[0_8px_24px_rgba(35,35,35,0.04)]"
            >
              {/* Picture 60% */}
              <div className="h-[240px] w-full relative overflow-hidden bg-[#232323]">
                <RichImage
                  src={card.image}
                  alt={card.title}
                  label={card.num}
                  className="w-full h-full rounded-none"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-display text-[26px] italic text-[#232323]">
                    {card.num}
                  </span>
                  <h3 className="font-serif-display text-[24px] text-[#232323]">
                    {card.title}
                  </h3>
                </div>

                <div className="space-y-2 text-[14px] leading-[1.5]">
                  <p className="text-[rgba(35,35,35,0.75)]">
                    <strong className="font-semibold text-[#232323]">Today:</strong>{' '}
                    {card.today}
                  </p>
                  <p className="text-[#232323]">
                    <strong className="font-semibold text-[#1E6F8C]">
                      With DL Online Service:
                    </strong>{' '}
                    {card.withService}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
