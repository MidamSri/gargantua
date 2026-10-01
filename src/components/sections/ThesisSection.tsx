import React from 'react';
import { Eye, Award, Activity, ShieldAlert, FileText, CheckCircle } from 'lucide-react';

export const ThesisSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-24 z-10 max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">[ 02 ]</span>
        <div className="h-[1px] w-8 bg-amber-400/40" />
        <span className="hud-tag">THE CENTRAL THESIS</span>
      </div>

      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
        Assessment, Not Censorship. Trust, Not Interruption.
      </h2>

      {/* Critical Clarification Callout */}
      <div className="p-6 rounded-lg border-l-4 border-amber-400 bg-amber-500/[0.06] backdrop-blur-md mb-12">
        <div className="flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-amber-300">
              Gargantua does NOT stop, block, or control your AI models.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              We do not inject latency or gatekeeper filters into your runtime inference. Instead, Gargantua continuously assesses empirical risk, generates standardized trust credit scores, evaluates drift, and provides legal and financial insurance against defined AI-related losses.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-6 border-white/[0.08] hover:border-amber-400/40 transition-all group">
          <div className="font-mono text-xs text-amber-400 mb-3 tracking-widest">[ 01 · OBSERVE ]</div>
          <div className="w-10 h-10 rounded bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
            <Eye className="w-5 h-5" />
          </div>
          <h4 className="font-cinzel text-base font-bold text-white mb-2">Fleet Intelligence</h4>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Monitor models across OpenAI, Anthropic, Mistral, Meta, and custom VPCs. Track token flux, cost drift, and latency anomalies in real-time.
          </p>
        </div>

        <div className="glass-panel p-6 border-white/[0.08] hover:border-cyan-400/40 transition-all group">
          <div className="font-mono text-xs text-cyan-400 mb-3 tracking-widest">[ 02 · STRESS ]</div>
          <div className="w-10 h-10 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
          <h4 className="font-cinzel text-base font-bold text-white mb-2">Synthetic Red Teaming</h4>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Describe any new AI agent and Gargantua automatically synthesizes hundreds of adversarial probes to measure hallucination, injection, and rogue execution limits.
          </p>
        </div>

        <div className="glass-panel p-6 border-white/[0.08] hover:border-amber-400/40 transition-all group">
          <div className="font-mono text-xs text-amber-400 mb-3 tracking-widest">[ 03 · SCORE ]</div>
          <div className="w-10 h-10 rounded bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-cinzel text-base font-bold text-white mb-2">Gargantua Trust Score</h4>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            A standard 300–850 AI credit rating evaluating safety guardrails, deterministic lineage, adversarial resilience, and regulatory compliance.
          </p>
        </div>

        <div className="glass-panel p-6 border-white/[0.08] hover:border-emerald-400/40 transition-all group">
          <div className="font-mono text-xs text-emerald-400 mb-3 tracking-widest">[ 04 · INSURE ]</div>
          <div className="w-10 h-10 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <h4 className="font-cinzel text-base font-bold text-white mb-2">Loss Underwriting</h4>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Instant binding of institutional liability policies covering hallucination claims, agent execution damages, IP copyright breach, and regulatory fines.
          </p>
        </div>
      </div>
    </section>
  );
};
