import React from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { HowWeStartSection } from './components/HowWeStartSection';
import { AboutSection } from './components/AboutSection';
import { QuestionsSection } from './components/QuestionsSection';
import { FinalInvitationSection } from './components/FinalInvitationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF5EA] text-[#232323] selection:bg-[#E07B24] selection:text-[#232323] relative">
      {/* 1. Top bar */}
      <TopBar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. The problem, said in one sentence */}
        <ProblemSection />

        {/* 4. What I do */}
        <WhatIDoSection />

        {/* 5. Before and after */}
        <BeforeAfterSection />

        {/* 6. How we start */}
        <HowWeStartSection />

        {/* 7. About me */}
        <AboutSection />

        {/* 8. Questions */}
        <QuestionsSection />

        {/* 9. Final invitation, on ink */}
        <FinalInvitationSection />
      </main>

      {/* 10. Footer on ink */}
      <Footer />

      {/* Phone sticky bar */}
      <MobileStickyBar />
    </div>
  );
}
