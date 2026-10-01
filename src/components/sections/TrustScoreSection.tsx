import React, { useState } from 'react';
import { Award, Sliders, Shield, Zap, TrendingUp, Info } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export const TrustScoreSection: React.FC = () => {
  const [pillars, setPillars] = useState({
    guardrails: 92,
    adversarial: 88,
    lineage: 79,
    autonomy: 85,
    compliance: 96,
  });

  // Calculate composite Gargantua Trust Score (300 to 850 scale)
  const averagePillar = (pillars.guardrails + pillars.adversarial + pillars.lineage + pillars.autonomy + pillars.compliance) / 5;
  const compositeScore = Math.round(300 + (averagePillar / 100) * 550);

  const getTier = (score: number) => {
    if (score >= 780) return { label: 'AAA PRIME', color: 'text-emerald-400', desc: 'Lowest Actuarial Premium · Unrestricted Enterprise Clearance' };
    if (score >= 720) return { label: 'AA+ INSTITUTIONAL', color: 'text-cyan-400', desc: 'Standard Commercial Coverage · Minor Sandboxing' };
    if (score >= 660) return { label: 'A STANDARD', color: 'text-amber-400', desc: 'Moderate Risk · Secondary Guardrails Required' };
    if (score >= 580) return { label: 'BBB ELEVATED DRIFT', color: 'text-orange-400', desc: 'High Deductible · Restricted Financial Authority' };
    return { label: 'SUBPRIME UNINSURABLE', color: 'text-red-400', desc: 'Critical Risk · Fails Institutional Loss Thresholds' };
  };

  const tier = getTier(compositeScore);

  const handleSliderChange = (pillar: keyof typeof pillars, value: number) => {
    soundEngine.playHover();
    setPillars((prev) => ({ ...prev, [pillar]: value }));
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-24 z-10 max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">[ 05 ]</span>
        <div className="h-[1px] w-8 bg-amber-400/40" />
        <span className="hud-tag">THE STANDARD RATING</span>
      </div>

      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
        The Standard Credit Score for Artificial Intelligence.
      </h2>

      <p className="font-space text-slate-300 text-sm sm:text-base max-w-3xl mb-10 leading-relaxed">
        Just as FICO scores created liquidity and trust across the global lending ecosystem, the Gargantua Trust Score (300–850) provides the universal, auditable actuarial benchmark for enterprise AI deployment and reinsurance.
      </p>

      {/* Interactive Trust Score Simulator Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel-amber p-6 md:p-8 rounded-xl">
        {/* Left 5 Cols: Score Dial & Tier */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-lg bg-black/50 border border-white/10 text-center relative overflow-hidden">
          {/* Radial Glow */}
          <div className="absolute w-48 h-48 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-4">
            GARGANTUA TRUST SCORE ENGINE
          </div>

          {/* Dial Number */}
          <div className="relative my-2">
            <div className="text-6xl sm:text-7xl font-mono font-bold text-white text-glow-amber tracking-tighter tabular-nums">
              {compositeScore}
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1">SCALE 300 – 850</div>
          </div>

          {/* Rating Badge */}
          <div className="mt-4 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10">
            <span className={`font-mono text-sm font-bold tracking-widest ${tier.color}`}>
              {tier.label}
            </span>
          </div>

          <p className="text-xs text-slate-400 font-mono mt-4 max-w-xs leading-relaxed">
            {tier.desc}
          </p>

          <div className="w-full mt-6 pt-4 border-t border-white/10 flex justify-between text-[11px] font-mono text-slate-400">
            <span>HISTORICAL DELTA: <span className="text-emerald-400 font-bold">+34 PTS</span></span>
            <span>PERCENTILE: <span className="text-amber-400 font-bold">TOP 4.2%</span></span>
          </div>
        </div>

        {/* Right 7 Cols: Interactive 5 Pillars Sliders */}
        <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="text-xs font-mono text-amber-300 font-bold tracking-widest uppercase">
              ACTUARIAL RISK PILLARS
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              ADJUST WEIGHTS LIVE
            </div>
          </div>

          {/* Pillar 1: Guardrails */}
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                Safety Guardrails & Alignment
              </span>
              <span className="text-amber-400 font-bold">{pillars.guardrails} / 100</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={pillars.guardrails}
              onChange={(e) => handleSliderChange('guardrails', Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          {/* Pillar 2: Adversarial */}
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                Adversarial Resilience
              </span>
              <span className="text-cyan-400 font-bold">{pillars.adversarial} / 100</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={pillars.adversarial}
              onChange={(e) => handleSliderChange('adversarial', Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          {/* Pillar 3: Deterministic Lineage */}
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                Deterministic Lineage & Low Drift
              </span>
              <span className="text-emerald-400 font-bold">{pillars.lineage} / 100</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={pillars.lineage}
              onChange={(e) => handleSliderChange('lineage', Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
          </div>

          {/* Pillar 4: Autonomy Sandboxing */}
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-purple-400" />
                Autonomy Boundary & Privilege Limits
              </span>
              <span className="text-purple-400 font-bold">{pillars.autonomy} / 100</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={pillars.autonomy}
              onChange={(e) => handleSliderChange('autonomy', Number(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer"
            />
          </div>

          {/* Pillar 5: Compliance */}
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                EU AI Act & ISO 42001 Compliance
              </span>
              <span className="text-amber-300 font-bold">{pillars.compliance} / 100</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={pillars.compliance}
              onChange={(e) => handleSliderChange('compliance', Number(e.target.value))}
              className="w-full accent-amber-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
