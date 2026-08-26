import { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, Smartphone, Globe, Building2, Database, Cpu, Users, ShieldCheck } from 'lucide-react';

const PROJECT_TYPES = [
  {
    id: 'website',
    name: 'Website / Web App',
    basePrice: 25000,
    baseWeeks: 3,
    icon: Globe,
    desc: 'High-performance React/Next.js site or portal'
  },
  {
    id: 'app',
    name: 'Mobile Application',
    basePrice: 45000,
    baseWeeks: 5,
    icon: Smartphone,
    desc: 'iOS & Android Native / Cross-Platform App'
  },
  {
    id: 'hrms-payroll',
    name: 'HRMS & Payroll System',
    basePrice: 55000,
    baseWeeks: 5,
    icon: Users,
    desc: 'Attendance, Leaves, Employee Portal & Automated Payslips'
  },
  {
    id: 'crm',
    name: 'Custom CRM System',
    basePrice: 60000,
    baseWeeks: 5,
    icon: Building2,
    desc: 'Sales, Lead Pipeline & Customer Management'
  },
  {
    id: 'erp',
    name: 'Enterprise ERP System',
    basePrice: 85000,
    baseWeeks: 7,
    icon: Database,
    desc: 'Inventory, HRMS, Payroll & Supply Chain'
  },
  {
    id: 'custom-erp',
    name: 'Bespoke Custom ERP',
    basePrice: 120000,
    baseWeeks: 10,
    icon: Cpu,
    desc: 'Fully Tailored Multi-Module Software Engine'
  }
];

const SCALES = [
  { id: 'startup', label: 'Startup / MVP', multiplier: 1.0, desc: 'Essential core features & clean launch' },
  { id: 'growth', label: 'Growth Business', multiplier: 1.35, desc: 'High scale, optimization & multi-role access' },
  { id: 'enterprise', label: 'Large Enterprise', multiplier: 1.75, desc: 'High availability, SLA & advanced security' }
];

const ADDONS = [
  { id: 'payroll', label: 'Automated Payroll Engine', price: 12000, desc: 'Salary processing, PF/ESI taxes & payslip generation' },
  { id: 'hrms', label: 'HRMS & Attendance Module', price: 9000, desc: 'Biometric/Geo attendance, leaves & shift scheduling' },
  { id: 'auth', label: 'User Roles & Auth', price: 5000, desc: 'JWT, RBAC & SSO logins' },
  { id: 'payments', label: 'Payment Gateway', price: 8000, desc: 'UPI, Razorpay, Stripe & subscriptions' },
  { id: 'ai', label: 'AI & Automation', price: 15000, desc: 'LLM, Chatbots & automated workflows' },
  { id: 'analytics', label: 'BI Analytics Dashboard', price: 7500, desc: 'Visual charts & PDF export reports' },
  { id: 'apis', label: 'Third-Party APIs', price: 6000, desc: 'SMS, WhatsApp, CRM/ERP sync' },
  { id: 'realtime', label: 'Real-Time WebSockets', price: 5000, desc: 'Live notifications & chat feeds' },
  { id: 'cloud', label: 'Cloud DevOps & AWS', price: 10000, desc: 'Docker, CI/CD & auto-scaling' }
];

const SPEEDS = [
  { id: 'standard', label: 'Standard Delivery', multiplier: 1.0, labelWeeks: 'Standard Timeline' },
  { id: 'express', label: 'Express Delivery (+20%)', multiplier: 1.2, labelWeeks: '30% Faster Delivery' }
];

const formatINR = (val) => {
  return `₹${val.toLocaleString('en-IN')}`;
};

