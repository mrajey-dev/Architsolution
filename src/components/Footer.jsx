import { Link } from 'react-router-dom';
import { ArrowUp, Globe, Mail, Share2 } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid rgba(203, 213, 225, 0.8)', paddingTop: '80px', paddingBottom: '40px', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div className="grid-4" style={{ gap: '40px', paddingBottom: '60px', borderBottom: '1px solid rgba(203, 213, 225, 0.8)' }}>

          {/* Brand Info Column */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
              <div
                style={{
                  height: '42px',
                  padding: '3px 8px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
                  border: '1px solid rgba(203, 213, 225, 0.8)'
                }}
              >
                <img src="/logo.png" alt="Arch IT Solution Logo" style={{ height: '34px', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                ARCH <span style={{ color: 'var(--accent-mint)' }}>IT</span>
              </span>
            </Link>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              Building modern digital experiences, enterprise software, and scalable tech systems for ambitious businesses worldwide.
            </p>

            {/* Operational System Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(13, 148, 136, 0.08)',
                border: '1px solid rgba(13, 148, 136, 0.25)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-mint)',
                fontWeight: 600,
                boxShadow: 'none'
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-mint)', boxShadow: '0 0 6px rgba(13, 148, 136, 0.5)' }} />
              All Systems Operational ✨
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link to="/" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Home Page</Link>
              </li>
              <li>
                <Link to="/ecommerce" style={{ fontSize: '0.9rem', color: 'var(--accent-mint)', fontWeight: 700 }}>
                  🛍️ E-Commerce & Systems Page
                </Link>
              </li>
              {['About', 'Services', 'Solutions', 'Why Us', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase().replace(' ', '-')}`}
                    style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Capabilities Column */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
              13 System Offerings
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li>E-Commerce & Storefronts</li>
              <li>Enterprise ERP & CRM</li>
              <li>HRMS & Payroll Management</li>
              <li>Gym & Fitness System</li>
              <li>School & Academy ERP</li>
              <li>Construction & Inventory Systems</li>
            </ul>
          </div>

          {/* Contact & Back to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
                Connect
              </h4>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', border: '1px solid rgba(203, 213, 225, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                  <Globe size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', border: '1px solid rgba(203, 213, 225, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                  <Share2 size={18} />
                </a>
                <a href="mailto:arch.it@archenterprises.co.in" aria-label="Email" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', border: '1px solid rgba(203, 213, 225, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: '12px 20px', fontSize: '0.875rem', alignSelf: 'flex-start' }}
            >
              Back to Top <ArrowUp size={16} color="var(--accent-mint)" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div style={{ paddingTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Arch IT Solution. All rights reserved. Built with modern React.js architecture.
          </div>

          <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <Link to="/ecommerce" style={{ color: 'var(--accent-mint)' }}>E-Commerce Page</Link>
            <a href="/#contact" style={{ color: 'var(--text-secondary)' }}>Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
