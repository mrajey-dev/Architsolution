import { useState } from 'react';
import { 
  Monitor, 
  Rocket, 
  BarChart3, 
  Search, 
  Settings, 
  Sparkles, 
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    step: 'OPTION 01',
    number: '01',
    title: 'Web Development',
    subtitle: 'Fast React & Next.js Platforms',
    description: 'High-performance web applications built with modern React architecture and sub-second load speeds.',
    icon: Monitor,
    color: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.25)',
    left: 15,
    top: 175,
    features: ['Single Page React Apps', 'SEO & Performance']
  },
  {
    step: 'OPTION 02',
    number: '02',
    title: 'Mobile App Development',
    subtitle: 'iOS & Android Applications',
    description: 'Native and cross-platform mobile solutions delivering smooth 60fps user experiences.',
    icon: Rocket,
    color: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    left: 245,
    top: 25,
    features: ['React Native & Flutter', 'Offline Sync & Push']
  },
  {
    step: 'OPTION 03',
    number: '03',
    title: 'Custom Enterprise Software',
    subtitle: 'Tailored SaaS & ERP Systems',
    description: 'End-to-end custom software built to streamline complex business workflows and automate operations.',
    icon: BarChart3,
    color: '#4f46e5',
    glowColor: 'rgba(79, 70, 229, 0.25)',
    left: 475,
    top: 175,
    features: ['Custom ERP & CRM', 'API Microservices']
  },
  {
    step: 'OPTION 04',
    number: '04',
    title: 'AI & Automation Systems',
    subtitle: 'Intelligent AI Workflows',
    description: 'Intelligent automation agents, LLM integrations, and predictive data systems to accelerate productivity.',
    icon: Search,
    color: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    left: 705,
    top: 25,
    features: ['AI Agent Workflows', 'Smart Data Analytics']
  },
  {
    step: 'OPTION 05',
    number: '05',
    title: 'Cloud & DevOps Solutions',
    subtitle: 'AWS Cloud Infrastructure',
    description: 'Scalable cloud infrastructure, automated CI/CD deployment pipelines, and 99.9% uptime monitoring.',
    icon: Settings,
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    left: 935,
    top: 175,
    features: ['AWS & Docker Deploy', 'CI/CD Automation']
  }
];

export const Services = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="services"
      style={{
        padding: '100px 0 120px',
        position: 'relative',
        background: '#ffffff',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '550px',
          background: 'radial-gradient(ellipse at center, rgba(244, 246, 251, 0.9) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(79, 70, 229, 0.08)', color: '#4f46e5', borderColor: 'rgba(79, 70, 229, 0.25)' }}>
            <Sparkles size={14} color="#4f46e5" /> Engineering Capabilities
          </div>
          <h2 className="section-title">
            Our Core <span className="gradient-text">Services & Solutions</span>
          </h2>
          <p className="section-subtitle">
            An end-to-end digital lifecycle designed to take your ideas from concept to enterprise scale.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PIXEL-PERFECT INTERCONNECTED CIRCUIT PIPELINE (DESKTOP)                   */}
        {/* ========================================================================= */}
        <div className="pipeline-desktop-wrapper" style={{ width: '100%', maxWidth: '1140px', margin: '30px auto 0' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '470px'
            }}
          >
            {/* SVG Connecting Flow Lines with exact card bounding coordinates */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1140 470"
              fill="none"
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 2
              }}
            >
              <defs>
                <marker id="arrRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
                </marker>
                <marker id="arrOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f97316" />
                </marker>
                <marker id="arrIndigo" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#4f46e5" />
                </marker>
                <marker id="arrPurple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8b5cf6" />
                </marker>
              </defs>

              {/* 1. Circuit Path: Card 1 -> Card 2 */}
              <path
                d="M 140 175 L 41 175 Q 15 175 15 201 L 15 419 Q 15 445 41 445 L 189 445 L 320 445 Q 345 445 345 420 L 345 305"
                stroke="#f43f5e"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                markerEnd="url(#arrRed)"
              />

              {/* 2. Circuit Path: Card 2 -> Card 3 */}
              <path
                d="M 245 210 L 245 51 Q 245 25 271 25 L 419 25 L 550 25 Q 575 25 575 50 L 575 165"
                stroke="#f97316"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                markerEnd="url(#arrOrange)"
              />

              {/* 3. Circuit Path: Card 3 -> Card 4 */}
              <path
                d="M 600 175 L 501 175 Q 475 175 475 201 L 475 419 Q 475 445 501 445 L 649 445 L 780 445 Q 805 445 805 420 L 805 305"
                stroke="#4f46e5"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                markerEnd="url(#arrIndigo)"
              />

              {/* 4. Circuit Path: Card 4 -> Card 5 */}
              <path
                d="M 705 210 L 705 51 Q 705 25 731 25 L 879 25 L 1010 25 Q 1035 25 1035 50 L 1035 165"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                markerEnd="url(#arrPurple)"
              />

              {/* 5. Circuit Path: Card 5 outline */}
              <path
                d="M 1010 175 L 961 175 Q 935 175 935 201 L 935 419 Q 935 445 961 445 L 1109 445 Q 1135 445 1135 419 L 1135 201 Q 1135 175 1109 175 L 1060 175"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Exactly positioned 5 Cards */}
            {services.map((item, idx) => {
              const IconComp = item.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={item.number}
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    position: 'absolute',
                    left: `${item.left}px`,
                    top: `${item.top}px`,
                    width: '200px',
                    height: '270px',
                    background: '#ffffff',
                    borderRadius: '26px',
                    padding: '22px 18px',
                    boxShadow: isHovered
                      ? `0 25px 45px -10px ${item.glowColor}`
                      : `0 18px 36px -12px ${item.glowColor}, 0 2px 6px rgba(15, 23, 42, 0.04)`,
                    border: '1px solid rgba(226, 232, 240, 0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    zIndex: 5,
                    transition: 'box-shadow 0.25s ease, transform 0.25s ease'
                  }}
                >
                  {/* Top Icon */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color,
                      background: `${item.color}14`,
                      marginBottom: '10px',
                      transition: 'transform 0.25s ease',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <IconComp size={22} />
                  </div>

                  {/* Step Label */}
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      color: item.color,
                      letterSpacing: '0.04em',
                      marginBottom: '4px'
                    }}
                  >
                    {item.step}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '6px'
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.4,
                      marginBottom: '10px'
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '3px', width: '100%' }}>
                    {item.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          fontSize: '0.66rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px'
                        }}
                      >
                        <Check size={10} color={item.color} /> {feat}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE MOBILE / TABLET TIMELINE (<992px)                              */}
        {/* ========================================================================= */}
        <div className="pipeline-mobile-wrapper" style={{ display: 'none', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
          {services.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.number}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '24px',
                  border: `1.5px solid rgba(226, 232, 240, 0.9)`,
                  boxShadow: `0 15px 30px -8px ${item.glowColor}`,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: `${item.color}14`,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <IconComp size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: item.color, fontFamily: 'var(--font-mono)' }}>
                    {item.step}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: '4px 0 6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '8px' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {item.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        style={{
                          fontSize: '0.7rem',
                          color: item.color,
                          background: `${item.color}10`,
                          padding: '2px 8px',
                          borderRadius: '8px',
                          fontWeight: 600
                        }}
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .pipeline-desktop-wrapper { display: none !important; }
          .pipeline-mobile-wrapper { display: flex !important; }
        }
      `}</style>
    </section>
  );
};

