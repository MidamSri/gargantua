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
      kicker: '01 · Observability',
      headline: 'Continuous Fleet\nTelemetry',
      body: 'Zero-latency risk telemetry and safety monitoring across OpenAI, Anthropic, Mistral, and private VPC clusters.'
    },
    zeitstrahl: {
      kicker: '02 · Stress Testing',
      headline: 'Synthetic\nRed Teaming',
      body: 'Automated adversarial probing tests prompt injection, hallucination drift, and agent tool execution.'
    },
    'prognose-agi': {
      kicker: '03 · Benchmark',
      headline: 'Standardized\nTrust Scores',
      body: 'Standardized FICO-style ratings (300–850) measuring model determinism, safety boundaries, and regulatory compliance.'
    },
    'prognose-sing': {
      kicker: '04 · Protection',
      headline: 'Institutional\nAI Insurance',
      body: 'Underwritten policies backed by Lloyd’s syndicates covering model liabilities, rogue agent actions, and operational loss.'
    },
    outro: {
      kicker: '05 · Enterprise',
      headline: 'Deploy AI With\nInstitutional Trust',
      body: 'Manage model fleets, run synthetic stress tests, and bind institutional insurance with Gargantua.'
    }
  },
  forecasts: {
    labs: { who: 'AI Labs', note: 'Continuous Safety Telemetry' },
    'kurzweil-agi': { who: 'Industry Standard', note: 'Standardized Ratings' },
    metaculus: { who: 'Market Consensus', note: 'Empirical Risk Modeling' },
    survey: { who: 'Research Benchmark', note: 'Adversarial Resilience' },
    experts: { who: 'Actuarial Standard', note: 'Lloyd’s Syndicate Capacity' },
    'kurzweil-sing': { who: 'Universal Benchmark', note: 'Gargantua Trust Score' },
    never: { who: 'Tail Risk Bounds', note: 'Institutional Coverage', text: 'Insured' }
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
