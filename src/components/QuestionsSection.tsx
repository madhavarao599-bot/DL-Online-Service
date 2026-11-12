import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_DATA } from '../data';

export const QuestionsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-[#FBF5EA] text-[#232323]">
      <div className="max-w-[880px] mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-18">
          <span className="text-[14px] font-medium tracking-wide uppercase text-[rgba(35,35,35,0.7)] block mb-3">
            Common questions
          </span>
          <h2 className="font-serif-display text-[44px] md:text-[56px] lg:text-[68px] leading-[1.0] tracking-tight">
            Questions
          </h2>
        </div>

        <div className="border-t border-[rgba(35,35,35,0.12)]">
          {BUSINESS_DATA.questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="border-b border-[rgba(35,35,35,0.12)] py-6 md:py-8"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-6 group cursor-pointer focus-visible:outline-none"
                >
                  <span className="font-serif-display text-[24px] md:text-[28px] text-[#232323] leading-snug group-hover:text-[#1E6F8C] transition-colors">
                    {item.q}
                  </span>

                  {/* Plus that rotates into a cross */}
                  <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[rgba(35,35,35,0.15)] text-[#232323] group-hover:border-[#1E6F8C]">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block text-[20px] leading-none select-none"
                    >
                      +
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 pr-12 font-body text-[16px] md:text-[17px] text-[rgba(35,35,35,0.8)] leading-[1.6]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
