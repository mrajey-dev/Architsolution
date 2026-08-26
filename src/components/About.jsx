import { useEffect, useRef } from 'react';
import { ShieldCheck, Cpu, Code2, Award, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);
  const narrativeCardRef = useRef(null);
  const featureGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        narrativeCardRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      const subCards = gsap.utils.toArray('.about-subcard');
      gsap.fromTo(
        subCards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureGridRef.current,
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: '100px 0', position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="glow-orb glow-indigo" style={{ top: '20%', left: '-5%', width: '400px', height: '400px', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} color="var(--accent-mint)" /> About Arch IT
          </div>
          <h2 className="section-title">
            Crafting Software for <span className="gradient-text">Business Growth</span>
          </h2>
          <p className="section-subtitle">
            We are a team of full-stack engineers dedicated to building software systems that help your business scale effortlessly.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
          {/* Left Main Card */}
          <div ref={narrativeCardRef} className="glass-card" style={{ padding: '36px', background: '#ffffff', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Turning Technical Complexity Into Simple Digital Growth
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
              We partner with ambitious companies to build fast React interfaces, reliable microservices, and automated cloud infrastructure that deliver real ROI.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(13, 148, 136, 0.1)', border: '1px solid rgba(13, 148, 136, 0.25)', color: 'var(--accent-mint)' }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Secure Code</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bank-grade security.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(2, 132, 199, 0.1)', border: '1px solid rgba(2, 132, 199, 0.25)', color: 'var(--accent-cyan)' }}>
                  <Zap size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Fast Loading</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sub-second page speeds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div ref={featureGridRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="glass-card interactive-card about-subcard" style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ margin: '0 auto 14px', width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(13, 148, 136, 0.1)', border: '1px solid rgba(13, 148, 136, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-mint)' }}>
                <Code2 size={22} />
              </div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '6px' }}>Clean Architecture</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Reusable modules and scalable code structure.</p>
            </div>

            <div className="glass-card interactive-card about-subcard" style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ margin: '0 auto 14px', width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-violet)' }}>
                <Award size={22} />
              </div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '6px' }}>On-Time Delivery</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Clear milestones and predictable timelines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
