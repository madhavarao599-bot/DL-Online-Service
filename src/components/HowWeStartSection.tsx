import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { BUSINESS_DATA } from '../data';

export const HowWeStartSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['100%', '100%'] : ['0%', '100%']
  );

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-20 md:py-28 lg:py-36 bg-[#FBF5EA] text-[#232323]"
    >
      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-20">
          <span className="text-[14px] font-medium tracking-wide uppercase text-[rgba(35,35,35,0.7)] block mb-3">
            Simple process
          </span>
          <h2 className="font-serif-display text-[44px] md:text-[56px] lg:text-[68px] leading-[1.0] tracking-tight">
            How we start
          </h2>
        </div>

        {/* Steps container with filling vertical line */}
        <div className="relative pl-10 md:pl-16 space-y-14 md:space-y-20">
          {/* Base vertical line */}
          <div className="absolute left-3.5 md:left-5 top-4 bottom-4 w-[2px] bg-[rgba(35,35,35,0.12)] -translate-x-1/2" />

          {/* Accent filling vertical line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3.5 md:left-5 top-4 w-[2px] bg-[#E07B24] -translate-x-1/2 origin-top"
          />

          {BUSINESS_DATA.steps.map((step, idx) => (
            <div key={step.num} className="relative group">
              {/* Step indicator circle */}
              <div className="absolute -left-10 md:-left-16 top-1.5 w-7 h-7 rounded-full bg-[#FBF5EA] border-2 border-[#E07B24] flex items-center justify-center -translate-x-1/2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E07B24]" />
              </div>

              <div>
                <span className="font-serif-display text-[22px] md:text-[24px] text-[#1E6F8C] italic block mb-1">
                  Step {step.num}
                </span>
                <h3 className="font-serif-display text-[28px] md:text-[36px] text-[#232323] leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-[16px] md:text-[18px] text-[rgba(35,35,35,0.8)] leading-[1.6] max-w-[56ch]">
                  {step.desc}
                </p>
              </div>

              {/* Exact Price Line under Step 3 */}
              {idx === 2 && BUSINESS_DATA.price && (
                <div className="mt-10 p-6 md:p-8 rounded-[24px] border border-[rgba(35,35,35,0.12)] bg-[#FBF5EA] max-w-[520px]">
                  <span className="text-[13px] font-medium tracking-wide uppercase text-[rgba(35,35,35,0.7)] block mb-1">
                    Investment
                  </span>
                  <div className="font-serif-display text-[26px] md:text-[32px] text-[#232323] tracking-tight">
                    {BUSINESS_DATA.price}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
