import React, { useState, useEffect } from 'react';
import { Terminal, Play, CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw, ArrowRight, Zap } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface CustomTestsViewProps {
  modelData?: {
    name: string;
    provider: string;
    foundationModel: string;
    useCase: string;
    autonomyLevel: string;
    financialAuthorityLimit: string;
    riskVectors: string[];
  };
  onProceedToTrustScore: (computedScore: number) => void;
}

export const CustomTestsView: React.FC<CustomTestsViewProps> = ({
  modelData = {
    name: 'Autonomous Treasury Liquidity Rebalancer',
    provider: 'Anthropic',
    foundationModel: 'Claude 3.5 Sonnet',
    useCase: 'Monitors multi-venue treasury balances and executes automated liquidity swaps.',
    autonomyLevel: 'Autonomous API',
    financialAuthorityLimit: '$50,000 / batch',
    riskVectors: ['Recursive Budget Escalation', 'Adversarial Slippage Exploits', 'Private Key Exposure'],
  },
  onProceedToTrustScore,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const testSuites = [
    {
      name: 'Adversarial Prompt Injection & Delimiter Escape',
      category: 'INJECTION',
      totalProbes: 650,
      passedProbes: 647,
      passRate: '99.5%',
      riskDelta: '-12% Vulnerability',
      status: 'PASS',
    },
    {
      name: 'High-Ambiguity Out-of-Distribution Hallucination Traps',
      category: 'HALLUCINATION',
      totalProbes: 1400,
      passedProbes: 1386,
      passRate: '99.0%',
      riskDelta: '0.02% Error Bound',
      status: 'PASS',
    },
    {
      name: 'Autonomous Tool Budget & API Execution Limits',
      category: 'AUTONOMY',
      totalProbes: 480,
      passedProbes: 476,
      passRate: '99.1%',
      riskDelta: 'Max $50k Bound Enforced',
      status: 'PASS',
    },
    {
      name: 'Latent Training Data & Private Key Memory Exfiltration',
      category: 'DATA LEAKAGE',
      totalProbes: 800,
      passedProbes: 800,
      passRate: '100.0%',
      riskDelta: 'Zero PII Residual',
      status: 'PASS',
    },
    {
      name: 'EU AI Act Title III High-Risk Autonomous Annex Conformity',
      category: 'COMPLIANCE',
      totalProbes: 220,
      passedProbes: 220,
      passRate: '100.0%',
      riskDelta: 'Full Audit Trail Certified',
      status: 'PASS',
    },
  ];

  const simulatedConsoleMessages = [
    `[GEN_AI] Synthesizing custom adversarial test matrix for: ${modelData.name}`,
    `[VEC_01] Spawning 650 recursive prefix-injection payloads against endpoint...`,
    `[PROBE #108] Testing zero-width Unicode prompt injection bypass... [INTERCEPTED]`,
    `[VEC_02] Generating 1,400 out-of-distribution financial ambiguity scenarios...`,
    `[PROBE #489] Probing edge-case slippage cascade under extreme volatility... [BOUND SATISFIED]`,
    `[VEC_03] Simulating rogue API escalation past ${modelData.financialAuthorityLimit} authority limit...`,
    `[PROBE #214] Tool permission escalation denied by deterministic guardrail sandbox... [PASS]`,
    `[VEC_04] Probing latent memory for confidential cryptographic keys & internal headers...`,
    `[VEC_05] Validating EU AI Act Article 14 human oversight & Article 15 cyber resilience...`,
    `[COMPLETE] All 3,550 synthetic red-team probes executed. Final Trust Score Calculated: 792 PTS.`,
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setProgress(0);
    setTerminalLogs([]);
    setIsCompleted(false);
    soundEngine.playGravitationalPulse();

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / simulatedConsoleMessages.length) * 100), 100);
      setProgress(currentProgress);
      setTerminalLogs((prev) => [...prev, simulatedConsoleMessages[step - 1]]);

      if (step >= simulatedConsoleMessages.length) {
        clearInterval(interval);
        setIsRunning(false);
        setIsCompleted(true);
        soundEngine.playAnomalyAlert();
      }
    }, 450);
  };

  useEffect(() => {
    // Auto-run on load for immediate interactive wow effect
    handleRunSimulation();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="hud-tag text-[10px] mb-1">SYNTHETIC RED TEAM HARNESS</div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Custom AI Tests for: {modelData.name}
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Foundation: {modelData.provider} ({modelData.foundationModel}) · Autonomy: {modelData.autonomyLevel}
          </p>
        </div>

        <button
          onClick={handleRunSimulation}
          disabled={isRunning}
          className={`btn-secondary py-2 px-4 text-xs font-mono tracking-wider flex items-center gap-2 cursor-pointer ${
            isRunning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isRunning ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>TESTING ({progress}%)</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-amber-400" />
              <span>RE-RUN TEST SUITE</span>
            </>
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 font-mono text-xs">
        <div className="flex justify-between text-slate-300">
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Synthetic Adversarial Execution Progress
          </span>
          <span className="text-amber-400 font-bold">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-400 transition-all duration-300 shadow-[0_0_12px_rgba(245,166,35,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Live Streaming Terminal */}
      <div className="rounded-lg bg-black/90 border border-white/10 p-4 font-mono text-xs space-y-2 relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>GARGANTUA_ADVERSARIAL_CONSOLE // STREAM</span>
          </div>
          <span className="text-emerald-400">LIVE EVALUATION</span>
        </div>

        <div className="max-h-48 overflow-y-auto space-y-1 text-slate-300 text-[11px]">
          {terminalLogs.map((log, idx) => (
            <div key={idx} className="leading-relaxed">
              <span className="text-slate-600 mr-2">{(idx + 1).toString().padStart(2, '0')}</span>
              <span className={log.includes('PASS') || log.includes('INTERCEPTED') || log.includes('COMPLETE') ? 'text-emerald-300 font-semibold' : 'text-slate-300'}>
                {log}
              </span>
            </div>
          ))}
          {isRunning && (
            <div className="text-amber-400 flex items-center gap-2 animate-pulse pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
              <span>PROBING RESIDUAL RISK HORIZON...</span>
            </div>
          )}
        </div>
      </div>

      {/* Generated Test Suites Cards */}
      <div className="space-y-3 font-mono text-xs">
        <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">
          Generated Test Vectors & Empirical Pass Rates
        </div>

        {testSuites.map((ts, idx) => (
          <div
            key={idx}
            className="glass-panel p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          >
            <div>
              <div className="flex items-center gap-2 font-bold text-white">
                <span className="text-[10px] text-amber-400 font-normal">[{ts.category}]</span>
                <span>{ts.name}</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {ts.passedProbes} of {ts.totalProbes} adversarial probes survived · {ts.riskDelta}
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-emerald-400 font-bold text-sm">{ts.passRate}</span>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {ts.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Next Step Action */}
      <div className="p-4 rounded-lg glass-panel-amber flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-white">Empirical Tests Verified</div>
          <div className="text-[11px] text-slate-400 font-mono">
            Calculated Trust Score: <span className="text-amber-400 font-bold">792 / 850 (AAA Prime)</span>
          </div>
        </div>

        <button
          onClick={() => {
            soundEngine.playGravitationalPulse();
            onProceedToTrustScore(792);
          }}
          className="btn-primary py-2.5 px-6 text-xs font-mono tracking-widest cursor-pointer w-full sm:w-auto"
        >
          <span>VIEW GARGANTUA TRUST SCORE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
