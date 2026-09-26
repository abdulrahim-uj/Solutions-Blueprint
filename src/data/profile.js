/**
 * Single source of truth for all portfolio content.
 * Update this file to change text, projects, experience or links —
 * components never hard-code personal data.
 */

export const profile = {
  name: 'Abdul Rahim Kattirithodi',
  shortName: 'Abdul Rahim',
  initials: 'AR',
  role: 'Solution Expert · Python / Django',
  headline: 'Senior Python / Django Engineer · Backend & Full Stack · Technical Lead',
  location: 'Kerala, India',
  photo: '/profile.webp',
  availability: 'Open to roles in India, GCC, Australia & Europe · EU Blue Card eligible',
  intro:
    "I'm Abdul Rahim Kattirithodi, a backend-focused Solution Expert and Technical Lead. I build multi-tenant SaaS platforms, HR and eCommerce products, reliable REST APIs, and the middleware that keeps ERPs, CRMs and biometric devices in sync in production.",
}

export const contact = {
  email: 'abdulrahim.uj@gmail.com',
  whatsapp: '+919809966231',
  whatsappDisplay: '+91 98099 66231',
  github: 'https://github.com/abdulrahim-uj',
  linkedin: 'https://www.linkedin.com/in/abdulrahim-uj/',
}

export const whatsappLink = (text = "Hi Abdul Rahim, I came across your portfolio and would like to connect.") =>
  `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`

export const stats = [
  { value: '9+', label: 'Years in enterprise software' },
  { value: '4+', label: 'Years in production Python / Django' },
  { value: '11', label: 'Developers led' },
]

export const heroHighlights = [
  { title: 'Backend', text: 'Python · Django · DRF · FastAPI' },
  { title: 'Architecture', text: 'Multi-tenant · Modular · Secure' },
  { title: 'Delivery', text: 'Docker · Nginx · PgBouncer · CI/CD' },
]

export const about = {
  paragraphs: [
    'I have spent 9 years in enterprise application development: 4 of them building and operating production Python and Django platforms, and 3 in a technical leadership role. I own the work end to end, from architecture and REST API design to PostgreSQL performance, containerised deployment and production support.',
    'At Febno Technologies I was promoted twice within 24 months, from Python Django Developer to Team Lead to Solution Expert, and I now lead a team of 11 engineers delivering multi-tenant SaaS, eCommerce, HR and ERP integration products. Before that I spent years on SQL Server, Crystal Reports and PowerBuilder systems in India and Dubai, so I understand the legacy systems most integrations have to talk to.',
  ],
}

export const skillGroups = [
  { title: 'Languages & Backend', items: ['Python', 'SQL', 'JavaScript', 'Django', 'Django REST Framework', 'FastAPI', 'REST API design', 'Microservices', 'Modular monolith', 'Middleware'] },
  { title: 'Frontend & Mobile', items: ['React.js', 'Next.js', 'Angular', 'HTML5 / CSS3', 'Strapi CMS', 'i18n & localisation', 'Flutter'] },
  { title: 'Data', items: ['PostgreSQL', 'PgBouncer', 'PostgreSQL FDW', 'Redis', 'MS SQL Server', 'MySQL', 'Oracle 11g', 'Query optimisation'] },
  { title: 'Infrastructure & DevOps', items: ['Docker', 'Docker Swarm', 'Nginx', 'Celery & Celery Beat', 'Ubuntu Linux', 'Windows Server / IIS', 'GitLab CI/CD', 'GitHub'] },
  { title: 'Enterprise Integrations', items: ['Odoo ERP', 'Zoho People', 'Zoho CRM', 'Zoho Books', 'Moodle', 'ZKBio Time / HikVision', 'Payment gateways', 'ZATCA e-invoicing'] },
  { title: 'Practices', items: ['Multi-tenant architecture', 'Code review', 'SDLC', 'Technical leadership', 'Production monitoring', 'Incident response'] },
]

