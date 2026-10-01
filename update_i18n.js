import fs from 'fs';

const englishContent = {
  lang: 'en',
  meta: {
    title: 'Gargantua – AI Risk Intelligence + Insurance Infrastructure',
    description: 'Credit scores measure financial trust. Gargantua measures AI trust. Continuous fleet telemetry, synthetic adversarial testing, standardized trust scores (300–850), and institutional AI insurance.'
  },
  hud: {
    skip: 'Skip to content',
    scrollHint: ['Scroll down', 'Keep going', 'Platform overview'],
    audioOn: '',
    audioOff: '',
    langSwitch: '',
    langSwitchLabel: '',
    chapters: 'Chapters',
    legal: 'Demo',
    credit: 'gargantua.ai',
    close: 'Close',
    wordmark: 'Gargantua'
  },
  chapters: {
    intro: {
      kicker: 'AI Risk Intelligence',
      headline: 'Gargantua',
      body: 'Credit scores measure financial trust. Gargantua measures AI trust.'
    },
    heute: {
      kicker: '01 · The Event Horizon',
      headline: 'Approaching the\nSingularity',
      body: 'Gargantua is the supermassive singularity at the center of the AI revolution — measuring the gravitational pull, tail risk, and event horizon of autonomous models before they cross the point of no return.'
    },
    zeitstrahl: {
      kicker: '02 · Extreme Gravitational Stress',
      headline: 'Synthetic\nRed Teaming',
      body: 'Subjecting frontier AI systems to extreme boundary conditions. Gargantua executes 3,500+ generative red-team probes testing prompt injection, hallucination drift, and rogue agent runaway.'
    },
    'prognose-agi': {
      kicker: '03 · The Singularity Metric',
      headline: 'The Gargantua\nTrust Score',
      body: 'Standardized 300–850 AI Credit Rating indexing empirical model determinism, safety guardrails, alignment stability, and statutory regulatory compliance.'
    },
    'prognose-sing': {
      kicker: '04 · Loss Indemnity',
      headline: 'Underwriting\nSuperintelligence',
      body: 'When stochastic AI agents trigger catastrophic financial loss, legacy IT policies fail. Gargantua Syndicate #4401 and Lloyd’s of London provide actuarial insurance capacity up to $100M.'
    },
    outro: {
      kicker: '05 · Navigating the Horizon',
      headline: 'Deploy Frontier AI\nWith Absolute Trust',
      body: 'Monitor autonomous model fleets, benchmark real-time risk drift, and bind institutional loss indemnity with Gargantua.'
    }
  },
  forecasts: {
    labs: { who: 'Frontier AI Labs', note: 'Approaching the Event Horizon' },
    'kurzweil-agi': { who: 'AGI Horizon', note: 'Autonomous Intelligence' },
    metaculus: { who: 'Market Consensus', note: 'Singularity Trajectory' },
    survey: { who: 'Red-Team Matrix', note: 'Adversarial Resilience' },
    experts: { who: 'Lloyd’s Syndicate', note: 'Actuarial Capacity' },
    'kurzweil-sing': { who: 'Universal Benchmark', note: 'Gargantua Trust Score' },
    never: { who: 'Catastrophic Tail Risk', note: 'Institutional Coverage', text: 'Insured' }
  },
  milestones: {
    1950: 'Turing: Computing Machinery & Intelligence',
    1956: 'Dartmouth: Artificial Intelligence Research',
    1965: 'Good: Speculations on Machine Intelligence',
    1993: 'Vinge: The Technological Singularity',
    2005: 'Kurzweil: Exponential Computation',
    2012: 'AlexNet: Deep Neural Networks',
    2017: 'Transformer: Attention Is All You Need',
    2022: 'Generative Foundation Models',
    2026: 'Gargantua: Standardized AI Trust & Insurance'
  },
  sources: {
    title: '',
    intro: '',
    note: '',
    details: {}
  },
  legal: {
    title: 'Demo',
    imprint: '<p style="font-size:17px; line-height:1.6; color:var(--ice); margin: 12px 0;">This is a demo website for Gargantua.</p>',
    privacy: ''
  },
  notFound: {
    title: 'Page Not Found – Gargantua',
    kicker: '404',
    figure: '404',
    headline: 'Page Not Found',
    body: 'This address does not exist.',
    back: 'Back to Start'
  }
};

const data = {
  de: englishContent,
  en: englishContent
};

const preamble = `(function(){let e=document.createElement(\`link\`).relList;if(e&&e.supports&&e.supports(\`modulepreload\`))return;for(let e of document.querySelectorAll(\`link[rel="modulepreload"]\`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===\`childList\`)for(let e of t.addedNodes)e.tagName===\`LINK\`&&e.rel===\`modulepreload\`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===\`use-credentials\`?\`include\`:e.crossOrigin===\`anonymous\`?\`omit\`:\`same-origin\`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();`;

const logic = `var e=${JSON.stringify(data)},t=new Set,n="/en/",r="en";function i(e){return"/"}function a(e){return!0}function o(){return"en"}function s(e,t){let n=document.head.querySelector(e);n instanceof HTMLMetaElement&&(n.content=t)}function c(){let e=u();document.documentElement.lang="en",document.title=e.meta.title,s('meta[name="description"]',e.meta.description),s('meta[property="og:title"]',e.meta.title),s('meta[property="og:description"]',e.meta.description);let t=new URL(window.location.href);if(t.searchParams.has("lang")){let e=new URLSearchParams(t.search);e.delete("lang"),t.search=e.toString()}t.pathname=i(r),window.history.replaceState(null,"",t);let n=document.head.querySelector('link[rel="canonical"]'),a=document.head.querySelector('meta[property="og:url"]'),o=\`\${t.origin}\${t.pathname}\`;n instanceof HTMLLinkElement&&(n.href=o),a instanceof HTMLMetaElement&&(a.content=o)}function l(){return"en"}function u(){return e.en}function d(e){let n=u();t.forEach(e=>e(n))}function f(){}function p(e){return t.add(e),()=>t.delete(e)}function m(){c()}export{p as a,i,l as n,f as o,m as r,u as t};`;

fs.writeFileSync('public/assets/i18n-BOv2qir6.js', preamble + logic);
console.log('Successfully proofread and updated all website copy in i18n bundle.');
