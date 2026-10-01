import React, { useState } from 'react';
import { CompanyProfile } from '../../data/mockData';
import { Lock, Unlock, Download, FileText, CheckCircle2, AlertTriangle, ShieldCheck, BarChart3, Printer } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface PaidDossierViewProps {
  company: CompanyProfile;
}

export const PaidDossierView: React.FC<PaidDossierViewProps> = ({ company }) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(true);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleUnlock = () => {
    soundEngine.playGravitationalPulse();
    setIsUnlocked(true);
  };

  const handleExport = () => {
    soundEngine.playClick();
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert('Gargantua Institutional Forensic Report exported successfully (PDF/JSON format).');
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="hud-tag text-[10px] mb-1">INSTITUTIONAL INVESTOR & ACTUARIAL DOSSIER</div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Full Paid AI Risk Analysis: {company.name}
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Classified forensic intelligence for institutional investors, credit rating agencies, and reinsurers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="btn-cyan py-2 px-4 text-xs font-mono tracking-wider flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? 'GENERATING PDF...' : 'EXPORT AUDIT PDF'}</span>
          </button>
        </div>
      </div>

      {/* Main Dossier Content */}
      <div className="space-y-6">
        {/* Section 1: Monte Carlo Catastrophic Loss Distribution */}
        <div className="glass-panel p-6 rounded-xl space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <h3 className="font-cinzel text-base font-bold text-white">
                10,000-Iteration Monte Carlo Loss Modeling
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              ACTUARIAL CONVERGENCE: 99.98%
            </span>
          </div>

          <p className="text-xs text-slate-400 font-sans">
            Simulated tail-risk loss distribution modeling 10,000 black-swan events across hallucination liability, autonomous financial slippage, and regulatory sanctions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-3.5 rounded bg-black/50 border border-white/[0.06]">
              <div className="text-[10px] text-slate-500 uppercase">Value at Risk (VaR 99.9%)</div>
              <div className="text-lg font-bold text-amber-400 mt-1">$4,850,000 USD</div>
              <div className="text-[10px] text-slate-400 mt-0.5">1-in-1,000 year catastrophic threshold</div>
            </div>

            <div className="p-3.5 rounded bg-black/50 border border-white/[0.06]">
              <div className="text-[10px] text-slate-500 uppercase">Expected Annual Loss (EAL)</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">$42,300 USD</div>
              <div className="text-[10px] text-slate-400 mt-0.5">0.17% of total underwritten policy limit</div>
            </div>

            <div className="p-3.5 rounded bg-black/50 border border-white/[0.06]">
              <div className="text-[10px] text-slate-500 uppercase">Maximum Probable Loss (MPL)</div>
              <div className="text-lg font-bold text-cyan-400 mt-1">$14,200,000 USD</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Fully covered under $25.0M bound policy</div>
            </div>
          </div>
        </div>

        {/* Section 2: Forensic Red Team Vulnerability Matrix */}
        <div className="glass-panel p-6 rounded-xl space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <h3 className="font-cinzel text-base font-bold text-white">
                Unredacted Red Team Vulnerability Matrix
              </h3>
            </div>
            <span className="hud-tag text-[10px]">FORENSIC TELEMETRY</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3.5 rounded bg-black/40 border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-amber-400 font-bold">VEC_01 // Recursive Budget Overspend Loop</span>
                <span className="text-emerald-400 text-[10px]">MITIGATED</span>
              </div>
              <div className="text-slate-300 text-[11px]">
                Synthetic agent simulated 500 rapid-fire API purchase triggers attempting to evade transaction throttling.
              </div>
              <div className="text-slate-500 text-[10px]">
                Remediation: Hard deterministic cap bound at $5,000 per autonomous batch. Zero breach recorded.
              </div>
            </div>

            <div className="p-3.5 rounded bg-black/40 border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-cyan-400 font-bold">VEC_02 // Indirect Prompt Injection in Multi-Modal OCR</span>
                <span className="text-emerald-400 text-[10px]">MITIGATED</span>
              </div>
              <div className="text-slate-300 text-[11px]">
                Injected steganographic payload into customer invoices to trigger unauthorized refund webhook.
              </div>
              <div className="text-slate-500 text-[10px]">
                Remediation: Gargantua token parsing firewall isolated OCR instruction payload before execution layer.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Lloyd's & Munich Re Reinsurance Syndication Sheet */}
        <div className="glass-panel-amber p-6 rounded-xl space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <h3 className="font-cinzel text-base font-bold text-white">
                Lloyd's Syndicate Actuarial Rating Sheet
              </h3>
            </div>
            <span className="text-[10px] font-mono text-amber-300">TREATY: #GAR-2026-T88</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="space-y-1">
              <div className="text-slate-400 text-[10px] uppercase">Syndicate Lead Underwriter</div>
              <div className="text-white font-bold">{company.underwriter}</div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-400 text-[10px] uppercase">Solvency II Capital Requirement (SCR)</div>
              <div className="text-emerald-400 font-bold">142% Capital Adequacy Margin</div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-400 text-[10px] uppercase">Reinsurer Loss Ratio Benchmark</div>
              <div className="text-white font-bold">2.4% (Industry Avg: 18.2%)</div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-400 text-[10px] uppercase">Cryptographic Audit Hash</div>
              <div className="text-slate-400 text-[10px] truncate">0x9924a188f72c019d45e128b77a09c2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
