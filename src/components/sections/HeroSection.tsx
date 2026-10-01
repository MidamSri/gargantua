import React from 'react';
import { Shield, ArrowDown, ChevronRight } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface HeroSectionProps {
  lang: 'EN' | 'DE';
  onOpenDemo: () => void;
  onScrollNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenDemo, onScrollNext }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 pt-24 pb-16 z-10 text-center">
      {/* HUD Telemetry Top Tag */}
      <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 backdrop-blur-md text-[11px] font-mono text-amber-300 tracking-[0.2em] uppercase">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f5a623]" />
        {lang === 'DE' ? '00 · DEFINITION // EVENT HORIZONT' : '00 · DEFINITION // EVENT HORIZON'}
      </div>

      {/* Main Cinematic Title */}
      <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] text-white text-glow-white mb-6 uppercase">
        GARGANTUA
      </h1>

      {/* Subtitle */}
      <div className="max-w-3xl mb-8 space-y-4">
        <p className="font-space text-base sm:text-xl md:text-2xl text-amber-300/90 font-medium tracking-wide">
          {lang === 'DE'
            ? 'KI-Risikointelligenz + Versicherungsinfrastruktur'
            : 'AI Risk Intelligence + Insurance Infrastructure'}
        </p>

        {/* Central Concept Axiom Box */}
        <div className="py-4 px-6 rounded-lg border border-white/10 bg-black/50 backdrop-blur-md inline-block max-w-2xl">
          <p className="font-mono text-xs sm:text-sm text-slate-300 tracking-wider italic">
            {lang === 'DE' ? (
              <>
                "Kredit-Scores messen finanzielles Vertrauen. <span className="text-amber-400 font-bold not-italic">Gargantua misst KI-Vertrauen.</span>"
              </>
            ) : (
              <>
                "Credit scores measure financial trust. <span className="text-amber-400 font-bold not-italic">Gargantua measures AI trust.</span>"
              </>
            )}
          </p>
        </div>
      </div>

      {/* Interactive Core Pillars Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full mb-10 text-left">
        <div className="glass-panel p-3.5 border-white/[0.08] hover:border-amber-400/40 transition-all">
          <div className="hud-tag mb-1">01 · PORTFOLIO</div>
          <div className="text-xs font-semibold text-white">
            {lang === 'DE' ? 'Modellflotten-Telemetrie' : 'AI Fleet Intelligence'}
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            {lang === 'DE' ? 'Kontinuierliche Drift-Überwachung' : 'Continuous risk & drift telemetry'}
          </div>
        </div>

        <div className="glass-panel p-3.5 border-white/[0.08] hover:border-amber-400/40 transition-all">
          <div className="hud-tag-cyan mb-1">02 · ADVERSARIAL</div>
          <div className="text-xs font-semibold text-white">
            {lang === 'DE' ? 'Synthetische Stresstests' : 'Synthetic Stress Tests'}
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            {lang === 'DE' ? 'Automatisierte Red-Teaming Probes' : 'Automated red teaming & jailbreaks'}
          </div>
        </div>

        <div className="glass-panel p-3.5 border-white/[0.08] hover:border-amber-400/40 transition-all">
          <div className="hud-tag mb-1">03 · TRUST SCORE</div>
          <div className="text-xs font-semibold text-white">
            {lang === 'DE' ? '300–850 KI-Score' : '300–850 AI Credit Score'}
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            {lang === 'DE' ? 'Standardisiertes Rating' : 'Standardized institutional rating'}
          </div>
        </div>

        <div className="glass-panel p-3.5 border-white/[0.08] hover:border-amber-400/40 transition-all">
          <div className="hud-tag-cyan mb-1">04 · INSURANCE</div>
          <div className="text-xs font-semibold text-white">
            {lang === 'DE' ? 'Versicherungsbindung' : 'Actuarial Underwriting'}
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            {lang === 'DE' ? 'Gedeckte KI-Schäden' : 'Instant policy bind against losses'}
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={() => {
            soundEngine.playGravitationalPulse();
            onOpenDemo();
          }}
          onMouseEnter={() => soundEngine.playHover()}
          className="btn-primary py-3 px-8 text-xs tracking-[0.2em] font-mono cursor-pointer shadow-[0_0_25px_rgba(245,166,35,0.45)] w-full sm:w-auto"
        >
          <Shield className="w-4 h-4" />
          {lang === 'DE' ? 'INTERAKTIVE PLATTFORM STARTEN' : 'LAUNCH INTERACTIVE PLATFORM'}
        </button>

        <button
          onClick={() => {
            soundEngine.playClick();
            onScrollNext();
          }}
          onMouseEnter={() => soundEngine.playHover()}
          className="btn-secondary py-3 px-6 text-xs tracking-[0.2em] font-mono cursor-pointer w-full sm:w-auto"
        >
          {lang === 'DE' ? 'GESCHICHTE ERKUNDEN' : 'EXPLORE THE STORY'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={onScrollNext}
        className="mt-12 flex flex-col items-center gap-2 text-slate-500 hover:text-amber-400 transition-colors cursor-pointer select-none"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          {lang === 'DE' ? 'SCROLLEN ZUM EINTAUCHEN' : 'SCROLL DOWN TO DIVE IN'}
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
