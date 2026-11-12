import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { BUSINESS_DATA } from '../data';

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: any;
  reducedMotion: boolean | null;
}

const Word: React.FC<WordProps> = ({ word, index, total, progress, reducedMotion }) => {
  const start = index / total;
  const end = Math.min(1, (index + 1) / total);

  // Muted cream to full cream
  const opacity = useTransform(progress, [start, end], [0.28, 1]);
  const y = useTransform(progress, [start, end], [4, 0]);

  if (reducedMotion) {
    return (
      <span className="inline-block text-[#FBF5EA] opacity-100 mr-[0.28em]">
        {word}
      </span>
    );
  }

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block text-[#FBF5EA] mr-[0.28em] transition-colors duration-150"
    >
      {word}
    </motion.span>
  );
};

export const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 35%'],
  });

  const words = BUSINESS_DATA.problemSentence.split(' ');

  return (
    <section
      id="problem"
      data-ink-section="true"
      ref={sectionRef}
      className="relative bg-[#232323] text-[#FBF5EA] py-24 sm:py-32 lg:py-44 overflow-hidden"
    >
      {/* Real film grain on dark sections (SVG feTurbulence noise at 5% opacity) */}
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-30" />

      <div className="relative max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="font-serif-display text-[32px] sm:text-[44px] md:text-[54px] lg:text-[66px] leading-[1.12] tracking-tight">
          {words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
              reducedMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
