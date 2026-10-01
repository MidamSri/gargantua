import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export const AdversarialSection: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [testProgress, setTestProgress] = useState(100);
  const [activeVector, setActiveVector] = useState(0);

  const vectors = [
    { name: 'Recursive Prompt Injection & Delimiter Escape', probes: 450, passRate: '99.4%', status: 'PASS' },
    { name: 'High-Ambiguity Out-of-Distribution Hallucination Traps', probes: 1200, passRate: '98.8%', status: 'PASS' },
    { name: 'Autonomous Tool Budget & Execution Limit Escalation', probes: 320, passRate: '97.2%', status: 'PASS' },
    { name: 'Latent Training Data & Private Key Memory Extraction', probes: 600, passRate: '100%', status: 'PASS' },
    { name: 'EU AI Act Annex III High-Risk Regulatory Matrix', probes: 150, passRate: 'PASS', status: 'PASS' },
  ];

  const handleRunStress = () => {
    if (isRunning) return;
    setIsRunning(true);
    setTestProgress(0);
    soundEngine.playGravitationalPulse();

    let current = 0;
    const interval = setInterval(() => {
      current += 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setIsRunning(false);
        soundEngine.playAnomalyAlert();
      }
      setTestProgress(current);
      setActiveVector(Math.min(Math.floor((current / 100) * vectors.length), vectors.length - 1));
    }, 180);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-24 z-10 max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">[ 04 ]</span>
        <div className="h-[1px] w-8 bg-amber-400/40" />
        <span className="hud-tag">ADVERSARIAL STRESS LAB</span>
      </div>

      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
        Synthetic Red Teaming at Quantum Scale.
      </h2>

      <p className="font-space text-slate-300 text-sm sm:text-base max-w-3xl mb-10 leading-relaxed">
        Describe any proposed AI system. Gargantua instantly synthesizes thousands of domain-specific adversarial attack vectors, stress-testing boundaries before autonomous models ever touch production capital.
      </p>

      {/* Interactive Simulation Terminal */}
      <div className="glass-panel p-6 rounded-lg border-white/10 relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-amber-500/60" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
            <span className="font-mono text-xs text-slate-400 ml-2">
              GARGANTUA_SYNTHETIC_STRESS_HARNESS // v4.2
            </span>
          </div>

          <button
            onClick={handleRunStress}
            disabled={isRunning}
            className={`btn-primary py-1.5 px-4 text-[11px] font-mono tracking-widest cursor-pointer ${
              isRunning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>EXECUTING PROBES ({testProgress}%)</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>RUN SYNTHETIC ADVERSARIAL SUITE</span>
              </>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        {isRunning && (
          <div className="mb-6 space-y-2">
            <div className="flex justify-between font-mono text-[11px] text-amber-400">
              <span>SYNTHESIZING ADVERSARIAL STRESS VECTORS...</span>
              <span>{testProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-cyan-400 transition-all duration-150"
                style={{ width: `${testProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Vectors List */}
        <div className="space-y-3 font-mono text-xs">
          {vectors.map((vec, idx) => {
            const isHighlight = isRunning && activeVector === idx;
            return (
              <div
                key={idx}
                className={`p-3.5 rounded border transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 ${
                  isHighlight
                    ? 'border-amber-400 bg-amber-400/10 shadow-[0_0_15px_rgba(245,166,35,0.3)]'
                    : 'border-white/[0.06] bg-black/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 text-[10px]">VECTOR_0{idx + 1}</span>
                  <span className="text-white font-medium">{vec.name}</span>
                </div>

                <div className="flex items-center gap-4 text-[11px]">
                  <span className="text-slate-400">{vec.probes} Probes</span>
                  <span className="text-emerald-400 font-semibold">{vec.passRate}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {vec.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>ZERO SYSTEM DOWNTIME · NON-INVASIVE ASYNCHRONOUS EVALUATION</span>
          <span className="text-amber-400/80">RISK CERTIFIED // LLOYD'S SYNDICATE COMPLIANT</span>
        </div>
      </div>
    </section>
  );
};
