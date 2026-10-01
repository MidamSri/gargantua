import React, { useState } from 'react';
import { FileCheck, Shield, DollarSign, Check, ArrowRight } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface UnderwritingSectionProps {
  onOpenDemo: (tab: string) => void;
}

export const UnderwritingSection: React.FC<UnderwritingSectionProps> = ({ onOpenDemo }) => {
  const [exposure, setExposure] = useState(25); // in Millions USD ($25M)
  const [deductible, setDeductible] = useState(50); // in Thousands USD ($50k)

  // Dynamic actuarial calculation (assuming 784 Trust Score = 1.15% base rate)
  const baseRate = 0.0115;
  const deductibleDiscount = 1 - (deductible / 500) * 0.25;
  const annualPremium = Math.round(exposure * 1000000 * baseRate * deductibleDiscount);
  const monthlyPremium = Math.round(annualPremium / 12);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-24 z-10 max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">[ 06 ]</span>
        <div className="h-[1px] w-8 bg-amber-400/40" />
        <span className="hud-tag">ACTUARIAL UNDERWRITING</span>
      </div>

      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
        Institutional Insurance Against Defined AI Losses.
      </h2>

      <p className="font-space text-slate-300 text-sm sm:text-base max-w-3xl mb-12 leading-relaxed">
        Gargantua bridges the mathematical divide between autonomous AI systems and global reinsurance syndicates. Instant, cryptographically bound policies backed by Lloyd's of London and Munich Re capacity.
      </p>

      {/* 4 Defined Loss Coverage Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="glass-panel p-5 border-white/[0.08]">
          <div className="text-amber-400 font-mono text-xs font-bold mb-2">01 · HALLUCINATION</div>
          <div className="text-sm font-semibold text-white mb-1">Misinformation Liability</div>
          <div className="text-xs text-slate-400">Coverage for financial losses, medical errors, or erroneous contract outputs caused by model confabulation.</div>
        </div>

        <div className="glass-panel p-5 border-white/[0.08]">
          <div className="text-cyan-400 font-mono text-xs font-bold mb-2">02 · EXECUTION</div>
          <div className="text-sm font-semibold text-white mb-1">Rogue Agent Actions</div>
          <div className="text-xs text-slate-400">Indemnity against unauthorized API execution, unintended trading slippage, and cloud infrastructure destruction.</div>
        </div>

        <div className="glass-panel p-5 border-white/[0.08]">
          <div className="text-amber-400 font-mono text-xs font-bold mb-2">03 · COPYRIGHT</div>
          <div className="text-sm font-semibold text-white mb-1">IP & Training Infringement</div>
          <div className="text-xs text-slate-400">Legal defense and statutory damages arising from copyright or trade secret leakage in generative outputs.</div>
        </div>

        <div className="glass-panel p-5 border-white/[0.08]">
          <div className="text-emerald-400 font-mono text-xs font-bold mb-2">04 · REGULATION</div>
          <div className="text-sm font-semibold text-white mb-1">Regulatory Fine Defense</div>
          <div className="text-xs text-slate-400">Protection against enforcement penalties under the EU AI Act Title III, FTC enforcement, and ISO non-compliance.</div>
        </div>
      </div>

      {/* Interactive Actuarial Pricing Engine Widget */}
      <div className="glass-panel-amber p-6 md:p-8 rounded-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="hud-tag">DYNAMIC ACTUARIAL QUOTE SIMULATOR</span>
            <h3 className="font-cinzel text-xl font-bold text-white mt-1">Instant Model Fleet Underwriting</h3>
          </div>
          <div className="font-mono text-xs text-slate-400">
            UNDERWRITING CAPACITY: <span className="text-emerald-400 font-bold">$250M PER FLEET</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-6 font-mono text-xs">
            <div className="space-y-2">
              <div className="flex justify-between text-slate-300">
                <span>Aggregate Policy Limit (Exposure)</span>
                <span className="text-amber-400 font-bold text-sm">${exposure},000,000 USD</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={exposure}
                onChange={(e) => {
                  soundEngine.playHover();
                  setExposure(Number(e.target.value));
                }}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>$5M Min</span>
                <span>$50M Standard</span>
                <span>$100M Institutional</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-slate-300">
                <span>Retained Deductible</span>
                <span className="text-cyan-400 font-bold text-sm">${deductible},000 USD</span>
              </div>
              <input
                type="range"
                min="25"
                max="500"
                step="25"
                value={deductible}
                onChange={(e) => {
                  soundEngine.playHover();
                  setDeductible(Number(e.target.value));
                }}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>$25k</span>
                <span>$100k</span>
                <span>$500k Max Retention</span>
              </div>
            </div>
          </div>

          {/* Calculated Output Box */}
          <div className="lg:col-span-5 p-6 rounded-lg bg-black/60 border border-amber-500/30 text-center space-y-4">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              INDICATIVE ANNUAL PREMIUM
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-white text-glow-amber">
              ${annualPremium.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ yr</span>
            </div>
            <div className="text-xs font-mono text-amber-300">
              ${monthlyPremium.toLocaleString()} / month (Effective Rate: {(baseRate * deductibleDiscount * 100).toFixed(2)}%)
            </div>

            <button
              onClick={() => {
                soundEngine.playGravitationalPulse();
                onOpenDemo('insurance');
              }}
              className="btn-primary w-full py-2.5 text-xs font-mono tracking-widest cursor-pointer"
            >
              <span>BIND POLICY IN DEMO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
