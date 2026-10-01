import React, { useState } from 'react';
import { Volume2, VolumeX, Search, ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';
import { STORY_CHAPTERS } from '../data/mockData';

interface TopNavigationProps {
  activeChapter: number;
  lang: 'EN' | 'DE';
  onToggleLang: () => void;
  onOpenDemo: (tab?: string) => void;
  onOpenSearch: () => void;
  isDemoOpen: boolean;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  activeChapter,
  lang,
  onToggleLang,
  onOpenDemo,
  onOpenSearch,
  isDemoOpen,
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(soundEngine.getIsMuted());

  const currentChapter = STORY_CHAPTERS[activeChapter] || STORY_CHAPTERS[0];

  const handleToggleSound = () => {
    const isNowPlaying = soundEngine.toggleMute();
    setIsMuted(!isNowPlaying);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 px-4 sm:px-8 flex items-center justify-between border-b border-white/[0.06] bg-[#030306]/75 backdrop-blur-md transition-all select-none">
      {/* Left: Dynamic Scroll/Chapter Telemetry */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f5a623]" />
          <span className="text-amber-400 font-bold tracking-widest hidden sm:inline">
            [{currentChapter.tag}]
          </span>
          <span className="text-slate-400 tracking-wider hidden lg:inline">
            {lang === 'DE' && currentChapter.titleDe ? currentChapter.titleDe : currentChapter.title}
          </span>
          <span className="text-amber-400 font-bold sm:hidden">
            [{currentChapter.number}]
          </span>
        </div>
      </div>

      {/* Center: Brand Editorial Header */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="font-cinzel text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] text-white group-hover:text-amber-300 transition-colors uppercase">
          Gargantua
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Language Switcher (Singularity style) */}
        <button
          onClick={onToggleLang}
          onMouseEnter={() => soundEngine.playHover()}
          className="px-2 py-1 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white font-mono text-[10px] tracking-wider cursor-pointer"
        >
          {lang}
        </button>

        {/* Audio Toggle */}
        <button
          onClick={handleToggleSound}
          onMouseEnter={() => soundEngine.playHover()}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white transition-all text-[10px] font-mono tracking-wider cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3 h-3 text-slate-500" />
              <span className="hidden sm:inline">{lang === 'DE' ? 'AUDIO AUS' : 'AUDIO OFF'}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3 h-3 text-amber-400" />
              <div className="hidden sm:flex items-end gap-[2px] h-2.5">
                <span className="w-[2px] bg-amber-400 audio-bar-1" />
                <span className="w-[2px] bg-amber-400 audio-bar-2" />
                <span className="w-[2px] bg-amber-400 audio-bar-3" />
                <span className="w-[2px] bg-amber-400 audio-bar-4" />
              </div>
              <span className="hidden sm:inline">{lang === 'DE' ? 'AUDIO AN' : 'AUDIO ON'}</span>
            </>
          )}
        </button>

        {/* Search / Verify Button */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onOpenSearch();
          }}
          onMouseEnter={() => soundEngine.playHover()}
          className="p-1.5 rounded border border-white/10 bg-white/[0.02] hover:border-amber-400/40 text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
          title="Search Company AI Profile"
        >
          <Search className="w-3.5 h-3.5" />
        </button>

        {/* Launch Demo Platform CTA */}
        <button
          onClick={() => {
            soundEngine.playGravitationalPulse();
            onOpenDemo();
          }}
          onMouseEnter={() => soundEngine.playHover()}
          className="btn-primary py-1 px-3 text-[10px] tracking-widest cursor-pointer shadow-[0_0_15px_rgba(245,166,35,0.4)]"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="hidden md:inline">{isDemoOpen ? 'DASHBOARD' : (lang === 'DE' ? 'DEMO-PLATTFORM' : 'DEMO PLATFORM')}</span>
          <span className="md:hidden">DEMO</span>
        </button>
      </div>
    </header>
  );
};
