import { useEffect, useRef } from 'react';
import { testimonialsData } from '../data/testimonials';
import { MessageSquare, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.testimonial-card');
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
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
    <section ref={sectionRef} style={{ padding: '120px 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} color="var(--accent-mint)" /> Client Endorsements
          </div>
          <h2 className="section-title">
            Trusted by Visionary <span className="gradient-text">Tech Leaders</span>
          </h2>
          <p className="section-subtitle">
            Here is what CTOs, product managers, and founders say about building with Arch IT Solution.
          </p>
        </div>

        <div ref={gridRef} className="grid-3">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card interactive-card testimonial-card"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: '#ffffff',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent-amber)" color="var(--accent-amber)" />
                  ))}
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '32px' }}>
                  &quot;{item.quote}&quot;
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid rgba(203, 213, 225, 0.8)', paddingTop: '20px' }}>
                <img
                  src={item.avatar}
                  alt={item.author}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-mint)',
                    boxShadow: '0 2px 8px rgba(13, 148, 136, 0.2)'
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {item.author}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-mint)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    {item.role} • {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
