import React from 'react';
import { ShieldCheck, Cpu, PlusCircle, Activity, Award, FileCheck, Users, Lock, ArrowRight } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface DemoTriggerSectionProps {
  onOpenDemo: (tab: string) => void;
}

export const DemoTriggerSection: React.FC<DemoTriggerSectionProps> = ({ onOpenDemo }) => {
  const flowSteps = [
    { id: 'dashboard', title: '01 · Company Dashboard', desc: 'Real-time AI risk telemetry & active fleet policy status', icon: ShieldCheck, color: 'text-amber-400' },
    { id: 'portfolio', title: '02 · AI Portfolio', desc: 'Model inventory, providers, costs, token flux, and risk drift', icon: Cpu, color: 'text-cyan-400' },
    { id: 'add-model', title: '03 · Add / Evaluate Model', desc: 'Describe a new AI system & set operational autonomy bounds', icon: PlusCircle, color: 'text-emerald-400' },
    { id: 'tests', title: '04 · Custom AI Tests', desc: 'Generate & execute synthetic adversarial stress probes', icon: Activity, color: 'text-purple-400' },
    { id: 'trust-score', title: '05 · Trust Score Engine', desc: 'Standardized 300–850 rating & 5-pillar mathematical breakdown', icon: Award, color: 'text-amber-400' },
    { id: 'insurance', title: '06 · Insurance Quote', desc: 'Dynamic actuarial pricing & instant cryptographically bound policy', icon: FileCheck, color: 'text-emerald-400' },
    { id: 'public', title: '07 · Public Company Profile', desc: 'External verification directory for investors and enterprise buyers', icon: Users, color: 'text-cyan-400' },
    { id: 'dossier', title: '08 · Paid Deep Risk Report', desc: 'Monte Carlo loss distributions & forensic red team exploit logs', icon: Lock, color: 'text-amber-400' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-24 z-10 max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">[ 08 ]</span>
        <div className="h-[1px] w-8 bg-amber-400/40" />
        <span className="hud-tag">INTERACTIVE APPARATUS</span>
      </div>

      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
        Experience the Entire Demo Flow.
      </h2>

      <p className="font-space text-slate-300 text-sm sm:text-base max-w-3xl mb-12 leading-relaxed">
        Step into the complete interactive Gargantua infrastructure. Walk through the 8-step lifecycle from adding a model to generating synthetic adversarial tests, receiving an actuarial Trust Score, and binding institutional insurance.
      </p>

      {/* 8-Step Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {flowSteps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              onClick={() => {
                soundEngine.playGravitationalPulse();
                onOpenDemo(step.id);
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className="glass-panel p-5 cursor-pointer hover:border-amber-400/50 hover:bg-amber-500/[0.08] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className={`w-8 h-8 rounded bg-white/[0.05] flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="font-mono text-xs font-bold text-white mb-1.5">{step.title}</div>
                <div className="text-[11px] text-slate-400 font-sans leading-relaxed">{step.desc}</div>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.06] font-mono text-[10px] text-amber-400/80 uppercase tracking-widest">
                LAUNCH STEP →
              </div>
            </div>
          );
        })}
      </div>

      {/* Grand CTA Banner */}
      <div className="glass-panel-amber p-8 rounded-xl text-center space-y-6">
        <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-white tracking-wider">
          Ready to Calibrate Your AI Risk Horizon?
        </h3>
        <p className="font-mono text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto italic">
          "Credit scores measure financial trust. Gargantua measures AI trust."
        </p>
        <div>
          <button
            onClick={() => {
              soundEngine.playGravitationalPulse();
              onOpenDemo('dashboard');
            }}
            className="btn-primary py-3.5 px-8 text-xs sm:text-sm tracking-[0.2em] font-mono cursor-pointer shadow-[0_0_30px_rgba(245,166,35,0.5)]"
          >
            <ShieldCheck className="w-4 h-4" />
            OPEN COMPLETE INTERACTIVE PLATFORM
          </button>
        </div>
      </div>
    </section>
  );
};
