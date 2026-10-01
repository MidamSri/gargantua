import React from 'react';
import { Search, ShieldCheck, Lock, FileText, ArrowUpRight, BarChart3, Users } from 'lucide-react';
import { INITIAL_COMPANIES } from '../../data/mockData';
import { soundEngine } from '../../utils/soundEngine';

interface PublicRegistrySectionProps {
  onOpenSearch: () => void;
  onOpenDemo: (tab: string) => void;
}

export const PublicRegistrySection: React.FC<PublicRegistrySectionProps> = ({
  onOpenSearch,
  onOpenDemo,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-24 z-10 max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">[ 07 ]</span>
        <div className="h-[1px] w-8 bg-amber-400/40" />
        <span className="hud-tag">PUBLIC REGISTRY & VERIFICATION</span>
      </div>

      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
        The Moody's & S&P of Autonomous AI.
      </h2>

      <p className="font-space text-slate-300 text-sm sm:text-base max-w-3xl mb-12 leading-relaxed">
        Enterprise customers, investors, lenders, and insurers query Gargantua's global registry to verify AI trust ratings, inspect insured model bounds, and unlock forensic actuarial dossiers.
      </p>

      {/* 2-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left: Search Directory Card */}
        <div className="glass-panel p-6 rounded-xl space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <h3 className="font-cinzel text-lg font-bold text-white">Public Verification Search</h3>
            </div>
            <span className="hud-tag text-[10px]">GLOBAL DIRECTORY</span>
          </div>

          <p className="text-xs text-slate-400 font-sans">
            Search any enterprise AI deployer to view their verified Gargantua Trust Rating, policy status, and insured coverage limits.
          </p>

          {/* Sample Search Box Trigger */}
          <div
            onClick={() => {
              soundEngine.playClick();
              onOpenSearch();
            }}
            className="p-3.5 rounded bg-black/60 border border-white/10 hover:border-amber-400/40 transition-all flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
              <Search className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Search companies (e.g. Synthetix Global, Aethelgard...)</span>
            </div>
            <kbd className="hidden sm:inline px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-300">
              EXPLORE
            </kbd>
          </div>

          {/* Quick List of Sample Verified Companies */}
          <div className="space-y-2 font-mono text-xs">
            {INITIAL_COMPANIES.slice(0, 3).map((comp) => (
              <div
                key={comp.id}
                onClick={() => {
                  soundEngine.playClick();
                  onOpenDemo('public');
                }}
                className="p-3 rounded bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] transition-all flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-white font-medium">{comp.name.split(' ')[0]} {comp.name.split(' ')[1]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">{comp.trustScore} PTS</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {comp.trustTier.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Paid Deep Risk Dossier Showcase */}
        <div className="glass-panel-amber p-6 rounded-xl space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <h3 className="font-cinzel text-lg font-bold text-white">Full Paid Risk Dossier</h3>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono border border-amber-400/40">
                ENTERPRISE & INVESTORS
              </span>
            </div>

            <p className="text-xs text-slate-300 font-sans mb-6">
              Institutional investors, credit rating agencies, and M&A diligence teams access deep unredacted vulnerability vectors and 10,000-run Monte Carlo loss distributions.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded bg-black/50 border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Monte Carlo Catastrophic Loss Curves</span>
                </div>
                <span className="text-amber-400 text-[10px]">10K RUNS</span>
              </div>

              <div className="p-3 rounded bg-black/50 border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Unredacted Red Team Vulnerability Matrix</span>
                </div>
                <span className="text-cyan-400 text-[10px]">FORENSIC</span>
              </div>

              <div className="p-3 rounded bg-black/50 border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Lloyd's Reinsurer Syndication Rating Sheet</span>
                </div>
                <span className="text-emerald-400 text-[10px]">ACTUARIAL</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundEngine.playGravitationalPulse();
              onOpenDemo('dossier');
            }}
            className="btn-primary w-full py-2.5 text-xs font-mono tracking-widest cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>UNLOCK DEEP DOSSIER IN DEMO</span>
          </button>
        </div>
      </div>
    </section>
  );
};
