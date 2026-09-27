/**
 * Consulting / lead-generation content.
 * Edit prices, services, case studies and FAQ here — components render whatever is in this file.
 */

/* ------------------------------------------------------------------ */
/* Lead capture configuration                                          */
/* ------------------------------------------------------------------ */
export const leadConfig = {
  /**
   * Optional scheduling link (Cal.com / Calendly / Google Calendar appointment page).
   * Leave empty to use WhatsApp as the booking channel.
   * e.g. 'https://cal.com/abdulrahim-uj/discovery'
   */
  bookingUrl: '',
  /**
   * Optional Web3Forms access key (free — https://web3forms.com, enter your email to get one).
   * When set, the enquiry form submits directly to your inbox; otherwise it opens WhatsApp / email.
   */
  web3formsKey: '',
  /** Shown near CTAs to create honest scarcity. */
  capacityNote: 'Limited consulting slots each month — replies within 24 hours (IST).',
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */
export const currencies = [
  { code: 'INR', label: '₹ INR', region: 'India' },
  { code: 'USD', label: '$ USD', region: 'International' },
  { code: 'AED', label: 'AED', region: 'GCC' },
]

const fmt = { INR: (n) => `₹${n.toLocaleString('en-IN')}`, USD: (n) => `$${n.toLocaleString('en-US')}`, AED: (n) => `AED ${n.toLocaleString('en-US')}` }
export const formatPrice = (price, code) => fmt[code](price[code])

/** Fixed-scope engagements — "productised" so buyers can say yes quickly. */
export const services = [
  {
    id: 'audit',
    name: 'Backend Architecture & Code Audit',
    tagline: 'Know exactly what is slowing you down — and what will break next.',
    for: 'Startups and SMBs with a Django / DRF product in production',
    price: { INR: 45000, USD: 750, AED: 2750 },
    unit: 'fixed',
    duration: '5–7 working days',
    includes: [
      'Review of architecture, models, queries, security settings and deployment',
      'PostgreSQL slow-query and index analysis',
      'Prioritised report: quick wins, risks and a 90-day roadmap',
      '60-minute walkthrough call with your team',
    ],
    cta: 'Book an audit',
    featured: false,
  },
  {
    id: 'sprint',
    name: 'Performance & Scale Sprint',
    tagline: 'Fix the slow APIs, timeouts and database pain — in two focused weeks.',
    for: 'Products hitting growth limits or unstable in production',
    price: { INR: 95000, USD: 1600, AED: 5800 },
    unit: 'fixed',
    duration: '2 weeks',
    includes: [
      'Hands-on fixes: N+1 queries, indexing, caching with Redis, Celery offloading',
      'PgBouncer / connection pooling and Gunicorn / Uvicorn tuning',
      'Before / after latency measurements on your key endpoints',
      'Merged pull requests + documentation your team can maintain',
    ],
    cta: 'Start a sprint',
    featured: true,
  },
  {
    id: 'integration',
    name: 'Integration & Middleware Build',
    tagline: 'Make your systems talk to each other — reliably, with retries and audit logs.',
    for: 'Businesses connecting ERP, CRM, payments, devices or e-invoicing',
    price: { INR: 75000, USD: 1250, AED: 4500 },
    unit: 'from',
    duration: '2–4 weeks per integration',
    includes: [
      'Integration design: data mapping, idempotency, retries, monitoring',
      'REST APIs, webhooks and scheduled sync with Celery Beat',
      'Payment gateways, biometric devices, e-invoicing and third-party APIs',
      'Dockerised deployment + runbook',
    ],
    cta: 'Discuss an integration',
    featured: false,
  },
]

/** Recurring revenue — the core of a stable monthly income. */
export const retainers = [
  {
    id: 'advisor',
    name: 'Technical Advisor',
    price: { INR: 40000, USD: 700, AED: 2500 },
    per: '/ month',
    for: 'Founders and small teams who need a senior engineer to think with',
    includes: [
      '2 strategy / architecture calls a month',
      'Async code & design reviews (up to 6 PRs or docs)',
      'WhatsApp / Slack access, next-business-day replies',
      'Hiring help: JD review and technical interviews',
    ],
  },
  {
    id: 'fractional',
    name: 'Fractional Tech Lead',
    price: { INR: 90000, USD: 1600, AED: 5800 },
    per: '/ month',
    for: 'Teams shipping a product without a senior backend lead',
    includes: [
      '~8 hours / week embedded with your team',
      'Architecture ownership, sprint planning and code review',
      'Production & deployment oversight, incident support',
      'Mentoring your developers as part of the work',
    ],
    featured: true,
  },
  {
    id: 'agency',
    name: 'White-label Backend Partner',
    price: { INR: 60000, USD: 1000, AED: 3700 },
    per: '/ month',
    for: 'Agencies that sell web / mobile projects but lack Django depth',
    includes: [
      'Backend architecture and delivery under your brand',
      'Priority capacity reserved each month',
      'Client-call support when you need a technical voice',
      'NDA and non-solicitation by default',
    ],
  },
]

/** Training — built on years of teaching at Techno Dot Academy. */
export const training = [
  {
    id: 'workshop',
    name: 'Team Workshops',
    price: { INR: 30000, USD: 500, AED: 1800 },
    per: '/ day',
    text: 'On-site or remote workshops for dev teams: Django REST Framework in production, PostgreSQL performance, Celery & Redis, Docker deployments, secure APIs.',
  },
  {
    id: 'mentoring',
    name: '1:1 Mentoring',
    price: { INR: 12000, USD: 250, AED: 900 },
    per: '/ 4 sessions',
    text: 'Four 60-minute sessions for developers moving from junior to senior: code reviews on your real work, system design and career guidance.',
  },
  {
    id: 'bootcamp',
    name: 'Corporate Upskilling Program',
    price: { INR: 150000, USD: 2500, AED: 9000 },
    per: '/ cohort',
    text: 'A structured 4–6 week Python / Django program for a cohort of new hires or freshers, with live project work, assessments and a final review.',
  },
]

/* ------------------------------------------------------------------ */
/* Case studies (facts only — add metrics as you collect them)          */
/* ------------------------------------------------------------------ */
export const caseStudies = [
  {
    id: 'technostore360',
    title: 'One codebase, many storefronts',
    client: 'TechnoStore360 — multi-tenant B2C eCommerce SaaS',
    url: 'https://www.technostore360.com',
    tags: ['SaaS', 'Multi-tenancy', 'Architecture'],
    challenge:
      'Launch an eCommerce SaaS where many independent stores run on shared infrastructure, without one tenant ever seeing another tenant’s data or slowing the others down.',
    approach: [
      'Designed the tenant isolation model and a modular-monolith architecture in Django REST Framework',
      'Built tenant-aware catalogue, order, inventory and payment APIs on PostgreSQL',
      'Moved heavy work to Celery workers with Redis; shipped with Docker',
      'Angular storefront and admin on top of a single, versioned API',
    ],
    outcome:
      'Built from scratch and live in production — new storefronts run on the same codebase instead of separate deployments.',
    flow: ['Storefront (Angular)', 'DRF API · tenant resolver', 'PostgreSQL', 'Celery + Redis'],
    role: 'Architect & Team Lead',
  },
  {
    id: 'islify',
    title: 'Shop America\u2019s top stores, delivered to Kenya',
    client: 'Islify \u2014 cross-border eCommerce',
    url: 'https://islify.com/',
    tags: ['eCommerce', 'Cross-border', 'API integration'],
    challenge:
      'Let shoppers in Kenya buy from top US stores in one place, even though every store has its own catalogue, pricing and ordering system.',
    approach: [
      'Merchant-wise product catalogues pulled from the Shoppable API',
      'Amazon products and ordering through the Zinc API',
      'Local payments through the R-Cash gateway via RamadPay',
      'Django back end with a React storefront',
    ],
    outcome: 'One storefront that brings top US stores and Amazon to shoppers in Kenya, with local R-Cash payments.',
    flow: ['US stores · Shoppable API', 'Amazon · Zinc API', 'Django catalogue & orders', 'R-Cash via RamadPay', 'Delivery to Kenya'],
    role: 'Solution Expert',
  },
  {
    id: 'al-mawhiba',
    title: 'A school run from one portal, admission to bus route',
    client: 'Al-Mawhiba School Portal \u2014 Oman',
    url: 'https://portal.mawhiba.edu.om/',
    tags: ['Education', 'Workflow', 'RBAC'],
    challenge:
      'A school in Oman needed one system for the whole student journey, used by eight different staff roles, each with its own responsibilities and permissions.',
    approach: [
      'Student admissions through to ongoing student management',
      'Agreement creation with generated PDF documents',
      'Fees management and invoice generation',
      'Bus / transport management',
      'Role-based access for admission officer, financial agreement officer, cashier, accountant, manager, principal, vice principal and bus coordinator',
    ],
    outcome: 'A complete student management system in production, where each staff role works only in its own part of the process.',
    flow: ['Admission', 'Agreement + PDF', 'Fees & invoices', 'Bus management'],
    role: 'Solution Expert',
  },
  {
    id: 'kollabzi',
    title: 'Work visibility without spreadsheets',
    client: 'Kollabzi \u2014 employee monitoring platform',
    url: 'https://kollabzi.waslasoft.com',
    tags: ['SaaS', 'HR', 'Analytics'],
    challenge:
      'Teams needed one place to see how work time is spent, instead of separate tools for monitoring, timesheets and task tracking.',
    approach: [
      'Windows desktop agent with screen monitoring',
      'Application-usage analytics and reports',
      'Timesheets built into the same platform',
      'Task management alongside time and usage data',
    ],
    outcome: 'Live product combining screen monitoring, usage analytics, timesheets and tasks in one platform.',
    flow: ['Windows desktop agent', 'Screen & app-usage capture', 'Analytics reports', 'Timesheets & tasks'],
    role: 'Solution Expert',
  },
  {
    id: 'waslasoft-people',
    title: 'Biometric attendance that syncs itself',
    client: 'Waslasoft People — cloud attendance platform',
    url: 'https://people.waslasoft.com',
    tags: ['Integration', 'Devices', 'HR'],
    challenge:
      'Check-in / check-out data was locked inside ZKBio Time and HikVision biometric devices, while HR and payroll lived in Odoo ERP and Zoho People.',
    approach: [
      'Built Python middleware that pulls punches from the device platforms',
      'Normalised shifts and punches, then pushed attendance into Odoo ERP and Zoho People',
      'Scheduled, retry-safe sync so missed runs heal themselves',
    ],
    outcome:
      'Attendance flows from device to HR systems automatically, as a cloud product for multiple organisations.',
    flow: ['ZKBio Time / HikVision', 'Python sync service', 'Odoo ERP', 'Zoho People'],
    role: 'Team Lead',
  },
  {
    id: 'partnerpro',
    title: 'From spreadsheets to an automated commission engine',
    client: 'PartnerPro — sales incentive platform',
    url: 'https://partnerpro.saasorder.com/',
    tags: ['Automation', 'Odoo ERP', 'FinOps'],
    challenge:
      'Partner and referral commissions were calculated and paid out manually — slow, error-prone and hard to audit.',
    approach: [
      'Modelled incentive rules as configurable data instead of hard-coded logic',
      'Integrated with Odoo ERP to pull sales and push payout records',
      'Automated calculation runs and reporting with an audit trail',
    ],
    outcome: 'Replaced the manual calculation and payout process with an automated, auditable engine.',
    flow: ['Odoo ERP sales', 'Rules engine (Django)', 'Payout ledger', 'Reports'],
    role: 'Lead developer',
  },
  {
    id: 'bairooha',
    title: 'Donations for two charities, paid directly and on WhatsApp',
    client: 'Bairooha Foundation & Hope \u2014 charity platform',
    url: 'https://www.bairoohafoundation.com/',
    tags: ['Non-profit', 'Payments', 'WhatsApp'],
    challenge:
      'Bairooha Foundation and its sister organisation Hope needed to accept donations securely and reach donors where they already are: WhatsApp.',
    approach: [
      'One charity application serving both Bairooha Foundation and Hope',
      'Direct HDFC payment gateway integration with transaction reconciliation',
      'WhatsApp flows for donor interactions',
      'React front end on a Django REST Framework API',
    ],
    outcome: 'Live platform taking donations for both organisations through HDFC, with WhatsApp flows for donors.',
    flow: ['Donor · web / WhatsApp', 'Django DRF API', 'HDFC payment gateway', 'Reconciliation'],
    role: 'Team Lead',
  },
  {
    id: 'zatca',
    title: 'Live visibility into Saudi e-invoicing compliance',
    client: 'ZATCA invoice monitoring dashboard — private client system',
    tags: ['FinTech', 'Compliance', 'Data'],
    challenge:
      'Finance teams had no live view of which invoices had cleared ZATCA e-invoicing — the data sat in an MS SQL Server system they could not safely change.',
    approach: [
      'Read the source MS SQL Server strictly read-only',
      'Synced into PostgreSQL as the dashboard’s own database',
      'Built a Django dashboard with compliance status, filters and exports',
    ],
    outcome: 'Finance teams get live visibility into e-invoicing compliance status without touching the legacy system.',
    flow: ['MS SQL Server (read-only)', 'Sync jobs', 'PostgreSQL', 'Django dashboard'],
    role: 'Solution Expert',
  },
]

/* ------------------------------------------------------------------ */
/* Process & FAQ                                                       */
/* ------------------------------------------------------------------ */
export const processSteps = [
  { title: 'Free 30-min discovery call', text: 'We talk about the product, the constraint and what success looks like. No sales pitch — if I am not the right fit, I will say so.' },
  { title: 'Fixed proposal in 48 hours', text: 'A written scope, timeline and fixed price (or monthly retainer). You know the cost before any work starts.' },
  { title: 'Delivery with weekly demos', text: 'Pull requests, short written updates and a weekly demo. You always know where things stand.' },
  { title: 'Handover & support', text: 'Documentation, a recorded walkthrough and two weeks of post-delivery support included.' },
]

export const faqs = [
  { q: 'Why not hire a cheaper freelancer?', a: 'You can — for well-defined tasks that is often the right call. Teams bring me in when the problem is architecture, performance, integrations or production stability, where a wrong decision costs far more than the invoice. You get 9 years of enterprise experience and someone who currently leads an engineering team.' },
  { q: 'Do you work with clients outside India?', a: 'Yes. I work with clients in India, the GCC and Europe, and have worked on-site in Dubai. I invoice in INR, USD or AED and keep a daily overlap window for GCC and European time zones.' },
  { q: 'Can you work inside our existing codebase and team?', a: 'Yes — most engagements are exactly that. I work through your Git workflow, open reviewed pull requests and document decisions so your team owns the result.' },
  { q: 'How do payments work?', a: 'Fixed-scope projects: 50% to start, 50% on delivery. Retainers and training are billed monthly or per cohort in advance. Payment by bank transfer / UPI in India, or wire / Wise / PayPal internationally.' },
  { q: 'Will you sign an NDA?', a: 'Yes, happily, before we look at any code or data.' },
  { q: 'How many clients do you take on?', a: 'Only a few each month, alongside my current role, so every engagement gets senior attention. If I am fully booked I will tell you when the next slot opens.' },
]

/* ------------------------------------------------------------------ */
/* Enquiry form options                                                */
/* ------------------------------------------------------------------ */
export const enquiryServices = [
  'Backend Architecture & Code Audit',
  'Performance & Scale Sprint',
  'Integration & Middleware Build',
  'Monthly retainer (Advisor / Fractional Tech Lead)',
  'White-label backend partner (agency)',
  'Developer training / mentoring',
  'Something else',
]

export const budgetRanges = [
  'Under ₹40,000 / $500',
  '₹40,000 – ₹1,00,000 / $500 – $1,500',
  '₹1,00,000 – ₹3,00,000 / $1,500 – $4,000',
  '₹3,00,000+ / $4,000+',
  'Monthly retainer',
  'Not sure yet',
]

export const timelines = ['As soon as possible', 'Within a month', '1–3 months', 'Just exploring']

/* ------------------------------------------------------------------ */
/* Free tool: Django Production Readiness Scorecard                    */
/* ------------------------------------------------------------------ */
export const scorecard = [
  {
    area: 'Security',
    questions: [
      { q: 'DEBUG is off in production and secrets live in environment variables or a secret manager — never in Git.', fix: 'Move secrets to env vars / a secret manager, rotate anything ever committed, and add `manage.py check --deploy` to CI.' },
      { q: 'HTTPS everywhere with HSTS, secure cookies, and CSRF / CORS locked to known origins.', fix: 'Enable SECURE_* settings, HSTS and secure cookies; restrict CORS_ALLOWED_ORIGINS to your real frontends.' },
      { q: 'Login and public API endpoints are rate-limited / throttled.', fix: 'Add DRF throttling classes (and Nginx rate limits) on auth, OTP and public endpoints.' },
    ],
  },
  {
    area: 'Database',
    questions: [
      { q: 'You track slow queries (pg_stat_statements or an APM) and have fixed N+1 queries with select_related / prefetch_related.', fix: 'Enable pg_stat_statements, profile your top endpoints and remove N+1 queries — often the single biggest win.' },
      { q: 'Indexes match your most-used filters and orderings, and migrations are tested on production-sized data.', fix: 'Review EXPLAIN ANALYZE for top queries, add composite / partial indexes, and rehearse heavy migrations on a data copy.' },
      { q: 'Connection pooling is in place (PgBouncer or tuned persistent connections).', fix: 'Put PgBouncer in transaction mode in front of PostgreSQL and size worker pools to match.' },
      { q: 'Automated backups exist and a restore has been tested in the last 90 days.', fix: 'Automate daily backups with PITR where possible and schedule a quarterly restore drill.' },
    ],
  },
  {
    area: 'Performance',
    questions: [
      { q: 'Slow work (emails, reports, third-party calls) runs in background workers, not in the request.', fix: 'Move slow and external calls to Celery / RQ tasks with retries and timeouts.' },
      { q: 'Expensive reads are cached (e.g. Redis) with a clear invalidation strategy.', fix: 'Cache hot read paths in Redis with explicit keys and invalidate on write signals.' },
      { q: 'You know the p95 latency of your key endpoints, and it is under ~500 ms.', fix: 'Instrument endpoints (APM / middleware timing), set latency budgets and alert on regressions.' },
    ],
  },
  {
    area: 'Delivery & reliability',
    questions: [
      { q: 'Deployments are containerised and automated through CI/CD — no manual SSH deploys.', fix: 'Dockerise the app and deploy through a CI/CD pipeline with build, test and migrate stages.' },
      { q: 'Errors and downtime alert a human (Sentry / uptime checks / logs).', fix: 'Wire up Sentry, uptime monitoring and log retention, routed to someone on call.' },
      { q: 'You can deploy without downtime and roll back in minutes.', fix: 'Use rolling / blue-green deploys, backwards-compatible migrations and a documented rollback.' },
    ],
  },
  {
    area: 'Code & team',
    questions: [
      { q: 'Automated tests run on every pull request and cover the critical flows.', fix: 'Start with tests for money, auth and data-integrity paths and make CI block failing PRs.' },
      { q: 'There is a code review process and up-to-date architecture / onboarding docs.', fix: 'Adopt a PR template and review checklist, and keep a one-page architecture overview current.' },
    ],
  },
]
