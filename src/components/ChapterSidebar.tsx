import React from 'react';
import { STORY_CHAPTERS } from '../data/mockData';
import { soundEngine } from '../utils/soundEngine';

interface ChapterSidebarProps {
  activeChapter: number;
  onSelectChapter: (chapterId: number) => void;
}

export const ChapterSidebar: React.FC<ChapterSidebarProps> = ({
  activeChapter,
  onSelectChapter,
}) => {
  return (
    <aside className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-end gap-1.5 select-none pointer-events-auto">
      {/* Vertical Track Line */}
      <div className="absolute right-[5px] top-2 bottom-2 w-[1px] bg-white/[0.08] -z-10" />

      {STORY_CHAPTERS.map((ch) => {
        const isActive = activeChapter === ch.id;
        return (
          <button
            key={ch.id}
            onClick={() => {
              soundEngine.playClick();
              onSelectChapter(ch.id);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="group relative flex items-center gap-2.5 py-1 px-1 cursor-pointer transition-all"
          >
            {/* Hover Tooltip Title */}
            <div
              className={`font-mono text-[9px] tracking-widest uppercase transition-all duration-200 pointer-events-none whitespace-nowrap ${
                isActive
                  ? 'text-amber-400 opacity-100 translate-x-0 font-bold bg-black/60 px-2 py-0.5 rounded border border-amber-400/30'
                  : 'text-slate-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1'
              }`}
            >
              [{ch.number}] {ch.title.split(':')[0].substring(0, 22)}
            </div>

            {/* Indicator Box/Tick (Singularity style) */}
            <div
              className={`relative flex items-center justify-center transition-all ${
                isActive
                  ? 'w-4 h-4 rounded border border-amber-400 bg-amber-400/20 shadow-[0_0_8px_#f5a623]'
                  : 'w-3 h-3'
              }`}
            >
              <div
                className={`transition-all rounded-full ${
                  isActive
                    ? 'w-1.5 h-1.5 bg-amber-400'
                    : 'w-1 h-1 bg-slate-600 group-hover:bg-slate-300 group-hover:scale-150'
                }`}
              />
            </div>
          </button>
        );
      })}
    </aside>
  );
};
