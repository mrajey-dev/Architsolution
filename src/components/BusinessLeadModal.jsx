import { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Building2,
  User,
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Star,
  Globe,
  Smartphone,
  ShoppingBag,
  Database,
  Cpu,
  Layers,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Check,
  Rocket,
  TrendingUp,
  Briefcase,
  Lock,
  Zap,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitBusinessLeadForm } from '../services/contactService';

// Step 1: Solution Options
const SERVICES_OPTIONS = [
  {
    id: 'web-app',
    label: 'Web App & SaaS',
    desc: 'Custom SaaS, client portals, cloud platforms & web tools',
    icon: Globe
  },
  {
    id: 'mobile-app',
    label: 'Mobile App (iOS & Android)',
    desc: 'Native & cross-platform Flutter/React Native applications',
    icon: Smartphone
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce Platform',
    desc: 'High-volume online stores, payment gateways & cart systems',
    icon: ShoppingBag
  },
  {
    id: 'erp-crm',
    label: 'Custom ERP / CRM System',
    desc: 'Automated HRMS, payroll, inventory, billing & lead management',
    icon: Database
  },
  {
    id: 'ai-automation',
    label: 'AI Solutions & Automation',
    desc: 'Custom LLM agents, workflow bots, analytics & algorithms',
    icon: Cpu
  },
  {
    id: 'custom-software',
    label: 'Full Bespoke Solution',
    desc: 'Tailored multi-module software & legacy modernization',
    icon: Layers
  }
];

// Step 2: Scale & Budget
const COMPANY_STAGES = [
  {
    id: 'startup',
    label: 'Startup / MVP',
    desc: 'Rapid speed-to-market, lean core features & prototype launch',
    icon: Rocket
  },
  {
    id: 'growth',
    label: 'Growing Business (5–50 team)',
    desc: 'High availability, custom integrations & scaled capacity',
    icon: TrendingUp
  },
  {
    id: 'enterprise',
    label: 'Established Enterprise (50+ team)',
    desc: 'Multi-tiered security, high concurrency, SLA & custom infra',
    icon: Briefcase
  }
];

const BUDGET_OPTIONS = [
  { id: 'tier-1', label: 'Below ₹25,000', sub: 'Starter / Micro Build' },
  { id: 'tier-2', label: '₹25,000 – ₹50,000', sub: 'Essential Website / MVP' },
  { id: 'tier-3', label: '₹50,000 – ₹1,00,000', sub: 'Dynamic App / Portal' },
  { id: 'tier-4', label: '₹1,00,000 – ₹2,50,000', sub: 'Custom Software / App' },
  { id: 'tier-5', label: '₹2,50,000 – ₹5,00,000', sub: 'E-Commerce / CRM System' },
  { id: 'tier-6', label: '₹5,00,000 – ₹10,00,000', sub: 'Enterprise ERP System' },
  { id: 'tier-7', label: '₹10,00,000 – ₹20,00,000', sub: 'High-Scale Cloud Platform' },
  { id: 'tier-8', label: 'Above ₹20,00,000', sub: 'Large Enterprise Bespoke' },
  { id: 'tier-other', label: 'Other', sub: 'Custom Budget / Flexible' }
];

const TIMELINE_OPTIONS = ['Within 1 Month', '1 – 3 Months', '3 – 6 Months', 'Flexible / Planning'];

// Step 3: Common Features (Multi-select)
const FEATURE_TAGS = [
  'User Auth & Roles',
  'Payment Gateway & Invoicing',
  'Admin Analytics Dashboard',
  'Real-Time Chat / Notifications',
  'REST / GraphQL APIs',
  'Mobile Responsive & PWA',
  'AI Integration & Smart Search',
  'Strict Security & Encryption',
  'Third-Party CRM / ERP Sync',
  'Automated Email & SMS Alerts'
];

