import React from 'react';
import { X, ShieldCheck, FileText, Lock, Globe } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface ImprintModalProps {
  onClose: () => void;
}

export const ImprintModal: React.FC<ImprintModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 select-none animate-fadeIn">
      <div className="max-w-2xl w-full glass-panel-amber p-6 sm:p-8 rounded-xl border-amber-400/40 bg-[#07070d]/95 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              Legal Imprint & Actuarial Methodology
            </h3>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 font-mono text-xs text-slate-300 leading-relaxed">
          <div>
            <div className="text-amber-400 font-bold uppercase tracking-wider text-[11px] mb-1">
              GARGANTUA RISK INTELLIGENCE & UNDERWRITING LABS
            </div>
            <p className="font-sans text-slate-400 text-xs">
              Gargantua AG · AI Risk Infrastructure & Syndicate Capacity · Zurich / London / San Francisco.
            </p>
          </div>

          <div className="p-3.5 rounded bg-black/60 border border-white/[0.06] space-y-2">
            <div className="text-white font-semibold">Underwriting Syndicate & Reinsurance Notice</div>
            <p className="font-sans text-slate-400 text-[11px]">
              Gargantua operates as an underwriting managing general agent (MGA) and risk intelligence infrastructure provider. AI liability policies are underwritten in partnership with Lloyd's of London Reinsurance Syndicates and Munich Re institutional treaty capacity.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold">Standardized Trust Score Framework (300–850)</div>
            <p className="font-sans text-slate-400 text-[11px]">
              The Gargantua Trust Score is a quantitative, continuous actuarial evaluation measuring alignment guardrails, non-deterministic drift, adversarial stress resilience, and regulatory compliance. Gargantua does not stop, censor, or interfere with runtime inference execution.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold">Responsible Disclosure & Security</div>
            <p className="font-sans text-slate-400 text-[11px]">
              For red-team vulnerability disclosures, cryptographic signature verification, or institutional audit inquiries, contact: security@gargantua.ai
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-slate-500">
          <span>ALL RIGHTS RESERVED © 2026 GARGANTUA LABS</span>
          <span className="text-amber-400/80">PROTOCOL v4.2 // LLOYD’S SYNDICATE COMPLIANT</span>
        </div>
      </div>
    </div>
  );
};
