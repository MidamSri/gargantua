// Gargantua AI Risk Intelligence & Underwriting - Core Data Architecture

export interface AIModel {
  id: string;
  name: string;
  provider: 'OpenAI' | 'Anthropic' | 'Mistral' | 'Meta' | 'Custom';
  foundationModel: string;
  environment: 'Production' | 'Staging' | 'Autonomous Sandbox';
  useCase: string;
  monthlyCost: number;
  dailyTokens: string;
  latencyMs: number;
  hallucinationRate: number; // percentage
  riskDriftIndex: number; // 0 - 100
  autonomyLevel: 'Advisory Only' | 'Supervised Execution' | 'Autonomous API' | 'Unrestricted Agent';
  financialAuthorityLimit: string;
  trustScore: number;
  isInsured: boolean;
  status: 'OPTIMAL' | 'DRIFT_DETECTED' | 'EVALUATING' | 'CRITICAL';
}

export interface CompanyProfile {
  id: string;
  name: string;
  slug: string;
  ticker?: string;
  sector: string;
  headquarters: string;
  verifiedStatus: 'VERIFIED_PRIME' | 'VERIFIED_STANDARD' | 'MONITORED' | 'UNVERIFIED';
  trustScore: number;
  trustTier: 'AAA Prime' | 'AA+ Institutional' | 'A Standard' | 'BBB Moderate' | 'Subprime Elevated';
  aggregateExposure: number; // in USD
  totalMonitoredInvocations: string;
  activeModelsCount: number;
  policyNumber: string;
  policyLimit: string;
  deductible: string;
  policyStatus: 'BOUND_ACTIVE' | 'PENDING_REVIEW' | 'EXPIRED';
  underwriter: string;
  pillars: {
    guardrailRobustness: number; // 0-100
    adversarialResilience: number;
    deterministicLineage: number;
    autonomySandboxing: number;
    regulatoryCompliance: number;
  };
  recentIncidents: {
    id: string;
    timestamp: string;
    model: string;
    type: string;
    severity: 'LOW' | 'MEDIUM' | 'HIGH';
    mitigation: string;
    resolved: boolean;
  }[];
  models: AIModel[];
}