export const experience = [
  {
    period: 'Oct 2024 — Present',
    title: 'Solution Expert (Technical Lead)',
    company: 'Febno Technologies Pvt Ltd',
    location: 'Calicut, India',
    summary:
      'Lead the backend and full-stack team delivering enterprise SaaS, eCommerce, HR and ERP integration products. I own architecture decisions, code review and release quality, plus production deployments: Docker environments, Nginx and PgBouncer configuration, Redis and Celery workers, database tuning and incident response.',
    tags: ['Architecture', 'Team of 11', 'Code review', 'Production ownership'],
  },
  {
    period: 'Oct 2023 — Sep 2024',
    title: 'Team Lead',
    company: 'Febno Technologies Pvt Ltd',
    location: 'Calicut, India',
    summary:
      'Led backend and Angular frontend delivery for TechnoStore360 (multi-tenant B2C) and SaaSOrder (B2B). Grew the team from 7 to 11 engineers and introduced Dockerized environments to cut onboarding and deployment time.',
    tags: ['Django', 'Angular', 'Docker', 'Hiring'],
  },
  {
    period: 'Jun 2023 — Sep 2023',
    title: 'Python Django Developer',
    company: 'Febno Technologies Pvt Ltd',
    location: 'Calicut, India',
    summary:
      'Built REST APIs, Odoo ERP integrations and Python middleware for biometric attendance, retail and POS data sync.',
    tags: ['DRF', 'PostgreSQL', 'Odoo'],
  },
  {
    period: 'Oct 2022 — Jun 2023',
    title: 'Python Developer',
    company: 'Inmakes Infotech Pvt Ltd',
    location: 'Kochi, India',
    summary:
      'Built server-side business logic and REST API endpoints in Python and Django for client web applications. Diagnosed and fixed complex Django defects to improve release stability, and contributed process improvements the whole engineering team adopted.',
    tags: ['Python', 'Django', 'REST APIs'],
  },
  {
    period: 'Jul 2021 — Oct 2022',
    title: 'Software Developer',
    company: 'Suntech Business Solutions Pvt Ltd',
    location: 'Pattambi, India',
    summary:
      'Resolved application defects across departmental deployments, built Crystal Reports for operational teams, and administered file, print and application servers, including installations and upgrades.',
    tags: ['MS SQL Server', 'Crystal Reports', 'Windows Server'],
  },
  {
    period: 'Oct 2019 — Jul 2021',
    title: 'Career Transition',
    company: 'Self-employed',
    location: 'Kerala, India',
    summary:
      'Returned from the UAE during a period disrupted by COVID-19. Ran a leased rubber plantation and latex processing business while retraining from enterprise database and reporting work into Python and Django.',
    tags: ['Retraining', 'Python', 'Business operations'],
    muted: true,
  },
  {
    period: 'Sep 2017 — Oct 2019',
    title: 'Supporting Systems Technician',
    company: 'Adnan Saffarini Office',
    location: 'Dubai, UAE',
    summary:
      'Developed and maintained internal business applications for a large engineering consultancy, designed and optimised MS SQL Server databases for reporting, built Crystal Reports, and kept production servers available.',
    tags: ['SQL Server', 'Crystal Reports', 'Systems support'],
  },
  {
    period: 'May 2015 — May 2017',
    title: 'PowerBuilder Developer',
    company: 'Exactus Systems DMCC',
    location: 'Kochi, India',
    summary:
      'Built a warehouse management application on PowerBuilder with MS SQL Server 2012 and Oracle 11g back ends, covering automated stock allocation and order fulfilment, and tuned data retrieval with stored procedures, triggers and indexing.',
    tags: ['PowerBuilder', 'SQL Server', 'Oracle 11g'],
  },
]

export const training = {
  title: 'Technical Trainer & Mentor',
  company: 'Techno Dot Academy',
  summary:
    'Design and deliver structured software development courses covering Python, Django, APIs, databases, frontend frameworks and deployment.',
}

