import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface BottomTickerProps {
  onOpenImprint: () => void;
}

export const BottomTicker: React.FC<BottomTickerProps> = ({ onOpenImprint }) => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 h-9 px-4 sm:px-8 flex items-center justify-between border-t border-white/[0.06] bg-[#030306]/90 backdrop-blur-md text-[10px] font-mono text-slate-400 select-none">
      {/* Left: Imprint Trigger (Singularity style) */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            soundEngine.playClick();
            onOpenImprint();
          }}
          className="text-slate-400 hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
        >
          IMPRINT / METHODOLOGY
        </button>
        <span className="text-slate-700 hidden sm:inline">|</span>
        <span className="text-slate-500 hidden sm:inline">GARGANTUA LABS © 2026</span>
      </div>

      {/* Center: Live Ticker */}
      <div className="flex items-center gap-3 overflow-hidden text-slate-300">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-500 hidden md:inline">EXPOSURE BOUND:</span>
          <span className="text-amber-300 font-bold">$185.0M</span>
        </div>
        <span className="hidden md:inline text-slate-700">·</span>
        <div className="hidden lg:flex items-center gap-1.5">
          <span className="text-slate-500">MONITORED AGENTS:</span>
          <span className="text-cyan-300 font-bold">1.48B / MO</span>
        </div>
      </div>

      {/* Right: Timestamp */}
      <div className="flex items-center gap-2 text-slate-500">
        <span className="hidden sm:inline">RS: 0.887</span>
        <span className="hidden sm:inline text-slate-700">|</span>
        <span className="text-slate-400 tabular-nums">{timeStr}</span>
      </div>
    </footer>
  );
};
