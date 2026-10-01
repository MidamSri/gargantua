import React, { useState } from 'react';
import { ChapterData } from '../../data/mockData';
import { ProblemSection } from './ProblemSection';
import { PortfolioSection } from './PortfolioSection';
import { AdversarialSection } from './AdversarialSection';
import { TrustScoreSection } from './TrustScoreSection';
import { UnderwritingSection } from './UnderwritingSection';
import { PublicRegistrySection } from './PublicRegistrySection';
import { AddModelWizard } from '../demo/AddModelWizard';
import { PaidDossierView } from '../demo/PaidDossierView';
import { INITIAL_COMPANIES } from '../../data/mockData';
import { soundEngine } from '../../utils/soundEngine';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface SingularityChapterSectionProps {
  chapter: ChapterData;
  lang: 'EN' | 'DE';
  onOpenDemo: (tab?: string) => void;
  onOpenSearch: () => void;
}

export const SingularityChapterSection: React.FC<SingularityChapterSectionProps> = ({
  chapter,
  lang,
  onOpenDemo,
  onOpenSearch,
}) => {
  const title = lang === 'DE' && chapter.titleDe ? chapter.titleDe : chapter.title;
  const subtitle = lang === 'DE' && chapter.subtitleDe ? chapter.subtitleDe : chapter.subtitle;
  const leadParagraph = lang === 'DE' && chapter.leadParagraphDe ? chapter.leadParagraphDe : chapter.leadParagraph;
  const bodyParagraph = lang === 'DE' && chapter.bodyParagraphDe ? chapter.bodyParagraphDe : chapter.bodyParagraph;

  // Section 01: Where AI stands today (Stat Badge: 2026)
  if (chapter.id === 1) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <div className="section-stat-badge">2026</div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="glass-panel p-6 max-w-2xl mb-6 border-amber-500/20 bg-amber-500/[0.04]">
          <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
            {lang === 'DE' ? 'DAS KERNPROBLEM: NICHT-DETERMINISMUS' : 'THE CORE IMPASSE: NON-DETERMINISM'}
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            {lang === 'DE'
              ? 'Im Gegensatz zu deterministischer Software führen identische Prompts zu divergierenden Aktionen. Ohne kontinuierliche Messung ist kein institutionelles Risikomanagement möglich.'
              : 'Unlike deterministic software where logic is static, LLMs shift behavior with sampling temperature, quantization, and prompt drift. Traditional underwriting fails without continuous empirical observation.'}
          </p>
        </div>

        <div className="section-footer-note">
          {lang === 'DE' ? 'DER FACHBEGRIFF: NARROW AI · GARGANTUA 2026' : 'THE TECHNICAL TERM: NARROW AI · GARGANTUA ACTUARIAL 2026'}
        </div>
      </section>
    );
  }

  // Section 02: A machine that learns anything (Background: AGI + Paradigm Comparison)
  if (chapter.id === 2) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <div className="section-stat-badge">AGI</div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        <p className="section-body mb-10">{bodyParagraph}</p>

        {/* Embedded Interactive Paradigm Comparison */}
        <div className="mb-6">
          <ProblemSection />
        </div>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'DEFINITION NACH DER OPENAI CHARTER 2018 UND DEEPMINDS „LEVELS OF AGI“ 2023'
            : 'DEFINITION AFTER THE OPENAI CHARTER 2018 AND DEEPMIND’S “LEVELS OF AGI” 2023'}
        </div>
      </section>
    );
  }

  // Section 03: Better machines (The Central Thesis Callout)
  if (chapter.id === 3) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        {/* Central Thesis Callout Banner */}
        <div className="p-6 rounded-lg border-l-4 border-amber-400 bg-amber-500/[0.08] backdrop-blur-md mb-8 max-w-3xl">
          <p className="font-mono text-xs sm:text-sm text-amber-200 font-semibold italic leading-relaxed">
            {lang === 'DE'
              ? '"Gargantua blockiert oder zensiert KI-Modelle NICHT. Es bewertet kontinuierlich Risiken, berechnet standardisierte Trust Scores (300–850) und versichert definierte Schäden."'
              : '"Gargantua does NOT stop, block, or control AI models. It assesses their risk, produces a standardized trust score (300–850), continuously evaluates changes, and provides insurance against defined AI-related losses."'}
          </p>
        </div>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'I. J. GOOD, SPECULATIONS CONCERNING THE FIRST ULTRAINTELLIGENT MACHINE, 1965'
            : 'I. J. GOOD, SPECULATIONS CONCERNING THE FIRST ULTRAINTELLIGENT MACHINE, 1965 · GARGANTUA 2026'}
        </div>
      </section>
    );
  }

  // Section 04: The point beyond which we cannot see (Fleet Telemetry Viewer)
  if (chapter.id === 4) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="mb-6">
          <PortfolioSection onOpenDemo={onOpenDemo} />
        </div>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'ULAM ÜBER VON NEUMANN 1958, VINGE 1993, KURZWEIL 2005'
            : 'ULAM ON VON NEUMANN 1958, VINGE 1993, KURZWEIL 2005 · NEURIPS 2024'}
        </div>
      </section>
    );
  }

  // Section 05: How we got here (Milestones Timeline + Synthetic Red Teaming Simulator)
  if (chapter.id === 5) {
    const milestones = [
      { year: '1993', event: 'Vinge: the coming singularity' },
      { year: '2005', event: 'Kurzweil: The Singularity Is Near' },
      { year: '2012', event: 'AlexNet: comeback of neural networks' },
      { year: '2017', event: 'Transformer: Attention Is All You Need' },
      { year: '2022', event: 'ChatGPT & Large Generative Models' },
      { year: '2026', event: 'Agents, reasoning models & Gargantua AI Trust' },
    ];

    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        {/* Milestones List (Singularity style) */}
        <div className="glass-panel p-6 rounded-xl max-w-3xl mb-10 space-y-3 font-mono text-xs">
          <div className="text-amber-400 font-bold uppercase tracking-wider text-[11px] mb-2">
            {lang === 'DE' ? 'MEILENSTEINE, EINE AUSWAHL' : 'MILESTONES, A SELECTION'}
          </div>
          {milestones.map((m, idx) => (
            <div key={idx} className="flex items-center gap-4 py-1.5 border-b border-white/[0.04] last:border-none">
              <span className="text-slate-500 font-bold w-12">{m.year}</span>
              <span className="text-white">{m.event}</span>
            </div>
          ))}
        </div>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="mb-6">
          <AdversarialSection />
        </div>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'VASWANI ET AL. 2017, DEEPMIND 2023, NIST AI RMF 2024'
            : 'VASWANI ET AL. 2017, DEEPMIND 2023, NIST AI RMF 2024'}
        </div>
      </section>
    );
  }

  // Section 06: When will AGI arrive? (Stat Badge: 2027 – 2047 + System Onboarding Wizard)
  if (chapter.id === 6) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <div className="section-stat-badge">2027 – 2047</div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="mb-6">
          <AddModelWizard
            onProceedToTests={() => {
              soundEngine.playGravitationalPulse();
              onOpenDemo('tests');
            }}
          />
        </div>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'ANTHROPIC 2025, KURZWEIL 2024, METACULUS JULI 2026, GRACE ET AL. 2024'
            : 'ANTHROPIC 2025, KURZWEIL 2024, METACULUS JULY 2026, GRACE ET AL. 2024, TREND: 80,000 HOURS 2026'}
        </div>
      </section>
    );
  }

  // Section 07: And the singularity? (Stat Badge: 2045 + Gargantua Trust Score 300-850)
  if (chapter.id === 7) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <div className="section-stat-badge">2045</div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="mb-6">
          <TrustScoreSection />
        </div>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'KURZWEIL 2005 UND 2024, KORRIDOR LAUT PROGNOSEANALYSEN · FICO 1989'
            : 'KURZWEIL 2005 AND 2024, CORRIDOR ACCORDING TO FORECAST ANALYSES · FICO 1989 · GARGANTUA 2026'}
        </div>
      </section>
    );
  }

  // Section 08: What would become possible (Dynamic Underwriting Quote & Policy Bind)
  if (chapter.id === 8) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="mb-6">
          <UnderwritingSection onOpenDemo={onOpenDemo} />
        </div>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'SZENARIEN, KEINE PROGNOSEN · LLOYD’S OF LONDON REINSURANCE CAPACITY'
            : 'SCENARIOS, NOT FORECASTS · LLOYD’S OF LONDON REINSURANCE CAPACITY 2026'}
        </div>
      </section>
    );
  }

  // Section 09: Who is in control? (Public Registry & Verification Search)
  if (chapter.id === 9) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="mb-6">
          <PublicRegistrySection onOpenSearch={onOpenSearch} onOpenDemo={onOpenDemo} />
        </div>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'CENTER FOR AI SAFETY, STATEMENT ON AI RISK, 2023 · SEC EDGAR & MOODY’S'
            : 'CENTER FOR AI SAFETY, STATEMENT ON AI RISK, 2023 · SEC EDGAR & MOODY’S RATINGS 2026'}
        </div>
      </section>
    );
  }

  // Section 10: Not everyone believes it (Catastrophic Tail Risk & Paid Deep Dossier)
  if (chapter.id === 10) {
    return (
      <section className="narrative-section">
        <div className="section-tag">
          <span>{chapter.tag}</span>
        </div>

        <h2 className="section-heading">{title}</h2>

        <p className="section-lead">{leadParagraph}</p>

        <p className="section-body mb-8">{bodyParagraph}</p>

        <div className="mb-6">
          <PaidDossierView company={INITIAL_COMPANIES[0]} />
        </div>

        <div className="section-footer-note">
          {lang === 'DE'
            ? 'BROOKS 2017, MARCUS 2022 · SOLVENCY II CATASTROPHIC CAPITAL DIRECTIVE'
            : 'BROOKS 2017, MARCUS 2022 · SOLVENCY II CATASTROPHIC CAPITAL DIRECTIVE'}
        </div>
      </section>
    );
  }

  return null;
};