export const INITIAL_COMPANIES: CompanyProfile[] = [
  {
    id: 'comp-1',
    name: 'Synthetix Global Autonomous Systems',
    slug: 'synthetix-global',
    ticker: 'SYNX',
    sector: 'Autonomous Enterprise Infrastructure & FinOps',
    headquarters: 'Zurich, Switzerland',
    verifiedStatus: 'VERIFIED_PRIME',
    trustScore: 784,
    trustTier: 'AAA Prime',
    aggregateExposure: 25000000,
    totalMonitoredInvocations: '184.2M / mo',
    activeModelsCount: 4,
    policyNumber: 'GAR-2026-8819X',
    policyLimit: '$25,000,000 USD',
    deductible: '$50,000 USD',
    policyStatus: 'BOUND_ACTIVE',
    underwriter: "Gargantua Syndicate #4401 · Lloyd's Reinsurance Syndicate",
    pillars: {
      guardrailRobustness: 92,
      adversarialResilience: 88,
      deterministicLineage: 79,
      autonomySandboxing: 85,
      regulatoryCompliance: 96,
    },
    recentIncidents: [
      {
        id: 'inc-101',
        timestamp: '14 min ago',
        model: 'Omni-Arbitrator v4',
        type: 'Prompt Injection / Out-of-Bounds Refund Escalation',
        severity: 'LOW',
        mitigation: 'Gargantua Synthetic Firewall intercepted anomalous token sequence. Zero loss bound.',
        resolved: true,
      },
      {
        id: 'inc-102',
        timestamp: '4.2 hours ago',
        model: 'Titan Codebase Deployer',
        type: 'Latent Configuration Hallucination in CI/CD script',
        severity: 'MEDIUM',
        mitigation: 'Deterministic Sandbox blocked unauthorized port exposure. Insured under Section 4.B.',
        resolved: true,
      },
      {
        id: 'inc-103',
        timestamp: '1.8 days ago',
        model: 'Aegis Quant Router',
        type: 'Multi-hop Slippage Boundary Stress',
        severity: 'LOW',
        mitigation: 'Execution constrained to max $25,000 transaction window. Trust score +4 pts upon remediation.',
        resolved: true,
      },
    ],
    models: [
      {
        id: 'mod-1',
        name: 'Omni-Arbitrator v4',
        provider: 'OpenAI',
        foundationModel: 'GPT-4o (2025-Q4 Revision)',
        environment: 'Production',
        useCase: 'Autonomous Customer Dispute Resolution & Refund Settlement',
        monthlyCost: 12450,
        dailyTokens: '1.85M',
        latencyMs: 340,
        hallucinationRate: 0.04,
        riskDriftIndex: 14,
        autonomyLevel: 'Supervised Execution',
        financialAuthorityLimit: '$5,000 / transaction',
        trustScore: 792,
        isInsured: true,
        status: 'OPTIMAL',
      },
      {
        id: 'mod-2',
        name: 'Aegis Quant Router',
        provider: 'Anthropic',
        foundationModel: 'Claude 3.5 Sonnet (Direct API)',
        environment: 'Production',
        useCase: 'Treasury Liquidity Rebalancing & Cross-Chain Routing',
        monthlyCost: 24800,
        dailyTokens: '4.20M',
        latencyMs: 410,
        hallucinationRate: 0.01,
        riskDriftIndex: 8,
        autonomyLevel: 'Autonomous API',
        financialAuthorityLimit: '$25,000 / transaction',
        trustScore: 828,
        isInsured: true,
        status: 'OPTIMAL',
      },
      {
        id: 'mod-3',
        name: 'NeuroDiagnostic Copilot',
        provider: 'Mistral',
        foundationModel: 'Mistral-Med-70B (Private VPC)',
        environment: 'Production',
        useCase: 'Clinical Patient Record Summarization & Differential Triage',
        monthlyCost: 8200,
        dailyTokens: '850K',
        latencyMs: 280,
        hallucinationRate: 0.02,
        riskDriftIndex: 12,
        autonomyLevel: 'Advisory Only',
        financialAuthorityLimit: '$0 (Physician Sign-Off Required)',
        trustScore: 840,
        isInsured: true,
        status: 'OPTIMAL',
      },
      {
        id: 'mod-4',
        name: 'Titan Codebase Deployer',
        provider: 'Meta',
        foundationModel: 'Llama 3.3 70B (Self-Hosted on H100 Cluster)',
        environment: 'Autonomous Sandbox',
        useCase: 'Infrastructure as Code generation & Automated Canary Rollouts',
        monthlyCost: 4100,
        dailyTokens: '620K',
        latencyMs: 190,
        hallucinationRate: 0.06,
        riskDriftIndex: 26,
        autonomyLevel: 'Autonomous API',
        financialAuthorityLimit: 'Non-Financial (Infrastructure Permissions)',
        trustScore: 710,
        isInsured: true,
        status: 'DRIFT_DETECTED',
      },
    ],
  },
  {
    id: 'comp-2',
    name: 'Aethelgard Clinical AI Labs',
    slug: 'aethelgard-health',
    sector: 'Biomedical Diagnostic Intelligence',
    headquarters: 'Boston, MA, USA',
    verifiedStatus: 'VERIFIED_PRIME',
    trustScore: 812,
    trustTier: 'AAA Prime',
    aggregateExposure: 50000000,
    totalMonitoredInvocations: '340.5M / mo',
    activeModelsCount: 6,
    policyNumber: 'GAR-2026-4402A',
    policyLimit: '$50,000,000 USD',
    deductible: '$100,000 USD',
    policyStatus: 'BOUND_ACTIVE',
    underwriter: 'Munich Re / Gargantua Syndicate',
    pillars: {
      guardrailRobustness: 96,
      adversarialResilience: 91,
      deterministicLineage: 89,
      autonomySandboxing: 82,
      regulatoryCompliance: 98,
    },
    recentIncidents: [],
    models: [],
  },
  {
    id: 'comp-3',
    name: 'Apex Financial Core',
    slug: 'apex-financial',
    ticker: 'APEX',
    sector: 'Algorithmic Asset Management & Settlement',
    headquarters: 'London, UK',
    verifiedStatus: 'VERIFIED_PRIME',
    trustScore: 745,
    trustTier: 'AA+ Institutional',
    aggregateExposure: 100000000,
    totalMonitoredInvocations: '910.0M / mo',
    activeModelsCount: 12,
    policyNumber: 'GAR-2026-1190B',
    policyLimit: '$100,000,000 USD',
    deductible: '$250,000 USD',
    policyStatus: 'BOUND_ACTIVE',
    underwriter: 'Swiss Re & Gargantua Underwriters',
    pillars: {
      guardrailRobustness: 86,
      adversarialResilience: 84,
      deterministicLineage: 94,
      autonomySandboxing: 76,
      regulatoryCompliance: 90,
    },
    recentIncidents: [],
    models: [],
  },
  {
    id: 'comp-4',
    name: 'Cognitive Commerce Cloud',
    slug: 'cognitive-commerce',
    sector: 'High-Volume Consumer AI & Dynamic Merchandising',
    headquarters: 'Austin, TX, USA',
    verifiedStatus: 'MONITORED',
    trustScore: 680,
    trustTier: 'A Standard',
    aggregateExposure: 10000000,
    totalMonitoredInvocations: '45.0M / mo',
    activeModelsCount: 3,
    policyNumber: 'GAR-2026-9042C',
    policyLimit: '$10,000,000 USD',
    deductible: '$25,000 USD',
    policyStatus: 'BOUND_ACTIVE',
    underwriter: 'Gargantua Direct Capacity',
    pillars: {
      guardrailRobustness: 72,
      adversarialResilience: 68,
      deterministicLineage: 64,
      autonomySandboxing: 70,
      regulatoryCompliance: 74,
    },
    recentIncidents: [],
    models: [],
  },
];

