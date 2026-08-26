import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Palette, Code, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: '01', title: 'Plan', icon: Compass, desc: 'Defining requirements, system architecture, and project roadmap.' },
  { number: '02', title: 'Design', icon: Palette, desc: 'Crafting modern UI layouts and responsive design prototypes.' },
  { number: '03', title: 'Build', icon: Code, desc: 'Developing clean React frontend and reliable backend services.' },
  { number: '04', title: 'Launch', icon: Rocket, desc: 'Deploying to cloud servers with 24/7 post-launch support.' }
];

export const Process = () => {
  const sectionRef = useRef(null);
  const svgPathRef = useRef(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = svgPathRef.current;
      if (!path) return;

      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.5,
          onUpdate: (self) => {
            const currentStep = Math.min(
              Math.floor(self.progress * steps.length),
              steps.length - 1
            );
            setActiveStepIndex(currentStep);
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} style={{ padding: '90px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Rocket size={14} color="var(--accent-mint)" /> Simple 4-Step Process
          </div>
          <h2 className="section-title">
            How We Deliver <span className="gradient-text">Your Software</span>
          </h2>
          <p className="section-subtitle">
            A fast, predictable engineering workflow designed for quality and speed.
          </p>
        </div>

        {/* Timeline Grid Container */}
        <div style={{ position: 'relative', marginTop: '40px' }}>
          
          {/* Connecting SVG Line */}
          <div className="desktop-timeline-line" style={{ position: 'absolute', top: '48px', left: '8%', right: '8%', height: '4px', zIndex: 1 }}>
            <svg width="100%" height="4" style={{ overflow: 'visible' }}>
              <line x1="0" y1="2" x2="100%" y2="2" stroke="rgba(203, 213, 225, 0.8)" strokeWidth="4" strokeDasharray="6 6" />
              <line
                ref={svgPathRef}
                x1="0"
                y1="2"
                x2="100%"
                y2="2"
                stroke="url(#processGrad)"
                strokeWidth="4"
              />
              <defs>
                <linearGradient id="processGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Timeline Steps Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              position: 'relative',
              zIndex: 2
            }}
            className="process-grid"
          >
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isReached = idx <= activeStepIndex;

              return (
                <div key={step.number} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      margin: '0 auto 16px',
                      background: isReached ? 'var(--gradient-primary)' : '#ffffff',
                      border: isReached ? '2px solid var(--accent-mint)' : '2px solid #cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isReached ? '#ffffff' : 'var(--text-muted)',
                      boxShadow: isReached ? '0 4px 15px rgba(13, 148, 136, 0.3)' : 'var(--shadow-sm)',
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <IconComponent size={24} strokeWidth={isReached ? 2.5 : 1.8} />
                  </div>

                  <div className="glass-card" style={{ padding: '20px 16px', opacity: isReached ? 1 : 0.7, background: '#ffffff', border: '1px solid var(--glass-border)', transition: 'opacity 0.4s ease' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-mint)', fontWeight: 700 }}>
                      STEP {step.number}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: '4px 0' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .desktop-timeline-line { display: none !important; }
        }
        @media (max-width: 576px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