export const CostCalculator = () => {
  const [selectedType, setSelectedType] = useState('hrms-payroll');
  const [selectedScale, setSelectedScale] = useState('startup');
  const [selectedAddons, setSelectedAddons] = useState(['payroll', 'hrms', 'auth']);
  const [selectedSpeed, setSelectedSpeed] = useState('standard');

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Calculation memo
  const calculation = useMemo(() => {
    const pType = PROJECT_TYPES.find(p => p.id === selectedType) || PROJECT_TYPES[0];
    const pScale = SCALES.find(s => s.id === selectedScale) || SCALES[0];
    const pSpeed = SPEEDS.find(sp => sp.id === selectedSpeed) || SPEEDS[0];

    const addonsCost = selectedAddons.reduce((sum, addonId) => {
      const item = ADDONS.find(a => a.id === addonId);
      return sum + (item ? item.price : 0);
    }, 0);

    const subtotal = (pType.basePrice * pScale.multiplier) + addonsCost;
    const total = subtotal * pSpeed.multiplier;

    const minEstimate = Math.round(total * 0.95);
    const maxEstimate = Math.round(total * 1.15);

    let weeks = pType.baseWeeks;
    if (selectedScale === 'growth') weeks += 1;
    if (selectedScale === 'enterprise') weeks += 3;
    if (selectedSpeed === 'express') weeks = Math.max(2, Math.round(weeks * 0.7));

    return {
      minEstimate,
      maxEstimate,
      weeks,
      typeName: pType.name
    };
  }, [selectedType, selectedScale, selectedAddons, selectedSpeed]);

  return (
    <section id="calculator" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="glow-orb glow-cyan" style={{ top: '20%', right: '5%', width: '450px', height: '450px', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} color="var(--accent-mint)" /> Instant Cost Estimator (INR)
          </div>
          <h2 className="section-title">
            Calculate Your <span className="gradient-text">Development Cost</span>
          </h2>
          <p className="section-subtitle">
            Select your requirements below to calculate an instant approximate cost in Indian Rupees (₹) for your App, Website, HRMS & Payroll, CRM, or Enterprise ERP system.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid-2" style={{ gap: '36px', alignItems: 'flex-start' }}>

          {/* Left Inputs Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Step 1: Select Project Type */}
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
                1. Select Project Type
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {PROJECT_TYPES.map((type) => {
                  const IconComp = type.icon;
                  const isSelected = selectedType === type.id;

                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className="glass-card interactive-card"
                      style={{
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(13, 148, 136, 0.08)' : '#ffffff',
                        border: isSelected ? '1.5px solid var(--accent-mint)' : '1px solid var(--glass-border)',
                        boxShadow: isSelected ? '0 4px 16px rgba(13, 148, 136, 0.15)' : 'var(--shadow-sm)',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            background: isSelected ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isSelected ? '#ffffff' : 'var(--accent-mint)',
                            flexShrink: 0
                          }}
                        >
                          <IconComp size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {type.name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            {type.desc}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: isSelected ? '2px solid var(--accent-mint)' : '2px solid #cbd5e1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isSelected ? 'var(--accent-mint)' : 'transparent'
                        }}
                      >
                        {isSelected && <Check size={12} color="#ffffff" strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Project Scale */}
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
                2. Select Project Scale
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }} className="scale-grid">
                {SCALES.map((scale) => {
                  const isSelected = selectedScale === scale.id;

                  return (
                    <div
                      key={scale.id}
                      onClick={() => setSelectedScale(scale.id)}
                      className="glass-card interactive-card"
                      style={{
                        padding: '14px',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'center',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(13, 148, 136, 0.08)' : '#ffffff',
                        border: isSelected ? '1.5px solid var(--accent-mint)' : '1px solid var(--glass-border)',
                        boxShadow: isSelected ? '0 4px 16px rgba(13, 148, 136, 0.15)' : 'var(--shadow-sm)',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: isSelected ? 'var(--accent-mint)' : 'var(--text-primary)', marginBottom: '4px' }}>
                        {scale.label}
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                        {scale.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
                3. Choose Required Add-ons & Modules (INR)
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="addons-grid">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className="glass-card interactive-card"
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(13, 148, 136, 0.08)' : '#ffffff',
                        border: isSelected ? '1px solid var(--accent-mint)' : '1px solid var(--glass-border)',
                        boxShadow: isSelected ? '0 4px 14px rgba(13, 148, 136, 0.12)' : 'var(--shadow-sm)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {addon.label}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          +{formatINR(addon.price)} • {addon.desc}
                        </div>
                      </div>

                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '4px',
                          border: isSelected ? '1px solid var(--accent-mint)' : '1px solid #cbd5e1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isSelected ? 'var(--accent-mint)' : 'transparent',
                          flexShrink: 0
                        }}
                      >
                        {isSelected && <Check size={10} color="#ffffff" strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Speed Option */}
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
                4. Select Delivery Speed
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {SPEEDS.map((sp) => {
                  const isSelected = selectedSpeed === sp.id;
                  return (
                    <div
                      key={sp.id}
                      onClick={() => setSelectedSpeed(sp.id)}
                      className="glass-card interactive-card"
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'center',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(13, 148, 136, 0.08)' : '#ffffff',
                        border: isSelected ? '1.5px solid var(--accent-mint)' : '1px solid var(--glass-border)',
                        boxShadow: isSelected ? '0 4px 14px rgba(13, 148, 136, 0.12)' : 'var(--shadow-sm)'
                      }}
                    >
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isSelected ? 'var(--accent-mint)' : 'var(--text-primary)' }}>
                        {sp.label}
                      </div>
                      <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                        {sp.labelWeeks}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Box Sticky */}
          <div style={{ position: 'sticky', top: '110px' }}>
            <div
              className="glass-card"
              style={{
                padding: '36px',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid rgba(13, 148, 136, 0.3)',
                boxShadow: '0 15px 35px -5px rgba(15, 23, 42, 0.08), 0 0 25px rgba(13, 148, 136, 0.12)',
                background: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Sparkles size={16} color="var(--accent-mint)" />
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Live Price Estimate (INR)
                </span>
              </div>

              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Selected System: <strong style={{ color: 'var(--text-primary)' }}>{calculation.typeName}</strong>
              </div>

              {/* Price Range Display */}
              <div style={{ margin: '20px 0', padding: '20px', borderRadius: '14px', background: 'rgba(13, 148, 136, 0.06)', border: '1px solid rgba(13, 148, 136, 0.2)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                  APPROX. ESTIMATED BUDGET (INR)
                </div>
                <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.3rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  <span style={{ color: 'var(--accent-mint)' }}>{formatINR(calculation.minEstimate)}</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', margin: '0 6px' }}>-</span>
                  <span style={{ color: 'var(--accent-indigo)' }}>{formatINR(calculation.maxEstimate)}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  INR (Indian Rupees - Approx. Range)
                </div>
              </div>

              {/* Delivery Timeline Summary */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '8px', background: '#f8fafc', border: '1px solid rgba(203, 213, 225, 0.8)', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Estimated Timeline:
                </span>
                <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)' }}>
                  ⚡ {calculation.weeks} - {calculation.weeks + 2} Weeks
                </span>
              </div>

              {/* Features Included List */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Estimate Includes:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={15} color="var(--accent-mint)" /> Full Source Code Ownership
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={15} color="var(--accent-mint)" /> Clean Architecture & High Performance
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={15} color="var(--accent-mint)" /> 30-Day Post-Launch SLA Support
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.95rem' }}
              >
                Request Detailed Scope & Proposal <ArrowRight size={18} />
              </a>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .scale-grid, .addons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
