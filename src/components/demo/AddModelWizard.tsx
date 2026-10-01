import React, { useState } from 'react';
import { SYSTEM_TEMPLATES } from '../../data/mockData';
import { Sparkles, Cpu, Layers, ShieldAlert, ArrowRight, Check } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface AddModelWizardProps {
  onProceedToTests: (modelData: {
    name: string;
    provider: string;
    foundationModel: string;
    useCase: string;
    autonomyLevel: string;
    financialAuthorityLimit: string;
    riskVectors: string[];
  }) => void;
}

export const AddModelWizard: React.FC<AddModelWizardProps> = ({ onProceedToTests }) => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState<number>(0);
  const [name, setName] = useState<string>(SYSTEM_TEMPLATES[0].title);
  const [provider, setProvider] = useState<string>(SYSTEM_TEMPLATES[0].provider);
  const [foundationModel, setFoundationModel] = useState<string>(SYSTEM_TEMPLATES[0].foundationModel);
  const [useCase, setUseCase] = useState<string>(SYSTEM_TEMPLATES[0].useCase);
  const [autonomyLevel, setAutonomyLevel] = useState<string>(SYSTEM_TEMPLATES[0].autonomyLevel);
  const [financialAuthorityLimit, setFinancialAuthorityLimit] = useState<string>(SYSTEM_TEMPLATES[0].financialAuthorityLimit);
  const [riskVectors, setRiskVectors] = useState<string[]>(SYSTEM_TEMPLATES[0].riskVectors);

  const handleSelectTemplate = (idx: number) => {
    soundEngine.playClick();
    setSelectedTemplateIndex(idx);
    const tmpl = SYSTEM_TEMPLATES[idx];
    setName(tmpl.title);
    setProvider(tmpl.provider);
    setFoundationModel(tmpl.foundationModel);
    setUseCase(tmpl.useCase);
    setAutonomyLevel(tmpl.autonomyLevel);
    setFinancialAuthorityLimit(tmpl.financialAuthorityLimit);
    setRiskVectors(tmpl.riskVectors);
  };

  const handleToggleVector = (vec: string) => {
    soundEngine.playHover();
    if (riskVectors.includes(vec)) {
      setRiskVectors(riskVectors.filter((v) => v !== vec));
    } else {
      setRiskVectors([...riskVectors, vec]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playGravitationalPulse();
    onProceedToTests({
      name,
      provider,
      foundationModel,
      useCase,
      autonomyLevel,
      financialAuthorityLimit,
      riskVectors,
    });
  };

  const allAvailableVectors = [
    'Prompt Injection & Jailbreak Resilience',
    'Out-of-Distribution Hallucination Traps',
    'Autonomous Execution & Budget Sandboxing',
    'PII / Key Extraction & Memory Leakage',
    'EU AI Act Annex III High-Risk Compliance',
    'Fair Lending & Demographic Bias Drift',
    'Copyright & Training Data Infringement',
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <div className="hud-tag text-[10px] mb-1">SYSTEM INGESTION & RISK PROFILING</div>
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
          Describe a New AI System
        </h2>
        <p className="text-xs text-slate-400 font-mono mt-0.5">
          Gargantua does not restrict your deployment. We profile operational risk, synthesize custom adversarial test suites, and calculate institutional insurance quotes.
        </p>
      </div>

      {/* Template Quick Selectors */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Quick Load System Blueprint</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SYSTEM_TEMPLATES.map((tmpl, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectTemplate(idx)}
              className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                selectedTemplateIndex === idx
                  ? 'border-amber-400 bg-amber-400/10 shadow-[0_0_15px_rgba(245,166,35,0.2)]'
                  : 'border-white/[0.08] bg-black/40 hover:border-white/20'
              }`}
            >
              <div className="text-xs font-mono font-bold text-white mb-1 line-clamp-1">
                {tmpl.title}
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                {tmpl.provider} · {tmpl.foundationModel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="glass-panel-amber p-6 rounded-xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          {/* System Name */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-slate-300">System / Agent Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
            />
          </div>

          {/* Provider */}
          <div className="space-y-1.5">
            <label className="text-slate-300">Foundation Model Provider</label>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
            >
              <option value="Anthropic">Anthropic (Claude 3.5 Sonnet / Opus)</option>
              <option value="OpenAI">OpenAI (GPT-4o / GPT-o3)</option>
              <option value="Mistral">Mistral AI (Mistral Large / Med)</option>
              <option value="Meta">Meta (Llama 3.3 70B / 405B)</option>
              <option value="Custom">Custom VPC / Private Weights</option>
            </select>
          </div>

          {/* Foundation Model */}
          <div className="space-y-1.5">
            <label className="text-slate-300">Base Model Architecture</label>
            <input
              type="text"
              value={foundationModel}
              onChange={(e) => setFoundationModel(e.target.value)}
              className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
            />
          </div>

          {/* Use Case & Deployment Description */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-slate-300">System Purpose & Operational Scope</label>
            <textarea
              rows={2}
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs resize-none"
            />
          </div>

          {/* Autonomy Level */}
          <div className="space-y-1.5">
            <label className="text-slate-300">Operational Autonomy Tier</label>
            <select
              value={autonomyLevel}
              onChange={(e) => setAutonomyLevel(e.target.value)}
              className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
            >
              <option value="Advisory Only">Advisory Only (Human-in-the-Loop Required)</option>
              <option value="Supervised Execution">Supervised Execution (Bounded Parameters)</option>
              <option value="Autonomous API">Autonomous API (Direct External Tool Calls)</option>
              <option value="Unrestricted Agent">Unrestricted Agent (Self-Directing Loop)</option>
            </select>
          </div>

          {/* Financial Authority Limit */}
          <div className="space-y-1.5">
            <label className="text-slate-300">Financial Authority / Max Blast Radius</label>
            <input
              type="text"
              value={financialAuthorityLimit}
              onChange={(e) => setFinancialAuthorityLimit(e.target.value)}
              className="w-full px-3 py-2 rounded bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
            />
          </div>
        </div>

        {/* Risk Vectors Tags */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <div className="text-xs font-mono text-slate-300">
            Target Adversarial Stress Vectors (Gargantua will synthesize custom probes)
          </div>
          <div className="flex flex-wrap gap-2">
            {allAvailableVectors.map((vec) => {
              const isSelected = riskVectors.includes(vec);
              return (
                <button
                  type="button"
                  key={vec}
                  onClick={() => handleToggleVector(vec)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/50'
                      : 'bg-black/40 text-slate-400 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 text-amber-400" />}
                  <span>{vec}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit Action */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            type="submit"
            className="btn-primary py-2.5 px-6 text-xs font-mono tracking-widest cursor-pointer"
          >
            <span>GENERATE CUSTOM AI TESTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
