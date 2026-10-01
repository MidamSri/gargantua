import React, { useState } from 'react';
import { ACADEMIC_SOURCES } from '../../data/mockData';
import { ShieldCheck, ExternalLink, ArrowUp } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface SourcesSectionProps {
  lang: 'EN' | 'DE';
  onOpenDemo: (tab?: string) => void;
}

export const SourcesSection: React.FC<SourcesSectionProps> = ({ lang, onOpenDemo }) => {
  return (
    <section className="narrative-section pb-32">
      {/* Chapter Tag */}
      <div className="section-tag">
        <span>{lang === 'DE' ? '11 · WAS BLEIBT' : '11 · WHAT REMAINS'}</span>
      </div>

      <h2 className="section-heading">
        {lang === 'DE' ? 'Niemand weiß es' : 'Nobody knows'}
      </h2>

      <p className="section-lead">
        {lang === 'DE'
          ? 'Niemand kennt die absolute Grenze. Aber die Menschen und Unternehmen, die daran arbeiten, halten sie für nah genug, um sich vorzubereiten. Die Quellen für jede Zahl sind unten aufgeführt.'
          : 'Nobody knows the ultimate upper bound. But the people and enterprises working on autonomous intelligence consider it close enough to prepare. The sources for every number are listed below.'}
      </p>

      {/* Subheader */}
      <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-4">
        {lang === 'DE' ? 'QUELLEN FOLGEN' : 'SOURCES FOLLOW'}
      </div>

      {/* Sources List (Matching Singularity 1:1) */}
      <div className="space-y-3 font-mono text-xs max-w-4xl mb-12">
        {ACADEMIC_SOURCES.map((s, idx) => (
          <div
            key={s.id}
            className="p-3.5 rounded bg-black/40 border border-white/[0.06] hover:border-amber-400/30 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          >
            <div>
              <span className="text-amber-400 font-bold mr-2">[{s.id.toString().padStart(2, '0')}]</span>
              <span className="text-white font-semibold">{s.author} ({s.year}): </span>
              <span className="text-slate-300 italic">{s.title} </span>
              <span className="text-slate-500 text-[11px] font-sans">({s.publication})</span>
            </div>
            <span className="text-[10px] text-slate-500 uppercase shrink-0">
              CITATION // {s.year}
            </span>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="text-[11px] font-mono text-slate-500 max-w-3xl mb-12">
        {lang === 'DE'
          ? 'Prognosen ändern sich. Die angegebenen Daten entsprechen dem jeweiligen Stand, zuletzt geprüft im September 2026.'
          : 'Forecasts change. The dates given are the respective states, last checked in September 2026.'}
      </div>

      {/* Grand Finale Launch Container */}
      <div className="glass-panel-amber p-8 sm:p-10 rounded-xl text-center space-y-6 max-w-3xl">
        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wider">
          {lang === 'DE' ? 'Gargantua KI-Infrastruktur starten' : 'Experience Gargantua AI Risk Infrastructure'}
        </h3>
        <p className="font-mono text-xs sm:text-sm text-slate-300 max-w-xl mx-auto italic">
          "Credit scores measure financial trust. Gargantua measures AI trust."
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <button
            onClick={() => {
              soundEngine.playGravitationalPulse();
              onOpenDemo('dashboard');
            }}
            className="btn-primary py-3 px-8 text-xs font-mono tracking-widest cursor-pointer shadow-[0_0_30px_rgba(245,166,35,0.5)] w-full sm:w-auto"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'DE' ? 'INTERAKTIVE PLATTFORM STARTEN' : 'LAUNCH INTERACTIVE PLATFORM'}</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary py-3 px-6 text-xs font-mono tracking-widest cursor-pointer w-full sm:w-auto"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{lang === 'DE' ? 'ZUM ANFANG ↑' : 'RETURN TO TOP ↑'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
