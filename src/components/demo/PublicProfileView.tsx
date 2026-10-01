import React, { useState } from 'react';
import { INITIAL_COMPANIES, CompanyProfile } from '../../data/mockData';
import { Search, ShieldCheck, CheckCircle2, Lock, ArrowRight, Building, Globe, FileText } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface PublicProfileViewProps {
  initialCompany?: CompanyProfile;
  onProceedToDossier: () => void;
}

export const PublicProfileView: React.FC<PublicProfileViewProps> = ({
  initialCompany = INITIAL_COMPANIES[0],
  onProceedToDossier,
}) => {
  const [selectedCompany, setSelectedCompany] = useState<CompanyProfile>(initialCompany);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchResults = INITIAL_COMPANIES.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.sector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header & Global Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="hud-tag text-[10px] mb-1">PUBLIC REGISTRY & VERIFICATION</div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Enterprise AI Risk Directory
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            External verification for investors, lenders, enterprise buyers, and reinsurers.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search enterprise (e.g. Synthetix)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded bg-black/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs font-mono"
          />
        </div>
      </div>

      {/* If search query has results, show dropdown selector */}
      {searchQuery && (
        <div className="glass-panel p-2 rounded-lg space-y-1 font-mono text-xs">
          {searchResults.map((c) => (
            <div
              key={c.id}
              onClick={() => {
                soundEngine.playClick();
                setSelectedCompany(c);
                setSearchQuery('');
              }}
              className="p-2.5 rounded hover:bg-white/[0.06] flex justify-between items-center cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white font-bold">{c.name}</span>
                <span className="text-slate-500">({c.sector})</span>
              </div>
              <span className="text-amber-400 font-bold">{c.trustScore} PTS</span>
            </div>
          ))}
        </div>
      )}

      {/* Public Profile Card */}
      <div className="glass-panel-amber p-6 sm:p-8 rounded-xl space-y-6">
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                VERIFIED BY GARGANTUA
              </span>
              <span className="text-xs font-mono text-slate-500">ID: #{selectedCompany.policyNumber}</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              {selectedCompany.name}
            </h3>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-1">
              <span className="flex items-center gap-1">
                <Building className="w-3 h-3 text-amber-400" />
                {selectedCompany.sector}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-cyan-400" />
                {selectedCompany.headquarters}
              </span>
            </div>
          </div>

          {/* Rating Dial */}
          <div className="p-4 rounded-lg bg-black/60 border border-amber-500/30 text-center shrink-0 min-w-[140px]">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Trust Rating</div>
            <div className="text-3xl font-mono font-bold text-white text-glow-amber my-0.5">
              {selectedCompany.trustScore}
            </div>
            <div className="text-[11px] font-mono text-emerald-400 font-bold">
              {selectedCompany.trustTier}
            </div>
          </div>
        </div>

        {/* Public Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-4 rounded bg-black/40 border border-white/[0.06]">
            <div className="text-[10px] text-slate-500 uppercase">Insured Policy Bound</div>
            <div className="text-white font-bold text-sm mt-1">{selectedCompany.policyLimit}</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">Active & In Good Standing</div>
          </div>

          <div className="p-4 rounded bg-black/40 border border-white/[0.06]">
            <div className="text-[10px] text-slate-500 uppercase">Continuous Telemetry</div>
            <div className="text-white font-bold text-sm mt-1">{selectedCompany.totalMonitoredInvocations}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Zero Unmitigated Anomalies</div>
          </div>

          <div className="p-4 rounded bg-black/40 border border-white/[0.06]">
            <div className="text-[10px] text-slate-500 uppercase">Primary Reinsurer</div>
            <div className="text-amber-400 font-bold text-xs mt-1 truncate">{selectedCompany.underwriter}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Syndicate Backed</div>
          </div>
        </div>

        {/* Public Verified Model Roster */}
        <div className="space-y-3 font-mono text-xs">
          <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">
            Verified Production AI Systems Roster
          </div>
          <div className="space-y-2">
            {selectedCompany.models.map((model) => (
              <div
                key={model.id}
                className="p-3 rounded bg-white/[0.02] border border-white/[0.06] flex justify-between items-center"
              >
                <div>
                  <div className="text-white font-semibold">{model.name}</div>
                  <div className="text-[11px] text-slate-400">{model.useCase}</div>
                </div>
                <div className="text-right">
                  <div className="text-amber-400 font-bold">{model.trustScore} PTS</div>
                  <div className="text-[10px] text-emerald-400">Insured Under Policy</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paid Dossier Callout Banner */}
        <div className="p-5 rounded-lg bg-gradient-to-r from-amber-500/10 via-black/40 to-cyan-500/10 border border-amber-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Paid Risk Analysis & Investor Dossier Available</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 max-w-lg">
              Unlock 10,000-run Monte Carlo loss distribution curves, forensic red team exploit logs, and reinsurer underwriting syndication sheets.
            </div>
          </div>

          <button
            onClick={() => {
              soundEngine.playGravitationalPulse();
              onProceedToDossier();
            }}
            className="btn-primary py-2 px-5 text-xs font-mono tracking-widest shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>UNLOCK FULL REPORT</span>
          </button>
        </div>
      </div>
    </div>
  );
};
