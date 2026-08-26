export const projectCategories = [
  { slug: 'all', label: 'All Projects' },
  { slug: 'web', label: 'Web Apps' },
  { slug: 'saas', label: 'Enterprise SaaS' }
];

export const projectsData = [
  {
    id: 'fintech-saas',
    title: 'Fintech Analytics Platform',
    category: 'Enterprise SaaS',
    categorySlug: 'saas',
    description: 'Real-time financial analytics dashboard handling high-volume transaction processing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    metrics: ['Sub-100ms Latency', '99.9% Uptime']
  },
  {
    id: 'health-ai',
    title: 'AI Healthcare Portal',
    category: 'Web Apps',
    categorySlug: 'web',
    description: 'Patient management portal with secure telehealth video and automated appointment scheduling.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'WebSockets'],
    metrics: ['HIPAA Compliant', '50k Active Users']
  },
  {
    id: 'ecommerce-core',
    title: 'Enterprise E-Commerce Storefront',
    category: 'Web Apps',
    categorySlug: 'web',
    description: 'Headless digital storefront built for fast checkout, multi-currency, and global payments.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Stripe', 'GraphQL'],
    metrics: ['+45% Conversion', 'Sub-second Load']
  }
];
