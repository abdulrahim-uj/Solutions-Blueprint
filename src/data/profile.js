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
  headline: 'Senior Python / Django Full Stack Engineer & Technical Lead',
  location: 'Kerala, India',
  photo: '/profile.webp',
  availability: 'Open to roles in India, GCC, Australia & Europe',
  intro:
    "I'm Abdul Rahim Kattirithodi — a backend-focused Solution Expert and Technical Lead building multi-tenant SaaS platforms, reliable REST APIs and the middleware that connects ERPs, CRMs and devices in production.",
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
  { value: '9+', label: 'Years in software' },
  { value: '11', label: 'Developers led' },
  { value: '12+', label: 'Production systems shipped' },
]

export const heroHighlights = [
  { title: 'Backend', text: 'Python · Django · DRF · FastAPI' },
  { title: 'Architecture', text: 'Multi-tenant · Modular · Secure' },
  { title: 'Delivery', text: 'Docker · Nginx · CI/CD' },
]

export const about = {
  paragraphs: [
    'My work spans backend engineering, solution architecture, deployment and technical leadership. I build with Python and Django, design APIs with Django REST Framework and FastAPI, model data in PostgreSQL, and ship frontends in React and Angular.',
    'At Febno Technologies I grew from Python Django Developer to Team Lead to Solution Expert, and I lead a team of 11 engineers. Before that I spent years on SQL Server and PowerBuilder systems in India and Dubai, so I understand the legacy systems most integrations have to talk to.',
  ],
}

export const skillGroups = [
  { title: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'REST APIs', 'Celery & Celery Beat', 'Middleware'] },
  { title: 'Frontend & Mobile', items: ['React.js', 'Next.js', 'Angular', 'JavaScript', 'Flutter', 'Strapi CMS'] },
  { title: 'Data', items: ['PostgreSQL', 'PgBouncer', 'PostgreSQL FDW', 'Redis', 'MS SQL Server', 'MySQL', 'Oracle'] },
  { title: 'DevOps', items: ['Docker', 'Docker Swarm', 'Nginx', 'Gunicorn / Uvicorn', 'Linux / Ubuntu Server', 'GitLab CI/CD', 'GitHub'] },
  { title: 'ERP & Integrations', items: ['Odoo ERP', 'Zoho People', 'Zoho CRM', 'Zoho Books', 'ZATCA', 'Moodle', 'HikVision / ZKBioTime', 'Payment gateways'] },
]

export const experience = [
  {
    period: 'Oct 2024 — Present',
    title: 'Solution Expert (Technical Lead)',
    company: 'Febno Technologies Pvt Ltd',
    location: 'Calicut, India',
    summary:
      'Own architecture and delivery across SaaS, eCommerce and integration projects. Lead a team of 11 developers, run architecture reviews, manage production deployments and translate client requirements into scalable designs.',
    tags: ['Architecture', 'Team of 11', 'Production ownership'],
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
    title: 'Python Developer Intern',
    company: 'Inmakes Infotech Pvt Ltd',
    location: 'Kochi, India',
    summary:
      'Developed server applications and client interfaces with Python, Django and jQuery, and helped solve complex Django issues to improve product reliability.',
    tags: ['Python', 'Django', 'jQuery'],
  },
  {
    period: 'Jul 2021 — Oct 2022',
    title: 'Software Developer',
    company: 'Suntech Business Solutions Pvt Ltd',
    location: 'Pattambi, India',
    summary:
      'Resolved application defects, maintained file, print and application servers, and built Crystal Reports on MS SQL Server.',
    tags: ['MS SQL Server', 'Crystal Reports', 'Windows Server'],
  },
  {
    period: 'Sep 2017 — Oct 2019',
    title: 'Supporting Systems Technician',
    company: "Adnan Saffarini's Office",
    location: 'Dubai, UAE',
    summary:
      'Maintained business software and servers, designed and tuned SQL Server databases, and built Crystal Reports for day-to-day operations.',
    tags: ['SQL Server', 'Reporting', 'Systems support'],
  },
  {
    period: 'May 2015 — May 2017',
    title: 'PowerBuilder Developer',
    company: 'Exaware Solutions Pvt Ltd',
    location: 'Kochi, India',
    summary:
      'Built a warehouse management application on MS SQL Server 2012 and Oracle 11g, with stored procedures, triggers and indexing for automated stock allocation and order fulfilment.',
    tags: ['PowerBuilder', 'SQL Server', 'Oracle 11g'],
  },
]

export const training = {
  title: 'Technical Trainer & Mentor',
  company: 'Techno Dot Academy',
  summary:
    'Design and deliver structured software development courses covering Python, Django, APIs, databases, frontend frameworks and deployment.',
}

export const projectCategories = ['All', 'SaaS & Commerce', 'Integrations', 'Web Platforms']

