import React, { useState, useEffect, useRef } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { TopNavigation } from './components/TopNavigation';
import { ChapterSidebar } from './components/ChapterSidebar';
import { BottomTicker } from './components/BottomTicker';
import { GargantuaCanvas } from './components/GargantuaCanvas';
import { HeroSection } from './components/sections/HeroSection';
import { SingularityChapterSection } from './components/sections/SingularityChapterSection';
import { SourcesSection } from './components/sections/SourcesSection';
import { DemoApp } from './components/demo/DemoApp';
import { SearchModal } from './components/SearchModal';
import { ImprintModal } from './components/ImprintModal';
import { STORY_CHAPTERS, CompanyProfile } from './data/mockData';
import { soundEngine } from './utils/soundEngine';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false);
  const [demoInitialTab, setDemoInitialTab] = useState<string>('dashboard');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isImprintOpen, setIsImprintOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<'EN' | 'DE'>('EN');

  const chapterRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setScrollProgress(progress);

      chapterRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.3) {
          setActiveChapter(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectChapter = (chapterId: number) => {
    const targetRef = chapterRefs.current[chapterId];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = (tab = 'dashboard') => {
    setDemoInitialTab(tab);
    setIsDemoOpen(true);
  };

  const handleSelectCompanyFromSearch = (_company: CompanyProfile) => {
    setIsSearchOpen(false);
    handleOpenDemo('public');
  };

  const handleToggleLang = () => {
    soundEngine.playClick();
    setLang((prev) => (prev === 'EN' ? 'DE' : 'EN'));
  };

  return (
    <div className="relative min-h-screen bg-[#030306] text-white selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. Cinematic Boot Loader */}
      {!hasEntered && <IntroLoader onComplete={() => setHasEntered(true)} />}

      {/* 2. 3D WebGL Gargantua Black Hole Singularity Canvas */}
      <GargantuaCanvas scrollProgress={scrollProgress} activeChapter={activeChapter} />

      {/* 3. Film Grain, Scanlines & Radial Vignette */}
      <div className="cinematic-vignette" />
      <div className="cinematic-scanlines" />

      {/* 4. Top Navigation Bar */}
      <TopNavigation
        activeChapter={activeChapter}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenDemo={handleOpenDemo}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDemoOpen={isDemoOpen}
      />

      {/* 5. Right Vertical Chapter Sidebar */}
      <ChapterSidebar
        activeChapter={activeChapter}
        onSelectChapter={handleSelectChapter}
      />

      {/* 6. Exact 12 Chapters Story Journey */}
      <main className="relative z-10">
        {/* Chapter 00: Event Horizon Hero */}
        <div ref={(el) => { chapterRefs.current[0] = el; }} id="chapter-0">
          <HeroSection
            lang={lang}
            onOpenDemo={() => handleOpenDemo('dashboard')}
            onScrollNext={() => handleSelectChapter(1)}
          />
        </div>

        {/* Chapters 01 to 10 */}
        {STORY_CHAPTERS.slice(1, 11).map((ch) => (
          <div
            key={ch.id}
            ref={(el) => { chapterRefs.current[ch.id] = el; }}
            id={`chapter-${ch.id}`}
          >
            <SingularityChapterSection
              chapter={ch}
              lang={lang}
              onOpenDemo={handleOpenDemo}
              onOpenSearch={() => setIsSearchOpen(true)}
            />
          </div>
        ))}

        {/* Chapter 11: Sources & Bibliography Epilogue */}
        <div ref={(el) => { chapterRefs.current[11] = el; }} id="chapter-11">
          <SourcesSection lang={lang} onOpenDemo={handleOpenDemo} />
        </div>
      </main>

      {/* 7. Bottom Status & Imprint Ticker */}
      <BottomTicker onOpenImprint={() => setIsImprintOpen(true)} />

      {/* 8. Full Interactive Demo Platform Modal */}
      {isDemoOpen && (
        <DemoApp
          initialTab={demoInitialTab}
          onClose={() => setIsDemoOpen(false)}
        />
      )}

      {/* 9. Global Search Modal */}
      {isSearchOpen && (
        <SearchModal
          onClose={() => setIsSearchOpen(false)}
          onSelectCompany={handleSelectCompanyFromSearch}
        />
      )}

      {/* 10. Imprint & Legal Methodology Modal */}
      {isImprintOpen && (
        <ImprintModal onClose={() => setIsImprintOpen(false)} />
      )}
    </div>
  );
};

export default App;
