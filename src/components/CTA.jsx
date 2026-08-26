import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '80px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div
          ref={cardRef}
          className="glass-card interactive-card"
          style={{
            padding: '56px 36px',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1.5px solid rgba(13, 148, 136, 0.35)',
            boxShadow: '0 15px 40px -5px rgba(15, 23, 42, 0.08), 0 0 30px rgba(13, 148, 136, 0.12)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '0 auto' }}>
            <div className="section-tag" style={{ marginBottom: '18px' }}>
              <Sparkles size={14} color="var(--accent-mint)" /> Ready to Build?
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Let&apos;s Build Your Next <span className="gradient-text">Digital Product</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.6 }}>
              Whether you need a modern web app, mobile application, or custom software—our engineering team is here to help.
            </p>

            <a href="#contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              Get Free Consultation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
