import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_DATA } from '../data';

export const MobileStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after hero scrolls away (~450px)
      setVisible(window.scrollY > 480);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FBF5EA]/95 backdrop-blur-sm border-t border-[rgba(35,35,35,0.12)] p-3 px-4 shadow-[0_-4px_20px_rgba(35,35,35,0.08)]"
        >
          <a
            href={BUSINESS_DATA.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 rounded-full bg-[#E07B24] text-[#232323] font-semibold text-[15px] flex items-center justify-center tracking-tight shadow-sm active:scale-[0.98] transition-transform select-none"
          >
            Book a 20 minute call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
