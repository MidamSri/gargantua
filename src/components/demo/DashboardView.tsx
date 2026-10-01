import React from 'react';
import { CompanyProfile, AIModel } from '../../data/mockData';
import { ShieldCheck, Cpu, Activity, AlertTriangle, FileText, ArrowUpRight, TrendingUp, CheckCircle2, Zap } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface DashboardViewProps {
  company: CompanyProfile;
  onNavigateTab: (tab: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ company, onNavigateTab }) => {
  return (
    <div className="space-y-6">
      {/* Top 4 Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Trust Score */}
        <div className="glass-panel-amber p-4 rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Gargantua Trust Score</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {company.trustTier.split(' ')[0]}
            </span>
          </div>
          <div className="my-2">
            <div className="text-3xl sm:text-4xl font-mono font-bold text-white text-glow-amber">
              {company.trustScore}
              <span className="text-xs text-slate-400 font-normal ml-1">/ 850</span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>+34 pts since last red-team audit</span>
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onNavigateTab('trust-score');
            }}
            className="text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center justify-between pt-2 border-t border-white/[0.06]"
          >
            <span>Score Pillar Breakdown</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Metric 2: Active Policy */}
        <div className="glass-panel p-4 rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Underwritten Policy</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              BOUND & ACTIVE
            </span>
          </div>
          <div className="my-2">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
              {company.policyLimit}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Policy #{company.policyNumber} · {company.deductible} Ded.
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onNavigateTab('insurance');
            }}
            className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center justify-between pt-2 border-t border-white/[0.06]"
          >
            <span>Manage Underwriting</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Metric 3: Monitored Invocations */}
        <div className="glass-panel p-4 rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Monitored Invocations</span>
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="my-2">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
              {company.totalMonitoredInvocations}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Mean Latency: 305ms · 0.03% Mean Drift
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onNavigateTab('portfolio');
            }}
            className="text-[11px] font-mono text-slate-300 hover:text-white flex items-center justify-between pt-2 border-t border-white/[0.06]"
          >
            <span>Fleet Observability</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Metric 4: Monitored AI Models */}
        <div className="glass-panel p-4 rounded-lg flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">AI Fleet Roster</span>
            <Cpu className="w-4 h-4 text-amber-400" />
          </div>
          <div className="my-2">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
              {company.models.length} Systems
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              {company.models.filter(m => m.status === 'OPTIMAL').length} Optimal · {company.models.filter(m => m.status === 'DRIFT_DETECTED').length} Drift Warning
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onNavigateTab('add-model');
            }}
            className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center justify-between pt-2 border-t border-white/[0.06]"
          >
            <span>+ Add / Evaluate New AI System</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Middle Grid: Live Risk Interceptor & Model Status Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 Cols: Active Model Fleet Health */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-lg space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-400" />
              <h3 className="font-cinzel text-base font-bold text-white">Active AI Fleet Overview</h3>
            </div>
            <button
              onClick={() => onNavigateTab('portfolio')}
              className="text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>View Full Portfolio</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {company.models.map((model) => (
              <div
                key={model.id}
                className="p-3.5 rounded bg-black/40 border border-white/[0.06] hover:border-white/20 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-white">
                    <span>{model.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({model.foundationModel})</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {model.provider} · Autonomy: <span className="text-cyan-400">{model.autonomyLevel}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="text-right">
                    <div className="text-amber-400 font-bold">{model.trustScore} PTS</div>
                    <div className="text-[10px] text-slate-500">Drift: {model.riskDriftIndex}/100</div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      model.status === 'OPTIMAL'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                    }`}
                  >
                    {model.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 5 Cols: Live Simulated Incident & Risk Stream */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-lg space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <h3 className="font-cinzel text-base font-bold text-white">Risk Intercept Stream</h3>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          <div className="space-y-3 font-mono text-xs">
            {company.recentIncidents.map((inc) => (
              <div
                key={inc.id}
                className="p-3 rounded bg-black/40 border border-white/[0.06] space-y-1.5"
              >
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-amber-400 font-bold">{inc.model}</span>
                  <span className="text-slate-500">{inc.timestamp}</span>
                </div>
                <div className="text-white text-xs font-medium">{inc.type}</div>
                <div className="text-[11px] text-slate-400 font-sans">{inc.mitigation}</div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 pt-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Insured Loss Bound: $0 Actual Damage</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
