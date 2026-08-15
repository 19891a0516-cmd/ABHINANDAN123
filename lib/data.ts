export const stages = [
  { name: 'Stable', color: '#0F9488' },
  { name: 'Drift', color: '#3355E8' },
  { name: 'Squeeze', color: '#C9930F' },
  { name: 'Stress', color: '#E8622C' },
  { name: 'Distress', color: '#A93226' },
]

export const overviewCards = [
  {
    title: 'Trajectory, not snapshot',
    body: 'RadarSeq reads the path a signal takes over time, not a single point-in-time score — so a slow drift toward risk is visible long before it becomes a loss.',
  },
  {
    title: 'Five-stage radar',
    body: 'Every entity is placed on a five-stage scale — Stable, Drift, Squeeze, Stress, Distress — so a portfolio\'s risk position is legible at a glance.',
  },
  {
    title: 'Explainable by design',
    body: 'Every prediction carries a full audit trail back to the signals that produced it, built for review, not just for accuracy.',
  },
]

export const innovations = [
  {
    n: '01',
    title: 'Sequence-aware encoding',
    body: 'Behavioural history is encoded as an ordered sequence, so the model learns how risk builds, not just what it looks like at one moment.',
  },
  {
    n: '02',
    title: 'Stage-transition modelling',
    body: 'RadarSeq models the transitions between risk stages directly, capturing momentum that a single classification score discards.',
  },
  {
    n: '03',
    title: 'Cross-source fusion',
    body: 'Signals from separate systems — transactions, engagement, support, payments — are fused into one continuous risk trajectory.',
  },
]

export const projects = [
  {
    title: 'Customer Churn Prediction',
    status: 'Validated',
    statusColor: '#0F9488',
    iconColor: '#0F9488',
    icon: 'arrow',
    questions: [
      'Which customers are drifting toward cancellation this quarter?',
      'What behaviour change signalled the shift?',
      'Which accounts are worth an intervention now?',
    ],
  },
  {
    title: 'Loan Risk Management',
    status: 'In development',
    statusColor: '#C9930F',
    iconColor: '#C9930F',
    icon: 'coin',
    questions: [
      'Which borrowers are entering payment stress early?',
      'How is a loan\'s risk trajectory changing month over month?',
      'Where should collections focus limited capacity?',
    ],
  },
  {
    title: 'Fraud & AML Monitoring',
    status: 'Active research',
    statusColor: '#3355E8',
    iconColor: '#FF4F87',
    icon: 'shield',
    questions: [
      'Which account patterns resemble known fraud trajectories?',
      'How confident is the model in a flagged case?',
      'What evidence supports escalation to a case officer?',
    ],
  },
  {
    title: 'Property & Collateral Risk',
    status: 'Active research',
    statusColor: '#3355E8',
    iconColor: '#7C5CE0',
    icon: 'home',
    questions: [
      'Is collateral value trending against the loan balance?',
      'Which assets need re-valuation first?',
      'What early signals precede a collateral shortfall?',
    ],
  },
]

export const pricingPlans = [
  {
    name: 'Pilot',
    price: 'Custom',
    description: 'For teams validating risk signals in one business unit.',
    features: ['1 use case', 'Data integration support', 'Executive dashboard', 'Custom risk scoring'],
    cta: 'Start pilot',
    featured: false,
  },
  {
    name: 'Scale',
    price: '£6k/mo',
    description: 'For operators monitoring portfolios across multiple teams and channels.',
    features: ['Multi-source signal fusion', 'Live risk radar', 'Explainability exports', 'Priority support'],
    cta: 'Book demo',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For regulated organisations needing governance, SLAs, and deep model review.',
    features: ['Private deployment', 'SLA-backed support', 'Audit trails', 'Dedicated onboarding'],
    cta: 'Talk to sales',
    featured: false,
  },
]

export const testimonials = [
  {
    quote: 'RadarSeq gave us visibility into risk movement before our legacy scorecards even blinked. It changed how we prioritised intervention.',
    name: 'Maya Zhou',
    title: 'VP Risk Intelligence',
    company: 'Northstar Finance',
  },
  {
    quote: 'The model is explainable, operational and genuinely useful to teams on the ground. We saw more actionable signals in two months than in a year of static reporting.',
    name: 'Daniel Patel',
    title: 'Head of Portfolio Strategy',
    company: 'Harbor Credit',
  },
  {
    quote: 'It feels like an AI lab and a product team built a single decision system. The output was clear enough for executives and operators alike.',
    name: 'Leah Martins',
    title: 'Chief Operations Officer',
    company: 'BluePeak Group',
  },
]

export const evolutionRows = [
  { label: 'Scoring', v1: 'Point-in-time snapshot', v2: 'Full trajectory sequence' },
  { label: 'Signals', v1: 'Single source', v2: 'Cross-source fusion' },
  { label: 'Output', v1: 'Binary flag', v2: 'Five-stage radar + confidence' },
  { label: 'Explainability', v1: 'Feature importances', v2: 'Full audit trail' },
  { label: 'Validated on', v1: '2,400 entities', v2: '16,000 entities' },
]

