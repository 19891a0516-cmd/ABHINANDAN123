import { themeColors } from './theme';

export type RiskStage = {
  name: string;
  color: string;
  description: string;
};

export const stages: RiskStage[] = [
  { name: 'Stable', color: themeColors.risk.stable, description: 'The observed history is comparatively steady.' },
  { name: 'Drift', color: themeColors.risk.drift, description: 'Behaviour is beginning to move from its earlier pattern.' },
  { name: 'Squeeze', color: themeColors.risk.squeeze, description: 'Several pressures are converging and merit closer review.' },
  { name: 'Stress', color: themeColors.risk.stress, description: 'The recent trajectory shows material pressure.' },
  { name: 'Distress', color: themeColors.risk.distress, description: 'The observed pattern warrants timely human attention.' },
];

export const overviewCards = [
  {
    title: 'Understand change over time',
    body: 'RadarSeq studies behavioural histories as sequences, so changes and their timing are visible alongside the latest observation.',
  },
  {
    title: 'Put evidence beside the signal',
    body: 'The research explores explanations that help reviewers inspect influential periods and observations before deciding how to respond.',
  },
  {
    title: 'Start with the decision',
    body: 'Data, evaluation and delivery are scoped around a defined business question. Research findings are not assumed to transfer without validation.',
  },
] as const;

