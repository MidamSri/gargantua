import React, { useState, useEffect } from 'react';
import { soundEngine } from '../utils/soundEngine';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootLog, setBootLog] = useState('INITIALIZING GRAVITATIONAL LENS...');
  const [isReady, setIsReady] = useState(false);

  const logs = [
    'INITIALIZING GRAVITATIONAL LENS...',
    'CALIBRATING RELATIVISTIC ACCRETION DISK...',
    'MOUNTING SYNTHETIC RED TEAM MATRIX...',
    'ESTABLISHING EVENT HORIZON TELEMETRY...',
    'CALCULATING BASELINE GARGANTUA TRUST SCORES...',
    'SYNCHRONIZING UNDERWRITING ACTUARIAL MODELS...',
    'GARGANTUA SYSTEM ONLINE // READY',
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 3;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setIsReady(true);
      }
      setProgress(currentProgress);

      const logIndex = Math.min(
        Math.floor((currentProgress / 100) * logs.length),
        logs.length - 1
      );
      setBootLog(logs[logIndex]);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    soundEngine.playClick();
    soundEngine.startAmbientDrone();
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#030306] flex flex-col items-center justify-center p-6 select-none">
      {/* Background Radial Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-md w-full text-center space-y-8">
        {/* Monospace Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-amber-500/20 bg-amber-500/5 text-[11px] font-mono text-amber-400 tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            INITIALIZING GARGANTUA INFRASTRUCTURE
          </div>
          <h1 className="text-3xl md:text-4xl font-cinzel tracking-[0.2em] text-white font-bold">
            GARGANTUA
          </h1>
          <p className="text-xs font-mono text-slate-400 tracking-wider">
            AI RISK INTELLIGENCE + INSURANCE INFRASTRUCTURE
          </p>
        </div>

        {/* Counter & Bar */}
        <div className="space-y-3">
          <div className="flex justify-between items-baseline font-mono text-xs text-slate-400">
            <span className="text-[10px] text-amber-400/80 tracking-widest uppercase">
              {bootLog}
            </span>
            <span className="text-lg text-white font-bold tabular-nums">
              {progress.toString().padStart(3, '0')}%
            </span>
          </div>

          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-cyan-400 transition-all duration-100 ease-out shadow-[0_0_12px_rgba(245,166,35,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Enter Button or Pulse */}
        <div className="pt-4 h-14 flex items-center justify-center">
          {isReady ? (
            <button
              onClick={handleEnter}
              className="btn-primary w-full py-3.5 text-sm tracking-[0.2em] font-mono group cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                ENTER THE HORIZON
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          ) : (
            <div className="font-mono text-[11px] text-slate-500 tracking-widest uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500/60 animate-pulse" />
              SYNCHRONIZING QUANTUM ACTUARIAL ENGINE...
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="font-mono text-[10px] text-slate-600 tracking-widest">
          CREDIT SCORES MEASURE FINANCE · GARGANTUA MEASURES AI TRUST
        </div>
      </div>
    </div>
  );
};
