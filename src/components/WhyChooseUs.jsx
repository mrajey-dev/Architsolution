import { useEffect, useRef } from 'react';
import { whyUsData } from '../data/whyUs';
import { ShieldCheck, Zap, Layers, Clock, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  ShieldCheck,
  Zap,
  Layers,
  Clock
};

export const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.why-us-card');
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} style={{ padding: '100px 0', position: 'relative', background: 'var(--bg-primary)' }}>
      <div className="glow-orb glow-cyan" style={{ top: '30%', right: '10%', width: '400px', height: '400px', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <div className="section-tag">
            <CheckCircle size={14} color="var(--accent-mint)" /> Why Choose Us
          </div>
          <h2 className="section-title">
            Built for Businesses That Value <span className="gradient-text">Results</span>
          </h2>
          <p className="section-subtitle">
            We deliver custom software products engineered to automate your operations and scale effortlessly.
          </p>
        </div>

        <div ref={gridRef} className="grid-2">
          {whyUsData.map((item) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;
            return (
              <div key={item.id} className="glass-card interactive-card why-us-card" style={{ padding: '32px', display: 'flex', gap: '20px', alignItems: 'flex-start', background: '#ffffff', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-md)' }}>
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
                    color: 'var(--accent-mint)',
                    boxShadow: 'none',
                    flexShrink: 0
                  }}
                >
                  <IconComp size={24} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.925rem' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
