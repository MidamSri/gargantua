import React, { useState } from 'react';
import { AlertTriangle, Cpu, TrendingUp, Layers, CheckCircle2, XCircle } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traditional' | 'gargantua'>('gargantua');

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-24 z-10 max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">[ 01 ]</span>
        <div className="h-[1px] w-8 bg-amber-400/40" />
        <span className="hud-tag">THE MEASUREMENT VOID</span>
      </div>

      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
        You Cannot Insure What You Cannot Measure.
      </h2>

      <p className="font-space text-slate-300 text-sm sm:text-base max-w-3xl mb-12 leading-relaxed">
        Enterprise AI deployment has crossed the event horizon. Autonomous agents now route treasury liquidity, adjudicate medical triage, and generate production infrastructure code. Yet the global insurance and risk industry remains blind to probabilistic, non-deterministic failure modes.
      </p>

      {/* 3 Core Failure Vectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-panel p-6 border-white/[0.08] hover:border-amber-400/30 transition-all">
          <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-lg font-bold text-white mb-2">Non-Deterministic Drift</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Unlike deterministic software where code is binary and static, LLMs shift behavior with token sampling, upstream model quantization, and subtle prompt drift.
          </p>
        </div>

        <div className="glass-panel p-6 border-white/[0.08] hover:border-amber-400/30 transition-all">
          <div className="w-10 h-10 rounded bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-lg font-bold text-white mb-2">Unbounded Autonomy</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            When agents transition from text chat to executing real-world tool calls (API execution, financial settlement, database writes), catastrophic failure blast radius becomes systemic.
          </p>
        </div>

        <div className="glass-panel p-6 border-white/[0.08] hover:border-cyan-400/30 transition-all">
          <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-lg font-bold text-white mb-2">Actuarial Impasse</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Traditional insurers (Lloyd's, Munich Re, Swiss Re) cannot price AI risk policies without continuous empirical red-teaming and standardized risk credit scores.
          </p>
        </div>
      </div>

      {/* Interactive Comparison HUD */}
      <div className="glass-panel-amber p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <span className="hud-tag">ARCHITECTURAL PARADIGM COMPARISON</span>
            <h4 className="font-cinzel text-base sm:text-lg font-bold text-white mt-1">
              Static Cyber Coverage vs. Dynamic AI Risk Intelligence
            </h4>
          </div>

          <div className="flex rounded border border-white/10 p-0.5 bg-black/50">
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTab('traditional');
              }}
              className={`px-3 py-1 text-[11px] font-mono rounded transition-all cursor-pointer ${
                activeTab === 'traditional'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Traditional Cyber
            </button>
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTab('gargantua');
              }}
              className={`px-3 py-1 text-[11px] font-mono rounded transition-all cursor-pointer ${
                activeTab === 'gargantua'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Gargantua Infrastructure
            </button>
          </div>
        </div>

        {activeTab === 'traditional' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded bg-red-950/20 border border-red-500/20 flex items-start gap-3">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Annual Static Questionnaire</div>
                <div className="text-slate-400 mt-1">Checklist filled once per year; instantly obsolete upon next model deploy.</div>
              </div>
            </div>
            <div className="p-3 rounded bg-red-950/20 border border-red-500/20 flex items-start gap-3">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Excludes AI Hallucination & Drift</div>
                <div className="text-slate-400 mt-1">Traditional cyber policies strictly exclude algorithmic errors and generative outputs.</div>
              </div>
            </div>
            <div className="p-3 rounded bg-red-950/20 border border-red-500/20 flex items-start gap-3">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">No Continuous Stress Probing</div>
                <div className="text-slate-400 mt-1">Zero automated synthetic red-teaming or adversarial prompt evaluation.</div>
              </div>
            </div>
            <div className="p-3 rounded bg-red-950/20 border border-red-500/20 flex items-start gap-3">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Uninsurable Agent Action Blast</div>
                <div className="text-slate-400 mt-1">Rogue tool execution and automated financial losses are completely unbacked.</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Continuous Real-Time Telemetry</div>
                <div className="text-slate-400 mt-1">Passive non-invasive telemetry tracking latency, cost, token flux, and drift index.</div>
              </div>
            </div>
            <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Automated Synthetic Red-Teaming</div>
                <div className="text-slate-400 mt-1">Continuous adversarial probing across jailbreaks, ambiguity traps, and tool sandboxing.</div>
              </div>
            </div>
            <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Standardized 300–850 Trust Score</div>
                <div className="text-slate-400 mt-1">Universal credit rating for AI trust recognized by enterprise buyers and reinsurers.</div>
              </div>
            </div>
            <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Actuarial Loss Insurance Backing</div>
                <div className="text-slate-400 mt-1">Underwritten by tier-1 global syndicates against hallucination, IP breach, and agent damage.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
