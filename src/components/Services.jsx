import { useEffect, useRef, useState } from 'react';
import { servicesData } from '../data/services';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Smartphone, Code2, Layout, ShoppingBag, Cloud, Cpu, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Globe,
  Smartphone,
  Code2,
  Layout,
  ShoppingBag,
  Cloud,
  Cpu,
  Zap
};

// Reusable ServiceCard Component with Cyber Neon Glass Styling
const ServiceCard = ({ service, index, activeIndex }) => {
  const IconComponent = iconMap[service.iconName] || Globe;
  const { tiltStyle, handleMouseMove, handleMouseLeave } = useMouseParallax(6);
  const isActive = index === activeIndex;

  return (
    <div
      className="interactive-card tilt-card service-card-horizontal"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...tiltStyle,
        position: 'relative',
        width: '540px',
        minWidth: '540px',
        height: '460px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        border: isActive ? '2px solid var(--accent-mint)' : '1px solid var(--glass-border)',
        boxShadow: isActive ? '0 12px 35px -4px rgba(13, 148, 136, 0.25)' : 'var(--shadow-md)',
        background: '#ffffff',
        backdropFilter: 'blur(16px)',
        zIndex: 2,
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease'
      }}
    >
      {/* Animated Top Neon Accent Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--gradient-primary)',
          boxShadow: '0 0 10px rgba(13, 148, 136, 0.4)'
        }}
      />

      <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        
        {/* Card Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'rgba(13, 148, 136, 0.1)',
                  border: '1px solid rgba(13, 148, 136, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-mint)'
                }}
              >
                <IconComponent size={24} />
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(13, 148, 136, 0.08)',
                  border: '1px solid rgba(13, 148, 136, 0.25)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-mint)',
                  fontWeight: 700
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-mint)', boxShadow: '0 0 6px rgba(13, 148, 136, 0.5)' }} />
                {service.badge}
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '2rem',
                fontWeight: 900,
                color: 'rgba(13, 148, 136, 0.2)'
              }}
            >
              {service.number}
            </div>
          </div>

          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
            {service.title}
          </h3>

          <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '14px' }}>
            {service.subtitle}
          </div>

          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
            {service.description}
          </p>

          {/* Checklist */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
            {service.features.map((feat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                <CheckCircle2 size={15} color="var(--accent-mint)" style={{ flexShrink: 0 }} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tech Bar */}
        <div style={{ borderTop: '1px solid rgba(203, 213, 225, 0.8)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 8px',
                  borderRadius: '6px',
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                fontSize: '0.725rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-mint)',
                background: 'rgba(13, 148, 136, 0.08)',
                border: '1px solid rgba(13, 148, 136, 0.25)',
                padding: '3px 8px',
                borderRadius: '6px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Sparkles size={11} color="var(--accent-mint)" /> {service.impact}
            </span>

            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                padding: '8px 16px',
                fontSize: '0.8rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              Scope <ArrowRight size={13} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export const Services = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 993px)').matches;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${totalScroll * 1.2}`,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * servicesData.length),
              servicesData.length - 1
            );
            setActiveIndex(index);
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} style={{ position: 'relative', background: 'var(--bg-primary)' }}>
      {/* Header */}
      <div style={{ paddingTop: '100px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '20px' }}>
            <div className="section-tag">
              <Zap size={14} color="var(--accent-mint)" /> Horizontal Card Scroll
            </div>
            <h2 className="section-title">
              Services Designed to <span className="gradient-text">Scale & Automate</span>
            </h2>
            <p className="section-subtitle">
              Scroll down to glide horizontally through our 8 specialized engineering service cards.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Scroll Track Presenter */}
      <div className="desktop-services-wrapper">
        <div ref={triggerRef} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
          
          {/* Horizontal Progress & Card Counter Indicator Bar */}
          <div className="container" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-mint)' }}>
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                / 0{servicesData.length} Cards
              </span>
            </div>

            {/* Horizontal Track Quick Indicator Pills */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {servicesData.map((s, idx) => (
                <div
                  key={s.id}
                  style={{
                    height: '4px',
                    width: activeIndex === idx ? '36px' : '12px',
                    borderRadius: '2px',
                    background: activeIndex === idx ? 'var(--gradient-primary)' : 'rgba(203, 213, 225, 0.8)',
                    boxShadow: activeIndex === idx ? '0 0 10px rgba(13, 148, 136, 0.4)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Horizontal Sliding Track Container */}
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div
              ref={trackRef}
              style={{
                display: 'flex',
                gap: '32px',
                paddingLeft: 'max(24px, calc((100vw - 1240px) / 2))',
                paddingRight: '60px',
                width: 'max-content',
                willChange: 'transform'
              }}
            >
              {servicesData.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} activeIndex={activeIndex} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Grid Layout Fallback */}
      <div className="mobile-services-wrapper container" style={{ paddingBottom: '100px' }}>
        <div className="grid-2">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} activeIndex={0} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-services-wrapper { display: none !important; }
          .mobile-services-wrapper { display: block !important; }
          .service-card-horizontal {
            width: 100% !important;
            min-width: 100% !important;
          }
        }
        @media (min-width: 993px) {
          .desktop-services-wrapper { display: block !important; }
          .mobile-services-wrapper { display: none !important; }
        }
      `}</style>
    </section>
  );
};
