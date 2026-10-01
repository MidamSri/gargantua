import React, { useState } from 'react';
import { INITIAL_COMPANIES } from '../../data/mockData';
import { Cpu, DollarSign, Activity, AlertCircle, ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface PortfolioSectionProps {
  onOpenDemo: (tab: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenDemo }) => {
  const company = INITIAL_COMPANIES[0];
  const [selectedModelId, setSelectedModelId] = useState(company.models[0].id);

  const selectedModel = company.models.find((m) => m.id === selectedModelId) || company.models[0];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-24 z-10 max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">[ 03 ]</span>
        <div className="h-[1px] w-8 bg-amber-400/40" />
        <span className="hud-tag">FLEET SURVEILLANCE</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Model Fleet Intelligence
          </h2>
          <p className="font-space text-slate-300 text-sm max-w-2xl mt-2">
            Real-time multi-provider observability across cost, latency, token flux, and non-deterministic risk drift.
          </p>
        </div>

        <button
          onClick={() => {
            soundEngine.playClick();
            onOpenDemo('portfolio');
          }}
          className="btn-cyan text-xs py-2 px-4 shrink-0"
        >
          <span>MANAGE FLEET PORTFOLIO</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Model Fleet Table / Card Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Model Selector List */}
        <div className="lg:col-span-1 space-y-3">
          {company.models.map((model) => {
            const isSelected = model.id === selectedModelId;
            return (
              <div
                key={model.id}
                onClick={() => {
                  soundEngine.playClick();
                  setSelectedModelId(model.id);
                }}
                className={`glass-panel p-4 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-amber-400 bg-amber-500/[0.08] shadow-[0_0_20px_rgba(245,166,35,0.2)]'
                    : 'hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="font-mono text-xs font-bold text-white">{model.name}</div>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                      model.status === 'OPTIMAL'
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        : 'border-amber-500/30 text-amber-400 bg-amber-500/10 animate-pulse'
                    }`}
                  >
                    {model.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{model.provider} · {model.foundationModel.split(' ')[0]}</span>
                  <span className="text-amber-400 font-semibold">{model.trustScore} PTS</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 2 Columns: Detailed Telemetry Panel */}
        <div className="lg:col-span-2 glass-panel-amber p-6 rounded-lg space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="hud-tag text-[10px] mb-1">SELECTED MODEL TELEMETRY HOOK</div>
              <h3 className="font-cinzel text-xl font-bold text-white">{selectedModel.name}</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedModel.useCase}</p>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Gargantua Trust Score</div>
              <div className="text-2xl font-mono font-bold text-amber-400 text-glow-amber">
                {selectedModel.trustScore} / 850
              </div>
            </div>
          </div>

          {/* Telemetry Metrics 4-Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 rounded bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Provider & Base</div>
              <div className="text-xs font-mono font-semibold text-white mt-1">{selectedModel.provider}</div>
              <div className="text-[10px] font-mono text-slate-500">{selectedModel.foundationModel}</div>
            </div>

            <div className="p-3 rounded bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Monthly Burn</div>
              <div className="text-xs font-mono font-semibold text-amber-400 mt-1">
                ${selectedModel.monthlyCost.toLocaleString()} / mo
              </div>
              <div className="text-[10px] font-mono text-slate-500">{selectedModel.dailyTokens} tok/day</div>
            </div>

            <div className="p-3 rounded bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Hallucination Rate</div>
              <div className="text-xs font-mono font-semibold text-emerald-400 mt-1">
                {selectedModel.hallucinationRate}%
              </div>
              <div className="text-[10px] font-mono text-slate-500">Latency: {selectedModel.latencyMs}ms</div>
            </div>

            <div className="p-3 rounded bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Autonomy Level</div>
              <div className="text-xs font-mono font-semibold text-cyan-400 mt-1">
                {selectedModel.autonomyLevel}
              </div>
              <div className="text-[10px] font-mono text-slate-500 truncate">{selectedModel.financialAuthorityLimit}</div>
            </div>
          </div>

          {/* Risk Drift Progress Bar */}
          <div className="space-y-2 p-4 rounded bg-black/40 border border-white/[0.06]">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300">Empirical Risk Drift Index</span>
              <span className="text-amber-400 font-bold">{selectedModel.riskDriftIndex} / 100</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  selectedModel.riskDriftIndex < 15
                    ? 'bg-emerald-400 shadow-[0_0_8px_#10b981]'
                    : selectedModel.riskDriftIndex < 25
                    ? 'bg-amber-400 shadow-[0_0_8px_#f5a623]'
                    : 'bg-red-400 shadow-[0_0_8px_#ef4444]'
                }`}
                style={{ width: `${selectedModel.riskDriftIndex * 2.5}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>0 (Deterministic Baseline)</span>
              <span>100 (Uninsurable Divergence)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