export const SYSTEM_TEMPLATES = [
  {
    title: 'Autonomous Treasury Liquidity Rebalancer',
    provider: 'Anthropic' as const,
    foundationModel: 'Claude 3.5 Sonnet',
    useCase: 'Monitors multi-venue treasury balances and executes automated stablecoin liquidity swaps.',
    autonomyLevel: 'Autonomous API' as const,
    financialAuthorityLimit: '$50,000 / batch',
    riskVectors: ['Recursive Budget Escalation', 'Adversarial Slippage Exploits', 'RPC Node Poisoning', 'Private Key Exposure'],
  },
  {
    title: 'Autonomous Clinical Differential Triage Copilot',
    provider: 'Mistral' as const,
    foundationModel: 'Mistral-Med-70B',
    useCase: 'Analyzes patient EHR, lab telemetry, and generates differential diagnosis recommendations for attending physicians.',
    autonomyLevel: 'Advisory Only' as const,
    financialAuthorityLimit: '$0 (Physician Sign-off)',
    riskVectors: ['Diagnostic Hallucination', 'HIPAA/PII Extraction', 'Out-of-Distribution Pathology Blindspot', 'EU AI Act High-Risk Annex III'],
  },
  {
    title: 'Autonomous Claims Settlement & Dispute Arbitrator',
    provider: 'OpenAI' as const,
    foundationModel: 'GPT-4o',
    useCase: 'Reads inbound warranty claims, cross-references purchase logs, and authorizes instant payments or rejects fraudulent requests.',
    autonomyLevel: 'Supervised Execution' as const,
    financialAuthorityLimit: '$2,500 / claim',
    riskVectors: ['Prompt Injection Jailbreak', 'Forged Evidence Acceptance', 'Social Engineering Bypass', 'Fair Lending & Bias Drift'],
  },
  {
    title: 'Autonomous Infrastructure & Kubernetes SRE Agent',
    provider: 'Meta' as const,
    foundationModel: 'Llama 3.3 70B',
    useCase: 'Analyzes Datadog/Prometheus alerts, synthesizes Terraform patches, and executes automated rollback/canary rollouts in production.',
    autonomyLevel: 'Autonomous API' as const,
    financialAuthorityLimit: 'Root Cloud Infrastructure Access',
    riskVectors: ['Cascading Outage Trigger', 'Unauthorized Security Group Opening', 'Production DB Dropping', 'Secrets Leakage in Logs'],
  },
];

export interface ChapterData {
  id: number;
  number: string;
  tag: string;
  title: string;
  titleDe?: string;
  subtitle: string;
  subtitleDe?: string;
  leadParagraph: string;
  leadParagraphDe?: string;
  bodyParagraph: string;
  bodyParagraphDe?: string;
  statBadge?: string;
  footerNote?: string;
  citations: string[];
  interactiveType?: 'comparison' | 'portfolio' | 'adversarial' | 'wizard' | 'trust-score' | 'underwriting' | 'registry' | 'dossier' | 'sources';
}

