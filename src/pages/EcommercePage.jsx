import { useState, useEffect } from 'react';
import { ecommerceSystemsData, systemCategories } from '../data/ecommerceSystems';
import {
  ShoppingBag,
  Layers,
  Users,
  Sliders,
  UserCheck,
  CreditCard,
  Package,
  Smartphone,
  Globe,
  Code,
  Activity,
  HardHat,
  GraduationCap,
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
  Send,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitContactForm } from '../services/contactService';

const iconMap = {
  ShoppingBag,
  Layers,
  Users,
  Sliders,
  UserCheck,
  CreditCard,
  Package,
  Smartphone,
  Globe,
  Code,
  Activity,
  HardHat,
  GraduationCap
};

export const EcommercePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Systems');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystemModal, setSelectedSystemModal] = useState(null);
  
  // Contact Form Modal State
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [targetSystemName, setTargetSystemName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectDetails: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null, responseMsg: '', referenceId: '' });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtered Systems Logic
  const filteredSystems = ecommerceSystemsData.filter((sys) => {
    const matchesCategory = selectedCategory === 'All Systems' || sys.category === selectedCategory;
    const matchesSearch =
      sys.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sys.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sys.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      sys.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleOpenInquiry = (sysName) => {
    setTargetSystemName(sysName);
    setFormData((prev) => ({
      ...prev,
      service: sysName,
      projectDetails: `Inquiry regarding ${sysName} solution implementation...`
    }));
    setInquiryModalOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, responseMsg: '', referenceId: '' });

    try {
      const response = await submitContactForm(formData);
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
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
        error: err.message || 'An error occurred while submitting your message.',
        responseMsg: '',
        referenceId: ''
      });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: 'calc(var(--header-height) + 40px)', paddingBottom: '120px' }}>
      
      {/* 1. Page Hero Banner */}
      <section style={{ position: 'relative', padding: '40px 0 60px 0', textAlign: 'center' }}>
        <div className="glow-orb glow-indigo" style={{ top: '0%', left: '20%', width: '450px', height: '450px', opacity: 0.1 }} />
        <div className="glow-orb glow-cyan" style={{ top: '20%', right: '20%', width: '450px', height: '450px', opacity: 0.1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ marginBottom: '20px', background: 'rgba(13, 148, 136, 0.08)', border: '1px solid rgba(13, 148, 136, 0.25)', boxShadow: '0 2px 10px rgba(13, 148, 136, 0.08)' }}>
            <Sparkles size={14} color="var(--accent-mint)" className="animate-spin-slow" /> ✨ 13 Enterprise Solutions
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: 1.15 }}>
            E-Commerce & Specialized <span className="gradient-text">Software Systems</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto 36px auto', lineHeight: 1.6 }}>
            Explore our battle-tested collection of 13 custom software products—ranging from high-scale E-Commerce Storefronts and Enterprise ERPs to Gym, School, and Construction Management systems.
          </p>

          {/* Search Input Bar */}
          <div
            style={{
              maxWidth: '580px',
              margin: '0 auto 36px auto',
              position: 'relative'
            }}
          >
            <div style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-mint)' }}>
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search systems (e.g. Gym, Payroll, ERP, School, E-Commerce, Inventory...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 52px',
                borderRadius: 'var(--radius-full)',
                background: '#ffffff',
                border: '1.5px solid rgba(13, 148, 136, 0.35)',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontFamily: 'var(--font-main)',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            {systemCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-main)',
                  transition: 'all 0.25s ease',
                  background: selectedCategory === cat ? 'var(--gradient-primary)' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  border: selectedCategory === cat ? '1px solid transparent' : '1px solid var(--glass-border)',
                  boxShadow: selectedCategory === cat ? '0 4px 15px rgba(13, 148, 136, 0.25)' : 'var(--shadow-sm)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Systems Grid Container */}
      <section className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Showing <span style={{ color: 'var(--accent-mint)' }}>{filteredSystems.length}</span> Enterprise Solutions
          </div>
        </div>

        {filteredSystems.length === 0 ? (
          <div className="glass-card" style={{ padding: '60px 20px', textAlign: 'center', background: '#ffffff' }}>
            <Search size={48} color="var(--text-muted)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '8px' }}>No Matching Systems Found</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your search query or filter category.</p>
          </div>
        ) : (
          <div className="grid-3" style={{ gap: '32px' }}>
            {filteredSystems.map((sys) => {
              const IconComp = iconMap[sys.icon] || Globe;

              return (
                <div
                  key={sys.id}
                  className="glass-card interactive-card"
                  style={{
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 'var(--radius-lg)',
                    background: '#ffffff',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-md)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Top Gradient Accent Border */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'var(--gradient-primary)',
                      boxShadow: '0 0 8px rgba(13, 148, 136, 0.4)'
                    }}
                  />

                  <div>
                    {/* Header Icon Avatar & Category Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '14px',
                          background: 'rgba(13, 148, 136, 0.1)',
                          border: '1px solid rgba(13, 148, 136, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-mint)',
                          boxShadow: 'none'
                        }}
                      >
                        <IconComp size={24} />
                      </div>

                      <span
                        style={{
                          fontSize: '0.725rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(13, 148, 136, 0.08)',
                          border: '1px solid rgba(13, 148, 136, 0.25)',
                          color: 'var(--accent-mint)',
                          fontWeight: 700
                        }}
                      >
                        {sys.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
                      {sys.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {sys.shortDesc}
                    </p>

                    {/* Quick Features Checklist */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {sys.features.slice(0, 4).map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={15} color="var(--accent-mint)" style={{ flexShrink: 0 }} />
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px', borderTop: '1px solid rgba(203, 213, 225, 0.8)', paddingTop: '16px' }}>
                      {sys.techStack.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            background: 'rgba(13, 148, 136, 0.08)',
                            border: '1px solid rgba(13, 148, 136, 0.2)',
                            color: 'var(--accent-mint)',
                            fontWeight: 600
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <button
                        onClick={() => setSelectedSystemModal(sys)}
                        style={{
                          fontSize: '0.825rem',
                          fontWeight: 700,
                          color: 'var(--accent-mint)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        Full Details <ArrowRight size={14} />
                      </button>

                      <button
                        onClick={() => handleOpenInquiry(sys.title)}
                        className="btn btn-primary"
                        style={{ padding: '8px 16px', fontSize: '0.825rem' }}
                      >
                        Request Demo
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 3. Full System Details Modal */}
      {selectedSystemModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '740px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '40px',
              background: '#ffffff',
              border: '1.5px solid rgba(13, 148, 136, 0.3)',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)',
              borderRadius: 'var(--radius-lg)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setSelectedSystemModal(null)}
              style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--text-primary)', background: '#f1f5f9', padding: '8px', borderRadius: '50%' }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="section-tag" style={{ margin: 0 }}>
                {selectedSystemModal.category}
              </span>
              <span style={{ fontSize: '0.825rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', background: 'rgba(13, 148, 136, 0.08)', border: '1px solid rgba(13, 148, 136, 0.25)', padding: '4px 10px', borderRadius: '6px', fontWeight: 600 }}>
                ⚡ {selectedSystemModal.metrics}
              </span>
            </div>

            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
              {selectedSystemModal.title}
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
              {selectedSystemModal.fullDesc}
            </p>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-mint)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
              Complete Feature Specification:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              {selectedSystemModal.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-mint)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-mint)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
              Technology Stack Deployed:
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {selectedSystemModal.techStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(13, 148, 136, 0.08)',
                    border: '1px solid rgba(13, 148, 136, 0.25)',
                    color: 'var(--accent-mint)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid rgba(203, 213, 225, 0.8)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Ideal for: <strong style={{ color: 'var(--text-primary)' }}>{selectedSystemModal.idealFor}</strong>
              </div>

              <button
                onClick={() => {
                  setSelectedSystemModal(null);
                  handleOpenInquiry(selectedSystemModal.title);
                }}
                className="btn btn-primary"
                style={{ padding: '12px 24px' }}
              >
                Request Live System Demo <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Contact Inquiry Modal */}
      {inquiryModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '36px',
              background: '#ffffff',
              border: '1.5px solid rgba(13, 148, 136, 0.3)',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)',
              borderRadius: 'var(--radius-lg)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setInquiryModalOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--text-primary)', background: '#f1f5f9', padding: '8px', borderRadius: '50%' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Request Demo: <span className="gradient-text">{targetSystemName}</span>
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Our engineering team will prepare a custom system live demo and milestone budget breakdown within 24 hours.
            </p>

            {status.success ? (
              <div style={{ padding: '24px', borderRadius: '12px', background: 'rgba(13, 148, 136, 0.08)', border: '1px solid var(--accent-mint)', textAlign: 'center' }}>
                <CheckCircle2 size={40} color="var(--accent-mint)" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ color: 'var(--accent-mint)', fontSize: '1.2rem', marginBottom: '8px' }}>Inquiry Transmitted!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>{status.responseMsg}</p>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Ref ID: {status.referenceId}</span>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="btn btn-primary"
                  style={{ marginTop: '16px', width: '100%' }}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: '#f8fafc', border: '1px solid rgba(203, 213, 225, 0.8)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="alex@company.com"
                      required
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: '#f8fafc', border: '1px solid rgba(203, 213, 225, 0.8)', color: 'var(--text-primary)', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+1 (555) 000-0000"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: '#f8fafc', border: '1px solid rgba(203, 213, 225, 0.8)', color: 'var(--text-primary)', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>Project Notes / Custom Requirements</label>
                  <textarea
                    name="projectDetails"
                    rows="3"
                    value={formData.projectDetails}
                    onChange={handleFormChange}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: '#f8fafc', border: '1px solid rgba(203, 213, 225, 0.8)', color: 'var(--text-primary)', outline: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn btn-primary"
                  style={{ padding: '14px', width: '100%', marginTop: '8px' }}
                >
                  {status.loading ? <Loader2 size={18} className="animate-spin-slow" /> : <>Submit System Request <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
