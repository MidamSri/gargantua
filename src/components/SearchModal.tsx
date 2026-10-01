import React, { useState } from 'react';
import { INITIAL_COMPANIES, CompanyProfile } from '../data/mockData';
import { Search, X, ShieldCheck, ArrowRight, Building, Globe } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface SearchModalProps {
  onClose: () => void;
  onSelectCompany: (company: CompanyProfile) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onClose, onSelectCompany }) => {
  const [query, setQuery] = useState('');

  const filtered = INITIAL_COMPANIES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.sector.toLowerCase().includes(query.toLowerCase()) ||
      c.headquarters.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-start justify-center pt-24 px-4 select-none">
      <div className="max-w-2xl w-full glass-panel-amber p-6 rounded-xl border-amber-400/40 bg-[#07070d]/90 shadow-2xl space-y-4">
        {/* Search Input */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-amber-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search enterprise AI deployer (e.g. Synthetix Global, Apex)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-sm font-mono w-full placeholder-slate-500"
            />
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="text-slate-400 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="space-y-2 max-h-80 overflow-y-auto font-mono text-xs">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">
            Verified Enterprise Registries ({filtered.length})
          </div>

          {filtered.map((comp) => (
            <div
              key={comp.id}
              onClick={() => {
                soundEngine.playGravitationalPulse();
                onSelectCompany(comp);
              }}
              className="p-3 rounded-lg bg-black/40 border border-white/[0.06] hover:border-amber-400/50 hover:bg-amber-400/5 transition-all flex justify-between items-center cursor-pointer group"
            >
              <div>
                <div className="flex items-center gap-2 font-bold text-white group-hover:text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{comp.name}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-3">
                  <span>{comp.sector}</span>
                  <span>·</span>
                  <span>{comp.headquarters}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-amber-400 font-bold">{comp.trustScore} PTS</div>
                  <div className="text-[10px] text-emerald-400">{comp.trustTier.split(' ')[0]}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="py-8 text-center text-slate-500 text-xs">
              No matching verified enterprises found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
