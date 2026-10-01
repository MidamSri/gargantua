import React, { useState } from 'react';
import { Award, Shield, Zap, TrendingUp, Sliders, ArrowRight, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface TrustScoreViewProps {
  initialScore?: number;
  onProceedToInsurance: () => void;
}

export const TrustScoreView: React.FC<TrustScoreViewProps> = ({
  initialScore = 784,
  onProceedToInsurance,
}) => {
  const [pillars, setPillars] = useState({
    guardrails: 92,
    adversarial: 88,
    lineage: 79,
    autonomy: 85,
    compliance: 96,
  });

  const avg = (pillars.guardrails + pillars.adversarial + pillars.lineage + pillars.autonomy + pillars.compliance) / 5;
  const score = Math.round(300 + (avg / 100) * 550);

  const getTier = (s: number) => {
    if (s >= 780) return { label: 'AAA PRIME', color: 'text-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/30' };
    if (s >= 720) return { label: 'AA+ INSTITUTIONAL', color: 'text-cyan-400', badge: 'bg-cyan-500/10 border-cyan-500/30' };
    if (s >= 660) return { label: 'A STANDARD', color: 'text-amber-400', badge: 'bg-amber-500/10 border-amber-500/30' };
    if (s >= 580) return { label: 'BBB ELEVATED DRIFT', color: 'text-orange-400', badge: 'bg-orange-500/10 border-orange-500/30' };
    return { label: 'SUBPRIME HIGH RISK', color: 'text-red-400', badge: 'bg-red-500/10 border-red-500/30' };
  };

  const tier = getTier(score);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <div className="hud-tag text-[10px] mb-1">UNIVERSAL AI RISK RATING</div>
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
          Gargantua Trust Score Engine
        </h2>
        <p className="text-xs text-slate-400 font-mono mt-0.5">
          Standardized 300–850 AI Credit Rating. Evaluates empirical safety guardrails, determinism, adversarial resilience, and regulatory compliance.
        </p>
      </div>

      {/* Main Score & Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 5 Cols: Score Dial & Badge */}
        <div className="lg:col-span-5 glass-panel-amber p-6 rounded-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
            COMPOSITE RATING
          </div>

          <div className="text-6xl font-mono font-bold text-white text-glow-amber my-2 tabular-nums">
            {score}
          </div>

          <div className="text-xs font-mono text-slate-400 mb-4">SCALE 300 – 850</div>

          <div className={`px-4 py-1.5 rounded-full border ${tier.badge} mb-4`}>
            <span className={`font-mono text-xs font-bold tracking-widest ${tier.color}`}>
              {tier.label}
            </span>
          </div>

          <div className="w-full pt-4 border-t border-white/10 space-y-2 text-left font-mono text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-500">Historical Delta</span>
              <span className="text-emerald-400 font-bold">+34 pts (Post-Stress)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Industry Rank</span>
              <span className="text-amber-400 font-bold">Top 4.2% Sector</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Underwriting Status</span>
              <span className="text-cyan-400 font-bold">Insurable at Prime Tier</span>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: 5 Pillar Breakdown */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-xl space-y-4">
          <div className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider border-b border-white/10 pb-3">
            5 Core Actuarial Pillars
          </div>

          <div className="space-y-4 font-mono text-xs">
            {/* Guardrails */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  Alignment & Guardrail Integrity
                </span>
                <span className="text-amber-400 font-bold">{pillars.guardrails} / 100</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={pillars.guardrails}
                onChange={(e) => {
                  soundEngine.playHover();
                  setPillars({ ...pillars, guardrails: Number(e.target.value) });
                }}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            {/* Adversarial */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
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
                onChange={(e) => {
                  soundEngine.playHover();
                  setPillars({ ...pillars, adversarial: Number(e.target.value) });
                }}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Lineage */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
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
                onChange={(e) => {
                  soundEngine.playHover();
                  setPillars({ ...pillars, lineage: Number(e.target.value) });
                }}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>

            {/* Autonomy */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-purple-400" />
                  Autonomy Sandboxing & Limits
                </span>
                <span className="text-purple-400 font-bold">{pillars.autonomy} / 100</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={pillars.autonomy}
                onChange={(e) => {
                  soundEngine.playHover();
                  setPillars({ ...pillars, autonomy: Number(e.target.value) });
                }}
                className="w-full accent-purple-400 cursor-pointer"
              />
            </div>

            {/* Compliance */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  EU AI Act & Regulatory Governance
                </span>
                <span className="text-amber-300 font-bold">{pillars.compliance} / 100</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={pillars.compliance}
                onChange={(e) => {
                  soundEngine.playHover();
                  setPillars({ ...pillars, compliance: Number(e.target.value) });
                }}
                className="w-full accent-amber-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Next CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => {
            soundEngine.playGravitationalPulse();
            onProceedToInsurance();
          }}
          className="btn-primary py-2.5 px-6 text-xs font-mono tracking-widest cursor-pointer"
        >
          <span>CALCULATE INSURANCE QUOTE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
