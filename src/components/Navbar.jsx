import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/#home', path: '/' },
  { name: '13 Systems', href: '/ecommerce', path: '/ecommerce', badge: 'NEW' },
  { name: 'Services', href: '/#services', sectionId: 'services' },
  { name: 'Portfolio', href: '/#projects', sectionId: 'projects' },
  { name: 'Why Us', href: '/#why-us', sectionId: 'why-us' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, link) => {
    setMobileMenuOpen(false);

    if (link.path === '/ecommerce') {
      e.preventDefault();
      navigate('/ecommerce');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.path === '/') {
      e.preventDefault();
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (link.sectionId) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(link.sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(link.sectionId);
        if (el) {
          const headerOffset = 85;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '1240px',
        height: '68px',
        zIndex: 1000,
        borderRadius: 'var(--radius-full)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled || location.pathname === '/ecommerce'
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08)'
      }}
    >
      {/* Scroll Progress Bar along header bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '20px',
          right: '20px',
          height: '2px',
          borderRadius: '2px',
          background: 'rgba(203, 213, 225, 0.4)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'var(--gradient-primary)',
            boxShadow: '0 0 8px rgba(13, 148, 136, 0.4)',
            transition: 'width 0.1s linear'
          }}
        />
      </div>

      <div style={{ height: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Official Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleLinkClick(e, { path: '/' })}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
        >
          <div
            style={{
              height: '40px',
              padding: '3px 8px',
              borderRadius: '10px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}
          >
            <img src="/logo.png" alt="Arch IT Solution Logo" style={{ height: '32px', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              ARCH <span style={{ color: 'var(--accent-pink)' }}>IT</span>
            </span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-pink)', boxShadow: '0 0 6px rgba(236, 72, 153, 0.5)' }} />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {NAV_LINKS.map((link) => {
            const isActive = link.path === location.pathname;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--accent-pink)' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {link.name}
                {link.badge && (
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(236, 72, 153, 0.1)',
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      color: 'var(--accent-pink)',
                      padding: '1px 6px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700
                    }}
                  >
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      borderRadius: '2px',
                      background: 'var(--gradient-primary)',
                      boxShadow: '0 0 8px rgba(236, 72, 153, 0.4)'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Right Action Button */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/#contact"
            onClick={(e) => handleLinkClick(e, { sectionId: 'contact' })}
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.85rem', borderRadius: 'var(--radius-full)' }}
          >
            Get Started <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ color: 'var(--text-primary)', padding: '6px' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '76px',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid var(--glass-border)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)'
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.path === location.pathname;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--accent-pink)' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
                }}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={16} opacity={isActive ? 1 : 0.5} />
              </a>
            );
          })}
          <a
            href="/#contact"
            onClick={(e) => handleLinkClick(e, { sectionId: 'contact' })}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
          >
            Get Started <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 990px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 991px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
