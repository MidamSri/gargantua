import React, { useState } from 'react';
import { CompanyProfile } from '../../data/mockData';
import { ShieldCheck, FileCheck, Check, Lock, Download, Printer, ArrowRight, ShieldAlert } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface InsuranceQuoteViewProps {
  company: CompanyProfile;
  onProceedToPublic: () => void;
}

export const InsuranceQuoteView: React.FC<InsuranceQuoteViewProps> = ({ company, onProceedToPublic }) => {
  const [exposure, setExposure] = useState<number>(25); // in Millions USD
  const [deductible, setDeductible] = useState<number>(50); // in Thousands USD
  const [isBound, setIsBound] = useState<boolean>(true);
  const [policyHash, setPolicyHash] = useState<string>('0x7f8a9b2c3d4e5f601a2b3c4d5e6f7a8b9c0d1e2f');
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  // Actuarial calculation
  const trustFactor = (850 - company.trustScore) / 500; // e.g. 0.132 for 784
  const baseRate = 0.008 + trustFactor * 0.015; // ~1.0% effective
  const deductibleDiscount = 1 - (deductible / 500) * 0.25;
  const annualPremium = Math.round(exposure * 1000000 * baseRate * deductibleDiscount);
  const monthlyPremium = Math.round(annualPremium / 12);

  const handleBindPolicy = () => {
    soundEngine.playGravitationalPulse();
    const newHash = '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setPolicyHash(newHash);
    setIsBound(true);
    setShowCertificate(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="hud-tag text-[10px] mb-1">ACTUARIAL UNDERWRITING & LOSS INDEMNITY</div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            AI Risk Insurance Infrastructure
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Institutional liability coverage backed by Gargantua Syndicate #4401 and Lloyd's of London capacity.
          </p>
        </div>

        {isBound && (
          <button
            onClick={() => setShowCertificate(!showCertificate)}
            className="btn-cyan py-2 px-4 text-xs font-mono tracking-wider shrink-0 cursor-pointer"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>{showCertificate ? 'HIDE CERTIFICATE' : 'VIEW DIGITAL CERTIFICATE'}</span>
          </button>
        )}
      </div>

      {/* Dynamic Actuarial Pricing Simulator */}
      <div className="glass-panel-amber p-6 rounded-xl space-y-6">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="font-mono text-xs font-bold text-white">Dynamic Policy Calculator</div>
          <div className="text-[11px] font-mono text-emerald-400 font-semibold">
            RATED: {company.trustTier} ({company.trustScore} PTS)
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-5 font-mono text-xs">
            <div className="space-y-1.5">
              <div className="flex justify-between text-slate-300">
                <span>Aggregate Policy Limit</span>
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
                <span>$100M Cap</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-slate-300">
                <span>Retained Deductible per Incident</span>
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

          {/* Premium Box */}
          <div className="lg:col-span-5 p-5 rounded-lg bg-black/60 border border-amber-500/30 text-center space-y-3">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              ACTUARIAL ANNUAL PREMIUM
            </div>
            <div className="text-3xl font-mono font-bold text-white text-glow-amber">
              ${annualPremium.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ yr</span>
            </div>
            <div className="text-xs font-mono text-amber-300">
              ${monthlyPremium.toLocaleString()} / mo (Rate: {(baseRate * deductibleDiscount * 100).toFixed(2)}%)
            </div>

            <button
              onClick={handleBindPolicy}
              className="btn-primary w-full py-2.5 text-xs font-mono tracking-widest cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isBound ? 'RE-BIND UPDATED POLICY' : 'BIND POLICY NOW'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Certificate of AI Risk Insurance Modal / View */}
      {showCertificate && (
        <div className="glass-panel p-6 sm:p-8 rounded-xl border-amber-400/40 bg-black/80 space-y-6 relative overflow-hidden">
          {/* Watermark / Seal */}
          <div className="absolute right-6 bottom-6 opacity-10 pointer-events-none">
            <ShieldCheck className="w-64 h-64 text-amber-400" />
          </div>

          {/* Certificate Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="hud-tag text-[10px] mb-1">OFFICIAL UNDERWRITING CERTIFICATE</div>
              <h3 className="font-cinzel text-xl font-bold text-white">
                Certificate of AI Risk & Liability Insurance
              </h3>
            </div>
            <div className="text-right font-mono text-xs text-slate-400">
              <div>POLICY #{company.policyNumber}</div>
              <div className="text-emerald-400 font-bold">STATUS: BOUND & ACTIVE</div>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] text-slate-500 uppercase">Named Insured Enterprise</div>
              <div className="text-white font-bold mt-0.5">{company.name}</div>
              <div className="text-[10px] text-slate-400">{company.sector} · {company.headquarters}</div>
            </div>

            <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] text-slate-500 uppercase">Underwriting Capacity</div>
              <div className="text-amber-400 font-bold mt-0.5">{company.underwriter}</div>
              <div className="text-[10px] text-slate-400">Reinsured under Lloyd's Master Treaty #8841</div>
            </div>

            <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] text-slate-500 uppercase">Policy Aggregate Limit</div>
              <div className="text-white font-bold mt-0.5">${exposure},000,000 USD</div>
              <div className="text-[10px] text-slate-400">Deductible: ${deductible},000 USD</div>
            </div>

            <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[10px] text-slate-500 uppercase">Gargantua Verified Rating</div>
              <div className="text-emerald-400 font-bold mt-0.5">{company.trustScore} / 850 ({company.trustTier})</div>
              <div className="text-[10px] text-slate-400">Continuous Telemetry Verified</div>
            </div>
          </div>

          {/* Covered Perils List */}
          <div className="space-y-2 font-mono text-xs">
            <div className="text-slate-400 text-[10px] uppercase">Defined Covered Perils</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hallucination & Misinformation Liability</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Autonomous Agent Erroneous Tool Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>IP & Training Data Copyright Infringement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Regulatory Defense & EU AI Act Penalty Shield</span>
              </div>
            </div>
          </div>

          {/* Verification Hash */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-[10px] text-slate-500">
            <div className="flex items-center gap-1.5 truncate">
              <Lock className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="truncate">CRYPTO_SIGNATURE: {policyHash}</span>
            </div>
            <div className="text-slate-400">
              VERIFIABLE AT: https://gargantua.ai/verify/{company.policyNumber}
            </div>
          </div>
        </div>
      )}

      {/* Next CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => {
            soundEngine.playGravitationalPulse();
            onProceedToPublic();
          }}
          className="btn-primary py-2.5 px-6 text-xs font-mono tracking-widest cursor-pointer"
        >
          <span>VIEW PUBLIC COMPANY PROFILE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