export const innovations = [
  {
    n: '01',
    title: 'Connect the evidence',
    body: 'Bring relevant activity, transaction and operational histories into a consistent, usable sequence.',
  },
  {
    n: '02',
    title: 'Model the change',
    body: 'Select and evaluate a model against the business question, available data and an agreed baseline.',
  },
  {
    n: '03',
    title: 'Explain the signal',
    body: 'Investigate direction, timing and influential observations before deciding how to act.',
  },
  {
    n: '04',
    title: 'Make it useful',
    body: 'Shape delivery for a dashboard, scheduled export or agreed API integration and a human review workflow.',
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  status: string;
  summary: string;
  question: string;
  evidence: string[];
  outputs: string[];
  caveat: string;
};

export const projects: Project[] = [
  {
    slug: 'customer-retention',
    title: 'Customer churn & retention',
    status: 'Research-validated',
    summary: 'Find patterns behind disengagement and focus retention effort where it may matter.',
    question: 'Which customers deserve attention, and what changed?',
    evidence: [
      'Dated usage and transaction records',
      'Pseudonymous customer identifiers',
      'Engagement and service events',
      'An agreed churn definition and horizon',
    ],
    outputs: [
      'Individual risk estimates after fit assessment',
      'Changing risk and influential periods',
      'A prioritised retention review queue',
      'Evidence for a more informed conversation',
    ],
    caveat: 'The research is in courier churn. Feature, outcome and data fit must be assessed before applying a model to a new business.',
  },
  {
    slug: 'loan-risk',
    title: 'Loan risk management',
    status: 'In implementation',
    summary: 'Bring repayment behaviour and portfolio signals into a clearer, time-based view.',
    question: 'Where is payment pressure building across the book?',
    evidence: [
      'Repayment and balance histories',
      'Arrears and account servicing events',
      'Agreed borrower-level indicators',
      'Relevant portfolio and market context',
    ],
    outputs: [
      'Account-level watchlist priorities',
      'Repayment and risk trajectories',
      'Supporting evidence for escalation',
      'A portfolio view for risk and servicing teams',
    ],
    caveat: 'A pilot is scoped around the available data, outcomes and existing risk policies.',
  },
  {
    slug: 'fraud-aml',
    title: 'Fraud & AML monitoring',
    status: 'Active research',
    summary: 'Explore event sequences that distinguish an isolated anomaly from a pattern worth investigating.',
    question: 'What happened around the event that raised the alert?',
    evidence: [
      'Approved transaction event histories',
      'Account or device changes',
      'Payment patterns and timing',
      'Resolved case outcomes, where available',
    ],
    outputs: [
      'Behavioural-change indicators',
      'A contextual event timeline',
      'Evidence for human-led case review',
      'Prioritisation alongside existing controls',
    ],
    caveat: 'This is a research collaboration, not a replacement for AML controls or a claim of certified compliance.',
  },
  {
    slug: 'property-collateral',
    title: 'Property & collateral risk',
    status: 'Active research',
    summary: 'Connect tenant behaviour, income and market conditions over time.',
    question: 'Which assets need a closer review, and why now?',
    evidence: [
      'Rent payments and lease events',
      'Occupancy and income histories',
      'Dated valuations and asset changes',
      'Licensed market and local indicators',
    ],
    outputs: [
      'Tenant and asset review priorities',
      'An evolving view of portfolio exposure',
      'Segment and concentration comparisons',
      'Evidence to support asset-management action',
    ],
    caveat: 'Property applications are research-led concepts requiring partner data and domain-specific evaluation.',
  },
];

export const evolutionRows = [
  {
    label: 'Input representation',
    v1: 'Dated behavioural histories rendered as radar-chart images',
    v2: 'Directly aligned tabular feature sequences',
  },
  {
    label: 'Model approach',
    v1: 'CNN image feature extraction followed by BiLSTM temporal modelling',
    v2: 'Mamba/state-space sequence modelling with attention and SwiGLU',
  },
  {
    label: 'Research focus',
    v1: 'Temporal vision for courier churn prediction',
    v2: 'Long-horizon churn prediction from up to 275 active days',
  },
  {
    label: 'Important distinction',
    v1: 'Research result from its reported evaluation setup',
    v2: 'Separate manuscript and evaluation; not a like-for-like deployment comparison',
  },
] as const;

export const workflow = [
  { step: 'Connect the evidence', body: 'Align relevant histories, identifiers, timestamps, features and outcomes for a defined task.' },
  { step: 'Model the change', body: 'Prepare sequences and evaluate an appropriate model against an agreed baseline.' },
  { step: 'Explain the signal', body: 'Review risk direction, influential periods and observations in their temporal context.' },
  { step: 'Support a decision', body: 'Shape the output and human review workflow for the intended operational setting.' },
] as const;

export const publications = [
  {
    title: 'RadarSeq: A Temporal Vision Framework for User Churn Prediction via Radar Chart Sequences',
    authors: 'Sina Najafi, M. Hadi Sepanj and Fahimeh Jafari',
    venue: '2025 · arXiv:2506.17325',
    note: 'Daily radar-chart images with CNN and bidirectional LSTM temporal modelling.',
    href: 'https://arxiv.org/abs/2506.17325',
    status: 'Research paper',
  },
  {
    title: 'RadarSeq++: A Hybrid State-Space and Attention Architecture for Long-Horizon Churn Prediction in Non-Subscription Platforms',
    authors: 'Sayem Mia, Sina Najafi and Fahimeh Jafari',
    venue: '2026 · Research manuscript',
    note: 'Direct feature sequences, Mamba state spaces, sliding-window attention and SwiGLU over up to 275 active days.',
    status: 'Manuscript',
  },
  {
    title: 'RadarSeq-LLM: Explainable LLM-Augmented Temporal Modelling for Courier Churn Prediction',
    authors: 'Soham Patel, Sina Najafi and Fahimeh Jafari',
    venue: '2026 · IJCACI',
    note: 'A sequence-model signal, a small language model and two temporal explanation methods for decision support.',
    status: 'Conference research',
  },
] as const;

export const researchResults = [
  { study: 'Original RadarSeq', precision: '0.884', recall: '0.813', f1: '0.847', focus: 'Temporal vision' },
  { study: 'RadarSeq++', precision: '0.884', recall: '0.956', f1: '0.918', focus: 'Longer feature histories' },
  { study: 'RadarSeq-LLM hybrid', precision: '0.862', recall: '0.775', f1: '0.816', focus: 'Explanation and review' },
] as const;

export const recognitions = [
  {
    name: 'Best Paper · Intelligent Systems',
    event: 'RadarSeq-LLM · 10th International Joint Conference on Advances in Computational Intelligence (IJCACI 2026)',
  },
] as const;

export const collaborators = [
  { name: 'Kuflink', relationship: 'Industry collaborator' },
  { name: 'My Homecare', relationship: 'Industry collaborator' },
  { name: 'University of East London', relationship: 'Academic research' },
  { name: 'UKFin+', relationship: 'Research programme support' },
] as const;

export const pricingPlans = [
  {
    name: 'Private Deployment',
    price: 'Scoped quote',
    description: 'Bring the capability in-house, with delivery shaped around your systems.',
    features: ['Customer-controlled environment', 'Scoped integration and handover', 'Documentation and team enablement', 'Optional ongoing maintenance'],
    cta: 'Discuss delivery',
    featured: false,
  },
  {
    name: 'Flex API',
    price: '£0.04',
    description: 'Per successful standard score. Prepaid usage; £100 minimum.',
    features: ['No managed workspace required', 'Structured scoring output', 'No charge for failed or invalid scores'],
    cta: 'Discuss API fit',
    featured: false,
  },
  {
    name: 'Managed Monitoring',
    price: '£750 / month',
    description: '5,000 monitored entities included.',
    features: ['One standard model; daily scoring', 'Dashboard and three reviewer seats', '1,000 generated summaries included', '£0.08 per additional entity / month'],
    cta: 'Discuss monitoring',
    featured: true,
  },
  {
    name: 'Bespoke Model',
    price: '£2,000 / month',
    description: 'Setup from £12,500; model fit and scope are confirmed first.',
    features: ['Custom training and initial evaluation', '10,000 monitored entities included', '2,000 generated summaries included', '£0.10 per additional entity / month'],
    cta: 'Discuss a model',
    featured: false,
  },
] as const;

export const team = [
  { name: 'Dr Fahimeh Jafari', role: 'Co-founder & Principal Investigator', href: 'https://www.uel.ac.uk/about-uel/staff/fahimeh-jafari' },
  { name: 'Sina Najafi', role: 'Founder & Research Associate', href: 'https://sinanajafi.co.uk' },
  { name: 'Dr Ayantunji Gbadamosi', role: 'Co-Investigator', href: 'https://www.uel.ac.uk/about-uel/staff/ayantunji-gbadamosi' },
  { name: 'Soham Patel', role: 'Research contributor' },
  { name: 'Sayem Mia', role: 'Research contributor' },
  { name: 'Shirisha Uradi', role: 'Research Assistant', href: 'https://uk.linkedin.com/in/uradi-shirisha' },
  { name: 'M. Hadi Sepanj', role: 'Research contributor' },
  { name: 'Abhinandan Dyavathi', role: 'Researcher · Workspace profile' },
] as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Innovations', href: '#innovations' },
  { label: 'Projects', href: '#projects' },
  { label: 'Evolution', href: '#evolution' },
  { label: 'Research', href: '#research' },
  { label: 'Applied research', href: '#applied-research' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Demonstrations', href: '#demos' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
] as const;

export const footerLinks = [
  { label: 'About RadarSeq', href: '#about' },
  { label: 'Research & publications', href: '#research' },
  { label: 'Research collaborators', href: '#collaborators' },
  { label: 'Risk demonstrations', href: '#demos' },
  { label: 'Enterprise applications', href: '#enterprise' },
  { label: 'Contact', href: '#contact' },
] as const;