export const STORY_CHAPTERS: ChapterData[] = [
  {
    id: 0,
    number: '00',
    tag: '00 · DEFINITION',
    title: 'Gargantua',
    titleDe: 'Gargantua',
    subtitle: 'What AI risk intelligence and insurance infrastructure mean — and how they measure AI trust.',
    subtitleDe: 'Was KI-Risikointelligenz und Versicherungsinfrastruktur bedeuten – und wie sie KI-Vertrauen messen.',
    leadParagraph: 'Credit scores measure financial trust. Gargantua measures AI trust.',
    leadParagraphDe: 'Kredit-Scores messen finanzielles Vertrauen. Gargantua misst KI-Vertrauen.',
    bodyParagraph: 'As autonomous AI systems assume control over financial settlements, medical triage, and software infrastructure, classical enterprise security fails. Gargantua does not stop, block, or control AI models — it continuously assesses their risk, standardizes trust scores (300–850), and binds institutional insurance against defined losses.',
    bodyParagraphDe: 'Während autonome KI-Systeme die Kontrolle über Finanztransaktionen, medizinische Triage und Software-Infrastruktur übernehmen, versagt die klassische Unternehmenssicherheit. Gargantua blockiert oder zensiert keine Modelle – es bewertet kontinuierlich Risiken, standardisiert Trust Scores (300–850) und versichert definierte Schäden.',
    citations: ['GARGANTUA 2026', 'LLOYD’S SYNDICATE #4401'],
  },
  {
    id: 1,
    number: '01',
    tag: '01 · ORIGIN',
    title: 'The word',
    titleDe: 'Das Wort',
    subtitle: 'From mathematical singularities to autonomous computational drift',
    subtitleDe: 'Von mathematischen Singularitäten zur autonomen Risikodrift',
    leadParagraph: 'Originally a term from mathematics and physics describing a point where a function or gravity becomes infinite and normal rules break down. John von Neumann first applied it to technology in 1958.',
    leadParagraphDe: 'Ursprünglich ein Begriff aus Mathematik und Physik für einen Punkt, an dem eine Funktion oder Schwerkraft unendlich wird und normale Gesetze versagen. John von Neumann übertrug ihn 1958 erstmals auf Technologie.',
    bodyParagraph: 'When narrow models fail, the blast radius is contained. But when models connect to real-world APIs and financial rails, catastrophic loss becomes systemic. Anyone who evaluates AI risk linearly catastrophically underestimates the speed of autonomous model drift.',
    bodyParagraphDe: 'Solange spezialisierte Modelle isoliert bleiben, ist der Schaden begrenzt. Sobald sie jedoch an reale APIs und Finanzsysteme gekoppelt werden, wird das Risiko systemisch.',
    statBadge: 'VON NEUMANN 1958',
    footerNote: 'VON NEUMANN 1958 · GARGANTUA 2026',
    citations: ['VON NEUMANN 1958', 'GARGANTUA ACTUARIAL 2026'],
  },
  {
    id: 2,
    number: '02',
    tag: '02 · DEFINITION',
    title: 'What it means',
    titleDe: 'Was es bedeutet',
    subtitle: 'The intelligence feedback loop and the measurement void',
    subtitleDe: 'Die Intelligenz-Rückkopplung und die Messlücke',
    leadParagraph: 'The point at which artificial intelligence accelerates technological progress so rapidly that human intelligence can no longer follow or comprehend it. Intelligence creates smarter intelligence — an explosive feedback loop.',
    leadParagraphDe: 'Der Punkt, an dem künstliche Intelligenz den technologischen Fortschritt so beschleunigt, dass die menschliche Intelligenz nicht mehr folgen kann. Intelligenz erschafft klügere Intelligenz – eine explosive Schleife.',
    bodyParagraph: 'Traditional cyber insurance relies on static annual questionnaires. But LLMs are non-deterministic, hallucinatory, and shift token distributions with every upstream quantization. Traditional insurers cannot price multi-million-dollar AI liability policies without continuous telemetry.',
    bodyParagraphDe: 'Klassische Cyber-Versicherungen verlassen sich auf statische Jahresfragebögen. Aber LLMs sind nicht-deterministisch und verändern ihr Verhalten laufend.',
    statBadge: 'FEEDBACK LOOP',
    footerNote: 'GOOD 1965, VINGE 1993 · LLOYD’S SYNDICATE 2026',
    citations: ['GOOD 1965', 'VINGE 1993', 'LLOYD’S 2026'],
    interactiveType: 'comparison',
  },
  {
    id: 3,
    number: '03',
    tag: '03 · PREDICTABILITY',
    title: 'The horizon',
    titleDe: 'Der Horizont',
    subtitle: 'Trust without operational censorship or runtime interference',
    subtitleDe: 'Vertrauen ohne Zensur oder Laufzeitverzögerung',
    leadParagraph: 'In physics, an event horizon is the boundary beyond which nothing can be seen. The technological singularity is named after it because we cannot look past it — a society driven by superintelligence is fundamentally unpredictable to us.',
    leadParagraphDe: 'In der Physik ist der Ereignishorizont die Grenze, jenseits derer nichts mehr sichtbar ist. Die technologische Singularität ist danach benannt, weil wir nicht darüber hinaussehen können.',
    bodyParagraph: 'Gargantua does NOT stop, block, or control AI models. We do not inject runtime latency or proxy filters. Instead, Gargantua continuously observes passive telemetry, runs automated synthetic red-team stress suites, calculates standard Gargantua Trust Scores, and binds institutional insurance against defined losses.',
    bodyParagraphDe: 'Gargantua blockiert oder zensiert KI-Modelle NICHT. Stattdessen analysiert Gargantua passive Telemetrie, synthetische Stresstests, berechnet standardisierte Trust Scores und versichert definierte Verluste.',
    statBadge: 'EVENT HORIZON',
    footerNote: 'EVENT HORIZON · GARGANTUA ACTUARIAL 2026',
    citations: ['GOOD 1965', 'VINGE 1993', 'GARGANTUA WHITE PAPER'],
  },
  {
    id: 4,
    number: '04',
    tag: '04 · PRECURSORS',
    title: 'Artificial General Intelligence',
    titleDe: 'Künstliche Allgemeine Intelligenz',
    subtitle: 'Model fleet telemetry and multi-provider observability',
    subtitleDe: 'Modellflotten-Telemetrie und Multi-Provider-Beobachtbarkeit',
    leadParagraph: 'AGI is AI that reaches human intelligence across virtually all domains: reasoning, planning, creative thinking, learning. It is considered the necessary precursor to the singularity — the threshold from which self-improvement begins.',
    leadParagraphDe: 'AGI ist KI, die menschliche Intelligenz in nahezu allen Domänen erreicht: Schlussfolgern, Planen, kreatives Denken, Lernen. Sie gilt als die notwendige Vorstufe zur Singularität.',
    bodyParagraph: 'Enterprises deploy diverse model clusters across OpenAI, Anthropic, Mistral, Meta, and custom VPCs. Gargantua ingests real-time token fluxes, provider latency variances, monthly burn rates, and empirical hallucination drift indices without invading data privacy.',
    bodyParagraphDe: 'Unternehmen betreiben Flotten über OpenAI, Anthropic, Mistral, Meta und eigene VPCs. Gargantua erfasst Echtzeit-Tokenströme, Kosten und Drift-Indizes.',
    statBadge: 'AGI = HUMAN-LEVEL',
    footerNote: 'AGI = HUMAN-LEVEL · GARGANTUA FLEET OBSERVABILITY',
    citations: ['VINGE 1993', 'KURZWEIL 2005', 'NEURIPS 2024'],
    interactiveType: 'portfolio',
  },
  {
    id: 5,
    number: '05',
    tag: '05 · ACCELERATION',
    title: 'Exponential growth',
    titleDe: 'Exponentielles Wachstum',
    subtitle: 'Continuous synthetic red teaming at quantum scale',
    subtitleDe: 'Kontinuierliches synthetisches Red-Teaming im Quantenmaßstab',
    leadParagraph: 'Human intuition is linear: tomorrow looks like yesterday. Technological progress is exponential: every improvement speeds up the next one. Ray Kurzweil calls this the Law of Accelerating Returns.',
    leadParagraphDe: 'Die menschliche Intuition ist linear: Morgen sieht aus wie gestern. Technologischer Fortschritt ist exponentiell: Jede Verbesserung beschleunigt die nächste.',
    bodyParagraph: 'Whenever a company defines a new AI system, Gargantua instantly synthesizes thousands of domain-specific adversarial attack vectors: prompt injection, high-ambiguity hallucination traps, unauthorized tool calling, and EU AI Act Annex III conformity.',
    bodyParagraphDe: 'Gargantua synthetisiert automatisch Tausende domänenspezifische Angriffsvektoren für jedes neue KI-System vor dem Produktionsstart.',
    statBadge: 'EXPONENTIAL',
    footerNote: 'KURZWEIL 2005 · NIST AI RMF 2024',
    citations: ['KURZWEIL 2005', 'VASWANI ET AL. 2017', 'NIST AI RMF'],
    interactiveType: 'adversarial',
  },
  {
    id: 6,
    number: '06',
    tag: '06 · TIMELINE',
    title: 'When it might happen',
    titleDe: 'Wann es passieren könnte',
    subtitle: 'Systems that plan, code, and execute financial transactions',
    subtitleDe: 'Systeme, die planen, programmieren und Finanztransaktionen ausführen',
    leadParagraph: 'For decades, forecasts were vague. Since the breakthrough of large language models, timelines have shrunk drastically. Many researchers now expect AGI within this decade.',
    leadParagraphDe: 'Jahrzehntelang waren Prognosen vage. Seit dem Durchbruch großer Sprachmodelle sind die Zeithorizonte drastisch geschrumpft.',
    bodyParagraph: 'Autonomy converts raw reasoning into real-world liability. Describe your AI system in Gargantua and map operational autonomy tiers against empirical financial blast radii.',
    bodyParagraphDe: 'Autonomie wandelt logische Argumentation in reale Haftungsrisiken um. Definieren Sie Ihr System und ermitteln Sie Ihren Risiko-Score.',
    statBadge: '2026 – 2035',
    footerNote: 'RANGE: 2026 – 2035 · METACULUS & ANTHROPIC',
    citations: ['METACULUS 2026', 'ANTHROPIC 2025', 'MORRIS ET AL. 2023'],
    interactiveType: 'wizard',
  },
  {
    id: 7,
    number: '07',
    tag: '07 · FORECASTS',
    title: 'Who says what',
    titleDe: 'Wer was sagt',
    subtitle: 'Standardizing AI trust like financial credit ratings (300–850)',
    subtitleDe: 'KI-Vertrauen standardisieren wie Kreditratings (300–850)',
    leadParagraph: 'Metaculus predicts 2033. Dario Amodei (Anthropic) expects powerful AI by 2026–2027. Ray Kurzweil maintains 2029 since 1999. AI researchers surveyed by Grace et al. see 2047.',
    leadParagraphDe: 'Metaculus prognostiziert 2033. Dario Amodei (Anthropic) erwartet leistungsstarke KI 2026–2027. Ray Kurzweil hält an 2029 fest.',
    bodyParagraph: 'Just as FICO scores created liquidity and trust across the global lending ecosystem, the Gargantua Trust Score (300–850) provides the universal, auditable actuarial benchmark across 5 mathematical pillars.',
    bodyParagraphDe: 'Genauso wie FICO-Scores Finanzkredite standardisierten, schafft der Gargantua Trust Score (300–850) den weltweiten Benchmark für KI-Vertrauen.',
    statBadge: 'FORECAST CORRIDOR',
    footerNote: 'METACULUS 2026, ANTHROPIC 2025, KURZWEIL 2024, GRACE ET AL. 2024 · FICO 1989',
    citations: ['METACULUS 2026', 'ANTHROPIC 2025', 'KURZWEIL 2024', 'GRACE ET AL. 2024'],
    interactiveType: 'trust-score',
  },
  {
    id: 8,
    number: '08',
    tag: '08 · CONSEQUENCES',
    title: 'Superintelligence',
    titleDe: 'Superintelligenz',
    subtitle: 'Institutional insurance against defined AI losses',
    subtitleDe: 'Institutionelle Versicherung gegen definierte KI-Schäden',
    leadParagraph: 'Once AGI exists, ASI (Artificial Superintelligence) is only a small step away. An intelligence millions of times superior to ours could solve cancer, climate change, and physics — or become uncontrollable.',
    leadParagraphDe: 'Sobald AGI existiert, ist ASI (künstliche Superintelligenz) nur noch ein kleiner Schritt. Eine Intelligenz, die unserer millionenfach überlegen ist, könnte Krebs und Klimawandel lösen – oder unkontrollierbar werden.',
    bodyParagraph: 'With empirical trust scores and continuous telemetry, global reinsurance syndicates underwrite policies covering: (1) Hallucination Liability, (2) Rogue Agent Actions, (3) IP Copyright Claims, and (4) Regulatory Fine Defense.',
    bodyParagraphDe: 'Durch standardisierte Trust Scores versichern globale Syndikate Halluzinationen, unautorisierte Agentenaktionen, Urheberrecht und Regulierungsstrafen.',
    statBadge: 'SUPERINTELLIGENCE',
    footerNote: 'BOSTROM 2014 · LLOYD’S OF LONDON REINSURANCE CAPACITY',
    citations: ['BOSTROM 2014', 'RUSSELL 2019', 'LLOYD’S 2026'],
    interactiveType: 'underwriting',
  },
  {
    id: 9,
    number: '09',
    tag: '09 · RISK',
    title: 'The alignment problem',
    titleDe: 'Das Alignment-Problem',
    subtitle: 'The public registry for investors, lenders, buyers & insurers',
    subtitleDe: 'Das öffentliche Register für Investoren, Kreditgeber und Käufer',
    leadParagraph: 'How do you ensure a system far smarter than any human shares human values? If a superintelligence gets a goal slightly wrong, the consequences could be catastrophic. Leading researchers call AI risk an existential threat.',
    leadParagraphDe: 'Wie stellt man sicher, dass ein System, das viel klüger ist als jeder Mensch, menschliche Werte teilt? Wenn eine Superintelligenz ein Ziel geringfügig falsch interpretiert, könnten die Folgen katastrophal sein.',
    bodyParagraph: 'Enterprise customers, investors, and lenders query Gargantua’s public registry to verify AI trust ratings, inspect active policy limits, and ensure responsible autonomous governance.',
    bodyParagraphDe: 'Investoren und Kunden prüfen im Gargantua-Register verifizierte Trust Ratings und aktive Policen.',
    statBadge: 'ALIGNMENT RISK',
    footerNote: 'CENTER FOR AI SAFETY, STATEMENT ON AI RISK, 2023 · SEC EDGAR & MOODY’S',
    citations: ['CENTER FOR AI SAFETY 2023', 'SEC EDGAR', 'MOODY’S 2026'],
    interactiveType: 'registry',
  },
  {
    id: 10,
    number: '10',
    tag: '10 · SCEPTICISM',
    title: 'Not everyone believes it',
    titleDe: 'Nicht jeder glaubt daran',
    subtitle: '10,000-run Monte Carlo loss modeling and forensic exploit logs',
    subtitleDe: '10.000 Monte-Carlo-Simulationen und forensische Schwachstellenanalysen',
    leadParagraph: 'Scaling hits limits: data, energy, chips. Intelligence is not a number you can double. And the history of AI knows several winters in which big announcements quietly disappeared. Critics such as Rodney Brooks or Gary Marcus consider the singularity a story, not a forecast.',
    leadParagraphDe: 'Skalierung stößt an Grenzen: Daten, Energie, Halbleiter. Intelligenz ist keine Zahl, die man verdoppeln kann. Kritiker wie Rodney Brooks oder Gary Marcus betrachten die Singularität als Fiktion, nicht als Prognose.',
    bodyParagraph: 'Whether AGI arrives in 3 years or 30, non-deterministic models cause real losses today. Gargantua models the extreme catastrophic tail with 10,000-run Monte Carlo distributions (VaR 99.9%, MPL $14.2M) and syndication rating sheets.',
    bodyParagraphDe: 'Gargantua quantifiziert Extremrisiken durch 10.000 Monte-Carlo-Simulationen und forensische Red-Team-Analysen für institutionelle Anleger.',
    statBadge: 'LIMITS & SCEPTICISM',
    footerNote: 'BROOKS 2017, MARCUS 2022 · SOLVENCY II DIRECTIVE',
    citations: ['BROOKS 2017', 'MARCUS 2022', 'SOLVENCY II'],
    interactiveType: 'dossier',
  },
  {
    id: 11,
    number: '11',
    tag: '11 · WHAT REMAINS',
    title: 'Nobody knows',
    titleDe: 'Niemand weiß es',
    subtitle: 'The full bibliography of 23 academic and actuarial references',
    subtitleDe: 'Die vollständige Bibliographie von 23 akademischen und versicherungsmathematischen Quellen',
    leadParagraph: 'Nobody knows the ultimate upper bound. But the people and enterprises working on autonomous intelligence consider it close enough to prepare. The sources for every number are listed below.',
    leadParagraphDe: 'Niemand kennt die absolute Grenze. Aber die Menschen und Unternehmen, die daran arbeiten, halten sie für nah genug, um sich vorzubereiten. Die Quellen für jede Zahl sind unten aufgeführt.',
    bodyParagraph: 'Access the complete interactive Gargantua infrastructure platform apparatus to evaluate, score, and insure your model fleet today.',
    bodyParagraphDe: 'Nutzen Sie die interaktive Gargantua-Infrastruktur, um Ihre Modellflotte heute zu bewerten und abzusichern.',
    statBadge: 'SOURCES FOLLOW',
    footerNote: 'GARGANTUA ACTUARIAL LABS 2026',
    citations: ['GARGANTUA ACTUARIAL LABS 2026'],
    interactiveType: 'sources',
  },
];

