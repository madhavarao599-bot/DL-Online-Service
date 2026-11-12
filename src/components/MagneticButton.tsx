import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'topbar' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    // Ease slightly toward cursor (max 6px)
    setPosition({
      x: distanceX * 0.15,
      y: distanceY * 0.15,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle =
    'inline-flex items-center justify-center font-medium transition-colors select-none whitespace-nowrap cursor-pointer rounded-full';

  let variantStyle = '';
  if (variant === 'primary') {
    // Accent background #E07B24, Ink text #232323
    variantStyle =
      'bg-[#E07B24] text-[#232323] px-7 py-3.5 text-[16px] md:text-[17px] font-semibold hover:bg-[#d4721d] shadow-[0_2px_12px_rgba(224,123,36,0.25)]';
  } else if (variant === 'topbar') {
    variantStyle =
      'bg-[#E07B24] text-[#232323] px-5 py-2 text-[14px] font-semibold hover:bg-[#d4721d]';
  } else if (variant === 'outline') {
    variantStyle =
      'border border-[rgba(35,35,35,0.2)] text-[#232323] px-6 py-3 text-[16px] hover:border-[#232323] bg-transparent';
  }

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={shouldReduceMotion ? {} : { x: position.x, y: position.y }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </motion.a>
  );
};
