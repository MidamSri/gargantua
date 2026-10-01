import React, { useState } from 'react';
import { CompanyProfile, AIModel } from '../../data/mockData';
import { PlusCircle, Search, Filter, Cpu, DollarSign, Activity, ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface PortfolioViewProps {
  company: CompanyProfile;
  onNavigateTab: (tab: string, extra?: { modelId?: string }) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ company, onNavigateTab }) => {
  const [providerFilter, setProviderFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModels = company.models.filter((m) => {
    const matchesProvider = providerFilter === 'ALL' || m.provider.toUpperCase() === providerFilter;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.foundationModel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesProvider && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="hud-tag text-[10px] mb-1">AI PORTFOLIO MANAGEMENT</div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Model Fleet Roster & Exposure
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Manage your AI portfolio: models, providers, costs, token volume, and empirical risk drift.
          </p>
        </div>

        <button
          onClick={() => {
            soundEngine.playGravitationalPulse();
            onNavigateTab('add-model');
          }}
          className="btn-primary py-2 px-4 text-xs font-mono tracking-widest shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>ADD / EVALUATE MODEL</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel p-3.5 rounded-lg flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search model, provider, or use case..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded bg-black/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 text-xs"
          />
        </div>

        {/* Provider Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
          {['ALL', 'OPENAI', 'ANTHROPIC', 'MISTRAL', 'META'].map((prov) => (
            <button
              key={prov}
              onClick={() => {
                soundEngine.playClick();
                setProviderFilter(prov);
              }}
              className={`px-3 py-1 rounded text-[11px] transition-all cursor-pointer ${
                providerFilter === prov
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              {prov}
            </button>
          ))}
        </div>
      </div>

      {/* Models List Cards */}
      <div className="space-y-4">
        {filteredModels.map((model) => (
          <div
            key={model.id}
            className="glass-panel p-5 rounded-lg border-white/[0.08] hover:border-amber-400/40 transition-all space-y-4"
          >
            {/* Top Row: Title, Badge, Trust Score */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-mono text-base font-bold text-white">{model.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-white/10 font-mono text-slate-300">
                    {model.environment}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      model.status === 'OPTIMAL'
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        : 'border-amber-500/30 text-amber-400 bg-amber-500/10 animate-pulse'
                    }`}
                  >
                    {model.status}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-sans mt-1">
                  {model.useCase}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Trust Score</div>
                  <div className="text-xl font-mono font-bold text-amber-400 text-glow-amber">
                    {model.trustScore} <span className="text-xs text-slate-500">/ 850</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundEngine.playGravitationalPulse();
                    onNavigateTab('tests');
                  }}
                  className="btn-secondary py-1.5 px-3 text-[11px] font-mono tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3 text-amber-400" />
                  <span>Run Tests</span>
                </button>
              </div>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-3 border-t border-white/[0.06] font-mono text-xs">
              <div className="p-2.5 rounded bg-black/40">
                <div className="text-[10px] text-slate-500 uppercase">Provider & Base</div>
                <div className="text-white font-semibold mt-0.5">{model.provider}</div>
                <div className="text-[10px] text-slate-400 truncate">{model.foundationModel}</div>
              </div>

              <div className="p-2.5 rounded bg-black/40">
                <div className="text-[10px] text-slate-500 uppercase">Monthly Cost</div>
                <div className="text-amber-400 font-semibold mt-0.5">${model.monthlyCost.toLocaleString()}</div>
                <div className="text-[10px] text-slate-400">{model.dailyTokens} tok/day</div>
              </div>

              <div className="p-2.5 rounded bg-black/40">
                <div className="text-[10px] text-slate-500 uppercase">Hallucination Rate</div>
                <div className="text-emerald-400 font-semibold mt-0.5">{model.hallucinationRate}%</div>
                <div className="text-[10px] text-slate-400">Latency: {model.latencyMs}ms</div>
              </div>

              <div className="p-2.5 rounded bg-black/40">
                <div className="text-[10px] text-slate-500 uppercase">Autonomy Privileges</div>
                <div className="text-cyan-400 font-semibold mt-0.5">{model.autonomyLevel}</div>
                <div className="text-[10px] text-slate-400 truncate">{model.financialAuthorityLimit}</div>
              </div>

              <div className="p-2.5 rounded bg-black/40 col-span-2 sm:col-span-4 lg:col-span-1">
                <div className="text-[10px] text-slate-500 uppercase">Risk Drift Index</div>
                <div className="text-white font-semibold mt-0.5">{model.riskDriftIndex} / 100</div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className={`h-full ${model.riskDriftIndex < 15 ? 'bg-emerald-400' : 'bg-amber-400'}`}
                    style={{ width: `${model.riskDriftIndex * 2.5}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