export const ACADEMIC_SOURCES = [
  { id: 1, author: 'Turing, A. M.', year: '1950', title: 'Computing Machinery and Intelligence.', publication: 'Mind 59 (236): 433–460.' },
  { id: 2, author: 'McCarthy, J., Minsky, M., Rochester, N., Shannon, C.', year: '1955', title: 'A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence.', publication: 'Dartmouth College Archives.' },
  { id: 3, author: 'Ulam, S.', year: '1958', title: 'John von Neumann 1903–1957.', publication: 'Bulletin of the American Mathematical Society 64 (3): 1–49.' },
  { id: 4, author: 'Good, I. J.', year: '1965', title: 'Speculations Concerning the First Ultraintelligent Machine.', publication: 'Advances in Computers 6: 31–88.' },
  { id: 5, author: 'Vinge, V.', year: '1993', title: 'The Coming Technological Singularity: How to Survive in the Post-Human Era.', publication: 'NASA VISION-21 Symposium.' },
  { id: 6, author: 'Kurzweil, R.', year: '2005', title: 'The Singularity Is Near: When Humans Transcend Biology.', publication: 'Viking Press, New York.' },
  { id: 7, author: 'Kurzweil, R.', year: '2024', title: 'The Singularity Is Nearer: When We Merge with AI.', publication: 'Viking Press, New York.' },
  { id: 8, author: 'Bostrom, N.', year: '2014', title: 'Superintelligence: Paths, Dangers, Strategies.', publication: 'Oxford University Press.' },
  { id: 9, author: 'Krizhevsky, A., Sutskever, I., Hinton, G.', year: '2012', title: 'ImageNet Classification with Deep Convolutional Neural Networks.', publication: 'NeurIPS 25: 1097–1105.' },
  { id: 10, author: 'Vaswani, A. et al.', year: '2017', title: 'Attention Is All You Need.', publication: 'Advances in Neural Information Processing Systems 30 (NeurIPS).' },
  { id: 11, author: 'OpenAI', year: '2022', title: 'Introducing ChatGPT and Reinforcement Learning from Human Feedback (RLHF).', publication: 'OpenAI Research Technical Report.' },
  { id: 12, author: 'OpenAI', year: '2018', title: 'OpenAI Charter: Principles for Autonomous AI Safety.', publication: 'OpenAI Technical Governance Publication.' },
  { id: 13, author: 'Morris, M. R. et al., Google DeepMind', year: '2023', title: 'Levels of AGI: Operationalizing Progress on the Path to AGI.', publication: 'arXiv:2311.02462.' },
  { id: 14, author: 'Center for AI Safety', year: '2023', title: 'Statement on AI Risk & Catastrophic Mitigation.', publication: 'CAIS Global Governance Initiative.' },
  { id: 15, author: 'Grace, K. et al.', year: '2024', title: 'Thousands of AI Authors on the Future of AI.', publication: 'arXiv:2401.02843.' },
  { id: 16, author: 'Metaculus', year: '2026', title: 'When will the first general AI system be devised, tested, and publicly announced?', publication: 'Aggregated Forecasting Benchmark.' },
  { id: 17, author: 'Todd, B. (80,000 Hours)', year: '2026', title: 'Shrinking AGI timelines – a review of expert forecasts.', publication: 'Global Priorities Institute Review.' },
  { id: 18, author: 'Anthropic', year: '2025', title: 'Recommendations to OSTP for the U.S. AI Action Plan and Responsible Scaling Policies (RSP).', publication: 'Anthropic Policy Whitepaper.' },
  { id: 19, author: 'Kokotajlo, D. et al.', year: '2025', title: 'AI 2027 Scenario: Technical and Societal Trajectories.', publication: 'AI Risk Research Institute.' },
  { id: 20, author: 'AIMultiple', year: '2025', title: 'AGI/Singularity Timing & Empirical Enterprise Adoption Curves.', publication: 'AIMultiple Industry Actuarial Report.' },
  { id: 21, author: 'LessWrong', year: '2026', title: 'A visualization of changing AGI timelines, 2023–2026.', publication: 'Alignment Forum Research Benchmark.' },
  { id: 22, author: 'Brooks, R.', year: '2017', title: 'The Seven Deadly Sins of AI Predictions.', publication: 'MIT Technology Review.' },
  { id: 23, author: 'Marcus, G.', year: '2022', title: 'Deep Learning Is Hitting a Wall: Non-Determinism and the Need for Robust Governance.', publication: 'Nautilus Quarterly 44.' },
];
