import React, { useEffect, useState } from 'react';
import { MagneticButton } from './MagneticButton';
import { BUSINESS_DATA } from '../data';

export const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOverInk, setIsOverInk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // Check if header is currently intersecting any ink section
      const inkSections = document.querySelectorAll('[data-ink-section="true"]');
      let overInk = false;
      const headerProbeY = 40; // probe near center top

      inkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerProbeY && rect.bottom >= headerProbeY) {
          overInk = true;
        }
      });

      setIsOverInk(overInk);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute theme styles:
  // 1. Transparent over hero
  // 2. Cream with hairline once scrolled
  // 3. Ink with cream text when over ink section (never grey or blurred beige)
  let barClasses = 'bg-transparent text-[#232323] border-b border-transparent';
  if (isOverInk) {
    barClasses = 'bg-[#232323] text-[#FBF5EA] border-b border-[rgba(251,245,234,0.12)]';
  } else if (scrolled) {
    barClasses = 'bg-[#FBF5EA] text-[#232323] border-b border-[rgba(35,35,35,0.12)]';
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${barClasses}`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-8">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 focus-visible:outline-none">
          <div
            className={`transition-all duration-200 flex items-center ${
              isOverInk
                ? 'bg-[#FBF5EA] rounded-xl px-2.5 py-1.5 shadow-sm'
                : 'bg-transparent py-1'
            }`}
          >
            <img
              src="/logo.png"
              alt={BUSINESS_DATA.businessName}
              className="h-9 w-auto object-contain block"
            />
            {/* Business name wordmark if logo image has no text or scales */}
            <span
              className={`font-semibold text-[17px] tracking-tight ml-2 ${
                isOverInk ? 'text-[#232323]' : 'text-[#232323]'
              }`}
            >
              {BUSINESS_DATA.businessName}
            </span>
          </div>
        </a>

        {/* Center: Three Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-tight">
          <a
            href="#what-i-do"
            className={`transition-colors hover:text-[#E07B24] ${
              isOverInk ? 'text-[#FBF5EA]' : 'text-[#232323]'
            }`}
          >
            What I do
          </a>
          <a
            href="#how-it-works"
            className={`transition-colors hover:text-[#E07B24] ${
              isOverInk ? 'text-[#FBF5EA]' : 'text-[#232323]'
            }`}
          >
            How it works
          </a>
          <a
            href="#about"
            className={`transition-colors hover:text-[#E07B24] ${
              isOverInk ? 'text-[#FBF5EA]' : 'text-[#232323]'
            }`}
          >
            About
          </a>
        </nav>

        {/* Right: Pill Button */}
        <div className="shrink-0">
          <MagneticButton href={BUSINESS_DATA.bookingUrl} variant="topbar">
            Book a call
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};