export const workflow = [
  { step: 'Ingest', body: 'Behavioural and transactional signals stream in from every connected source.' },
  { step: 'Sequence', body: 'Signals are ordered into a continuous per-entity trajectory over time.' },
  { step: 'Score', body: 'The model places each entity on the five-stage risk radar with a confidence value.' },
  { step: 'Explain & act', body: 'Every score ships with an audit trail and a recommended next action.' },
]

export const endpoints = [
  { path: '/v1/predict', calls: '128,402', latency: '284ms', status: 'Healthy' },
  { path: '/v1/batch', calls: '4,910', latency: '1.2s', status: 'Healthy' },
  { path: '/v1/explain', calls: '62,118', latency: '310ms', status: 'Degraded' },
  { path: '/v1/webhooks', calls: '9,204', latency: '140ms', status: 'Healthy' },
]

export const dashboardBars = [62, 74, 58, 81, 69, 90, 77]

export const portfolioDistribution = [
  { stage: 'Stable', pct: 62, color: '#0F9488' },
  { stage: 'Drift', pct: 19, color: '#3355E8' },
  { stage: 'Squeeze', pct: 11, color: '#C9930F' },
  { stage: 'Stress', pct: 6, color: '#E8622C' },
  { stage: 'Distress', pct: 2, color: '#A93226' },
]

export const priorityQueue = [
  { id: 'cust_44291', stage: 'Squeeze', color: '#C9930F' },
  { id: 'cust_38104', stage: 'Stress', color: '#E8622C' },
  { id: 'cust_51920', stage: 'Distress', color: '#A93226' },
  { id: 'cust_29887', stage: 'Drift', color: '#3355E8' },
  { id: 'cust_60213', stage: 'Squeeze', color: '#C9930F' },
]

export const impactStats = [
  { value: '1–3%', label: 'Loan Loss Reduction', sub: 'Lower loss exposure' },
  { value: '20–30%', label: 'Collections Efficiency', sub: 'Fewer manual reviews' },
  { value: '5–10%', label: 'Customer Retention', sub: 'Avoidable churn prevented' },
  { value: '15–25%', label: 'Fraud & Monitoring', sub: 'Better case prioritisation' },
  { value: '£50k–£250k', label: 'Revenue Protection', sub: 'Annual value protected' },
]

export const partners = ['Kuflink', 'My Homecare Glasgow']

export const publications = [
  {
    title: 'RadarSeq: A Temporal Vision Framework for User Churn Prediction via Radar Chart Sequences',
    authors: 'Najafi, Sepanj, Jafari',
    venue: 'ACM / Springer, 2025',
    note: 'Validated on ~16,000 couriers, outperforming CatBoost, ChurnViT, CNN-only and CNN+MLP baselines.',
  },
  {
    title: 'Predicting Courier Churn Using AI Language Models on Behavioral Sequences',
    authors: 'Soham Patel',
    venue: 'University of East London',
    note: 'Fine-tunes a small open-source language model to read daily work history and predict 45-day churn.',
  },
]

export const credibilityTags = [
  'EPSRC · UKFin+',
  'University of East London',
  'University of Waterloo',
  'IFRS 9 Aligned',
  'Consumer Duty PRIN 2A',
]

export const team = [
  { name: 'Dr Fahimeh Jafari', role: 'Associate, UEL Centre of FinTech (PI)', color: '#7C5CE0' },
  { name: 'Sina Najafi', role: 'Research Associate · Lead', color: '#FF4F87' },
  { name: 'Dr Ayantunji Gbadamosi', role: 'Commercial Strategy · UEL', color: '#3355E8' },
  { name: 'Aaditya Venkata Vardhana', role: 'Researcher', color: '#0F9488' },
  { name: 'Sayem Mia', role: 'Researcher', color: '#C9930F' },
  { name: 'Soham Chandrahasbhai', role: 'Researcher', color: '#E8622C' },
  { name: 'Abhinandan Dyavathi', role: 'Researcher', color: '#A93226' },
  { name: 'Shirisha Uradi', role: 'Researcher', color: '#7C5CE0' },
]

export const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Innovations', href: '#innovations' },
  { label: 'Projects', href: '#projects' },
  { label: 'Evolution', href: '#evolution' },
  { label: 'Publications', href: '#publications' },
  { label: 'Applied Research', href: '#research' },
  { label: 'Team', href: '#team' },
]

export const footerLinks = {
  quick: [
    { label: 'Overview', href: '#overview' },
    { label: 'Innovations', href: '#innovations' },
    { label: 'Projects', href: '#projects' },
    { label: 'Pricing', href: '#pricing' },
  ],
  resources: [
    { label: 'Applied Research', href: '#research' },
    { label: 'Publications', href: '#publications' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  research: [
    { label: 'Team', href: '#team' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'hello@radarseq.ai', href: 'mailto:hello@radarseq.ai' },
  ],
}
