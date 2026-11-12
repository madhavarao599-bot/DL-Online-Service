import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RichImageProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  arch?: boolean;
}

export const RichImage: React.FC<RichImageProps> = ({
  src,
  alt,
  label,
  className = '',
  arch = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const containerClasses = `relative overflow-hidden bg-[#232323] ${
    arch ? 'rounded-t-[140px] md:rounded-t-[180px] rounded-b-[28px]' : 'rounded-[28px]'
  } ${className}`;

  const richPanel = (
    <div
      className="absolute inset-0 w-full h-full flex items-center justify-center select-none"
      style={{
        background: 'linear-gradient(140deg, #232323 0%, #1E6F8C 48%, #E07B24 100%)',
      }}
    >
      {/* Real SVG film grain noise overlay at 5% opacity */}
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-30" />

      {/* Subtle fine hairline geometry */}
      <div className="absolute inset-4 rounded-[22px] border border-[rgba(251,245,234,0.12)] pointer-events-none" />

      {/* Initials or card number in huge outline serif type */}
      {label && (
        <span
          className="font-serif-display text-outline-cream italic select-none pointer-events-none tracking-tight leading-none"
          style={{
            fontSize: 'clamp(5rem, 14vw, 11rem)',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );

  return (
    <motion.div
      className={containerClasses}
      initial={shouldReduceMotion ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={shouldReduceMotion ? undefined : { clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {hasError ? (
        richPanel
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-center block"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {/* Subtle warm grading overlay */}
          <div className="absolute inset-0 pointer-events-none grain-overlay mix-blend-overlay opacity-20" />
        </>
      )}
    </motion.div>
  );
};