export const education = [
  { title: 'Bachelor of Computer Applications (BCA)', meta: 'Bharathiar University, Coimbatore · 2011' },
  { title: 'Higher Secondary Certificate (Commerce)', meta: 'Board of Higher Secondary Examination, Kerala · 2008' },
]

export const certifications = [
  'Certified Penetration Tester — Redteam Hacker Academy (2022)',
  'Python Master Course — Inmakes Infotech (2022)',
]

export const languages = [
  { name: 'English', level: 'C1 · Professional' },
  { name: 'Malayalam', level: 'Native' },
  { name: 'German', level: 'A1 · Studying' },
  { name: 'Tamil', level: 'A2' },
  { name: 'Hindi', level: 'A1' },
]

export const workAuthorisation = [
  'Indian citizen with a valid passport',
  'Eligible for the EU Blue Card (IT specialist provision, §18g German Residence Act)',
  'Eligible for the Ireland Critical Skills Employment Permit',
  'Prior overseas work experience in the UAE · open to relocation',
]

export const projectCategories = ['All', 'SaaS & Commerce', 'HR & Workforce', 'Integrations', 'Web Platforms']

export const projects = [
  {
    name: 'TechnoStore360',
    kind: 'Multi-tenant B2C eCommerce SaaS',
    category: 'SaaS & Commerce',
    description:
      'A multi-tenant B2C commerce platform built from scratch. I designed the tenant isolation model and modular-monolith architecture, the product, order, inventory and payment APIs, and the Dockerized production stack.',
    stack: ['Django DRF', 'PostgreSQL', 'Angular', 'Redis', 'Celery', 'Docker'],
    url: 'https://www.technostore360.com',
    featured: true,
  },
  {
    name: 'Kollabzi',
    kind: 'Employee monitoring platform',
    category: 'HR & Workforce',
    description:
      'An employee monitoring platform with full Windows desktop agent support, covering screen capture, application usage tracking and productivity analytics.',
    stack: ['Windows desktop agent', 'Screen capture', 'Usage tracking', 'Analytics'],
    url: 'https://kollabzi.waslasoft.com',
    featured: true,
  },
  {
    name: 'SaaSOrder',
    kind: 'B2B subscription & reseller platform',
    category: 'SaaS & Commerce',
    description:
      'A B2B subscription and reseller platform. I added the Microsoft and Google reseller integrations and optimised its core business workflows.',
    stack: ['Django', 'PostgreSQL', 'JavaScript'],
    url: 'https://www.saasorder.com',
  },
  {
    name: 'Waslasoft HR',
    kind: 'HR & payroll',
    category: 'HR & Workforce',
    description:
      'An HR and payroll application covering the whole employee lifecycle, from onboarding through payroll processing to final settlement and relieving.',
    stack: ['Onboarding', 'Payroll', 'Final settlement', 'Employee lifecycle'],
    url: 'https://hr.waslasoft.com',
  },
  {
    name: 'Waslasoft People',
    kind: 'Cloud attendance platform',
    category: 'HR & Workforce',
    description:
      'Cloud-based attendance that syncs check-in and check-out data from ZKBio Time and HikVision biometric devices into Odoo ERP and Zoho People.',
    stack: ['Odoo ERP', 'Zoho People', 'ZKBio Time', 'HikVision'],
    url: 'https://people.waslasoft.com',
  },
  {
    name: 'PartnerPro',
    kind: 'Sales incentive & commission engine',
    category: 'SaaS & Commerce',
    description:
      'An automated incentive and commission engine integrated with Odoo ERP, replacing a manual calculation and payout process.',
    stack: ['Django', 'PostgreSQL', 'Odoo ERP'],
    url: 'https://partnerpro.saasorder.com/',
  },
  {
    name: 'Islify',
    kind: 'US eCommerce platform',
    category: 'SaaS & Commerce',
    description:
      'Integrated Shoppable APIs for merchant-wise product catalogues shipped from the USA to Kenya, and built the R-Cash payment gateway integration via RamadPay.',
    stack: ['Django', 'React', 'Shoppable API', 'RamadPay'],
    url: 'https://islify.com/',
  },
  {
    name: 'Al-Mawhiba School Portal',
    kind: 'Admission & student management',
    category: 'Web Platforms',
    description:
      'A student admission and management system for a school in Oman, with role-based access control and multi-stage admission workflows.',
    stack: ['Django DRF', 'React', 'PostgreSQL', 'RBAC'],
    url: 'https://portal.mawhiba.edu.om/',
  },
  {
    name: 'Bairooha Foundation',
    kind: 'Charity & donation platform',
    category: 'Web Platforms',
    description:
      'A donation platform with secure HDFC payment gateway integration and transaction reconciliation.',
    stack: ['React', 'Django DRF', 'PostgreSQL', 'HDFC PG'],
    url: 'https://www.bairoohafoundation.com/',
  },
  {
    name: 'Corporate Websites',
    kind: 'Febno · Waslasoft · Techno Dot Academy',
    category: 'Web Platforms',
    description:
      'Rebuilt from WordPress into React front ends backed by Strapi CMS, with full localisation support, faster pages and easier content editing.',
    stack: ['React', 'Strapi CMS', 'i18n'],
    url: 'https://www.febno.com/',
    extraLinks: [
      { label: 'waslasoft.com', href: 'https://www.waslasoft.com/' },
      { label: 'techno.academy', href: 'https://www.techno.academy/' },
    ],
  },
  {
    name: 'ZATCA Invoice Dashboard',
    kind: 'E-invoicing compliance monitoring',
    category: 'Integrations',
    description:
      'A Django dashboard reading from MS SQL Server into PostgreSQL that gives finance teams live visibility of Saudi e-invoicing compliance status.',
    stack: ['Django', 'PostgreSQL', 'MS SQL Server'],
  },
  {
    name: 'Waslasoft Vansale',
    kind: 'Field-sales mobile backend',
    category: 'Integrations',
    description:
      'Backend APIs that sync mobile van-sales operations with Odoo ERP for real-time field reporting.',
    stack: ['Django DRF', 'PostgreSQL', 'Odoo'],
    url: 'https://vansales.waslasoft.com/',
  },
  {
    name: 'ERP & POS Middleware',
    kind: 'Bidirectional data sync',
    category: 'Integrations',
    description:
      'Python middleware that syncs Waslasoft Retail and POS data both ways with Odoo ERP and Zoho Books, replacing manual re-entry.',
    stack: ['Python', 'PostgreSQL', 'Odoo API', 'Zoho Books'],
  },
  {
    name: 'Moodle → Zoho CRM',
    kind: 'Certificate automation',
    category: 'Integrations',
    description:
      'Middleware that uploads certificates generated in Moodle to the matching Zoho CRM records automatically.',
    stack: ['Python', 'Moodle', 'Zoho CRM'],
  },
]

export const capabilities = [
  {
    title: 'Backend Architecture',
    text: 'Django/DRF and FastAPI systems with clear domain boundaries, tenant isolation, auth, PostgreSQL schema design and query optimisation.',
  },
  {
    title: 'Enterprise Integration',
    text: 'Middleware connecting Odoo, Zoho, Moodle, biometric devices, payment gateways and legacy SQL Server systems, built to be reliable and idempotent.',
  },
  {
    title: 'DevOps & Delivery',
    text: 'Dockerized environments, Nginx + Gunicorn/Uvicorn, Celery workers, PgBouncer, GitLab CI/CD, production monitoring and incident response.',
  },
  {
    title: 'Technical Leadership',
    text: 'Requirement breakdown, architecture decisions, code review, release quality, hiring and mentoring. I own delivery from estimate to production.',
  },
  {
    title: 'Full Stack Product',
    text: 'React, Next.js and Angular frontends with localisation, plus Flutter-backed APIs, so the whole product ships as one coherent system.',
  },
  {
    title: 'Training & Mentoring',
    text: 'Structured courses and one-to-one mentoring that turn junior developers into engineers who ship to production.',
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]
