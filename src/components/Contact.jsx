import { useState } from 'react';
import { submitContactForm } from '../services/contactService';
import confetti from 'canvas-confetti';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    projectDetails: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    responseMsg: '',
    referenceId: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, responseMsg: '', referenceId: '' });

    try {
      const response = await submitContactForm(formData);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setStatus({
        loading: false,
        success: true,
        error: null,
        responseMsg: response.message,
        referenceId: response.referenceId
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Web Development',
        projectDetails: ''
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
    <section id="contact" style={{ padding: '120px 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="glow-orb glow-indigo" style={{ bottom: '20%', left: '10%', width: '400px', height: '400px', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} color="var(--accent-mint)" /> Start A Conversation
          </div>
          <h2 className="section-title">
            Let&apos;s Discuss Your <span className="gradient-text">Project Scope</span>
          </h2>
          <p className="section-subtitle">
            Fill out the form below or reach out directly to our engineering lead for project estimates and architecture advice.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>

          {/* Left Column: Direct Contact Info & Perks */}
          <div className="glass-card" style={{ padding: '40px', background: '#ffffff', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '24px' }}>
              Direct Engineering Contact
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '36px', lineHeight: 1.6 }}>
              Our senior tech architects personally review every project proposal within 24 hours. No sales spam—just clear technical feedback and milestone estimates.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(13, 148, 136, 0.1)', border: '1px solid rgba(13, 148, 136, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-mint)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Proposal</div>
                  <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>arch.it@archenterprises.co.in</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(2, 132, 199, 0.1)', border: '1px solid rgba(2, 132, 199, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Line</div>
                  <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>+91 8390704453</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(5, 150, 105, 0.1)', border: '1px solid rgba(5, 150, 105, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>Khutwadnagar, Nashik, Maharashtra
                    India - 422 008.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: React Contact Form */}
          <div className="glass-card" style={{ padding: '40px', border: '1.5px solid rgba(13, 148, 136, 0.3)', boxShadow: 'var(--shadow-md)', background: '#ffffff' }}>

            {/* Success State Alert Banner */}
            {status.success && (
              <div
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(13, 148, 136, 0.08)',
                  border: '1px solid var(--accent-mint)',
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <CheckCircle size={24} color="var(--accent-mint)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px', color: 'var(--accent-mint)' }}>Proposal Submitted Successfully!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {status.responseMsg}
                  </p>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '8px', display: 'block' }}>
                    Ref ID: {status.referenceId}
                  </span>
                </div>
              </div>
            )}

            {/* Error State Alert Banner */}
            {status.error && (
              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid #ef4444',
                  color: '#ef4444',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <AlertCircle size={20} color="#ef4444" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem' }}>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="contact-inputs-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-sm)',
                      background: '#f8fafc',
                      border: '1px solid rgba(203, 213, 225, 0.8)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@company.com"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-sm)',
                      background: '#f8fafc',
                      border: '1px solid rgba(203, 213, 225, 0.8)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="contact-inputs-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-sm)',
                      background: '#f8fafc',
                      border: '1px solid rgba(203, 213, 225, 0.8)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Enterprise"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-sm)',
                      background: '#f8fafc',
                      border: '1px solid rgba(203, 213, 225, 0.8)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Target Service Category
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: '#f8fafc',
                    border: '1px solid rgba(203, 213, 225, 0.8)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                >
                  <option value="Web Development">Web Development (React / Next.js)</option>
                  <option value="Mobile App Development">Mobile App Development (iOS / Android)</option>
                  <option value="Custom Software">Custom Enterprise Software & SaaS</option>
                  <option value="UI/UX Design">UI/UX Design & System Tokens</option>
                  <option value="E-Commerce Solutions">E-Commerce & Payment Storefronts</option>
                  <option value="Cloud & Deployment">Cloud Infrastructure & DevOps</option>
                  <option value="API & Backend">API Microservices & Backend DB</option>
                  <option value="Business Automation">AI & Workflow Automation</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Project Details & Goals *
                </label>
                <textarea
                  name="projectDetails"
                  rows="4"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Describe your vision, target timeline, technical stack requirements, or key goals..."
                  required
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: '#f8fafc',
                    border: '1px solid rgba(203, 213, 225, 0.8)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '10px', justifyContent: 'center' }}
              >
                {status.loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin-slow" /> Transmitting Request...
                  </>
                ) : (
                  <>
                    Submit Project Inquiry <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-inputs-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
