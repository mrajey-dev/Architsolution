import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Server, Database, Cloud, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const techNodes = [
  {
    id: 'client',
    step: '01',
    name: 'Client Applications',
    subtitle: 'React & Mobile Frontend',
    description: 'High-performance React web interfaces and React Native mobile apps.',
    techs: ['React', 'Next.js', 'React Native', 'TypeScript'],
    icon: Layout
  },
  {
    id: 'api',
    step: '02',
    name: 'API Microservices',
    subtitle: 'Node.js & Python Services',
    description: 'Fast REST and GraphQL APIs handling business logic and secure authentication.',
    techs: ['Node.js', 'Express', 'Python', 'GraphQL'],
    icon: Server
  },
  {
    id: 'database',
    step: '03',
    name: 'Database Architecture',
    subtitle: 'PostgreSQL & Redis Cache',
    description: 'Relational data schemas, indexing, and high-speed in-memory caching.',
    techs: ['PostgreSQL', 'Redis', 'MongoDB'],
    icon: Database
  },
  {
    id: 'cloud',
    step: '04',
    name: 'Cloud & Hosting',
    subtitle: 'AWS & Docker Hosting',
    description: 'Containerized deployment pipelines with automated SSL and 99.9% uptime.',
    techs: ['AWS', 'Docker', 'Kubernetes', 'Vercel'],
    icon: Cloud
  }
];

export const Technology = () => {
  const sectionRef = useRef(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selectedNode, setSelectedNode] = useState(techNodes[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 0.5,
        onUpdate: (self) => {
          const step = Math.min(
            Math.floor(self.progress * techNodes.length),
            techNodes.length - 1
          );
          setActiveStepIndex(step);
          setSelectedNode(techNodes[step]);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="technology" ref={sectionRef} style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="glow-orb glow-indigo" style={{ bottom: '10%', right: '5%', width: '450px', height: '450px', opacity: 0.1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <div className="section-tag">
            <Server size={14} color="var(--accent-mint)" /> Clean Architecture
          </div>
          <h2 className="section-title">
            Our Core <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested tech pipeline built for security, speed, and easy scalability.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '40px' }}>

          {/* Left Pipeline Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            {techNodes.map((node, index) => {
              const IconComp = node.icon;
              const isLit = index <= activeStepIndex;
              const isSelected = selectedNode.id === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setActiveStepIndex(index);
                    setSelectedNode(node);
                  }}
                  className="glass-card interactive-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 20px',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    border: isSelected
                      ? '1.5px solid var(--accent-mint)'
                      : isLit
                        ? '1px solid rgba(13, 148, 136, 0.35)'
                        : '1px solid var(--glass-border)',
                    background: isLit ? '#ffffff' : '#f8fafc',
                    opacity: isLit ? 1 : 0.7,
                    transform: isSelected ? 'translateX(6px)' : 'none',
                    boxShadow: isSelected ? '0 4px 16px rgba(13, 148, 136, 0.15)' : 'var(--shadow-sm)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: isLit ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isLit ? '#ffffff' : 'var(--text-muted)',
                      boxShadow: isLit ? '0 2px 8px rgba(13, 148, 136, 0.3)' : 'none',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={20} />
                  </div>

                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: isLit ? 'var(--accent-mint)' : 'var(--text-muted)', fontWeight: 700 }}>
                        {node.step}
                      </span>
                      <h4 style={{ fontSize: '1rem', color: isLit ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                        {node.name}
                      </h4>
                    </div>
                  </div>

                  {isLit && (
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-mint)', boxShadow: '0 0 6px rgba(13, 148, 136, 0.5)' }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Inspector Card */}
          <div style={{ position: 'sticky', top: '110px' }}>
            <div
              className="glass-card"
              style={{
                padding: '32px',
                border: '1.5px solid rgba(13, 148, 136, 0.3)',
                boxShadow: 'var(--shadow-md)',
                background: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span className="section-tag" style={{ margin: 0 }}>
                  STEP {selectedNode.step} OF 04
                </span>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <Check size={14} /> ACTIVE NODE
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                {selectedNode.name}
              </h3>

              <div style={{ fontSize: '0.9rem', color: 'var(--accent-indigo)', marginBottom: '16px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                {selectedNode.subtitle}
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                {selectedNode.description}
              </p>

              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                Tech Deployed:
              </h4>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedNode.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(13, 148, 136, 0.08)',
                      border: '1px solid rgba(13, 148, 136, 0.25)',
                      color: 'var(--accent-mint)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