export const projects = [
  {
    name: 'TechnoStore360',
    kind: 'Multi-tenant B2C eCommerce',
    category: 'SaaS & Commerce',
    description:
      'A multi-tenant B2C commerce platform built from scratch on a modular-monolith architecture: tenant-aware data access, product, order, inventory and payment APIs, and a Dockerized production stack.',
    stack: ['Django DRF', 'PostgreSQL', 'Angular', 'Redis', 'Celery', 'Docker'],
    url: 'https://www.technostore360.com',
    featured: true,
  },
  {
    name: 'SaaSOrder',
    kind: 'B2B subscription & reseller platform',
    category: 'SaaS & Commerce',
    description:
      'A B2B platform for reselling Microsoft and Google subscriptions. I added new modules, reworked business workflows and improved backend performance.',
    stack: ['Django', 'PostgreSQL', 'JavaScript'],
    url: 'https://www.saasorder.com',
    featured: true,
  },
  {
    name: 'PartnerPro',
    kind: 'Sales incentive & referral engine',
    category: 'SaaS & Commerce',
    description:
      'Automated incentive and commission calculation for partner sales, integrated with Odoo ERP for payout tracking and reporting.',
    stack: ['Django', 'PostgreSQL', 'Odoo ERP'],
    url: 'https://partnerpro.saasorder.com/',
  },
  {
    name: 'Al-Mawhiba Admissions',
    kind: 'School admission management',
    category: 'Web Platforms',
    description:
      'An end-to-end student admission portal with role-based modules and workflow management for a school in Oman.',
    stack: ['Django DRF', 'React', 'PostgreSQL'],
    url: 'https://portal.mawhiba.edu.om/',
  },
  {
    name: 'Bairooha Foundation',
    kind: 'Charity & donation platform',
    category: 'Web Platforms',
    description:
      'A donation management platform with HDFC payment gateway integration, secure payment processing and donor workflows.',
    stack: ['React', 'Django DRF', 'PostgreSQL', 'HDFC PG'],
    url: 'https://www.bairoohafoundation.com/',
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
      'Python middleware that syncs data both ways between Waslasoft Retail/POS and Odoo ERP or Zoho Books, replacing manual re-entry.',
    stack: ['Python', 'PostgreSQL', 'Odoo API', 'Zoho Books'],
  },
  {
    name: 'Biometric Attendance Sync',
    kind: 'HikVision & ZKBioTime → HRMS',
    category: 'Integrations',
    description:
      'Middleware that pulls check-in and check-out events from biometric devices and marks attendance in Zoho People and Odoo automatically.',
    stack: ['Python', 'Zoho People', 'Odoo', 'ZKBioTime'],
  },
  {
    name: 'ZATCA Invoice Dashboard',
    kind: 'E-invoicing monitoring',
    category: 'Integrations',
    description:
      'An invoice monitoring and analytics dashboard for Saudi ZATCA workflows, reading from MS SQL Server as a read-only source into PostgreSQL.',
    stack: ['Django', 'PostgreSQL', 'MS SQL Server'],
  },
  {
    name: 'Moodle → Zoho CRM',
    kind: 'Certificate automation',
    category: 'Integrations',
    description:
      'Middleware that uploads certificates generated in Moodle to the matching Zoho CRM records automatically.',
    stack: ['Python', 'Moodle', 'Zoho CRM'],
  },
  {
    name: 'Febno & Techno Dot Academy',
    kind: 'Corporate & academy websites',
    category: 'Web Platforms',
    description:
      'Rebuilt both websites from WordPress into React front ends backed by Strapi CMS, for faster pages and easier content editing.',
    stack: ['React', 'Strapi CMS'],
    url: 'https://www.febno.com/',
    secondaryUrl: { label: 'techno.academy', href: 'https://www.techno.academy/' },
  },
  {
    name: 'Islify',
    kind: 'US eCommerce platform',
    category: 'SaaS & Commerce',
    description:
      'Feature work and Shoppable and Rcash payment integrations for a US-based eCommerce platform.',
    stack: ['Django', 'React', 'Payments'],
    url: 'https://islify.com/',
  },
]

export const capabilities = [
  {
    title: 'Backend Architecture',
    text: 'Django/DRF and FastAPI systems with clear domain boundaries, multi-tenancy, auth, PostgreSQL schema design and query optimisation.',
  },
  {
    title: 'Enterprise Integration',
    text: 'Middleware connecting Odoo, Zoho, Moodle, biometric devices, payment gateways and legacy SQL Server systems — reliably and idempotently.',
  },
  {
    title: 'DevOps & Delivery',
    text: 'Dockerized environments, Nginx + Gunicorn/Uvicorn, Celery workers, PgBouncer, GitLab CI/CD and hands-on production troubleshooting.',
  },
  {
    title: 'Technical Leadership',
    text: 'Requirement breakdown, architecture reviews, code standards, hiring and mentoring — owning delivery from estimate to production.',
  },
  {
    title: 'Full Stack Product',
    text: 'React, Next.js and Angular frontends plus Flutter-backed APIs, so the whole product ships as one coherent system.',
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
