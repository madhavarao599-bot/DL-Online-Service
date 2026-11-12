import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_DATA } from '../data';

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'without' | 'with'>('without');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-[#FBF5EA] text-[#232323]">
      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-12 md:mb-16">
          <span className="text-[14px] font-medium tracking-wide uppercase text-[rgba(35,35,35,0.7)] block mb-3">
            Your evening
          </span>
          <h2 className="font-serif-display text-[44px] md:text-[56px] lg:text-[68px] leading-[1.0] tracking-tight">
            Before and after
          </h2>
        </div>

        {/* Two-position switch */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-full border border-[rgba(35,35,35,0.12)] bg-[#FBF5EA]">
            <button
              type="button"
              onClick={() => setActiveTab('without')}
              className={`px-5 py-2.5 rounded-full text-[14px] md:text-[15px] font-medium transition-colors select-none ${
                activeTab === 'without'
                  ? 'bg-[#232323] text-[#FBF5EA] shadow-sm'
                  : 'text-[#232323] hover:text-[#1E6F8C]'
              }`}
            >
              Without DL Online Service
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('with')}
              className={`px-5 py-2.5 rounded-full text-[14px] md:text-[15px] font-medium transition-colors select-none ${
                activeTab === 'with'
                  ? 'bg-[#232323] text-[#FBF5EA] shadow-sm'
                  : 'text-[#232323] hover:text-[#1E6F8C]'
              }`}
            >
              With DL Online Service
            </button>
          </div>
        </div>

        {/* Crossfading 4-line list container */}
        <div className="relative bg-[#FBF5EA] border border-[rgba(35,35,35,0.12)] rounded-[28px] p-8 md:p-14 shadow-[0_12px_40px_rgba(35,35,35,0.03)]">
          <div className="grid grid-cols-1 grid-rows-1">
            {/* List 1: Without */}
            <motion.div
              initial={false}
              animate={{
                opacity: activeTab === 'without' ? 1 : 0,
                y: activeTab === 'without' || shouldReduceMotion ? 0 : 8,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`col-start-1 row-start-1 space-y-6 md:space-y-8 ${
                activeTab === 'without' ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              {BUSINESS_DATA.beforeAfter.without.map((line, idx) => (
                <div
                  key={`without-${idx}`}
                  className="flex items-start gap-4 md:gap-6 pb-6 border-b border-[rgba(35,35,35,0.08)] last:border-b-0 last:pb-0"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(35,35,35,0.35)] mt-2 shrink-0" />
                  <p className="font-body text-[17px] md:text-[20px] text-[rgba(35,35,35,0.85)] leading-[1.5]">
                    {line}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* List 2: With */}
            <motion.div
              initial={false}
              animate={{
                opacity: activeTab === 'with' ? 1 : 0,
                y: activeTab === 'with' || shouldReduceMotion ? 0 : 8,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`col-start-1 row-start-1 space-y-6 md:space-y-8 ${
                activeTab === 'with' ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              {BUSINESS_DATA.beforeAfter.with.map((line, idx) => (
                <div
                  key={`with-${idx}`}
                  className="flex items-start gap-4 md:gap-6 pb-6 border-b border-[rgba(35,35,35,0.08)] last:border-b-0 last:pb-0"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E07B24] mt-2 shrink-0" />
                  <p className="font-body text-[17px] md:text-[20px] text-[#232323] font-medium leading-[1.5]">
                    {line}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
