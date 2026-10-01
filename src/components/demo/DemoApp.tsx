import React, { useState } from 'react';
import { INITIAL_COMPANIES, CompanyProfile } from '../../data/mockData';
import { DashboardView } from './DashboardView';
import { PortfolioView } from './PortfolioView';
import { AddModelWizard } from './AddModelWizard';
import { CustomTestsView } from './CustomTestsView';
import { TrustScoreView } from './TrustScoreView';
import { InsuranceQuoteView } from './InsuranceQuoteView';
import { PublicProfileView } from './PublicProfileView';
import { PaidDossierView } from './PaidDossierView';
import { X, ShieldCheck, Cpu, PlusCircle, Activity, Award, FileCheck, Users, Lock, ChevronDown } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface DemoAppProps {
  initialTab?: string;
  onClose: () => void;
}

export const DemoApp: React.FC<DemoAppProps> = ({ initialTab = 'dashboard', onClose }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [selectedCompany, setSelectedCompany] = useState<CompanyProfile>(INITIAL_COMPANIES[0]);
  const [customModelData, setCustomModelData] = useState<any>(null);

  const navTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: ShieldCheck },
    { id: 'portfolio', label: 'AI Portfolio', icon: Cpu },
    { id: 'add-model', label: 'Add Model', icon: PlusCircle },
    { id: 'tests', label: 'Custom Tests', icon: Activity },
    { id: 'trust-score', label: 'Trust Score', icon: Award },
    { id: 'insurance', label: 'Insurance Quote', icon: FileCheck },
    { id: 'public', label: 'Public Profile', icon: Users },
    { id: 'dossier', label: 'Paid Dossier', icon: Lock },
  ];

  const handleTabChange = (tabId: string) => {
    soundEngine.playClick();
    setActiveTab(tabId);
  };

  const handleProceedToTests = (modelData: any) => {
    setCustomModelData(modelData);
    setActiveTab('tests');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#030306]/95 backdrop-blur-2xl flex flex-col overflow-hidden select-none animate-fadeIn">
      {/* Top HUD Control Bar */}
      <header className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-white/10 bg-black/60 shrink-0">
        {/* Left: Company Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
            <span className="font-mono text-xs text-amber-400 font-bold tracking-wider hidden sm:inline">
              GARGANTUA INFRASTRUCTURE // DEMO
            </span>
          </div>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          {/* Active Company Dropdown */}
          <div className="relative group">
            <select
              value={selectedCompany.id}
              onChange={(e) => {
                const comp = INITIAL_COMPANIES.find((c) => c.id === e.target.value);
                if (comp) {
                  soundEngine.playClick();
                  setSelectedCompany(comp);
                }
              }}
              className="bg-white/[0.04] border border-white/10 hover:border-amber-400/40 rounded px-2.5 py-1 text-xs font-mono text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {INITIAL_COMPANIES.map((c) => (
                <option key={c.id} value={c.id} className="bg-[#09090f] text-white">
                  {c.name} ({c.trustScore} PTS)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right: Quick Status & Close Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3 font-mono text-xs">
            <span className="text-slate-400">RATING:</span>
            <span className="text-emerald-400 font-bold">{selectedCompany.trustScore} / 850 ({selectedCompany.trustTier.split(' ')[0]})</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">POLICY:</span>
            <span className="text-amber-400 font-bold">{selectedCompany.policyLimit}</span>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 hover:border-red-400/40 bg-white/[0.03] hover:bg-red-500/10 text-slate-300 hover:text-red-300 transition-all font-mono text-xs cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">CLOSE PLATFORM</span>
          </button>
        </div>
      </header>

      {/* Navigation Sub-Bar (8 Tabs) */}
      <nav className="h-12 px-4 md:px-8 border-b border-white/[0.06] bg-[#06060c]/80 flex items-center overflow-x-auto shrink-0 gap-1 scrollbar-none">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-400/15 text-amber-300 border border-amber-400/40 font-bold shadow-[0_0_12px_rgba(245,166,35,0.2)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03] border border-transparent'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Main View Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-6xl mx-auto pb-12">
          {activeTab === 'dashboard' && (
            <DashboardView company={selectedCompany} onNavigateTab={handleTabChange} />
          )}

          {activeTab === 'portfolio' && (
            <PortfolioView company={selectedCompany} onNavigateTab={handleTabChange} />
          )}

          {activeTab === 'add-model' && (
            <AddModelWizard onProceedToTests={handleProceedToTests} />
          )}

          {activeTab === 'tests' && (
            <CustomTestsView
              modelData={customModelData}
              onProceedToTrustScore={() => setActiveTab('trust-score')}
            />
          )}

          {activeTab === 'trust-score' && (
            <TrustScoreView
              initialScore={selectedCompany.trustScore}
              onProceedToInsurance={() => setActiveTab('insurance')}
            />
          )}

          {activeTab === 'insurance' && (
            <InsuranceQuoteView
              company={selectedCompany}
              onProceedToPublic={() => setActiveTab('public')}
            />
          )}

          {activeTab === 'public' && (
            <PublicProfileView
              initialCompany={selectedCompany}
              onProceedToDossier={() => setActiveTab('dossier')}
            />
          )}

          {activeTab === 'dossier' && (
            <PaidDossierView company={selectedCompany} />
          )}
        </div>
      </main>
    </div>
  );
};
