import { useState } from 'react';
import { 
  Users, 
  Search, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const clientsData = {
  active: [
    {
      id: 'kierra',
      name: 'Kierra Mango',
      role: 'CEO at Pulse',
      url: 'www.pulse.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      tag: 'Ready to buy',
      status: 'Enterprise Client',
      projectTitle: 'Pulse HealthTech ERP',
      metrics: '+340% Efficiency',
      impact: 'Automated 120,000+ patient records with HIPAA-compliant React & Node architecture.',
      tech: ['React', 'Next.js', 'PostgreSQL', 'Docker']
    },
    {
      id: 'infosteam',
      name: 'Sarah Chen',
      role: 'CTO at InfoSteam',
      url: 'www.infosteam.io',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      tag: 'Closed Won',
      status: 'Scale-up Partner',
      projectTitle: 'InfoSteam Global Logistics',
      metrics: '99.99% Uptime',
      impact: 'Real-time freight telemetry tracking handling 15M daily geo-coordinate events.',
      tech: ['React Native', 'AWS IoT', 'Redis', 'Python']
    }
  ],
  prospects: [
    {
      id: 'angel',
      name: 'Angel Dokidis',
      role: 'CMO at Info wave',
      url: 'www.infowave.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      tag: 'In Negotiation',
      status: 'AI Platform',
      projectTitle: 'InfoWave AI Insights Engine',
      metrics: '10x Speedup',
      impact: 'Automated predictive marketing engine powered by custom LLM pipeline & Next.js UI.',
      tech: ['Next.js', 'FastAPI', 'PyTorch', 'Tailwind']
    },
    {
      id: 'datavibe',
      name: 'Marcus Vance',
      role: 'VP Engineering at DataVibe',
      url: 'www.datavibe.ai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      tag: 'Proposal Sent',
      status: 'Fintech Cloud',
      projectTitle: 'DataVibe Financial Core',
      metrics: '<30ms Latency',
      impact: 'High-frequency algorithmic trade reconciliation dashboard with sub-second websocket streaming.',
      tech: ['React', 'TypeScript', 'Go', 'Kubernetes']
    }
  ]
};

export const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prospectIdx, setProspectIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentActive = clientsData.active[activeIdx];
  const nextActive = clientsData.active[(activeIdx + 1) % clientsData.active.length];

  const currentProspect = clientsData.prospects[prospectIdx];
  const nextProspect = clientsData.prospects[(prospectIdx + 1) % clientsData.prospects.length];

  return (
    <section
      id="projects"
      style={{
        padding: '110px 0 120px',
        position: 'relative',
        background: '#ffffff',
        overflow: 'hidden'
      }}
    >
      {/* Background Studio Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(241, 245, 249, 0.9) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '50px' }}>
          <div className="section-tag" style={{ background: 'rgba(234, 88, 12, 0.08)', color: '#ea580c', borderColor: 'rgba(234, 88, 12, 0.25)' }}>
            <Users size={14} color="#ea580c" /> Client Portfolio & Relationships
          </div>
          <h2 className="section-title">
            Proven Results with <span className="gradient-text">High-Growth Clients</span>
          </h2>
          <p className="section-subtitle">
            From initial CRM onboarding to enterprise deployment &mdash; see how we deliver measurable value to world-class founders.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CRM PIPELINE CASE STUDIES SHOWCASE (MATCHING REFERENCE UI/UX)             */}
        {/* ========================================================================= */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            position: 'relative',
            minHeight: '480px',
            padding: '20px 0'
          }}
        >
          {/* Animated SVG Connecting Pipeline Path */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 960 440"
            fill="none"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 1
            }}
          >
            {/* Top horizontal dashed pipeline with orange beads */}
            <path
              d="M 230 45 L 515 45 Q 535 45, 535 65 L 535 220"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
            {/* Connector into bottom right card */}
            <path
              d="M 535 220 L 535 260 Q 535 280, 555 280 L 610 280"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>

          {/* ----------------------------------------------------------------------- */}
          {/* TOP-LEFT CLIENT CARD STACK                                              */}
          {/* ----------------------------------------------------------------------- */}
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '420px' }}>
            {/* Top Indicator Header: Ready to buy + Status Beads */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  background: '#ea580c',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  padding: '6px 16px',
                  borderRadius: '12px',
                  boxShadow: '0 8px 18px rgba(234, 88, 12, 0.3)',
                  letterSpacing: '-0.01em'
                }}
              >
                {currentActive.tag}
              </div>

              {/* Dotted Status Indicators */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ea580c', boxShadow: '0 0 8px rgba(234, 88, 12, 0.6)' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ea580c' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ea580c' }} />
              </div>
            </div>

            {/* Stacked Cards Container */}
            <div style={{ position: 'relative', minHeight: '190px' }}>
              {/* Background Stacked Card Preview */}
              <div
                onClick={() => setActiveIdx((prev) => (prev + 1) % clientsData.active.length)}
                style={{
                  position: 'absolute',
                  top: '40px',
                  left: '12px',
                  right: '-12px',
                  height: '135px',
                  background: '#f8fafc',
                  borderRadius: '24px',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 10px 25px rgba(15, 23, 42, 0.04)',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  opacity: 0.7,
                  cursor: 'pointer',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    filter: 'grayscale(60%)',
                    background: '#e2e8f0',
                    flexShrink: 0
                  }}
                >
                  <img src={nextActive.avatar} alt={nextActive.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>{nextActive.url}</span>
                </div>
              </div>

              {/* Foreground Active Profile Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentActive.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveIdx((prev) => (prev + 1) % clientsData.active.length)}
                  style={{
                    position: 'relative',
                    zIndex: 5,
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '22px 24px',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                        flexShrink: 0
                      }}
                    >
                      <img src={currentActive.avatar} alt={currentActive.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px', letterSpacing: '-0.02em' }}>
                        {currentActive.name}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '6px' }}>
                        {currentActive.role}
                      </p>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                        {currentActive.url}
                      </span>
                    </div>
                  </div>

                  {/* Impact Tag Strip */}
                  <div style={{ borderTop: '1px solid rgba(241, 245, 249, 1)', paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ea580c', background: 'rgba(234, 88, 12, 0.08)', padding: '3px 8px', borderRadius: '6px' }}>
                      {currentActive.projectTitle}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Zap size={12} /> {currentActive.metrics}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CENTER CRM PIPELINE HUB & PROSPECTS FILTER BAR                          */}
          {/* ----------------------------------------------------------------------- */}
          <div
            style={{
              position: 'absolute',
              left: '46%',
              top: '42%',
              transform: 'translate(-50%, -50%)',
              zIndex: 15,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            {/* Center Blue CRM Badge */}
            <div
              style={{
                background: '#2563eb',
                color: '#ffffff',
                fontSize: '0.9rem',
                fontWeight: 900,
                padding: '6px 20px',
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                letterSpacing: '0.04em'
              }}
            >
              CRM
            </div>

            {/* Interactive Search / Filter Bar */}
            <div
              style={{
                background: '#f8fafc',
                borderRadius: '14px',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                width: '180px'
              }}
            >
              <Search size={15} color="#94a3b8" />
              <input
                type="text"
                placeholder="New prospects"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)',
                  width: '100%',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* BOTTOM-RIGHT PROSPECT / CLIENT CARD STACK                               */}
          {/* ----------------------------------------------------------------------- */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: '420px',
              marginLeft: 'auto',
              marginTop: '40px'
            }}
          >
            {/* Stacked Cards Container */}
            <div style={{ position: 'relative', minHeight: '190px' }}>
              {/* Background Stacked Card Preview */}
              <div
                onClick={() => setProspectIdx((prev) => (prev + 1) % clientsData.prospects.length)}
                style={{
                  position: 'absolute',
                  top: '40px',
                  left: '12px',
                  right: '-12px',
                  height: '135px',
                  background: '#f8fafc',
                  borderRadius: '24px',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 10px 25px rgba(15, 23, 42, 0.04)',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  opacity: 0.7,
                  cursor: 'pointer',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    filter: 'grayscale(60%)',
                    background: '#e2e8f0',
                    flexShrink: 0
                  }}
                >
                  <img src={nextProspect.avatar} alt={nextProspect.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>{nextProspect.url}</span>
                </div>
              </div>

              {/* Foreground Active Prospect Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProspect.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setProspectIdx((prev) => (prev + 1) % clientsData.prospects.length)}
                  style={{
                    position: 'relative',
                    zIndex: 5,
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '22px 24px',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                        flexShrink: 0
                      }}
                    >
                      <img src={currentProspect.avatar} alt={currentProspect.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px', letterSpacing: '-0.02em' }}>
                        {currentProspect.name}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '6px' }}>
                        {currentProspect.role}
                      </p>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                        {currentProspect.url}
                      </span>
                    </div>
                  </div>

                  {/* Impact Tag Strip */}
                  <div style={{ borderTop: '1px solid rgba(241, 245, 249, 1)', paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', background: 'rgba(37, 99, 235, 0.08)', padding: '3px 8px', borderRadius: '6px' }}>
                      {currentProspect.projectTitle}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Zap size={12} /> {currentProspect.metrics}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Global Impact Summary Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '60px'
          }}
        >
          <div
            className="glass-widget"
            style={{
              padding: '20px 24px',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>100%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>On-Time Product Delivery</div>
            </div>
          </div>

          <div
            className="glass-widget"
            style={{
              padding: '20px 24px',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>99.99%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enterprise Cloud Reliability</div>
            </div>
          </div>

          <div
            className="glass-widget"
            style={{
              padding: '20px 24px',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>40M+</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Global API Invocations</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

