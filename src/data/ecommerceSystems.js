export const ecommerceSystemsData = [
  {
    id: 'ecommerce-websites',
    title: 'E-Commerce Websites & Storefronts',
    slug: 'ecommerce-websites',
    category: 'Commerce & Web',
    icon: 'ShoppingBag',
    shortDesc: 'Custom high-converting digital storefronts engineered for fast checkout, global payments, and extreme traffic spikes.',
    fullDesc: 'We build enterprise e-commerce platforms using Headless React, Next.js, and Shopify Plus. Featuring sub-second page loads, automated inventory synchronization, multi-currency support, and conversion-optimized checkout flows.',
    features: [
      'Headless Storefront Architecture (Next.js + Shopify/Stripe)',
      'Multi-Currency & Regional Tax Automated Calculation',
      'Real-Time Inventory & Multi-Warehouse Sync',
      'AI-Powered Product Recommendation Engine',
      'One-Click Express Checkout & Digital Wallets',
      'Subscription & Recurring Order Billing Engine'
    ],
    techStack: ['React', 'Next.js', 'Stripe API', 'Shopify GraphQL', 'TailwindCSS', 'Redis'],
    metrics: '40% Higher Conversion Rate',
    idealFor: 'D2C Brands, Retail Chains, Wholesale Distributors'
  },
  {
    id: 'erp',
    title: 'ERP (Enterprise Resource Planning)',
    slug: 'erp',
    category: 'Enterprise & ERP',
    icon: 'Layers',
    shortDesc: 'Unified enterprise system integrating finance, supply chain, human capital, and operational intelligence.',
    fullDesc: 'A comprehensive cloud ERP solution that breaks down operational silos. Monitor real-time cash flow, streamline procurement workflows, automate vendor management, and gain instant executive dashboard insights.',
    features: [
      'Financial Management & Automated General Ledger',
      'Supply Chain & Purchase Order Automation',
      'Resource Scheduling & Capacity Planning',
      'Multi-Company & Multi-Branch Consolidation',
      'Real-Time Executive Analytics Dashboards',
      'Role-Based Security & Audit Trail Logs'
    ],
    techStack: ['Node.js', 'PostgreSQL', 'React', 'Docker', 'Redis', 'GraphQL'],
    metrics: '60% Reduced Operational Costs',
    idealFor: 'Manufacturing, Enterprise Firms, Logistics Operations'
  },
  {
    id: 'crm',
    title: 'CRM (Customer Relationship Management)',
    slug: 'crm',
    category: 'Sales & Growth',
    icon: 'Users',
    shortDesc: '360° customer relationship suite for pipeline tracking, automated lead scoring, and customer retention.',
    fullDesc: 'Empower sales teams to close deals faster with automated lead distribution, visual Kanban pipelines, email tracking, and AI-assisted deal forecasting.',
    features: [
      'Visual Deal Pipeline & Lead Stage Automation',
      'Omnichannel Communication Sync (Email, Call Logs, WhatsApp)',
      'AI Lead Scoring & Automated Follow-Up Triggers',
      'Customer Ticket Escalation & Helpdesk Support',
      'Sales Performance Analytics & Commission Calc',
      'Seamless Contact Import & Third-Party API Sync'
    ],
    techStack: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'WebSockets'],
    metrics: '3.5x Faster Deal Closure',
    idealFor: 'B2B Sales Teams, SaaS Companies, Real Estate Agencies'
  },
  {
    id: 'customise-crm',
    title: 'Customized CRM Solutions',
    slug: 'customise-crm',
    category: 'Sales & Growth',
    icon: 'Sliders',
    shortDesc: 'Bespoke CRM software built strictly around your company\'s proprietary workflows, approval logic, and API endpoints.',
    fullDesc: 'Off-the-shelf CRMs often force your team to adjust to rigid workflows. Our customized CRM solutions are tailored around your unique sales steps, custom data fields, compliance rules, and internal software stack.',
    features: [
      'Custom Workflow Rules & Approval Logic',
      'Bespoke Data Schemas & Unlimited Custom Fields',
      'Deep Integration with Legacy Internal Databases',
      'White-Labeled Branding & Tailored UI Layouts',
      'Custom Role Permissions & Security Policies',
      'Dedicated On-Premise or Private Cloud Hosting'
    ],
    techStack: ['React', 'Go', 'Python FastAPI', 'PostgreSQL', 'Docker'],
    metrics: '100% Tailored Fit Guarantee',
    idealFor: 'Specialized Enterprise Firms, Financial Services, Healthcare'
  },
  {
    id: 'hrms',
    title: 'HRMS (Human Resource Management System)',
    slug: 'hrms',
    category: 'HR & Workforce',
    icon: 'UserCheck',
    shortDesc: 'Centralized workforce portal for employee onboarding, leave management, performance appraisals, and asset tracking.',
    fullDesc: 'Modernize HR operations with employee self-service portals, automated leave approvals, digitized document vaults, objective performance reviews, and organizational chart mapping.',
    features: [
      'Employee Self-Service Mobile & Web Portal',
      'Automated Leave Request & Approval Workflows',
      'Performance Review & KPI Appraisal System',
      'Digital Document Vault & Contract Management',
      'Asset Allocation & IT Hardware Tracking',
      'Recruitment Portal & Candidate ATS Tracking'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'AWS S3'],
    metrics: '85% Paperwork Automated',
    idealFor: 'Growing Enterprises, Tech Companies, Corporate Staffing'
  },
  {
    id: 'payroll',
    title: 'Payroll Management System',
    slug: 'payroll',
    category: 'HR & Workforce',
    icon: 'CreditCard',
    shortDesc: 'Automated salary calculation engine handling tax deductions, direct deposits, pay slips, and compliance.',
    fullDesc: 'Ensure zero-error payroll processing. Automatically compute gross salaries, overtime, bonuses, tax withholdings, statutory contributions, and generate downloadable digital pay slips.',
    features: [
      'Automated Salary, Overtime & Bonus Engine',
      'Tax Bracket Calculation & Compliance Reports',
      'One-Click Bank Direct Deposit File Generation',
      'Automated Digital Pay Slip Delivery via Email/SMS',
      'Loan, Advance & Reimbursement Deductions',
      'Integration with HRMS & Attendance Devices'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    metrics: '100% Zero Calculation Errors',
    idealFor: 'Small Businesses, Large Corporations, Industrial Plants'
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    slug: 'inventory-management',
    category: 'Operations & Logistics',
    icon: 'Package',
    shortDesc: 'Real-time multi-warehouse stock tracker with barcode integration, low-stock alerts, and batch tracking.',
    fullDesc: 'Prevent stockouts and overstock costs. Track inventory levels across multiple warehouses in real time, generate barcode labels, set automated purchase reorder triggers, and manage serial number warranties.',
    features: [
      'Multi-Warehouse Real-Time Stock Tracking',
      'Barcode & QR Scanner Device Integration',
      'Automated Low-Stock Email/SMS Alerts',
      'Batch Number, Expiry Date & Warranty Logs',
      'Purchase Reorder Automation & Vendor Sync',
      'Stock Valuation Reports (FIFO / LIFO / Average)'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Chart.js'],
    metrics: '99.8% Inventory Accuracy',
    idealFor: 'Wholesalers, Warehouses, E-Commerce Brands, Retailers'
  },
  {
    id: 'application-development',
    title: 'Application Development (Mobile & PWA)',
    slug: 'application-development',
    category: 'Software & Tech',
    icon: 'Smartphone',
    shortDesc: 'Native iOS & Android apps plus Progressive Web Applications with smooth 60fps animations and offline capabilities.',
    fullDesc: 'We craft high-performance mobile applications using React Native and Flutter. From consumer-facing mobile apps to internal field-agent tools with offline synchronization and biometric auth.',
    features: [
      'Native iOS & Android App Development',
      'Progressive Web Apps (PWA) with Offline Access',
      'Push Notification & Deep Linking Engine',
      'Biometric Login (FaceID / Fingerprint)',
      'In-App Payments & In-App Subscriptions',
      'App Store (iOS) & Google Play Store Publishing'
    ],
    techStack: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Firebase'],
    metrics: '60 FPS Native Performance',
    idealFor: 'Startups, On-Demand Services, Mobile Product Companies'
  },
  {
    id: 'website',
    title: 'Website & Web Portals',
    slug: 'website',
    category: 'Commerce & Web',
    icon: 'Globe',
    shortDesc: 'Ultra-fast, responsive corporate websites, web portals, and landing pages designed for engagement.',
    fullDesc: 'Stand out from competitors with custom React/Next.js websites featuring interactive GSAP scroll animations, responsive layouts, SEO optimization, and seamless CMS integration.',
    features: [
      'Custom React & Next.js Website Architecture',
      'GSAP & Framer Motion Advanced Scroll Animations',
      '100/100 Google PageSpeed Performance Optimization',
      'Search Engine Optimization (SEO) & OpenGraph Setup',
      'Headless CMS (Sanity / Strapi) Integration',
      'Responsive Design for Mobile, Tablet & Desktop'
    ],
    techStack: ['React', 'Next.js', 'GSAP', 'Framer Motion', 'TailwindCSS'],
    metrics: 'Sub-Second Page Load',
    idealFor: 'Corporate Brands, Agencies, Professional Services'
  },
  {
    id: 'software-development',
    title: 'Software Development & SaaS',
    slug: 'software-development',
    category: 'Software & Tech',
    icon: 'Code',
    shortDesc: 'Full-cycle custom software engineering, cloud microservices, and SaaS platform development.',
    fullDesc: 'Transform complex business ideas into robust cloud SaaS products. We handle software architecture, frontend/backend engineering, API microservices, database design, and cloud deployment.',
    features: [
      'Full-Stack SaaS Product Engineering',
      'Microservice Architecture & REST/GraphQL APIs',
      'Multi-Tenant Data Architecture & Security',
      'Automated CI/CD Pipelines & Cloud Hosting',
      'Legacy System Refactoring & Cloud Migration',
      'Post-Launch SLA Maintenance & Engineering Support'
    ],
    techStack: ['React', 'Node.js', 'Python', 'Go', 'AWS', 'Docker'],
    metrics: '99.9% System Uptime',
    idealFor: 'Tech Founders, Enterprise Enterprises, SaaS Companies'
  },
  {
    id: 'gym-system',
    title: 'Gym & Fitness Management System',
    slug: 'gym-system',
    category: 'Specialized Management',
    icon: 'Activity',
    shortDesc: 'All-in-one software for fitness centers, gym membership renewals, gate access control, and trainer schedules.',
    fullDesc: 'Manage gym operations effortlessly. Track active membership plans, automate recurring subscription billing, integrate RFID/fingerprint gate access turnstiles, and schedule personal training sessions.',
    features: [
      'Membership Plan Management & Auto-Renewals',
      'Biometric / RFID Gate Access Turnstile Sync',
      'Trainer Class Scheduling & Appointment Booking',
      'Member Attendance & Workout Tracker Portal',
      'POS Storefront for Gym Supplements & Merch',
      'Automated SMS & WhatsApp Renewal Reminders'
    ],
    techStack: ['React', 'Node.js', 'SQLite/PostgreSQL', 'Twilio API', 'Stripe'],
    metrics: '95% On-Time Membership Renewal',
    idealFor: 'Gyms, Fitness Clubs, Crossfit Boxes, Wellness Centers'
  },
  {
    id: 'construction-system',
    title: 'Construction Management System',
    slug: 'construction-system',
    category: 'Specialized Management',
    icon: 'HardHat',
    shortDesc: 'Field and office management platform for construction estimation, site logs, equipment, and contractor bills.',
    fullDesc: 'Keep construction projects on schedule and under budget. Monitor daily site logs, track heavy machinery maintenance, manage subcontractor invoices, and visualize project milestone progress.',
    features: [
      'Project Cost Estimation & Budget Tracking',
      'Daily Field Site Logs & Photo Progress Reports',
      'Heavy Equipment & Fleet Usage Monitoring',
      'Subcontractor Billing, Bids & Payment Approval',
      'Material Requisition & Purchase Order Sync',
      'Gantt Chart Milestone & Safety Compliance Logs'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Leaflet Maps', 'AWS S3'],
    metrics: '25% Reduced Project Delays',
    idealFor: 'General Contractors, Civil Builders, Real Estate Developers'
  },
  {
    id: 'school-system',
    title: 'School & Academy Management System',
    slug: 'school-system',
    category: 'Specialized Management',
    icon: 'GraduationCap',
    shortDesc: 'Comprehensive ERP for schools, colleges, and academies handling admissions, gradebooks, fees, and parent portals.',
    fullDesc: 'Digitize educational administration. Connect administrators, teachers, students, and parents through a unified portal for online fee payments, gradebook reports, attendance logs, and exam scheduling.',
    features: [
      'Student Admission & Digital Profile Management',
      'Online Fee Collection Engine with Instant Receipts',
      'Teacher Gradebook, Report Cards & Exam Planner',
      'RFID Student Attendance & Automated Parent SMS',
      'Parent-Teacher Mobile Communication Portal',
      'Library Book Tracker & School Bus GPS Tracking'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Firebase', 'PDFKit'],
    metrics: '98% Fee Collection Automation',
    idealFor: 'K-12 Schools, Colleges, Universities, Coaching Academies'
  }
];

export const systemCategories = [
  'All Systems',
  'Commerce & Web',
  'Enterprise & ERP',
  'Sales & Growth',
  'HR & Workforce',
  'Specialized Management',
  'Software & Tech',
  'Operations & Logistics'
];