export const BusinessLeadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedServices: ['Web App & SaaS'],
    service: 'Web App & SaaS',
    companySize: 'Growing Business (5–50 team)',
    budget: '₹50,000 – ₹1,00,000',
    customBudget: '',
    timeline: '1 – 3 Months',
    selectedFeatures: ['User Auth & Roles', 'Admin Analytics Dashboard'],
    projectDetails: ''
  });

  const [stepError, setStepError] = useState('');
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    responseMsg: '',
    referenceId: ''
  });

  // 1. Scroll for 3 Seconds Trigger on every page refresh
  useEffect(() => {
    let scrollTimer = null;
    let hasStartedScrolling = false;

    const handleScroll = () => {
      if (!hasStartedScrolling) {
        hasStartedScrolling = true;

        scrollTimer = setTimeout(() => {
          setIsOpen(true);
        }, 3000); // 3 seconds after scrolling begins
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  // 2. Global Open Event Listener (e.g. from CTA button click)
  useEffect(() => {
    const handleOpenModal = () => {
      setCurrentStep(1);
      setIsOpen(true);
    };

    window.addEventListener('open-business-lead-modal', handleOpenModal);
    return () => window.removeEventListener('open-business-lead-modal', handleOpenModal);
  }, []);

  // 3. Close on Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStepError('');
  };

  // Toggle Checkbox for Software Types (Step 1)
  const toggleService = (serviceLabel) => {
    setFormData((prev) => {
      const currentList = prev.selectedServices || [];
      const exists = currentList.includes(serviceLabel);
      const updated = exists
        ? currentList.filter((s) => s !== serviceLabel)
        : [...currentList, serviceLabel];
      return {
        ...prev,
        selectedServices: updated,
        service: updated.join(', ')
      };
    });
    setStepError('');
  };

  const toggleFeature = (feature) => {
    setFormData((prev) => {
      const exists = prev.selectedFeatures.includes(feature);
      return {
        ...prev,
        selectedFeatures: exists
          ? prev.selectedFeatures.filter((f) => f !== feature)
          : [...prev.selectedFeatures, feature]
      };
    });
  };

  // Step Validation & Navigation
  const handleNextStep = () => {
    setStepError('');

    if (currentStep === 1) {
      if (!formData.selectedServices || formData.selectedServices.length === 0) {
        setStepError('Please check at least one software type to proceed.');
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.budget || !formData.companySize) {
        setStepError('Please choose your business scale and budget.');
        return;
      }
    } else if (currentStep === 3) {
      // Step 3 is optional features / notes
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStepError('');
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStepError('');

    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim()) {
      setStepError('Please provide your Full Name, Company Name, and Work Email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStepError('Please enter a valid work email address.');
      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: null,
      responseMsg: '',
      referenceId: ''
    });

    try {
      const finalBudget =
        formData.budget === 'Other'
          ? formData.customBudget
            ? `Other (₹${formData.customBudget})`
            : 'Other (Flexible)'
          : formData.budget;

      const consolidatedNotes = `
[Selected Solution]: ${formData.service}
[Company Scale]: ${formData.companySize}
[Budget Range (INR)]: ${finalBudget}
[Timeline]: ${formData.timeline}
[Desired Capabilities]: ${formData.selectedFeatures.join(', ') || 'None specified'}
[Project Brief]: ${formData.projectDetails || 'No additional notes provided'}
      `.trim();

      const response = await submitBusinessLeadForm({
        ...formData,
        budget: finalBudget,
        projectDetails: consolidatedNotes
      });

      confetti({
        particleCount: 120,
        spread: 85,
        origin: { y: 0.5 }
      });

      setStatus({
        loading: false,
        success: true,
        error: null,
        responseMsg: response.message,
        referenceId: response.referenceId
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'An error occurred. Please try again.',
        responseMsg: '',
        referenceId: ''
      });
    }
  };

  const openWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello Arch IT Team! I just submitted an inquiry for ${formData.company} (${formData.service}) with Reference ID ${status.referenceId || 'New Lead'}. Let's connect on project timeline and architecture.`
    );
    window.open(`https://wa.me/918390704453?text=${text}`, '_blank');
  };

  const progressPercent = status.success ? 100 : (currentStep / totalSteps) * 100;

  return (
    <>
      {/* Floating Reopen Pill Button (If popup is closed) */}
      {!isOpen && (
        <button
          onClick={() => {
            setCurrentStep(1);
            setIsOpen(true);
          }}
          className="business-lead-trigger-btn"
          aria-label="Request Free Business Consultation"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 22px',
            background: 'var(--gradient-primary)',
            color: '#ffffff',
            borderRadius: 'var(--radius-full)',
            boxShadow: '0 10px 30px rgba(236, 72, 153, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.4) inset',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.25)'
            }}
          >
            <Sparkles size={14} color="#ffffff" className="animate-spin-slow" />
          </span>
          <span>Free Business Tech Audit</span>
        </button>
      )}

      {/* Main Multi-Step Popup Modal */}
      {isOpen && (
        <div
          className="biz-popup-backdrop"
          onClick={handleClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9990,
            background: 'rgba(15, 23, 42, 0.68)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            animation: 'bizFadeIn 0.3s ease-out forwards'
          }}
        >
          {/* Modal Card */}
          <div
            className="biz-popup-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '92vh',
              overflowY: 'auto',
              background: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '26px',
              boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.9) inset',
              border: '1.5px solid rgba(226, 232, 240, 0.95)',
              display: 'flex',
              flexDirection: 'column',
              animation: 'bizScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            {/* Top Multi-Color Gradient Progress Line */}
            <div
              style={{
                position: 'sticky',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: 'rgba(226, 232, 240, 0.6)',
                zIndex: 20
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progressPercent}%`,
                  background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #2dd4bf, #38bdf8)',
                  transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>

            {/* Modal Header Bar */}
            <div
              style={{
                padding: '24px 32px 16px 32px',
                borderBottom: '1px solid rgba(241, 245, 249, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Step indicator breadcrumbs */}
              {!status.success && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {[1, 2, 3, 4].map((stepNum) => {
                    const isPassed = stepNum < currentStep;
                    const isCurrent = stepNum === currentStep;
                    return (
                      <div
                        key={stepNum}
                        onClick={() => {
                          if (stepNum < currentStep) setCurrentStep(stepNum);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: isPassed ? 'pointer' : 'default',
                          opacity: isCurrent ? 1 : isPassed ? 0.85 : 0.4
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: isCurrent
                              ? 'var(--gradient-primary)'
                              : isPassed
                                ? 'var(--accent-mint)'
                                : '#e2e8f0',
                            color: '#ffffff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: isCurrent ? '0 2px 8px rgba(236, 72, 153, 0.35)' : 'none'
                          }}
                        >
                          {isPassed ? <Check size={13} strokeWidth={3} /> : stepNum}
                        </div>
                        <span
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: isCurrent ? 700 : 500,
                            color: isCurrent ? 'var(--text-primary)' : 'var(--text-muted)',
                            display: window.innerWidth < 550 && !isCurrent ? 'none' : 'inline'
                          }}
                        >
                          {stepNum === 1 && 'Solution'}
                          {stepNum === 2 && 'Scope & Budget'}
                          {stepNum === 3 && 'Requirements'}
                          {stepNum === 4 && 'Get Blueprint'}
                        </span>
                        {stepNum < 4 && (
                          <div
                            style={{
                              width: '12px',
                              height: '2px',
                              background: isPassed ? 'var(--accent-mint)' : '#e2e8f0',
                              margin: '0 2px'
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {status.success && (
                <div className="section-tag" style={{ margin: 0, padding: '4px 14px' }}>
                  <Sparkles size={13} /> Consultation Confirmed
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(241, 245, 249, 0.95)',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e2e8f0';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(241, 245, 249, 0.95)';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Step Content */}
            <div style={{ padding: '28px 32px 32px 32px', flex: 1 }}>
              {status.success ? (
                /* Success View Screen */
                <div style={{ textAlign: 'center', padding: '24px 8px' }}>
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '2px solid var(--accent-mint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                      color: 'var(--accent-mint)'
                    }}
                  >
                    <CheckCircle2 size={44} />
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                      color: 'var(--text-primary)',
                      marginBottom: '10px',
                      fontWeight: 800
                    }}
                  >
                    Project Consultation <span className="gradient-text">Confirmed!</span>
                  </h3>

                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      maxWidth: '560px',
                      margin: '0 auto 20px auto',
                      lineHeight: 1.6
                    }}
                  >
                    Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name || 'Partner'}</strong>! A Senior Solution Architect from <strong style={{ color: 'var(--text-primary)' }}>Arch IT</strong> is preparing a customized architectural roadmap, milestones, and cost estimate for <strong style={{ color: 'var(--text-primary)' }}>{formData.company || 'your company'}</strong>.
                  </p>

                  {/* Summary Box */}
                  <div
                    style={{
                      background: 'rgba(248, 250, 253, 0.9)',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      borderRadius: '16px',
                      padding: '18px 24px',
                      maxWidth: '520px',
                      margin: '0 auto 24px auto',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.825rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Target Solution:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{formData.service}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.825rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Investment Tier:</span>
                      <strong style={{ color: 'var(--color-royal-blue)' }}>
                        {formData.budget === 'Other' && formData.customBudget
                          ? `Other (₹${formData.customBudget})`
                          : formData.budget}
                      </strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.825rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Company Scale:</span>
                      <strong style={{ color: 'var(--accent-mint)' }}>{formData.companySize}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px dashed #cbd5e1', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Reference Ticket ID:</span>
                      <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-pink)' }}>
                        {status.referenceId}
                      </strong>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '14px',
                      justifyContent: 'center'
                    }}
                  >
                    <button
                      onClick={openWhatsAppChat}
                      className="btn"
                      style={{
                        background: '#25D366',
                        color: '#ffffff',
                        boxShadow: '0 8px 20px rgba(37, 211, 102, 0.35)',
                        padding: '12px 24px',
                        fontSize: '0.95rem'
                      }}
                    >
                      <MessageCircle size={18} /> Chat Directly on WhatsApp
                    </button>

                    <button
                      onClick={handleClose}
                      className="btn btn-secondary"
                      style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                    >
                      Continue Exploring Site
                    </button>
                  </div>
                </div>
              ) : (
                /* Step-by-Step Forms */
                <div>
                  {stepError && (
                    <div
                      style={{
                        padding: '10px 16px',
                        borderRadius: '10px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid #ef4444',
                        color: '#dc2626',
                        fontSize: '0.85rem',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span>⚠️ {stepError}</span>
                    </div>
                  )}

                  {/* ================= STEP 1: SOLUTION TYPE ================= */}
                  {currentStep === 1 && (
                    <div style={{ animation: 'bizFadeIn 0.3s ease-out' }}>
                      <div style={{ marginBottom: '20px' }}>
                        <div
                          className="section-tag"
                          style={{
                            marginBottom: '8px',
                            background: 'rgba(236, 72, 153, 0.08)',
                            border: '1px solid rgba(236, 72, 153, 0.25)',
                            color: 'var(--accent-pink)'
                          }}
                        >
                          <Sparkles size={13} /> Step 1 of 4: Solution Category
                        </div>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          What type of software is your business looking to build?
                        </h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          Select one or more software products or systems you need developed (multi-select enabled).
                        </p>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                          gap: '12px',
                          marginBottom: '24px'
                        }}
                      >
                        {SERVICES_OPTIONS.map((srv) => {
                          const Icon = srv.icon;
                          const isSelected = (formData.selectedServices || []).includes(srv.label);
                          return (
                            <div
                              key={srv.id}
                              onClick={() => toggleService(srv.label)}
                              style={{
                                padding: '16px',
                                borderRadius: '16px',
                                border: isSelected
                                  ? '2px solid var(--accent-pink)'
                                  : '1.5px solid rgba(226, 232, 240, 0.95)',
                                background: isSelected
                                  ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.06), rgba(139, 92, 246, 0.06))'
                                  : '#ffffff',
                                cursor: 'pointer',
                                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxShadow: isSelected
                                  ? '0 8px 24px rgba(236, 72, 153, 0.18)'
                                  : '0 2px 8px rgba(15, 23, 42, 0.03)',
                                transform: isSelected ? 'translateY(-2px)' : 'none',
                                position: 'relative'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <div
                                  style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '10px',
                                    background: isSelected ? 'var(--gradient-primary)' : 'rgba(241, 245, 249, 0.9)',
                                    color: isSelected ? '#ffffff' : 'var(--accent-pink)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s ease'
                                  }}
                                >
                                  <Icon size={20} />
                                </div>

                                {/* Interactive Checkbox */}
                                <div
                                  style={{
                                    width: '22px',
                                    height: '22px',
                                    borderRadius: '6px',
                                    border: isSelected
                                      ? '2px solid var(--accent-pink)'
                                      : '2px solid rgba(203, 213, 225, 0.95)',
                                    background: isSelected ? 'var(--gradient-primary)' : '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                                    boxShadow: isSelected ? '0 2px 8px rgba(236, 72, 153, 0.35)' : 'none'
                                  }}
                                >
                                  {isSelected && <Check size={14} strokeWidth={3.5} />}
                                </div>
                              </div>

                              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                                {srv.label}
                              </div>
                              <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                                {srv.desc}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 2: BUSINESS SCALE & BUDGET ================= */}
                  {currentStep === 2 && (
                    <div style={{ animation: 'bizFadeIn 0.3s ease-out' }}>
                      <div style={{ marginBottom: '20px' }}>
                        <div
                          className="section-tag"
                          style={{
                            marginBottom: '8px',
                            background: 'rgba(37, 99, 235, 0.08)',
                            border: '1px solid rgba(37, 99, 235, 0.25)',
                            color: 'var(--color-royal-blue)'
                          }}
                        >
                          <TrendingUp size={13} /> Step 2 of 4: Scope & Investment
                        </div>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          What is your business scale & estimated budget?
                        </h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          This enables us to allocate dedicated architecture resources and recommend the most cost-effective stack.
                        </p>
                      </div>

                      {/* Company Stage */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                          Company Stage & Capacity:
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '10px' }}>
                          {COMPANY_STAGES.map((stg) => {
                            const Icon = stg.icon;
                            const isSelected = formData.companySize === stg.label;
                            return (
                              <div
                                key={stg.id}
                                onClick={() => setFormData((prev) => ({ ...prev, companySize: stg.label }))}
                                style={{
                                  padding: '14px',
                                  borderRadius: '14px',
                                  border: isSelected
                                    ? '2px solid var(--accent-mint)'
                                    : '1px solid rgba(203, 213, 225, 0.8)',
                                  background: isSelected ? 'rgba(16, 185, 129, 0.07)' : '#ffffff',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '10px'
                                }}
                              >
                                <div
                                  style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: isSelected ? 'var(--accent-mint)' : '#f1f5f9',
                                    color: isSelected ? '#ffffff' : 'var(--accent-mint)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                  }}
                                >
                                  <Icon size={16} />
                                </div>
                                <div>
                                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                    {stg.label}
                                  </div>
                                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', lineHeight: 1.3, marginTop: '2px' }}>
                                    {stg.desc}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Budget Selector */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                          Target Investment Range (in ₹ INR):
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '8px' }}>
                          {BUDGET_OPTIONS.map((b) => {
                            const isSelected = formData.budget === b.label;
                            return (
                              <button
                                key={b.id}
                                type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, budget: b.label }))}
                                style={{
                                  padding: '10px 12px',
                                  borderRadius: '12px',
                                  border: isSelected
                                    ? '2px solid var(--color-royal-blue)'
                                    : '1px solid rgba(203, 213, 225, 0.8)',
                                  background: isSelected ? 'rgba(37, 99, 235, 0.08)' : '#ffffff',
                                  color: isSelected ? 'var(--color-royal-blue)' : 'var(--text-primary)',
                                  cursor: 'pointer',
                                  textAlign: 'center',
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <div style={{ fontSize: '0.875rem', fontWeight: 800 }}>{b.label}</div>
                                <div style={{ fontSize: '0.675rem', color: isSelected ? 'var(--color-royal-blue)' : 'var(--text-muted)', marginTop: '2px' }}>
                                  {b.sub}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Other Custom Budget Input */}
                        {formData.budget === 'Other' && (
                          <div style={{ marginTop: '10px', animation: 'bizFadeIn 0.25s ease' }}>
                            <input
                              type="text"
                              name="customBudget"
                              value={formData.customBudget}
                              onChange={handleInputChange}
                              placeholder="Enter custom budget in ₹ (e.g. ₹35,000 / Flexible / Milestone based)"
                              style={{
                                ...inputStyle,
                                border: '1.5px solid var(--color-royal-blue)',
                                background: '#ffffff'
                              }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Desired Timeline */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                          Desired Launch Timeline:
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {TIMELINE_OPTIONS.map((time) => {
                            const isSelected = formData.timeline === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, timeline: time }))}
                                style={{
                                  padding: '8px 16px',
                                  borderRadius: 'var(--radius-full)',
                                  border: isSelected
                                    ? '1.5px solid var(--accent-violet, #8b5cf6)'
                                    : '1px solid rgba(203, 213, 225, 0.8)',
                                  background: isSelected ? 'rgba(139, 92, 246, 0.1)' : '#ffffff',
                                  color: isSelected ? 'var(--accent-violet, #8b5cf6)' : 'var(--text-secondary)',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 3: SYSTEM FEATURES & SCOPE ================= */}
                  {currentStep === 3 && (
                    <div style={{ animation: 'bizFadeIn 0.3s ease-out' }}>
                      <div style={{ marginBottom: '20px' }}>
                        <div
                          className="section-tag"
                          style={{
                            marginBottom: '8px',
                            background: 'rgba(13, 148, 136, 0.08)',
                            border: '1px solid rgba(13, 148, 136, 0.25)',
                            color: 'var(--accent-mint)'
                          }}
                        >
                          <Zap size={13} /> Step 3 of 4: Requirements & Scope
                        </div>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          Which core capabilities do you need built?
                        </h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          Click the modules you want included in your initial release (select multiple).
                        </p>
                      </div>

                      {/* Feature Tags Multi-Select */}
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {FEATURE_TAGS.map((feat) => {
                            const isSelected = formData.selectedFeatures.includes(feat);
                            return (
                              <button
                                key={feat}
                                type="button"
                                onClick={() => toggleFeature(feat)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  padding: '8px 14px',
                                  borderRadius: '10px',
                                  fontSize: '0.825rem',
                                  fontWeight: 600,
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                  border: isSelected
                                    ? '1.5px solid var(--accent-pink)'
                                    : '1px solid rgba(203, 213, 225, 0.85)',
                                  background: isSelected ? 'rgba(236, 72, 153, 0.08)' : '#ffffff',
                                  color: isSelected ? 'var(--accent-pink)' : 'var(--text-primary)',
                                  boxShadow: isSelected ? '0 2px 8px rgba(236, 72, 153, 0.12)' : 'none'
                                }}
                              >
                                {isSelected ? (
                                  <Check size={14} strokeWidth={3} color="var(--accent-pink)" />
                                ) : (
                                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', border: '1px solid #cbd5e1', display: 'inline-block' }} />
                                )}
                                <span>{feat}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Custom Project Notes */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          Any Specific Notes, Problem to Solve, or Competitor References (Optional):
                        </label>
                        <textarea
                          name="projectDetails"
                          rows="3"
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          placeholder="e.g. We need an automated client booking portal with Stripe integration and role-based staff access..."
                          style={{
                            ...inputStyle,
                            resize: 'vertical',
                            minHeight: '80px'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 4: CONTACT & DELIVERABLES ================= */}
                  {currentStep === 4 && (
                    <form onSubmit={handleSubmit} style={{ animation: 'bizFadeIn 0.3s ease-out' }}>
                      <div style={{ marginBottom: '20px' }}>
                        <div
                          className="section-tag"
                          style={{
                            marginBottom: '8px',
                            background: 'rgba(236, 72, 153, 0.08)',
                            border: '1px solid rgba(236, 72, 153, 0.25)',
                            color: 'var(--accent-pink)'
                          }}
                        >
                          <Lock size={13} /> Step 4 of 4: Contact & Organization
                        </div>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          Where should we send your Blueprint & Estimate?
                        </h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          Our Senior Solution Architect will review your inputs and dispatch a personalized architecture map and quotation.
                        </p>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                        <div>
                          <label
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.825rem',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              marginBottom: '6px'
                            }}
                          >
                            <User size={14} color="var(--accent-pink)" /> Your Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Sarah Jenkins"
                            required
                            style={inputStyle}
                          />
                        </div>

                        <div>
                          <label
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.825rem',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              marginBottom: '6px'
                            }}
                          >
                            <Building2 size={14} color="var(--accent-pink)" /> Company / Business Name *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="e.g. Apex Enterprises / Nexa Labs"
                            required
                            style={inputStyle}
                          />
                        </div>

                        <div>
                          <label
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.825rem',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              marginBottom: '6px'
                            }}
                          >
                            <Mail size={14} color="var(--accent-pink)" /> Work Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="sarah@company.com"
                            required
                            style={inputStyle}
                          />
                        </div>

                        <div>
                          <label
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.825rem',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              marginBottom: '6px'
                            }}
                          >
                            <Phone size={14} color="var(--accent-pink)" /> Phone / WhatsApp Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210 or +1 (555) 000-0000"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Trust Guarantees */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: '16px',
                          padding: '12px 18px',
                          borderRadius: '12px',
                          background: 'rgba(241, 245, 249, 0.75)',
                          border: '1px solid rgba(226, 232, 240, 0.9)',
                          marginBottom: '20px',
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-primary)' }}>
                          <ShieldCheck size={16} color="var(--accent-mint)" /> Strict NDA Protected
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-primary)' }}>
                          <Clock size={16} color="var(--color-royal-blue)" /> 24h Senior Review
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-primary)' }}>
                          <Star size={16} color="var(--accent-amber)" /> 100+ Systems Delivered
                        </div>
                      </div>
                    </form>
                  )}

                  {/* Navigation Actions Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(241, 245, 249, 0.9)',
                      marginTop: '16px',
                      gap: '12px'
                    }}
                  >
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="btn btn-secondary"
                        style={{
                          padding: '10px 20px',
                          fontSize: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                    ) : (
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        🔒 100% Confidential Consultation
                      </div>
                    )}

                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="btn btn-primary"
                        style={{
                          padding: '12px 26px',
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: '0 6px 20px rgba(236, 72, 153, 0.35)'
                        }}
                      >
                        Continue to Step {currentStep + 1} <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={status.loading}
                        className="btn btn-primary"
                        style={{
                          padding: '14px 28px',
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: '0 8px 24px rgba(236, 72, 153, 0.4)'
                        }}
                      >
                        {status.loading ? (
                          <>
                            <Loader2 size={18} className="animate-spin-slow" /> Generating Blueprint...
                          </>
                        ) : (
                          <>
                            Get Free Architecture Blueprint <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: '10px',
  background: '#f8fafc',
  border: '1px solid rgba(203, 213, 225, 0.85)',
  color: 'var(--text-primary)',
  fontSize: '0.875rem',
  fontFamily: 'var(--font-main)',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s'
};
