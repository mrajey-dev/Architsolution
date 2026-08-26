import { useRef } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity, 
  Sparkles, 
  ArrowUpRight,
  Database,
  Layers,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const About = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // Smooth 3D Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '110px 0 100px',
        position: 'relative',
        background: 'linear-gradient(180deg, #f8fafd 0%, #edf3f8 40%, #e2ebf4 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Studio Soft Ambient Lights */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(168, 197, 222, 0.45) 0%, rgba(248, 250, 253, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <div className="section-tag" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#2563eb', borderColor: 'rgba(59, 130, 246, 0.25)' }}>
            <Activity size={14} color="#2563eb" /> Real-Time Business Analytics
          </div>
          <h2 className="section-title">
            Crafting Software for <span className="gradient-text">Business Growth</span>
          </h2>
          <p className="section-subtitle">
            We engineer high-performance systems with real-time analytics, automated data pipelines, and actionable executive insights.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3D FLOATING ANALYTICS CARDS UNIVERSE (MATCHING ATTACHED REFERENCE UI/UX)  */}
        {/* ========================================================================= */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1180px',
            margin: '0 auto',
            minHeight: '620px',
            perspective: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              position: 'relative',
              width: '100%',
              height: '580px'
            }}
          >
            {/* ------------------------------------------------------------- */}
            {/* 1. FLOATING 3D DONUT PIE CARD (Left Top)                      */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-1"
              whileHover={{ scale: 1.05, zIndex: 40 }}
              style={{
                position: 'absolute',
                left: '2%',
                top: '22%',
                zIndex: 15,
                background: '#ffffff',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 25px 50px -12px rgba(99, 130, 165, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.9) inset',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                width: '180px',
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease'
              }}
            >
              {/* Floating Golden Tag $14% */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '-10px',
                  background: '#f59e0b',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '12px',
                  boxShadow: '0 8px 16px rgba(245, 158, 11, 0.35)',
                  zIndex: 20
                }}
              >
                $14%
              </div>

              {/* 3D Extruded Pie Chart SVG */}
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="42" fill="none" stroke="#e2e8f0" strokeWidth="22" />
                <circle
                  cx="60"
                  cy="60"
                  r="42"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="24"
                  strokeDasharray="180 280"
                  strokeDashoffset="25"
                  strokeLinecap="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="42"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="24"
                  strokeDasharray="60 280"
                  strokeDashoffset="-160"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 2. DONUT + METRIC BREAKDOWN CARD (Top Left Center)            */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-2"
              whileHover={{ scale: 1.04, zIndex: 40 }}
              style={{
                position: 'absolute',
                left: '20%',
                top: '4%',
                zIndex: 16,
                background: '#ffffff',
                borderRadius: '24px',
                padding: '20px',
                boxShadow: '0 25px 50px -12px rgba(99, 130, 165, 0.28)',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                width: '210px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>Sales Insights</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="22" fill="none" stroke="#e2e8f0" strokeWidth="12" />
                  <circle
                    cx="32"
                    cy="32"
                    r="22"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="12"
                    strokeDasharray="75 140"
                    strokeDashoffset="10"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="22"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="12"
                    strokeDasharray="35 140"
                    strokeDashoffset="-70"
                  />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                  <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: '#f1f5f9' }} />
                  <div style={{ width: '70%', height: '8px', borderRadius: '4px', background: '#f1f5f9' }} />
                  <div style={{ width: '85%', height: '8px', borderRadius: '4px', background: '#f1f5f9' }} />
                </div>
              </div>
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 3. FLOATING BADGE: Business Analytics                         */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-3"
              style={{
                position: 'absolute',
                left: '17%',
                top: '42%',
                zIndex: 25,
                background: '#ffffff',
                borderRadius: '16px',
                padding: '10px 18px',
                boxShadow: '0 15px 30px rgba(99, 130, 165, 0.22)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                fontWeight: 800,
                fontSize: '0.85rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em'
              }}
            >
              Business Analytics
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 4. DUAL SPLINE KPI GRAPH CARD (Top Center)                    */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-1"
              whileHover={{ scale: 1.03, zIndex: 40 }}
              style={{
                position: 'absolute',
                left: '42%',
                top: '8%',
                zIndex: 18,
                background: '#ffffff',
                borderRadius: '24px',
                padding: '22px',
                boxShadow: '0 28px 55px -12px rgba(99, 130, 165, 0.3)',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                width: '240px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)' }}>KPI Analysis</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#10b981' }}>+48.2%</span>
              </div>

              {/* Multi-Line Wave SVG with Glowing Nodes */}
              <svg width="100%" height="90" viewBox="0 0 200 90" fill="none">
                {/* Background Grid */}
                <line x1="0" y1="20" x2="200" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="200" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="200" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />

                {/* Yellow Line Wave */}
                <path
                  d="M 10 65 L 45 40 L 80 58 L 120 28 L 160 50 L 190 20"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Blue Line Wave */}
                <path
                  d="M 10 50 L 45 60 L 80 35 L 120 52 L 160 30 L 190 42"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Nodes */}
                <circle cx="45" cy="40" r="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="2.5" />
                <circle cx="120" cy="28" r="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="2.5" />
                <circle cx="80" cy="35" r="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
                <circle cx="160" cy="30" r="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
              </svg>
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 5. TOP RIGHT COMPACT KPI BADGE CARD                           */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-3"
              whileHover={{ scale: 1.05, zIndex: 40 }}
              style={{
                position: 'absolute',
                right: '12%',
                top: '5%',
                zIndex: 20,
                background: '#ffffff',
                borderRadius: '20px',
                padding: '16px 22px',
                boxShadow: '0 20px 45px -10px rgba(99, 130, 165, 0.25)',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                minWidth: '150px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)' }}>KPI</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', border: '2px solid #3b82f6' }} />
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                1095.%
              </div>
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 6. CENTER HIGH-FREQUENCY BAR CHART CARD                       */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-2"
              whileHover={{ scale: 1.03, zIndex: 40 }}
              style={{
                position: 'absolute',
                left: '26%',
                top: '40%',
                zIndex: 22,
                background: '#ffffff',
                borderRadius: '24px',
                padding: '20px 24px',
                boxShadow: '0 25px 50px -12px rgba(99, 130, 165, 0.28)',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                width: '210px',
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)' }}>Load Distribution</span>
              {/* 14 Bar Columns */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '70px', marginTop: '10px' }}>
                {[35, 55, 40, 75, 45, 90, 60, 85, 30, 70, 95, 50, 80, 65].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background: i % 3 === 0 ? '#2563eb' : i % 3 === 1 ? '#60a5fa' : '#93c5fd',
                      borderRadius: '3px'
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 7. BOTTOM LEFT AREA CHART CARD                                */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-1"
              whileHover={{ scale: 1.04, zIndex: 40 }}
              style={{
                position: 'absolute',
                left: '12%',
                bottom: '8%',
                zIndex: 26,
                background: '#ffffff',
                borderRadius: '24px',
                padding: '20px',
                boxShadow: '0 30px 60px -15px rgba(99, 130, 165, 0.32)',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                width: '230px',
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>Traffic Growth</span>
              <svg width="100%" height="70" viewBox="0 0 190 70" fill="none" style={{ marginTop: '8px' }}>
                <defs>
                  <linearGradient id="areaBlueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 5 55 Q 40 50, 70 35 T 130 20 T 185 10 L 185 65 L 5 65 Z"
                  fill="url(#areaBlueGrad)"
                />
                <path
                  d="M 5 55 Q 40 50, 70 35 T 130 20 T 185 10"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="70" cy="35" r="3.5" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="130" cy="20" r="3.5" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="185" cy="10" r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 8. CENTER-RIGHT FEATURED COBALT 3D CARD ("Core Metrics")      */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-2"
              whileHover={{ scale: 1.04, zIndex: 40 }}
              style={{
                position: 'absolute',
                left: '46%',
                bottom: '12%',
                zIndex: 28,
                background: 'linear-gradient(145deg, #4f82b8 0%, #3a689d 100%)',
                borderRadius: '26px',
                padding: '22px 24px',
                boxShadow: '0 30px 60px -12px rgba(58, 104, 157, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.25) inset',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                width: '250px',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>Core System KPI</span>
                <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.2)', padding: '2px 8px', borderRadius: '10px' }}>
                  Live
                </span>
              </div>

              {/* 3D Pill Cylinder Bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '65px', gap: '6px' }}>
                {[
                  { val: 40, col: '#ffffff' },
                  { val: 70, col: '#93c5fd' },
                  { val: 55, col: '#ffffff' },
                  { val: 95, col: '#60a5fa' },
                  { val: 80, col: '#ffffff' }
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${item.val}%`,
                      background: item.col,
                      borderRadius: '8px',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 9. RIGHT DONUT & HORIZONTAL PROGRESS CARD                     */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="animate-float-3"
              whileHover={{ scale: 1.03, zIndex: 40 }}
              style={{
                position: 'absolute',
                right: '4%',
                top: '36%',
                zIndex: 20,
                background: '#ffffff',
                borderRadius: '24px',
                padding: '22px 24px',
                boxShadow: '0 28px 55px -12px rgba(99, 130, 165, 0.3)',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                width: '240px',
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>Business Analytics</span>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
                {/* Semi-Donut Gauge */}
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="22" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                  <circle
                    cx="30"
                    cy="30"
                    r="22"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="10"
                    strokeDasharray="95 140"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="22"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="10"
                    strokeDasharray="30 140"
                    strokeDashoffset="-95"
                  />
                </svg>

                {/* Horizontal Progress Levels */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                  <div style={{ width: '100%', height: '6px', borderRadius: '4px', background: '#3b82f6' }} />
                  <div style={{ width: '80%', height: '6px', borderRadius: '4px', background: '#93c5fd' }} />
                  <div style={{ width: '60%', height: '6px', borderRadius: '4px', background: '#f59e0b' }} />
                  <div style={{ width: '45%', height: '6px', borderRadius: '4px', background: '#e2e8f0' }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Value Highlights Underneath Universe */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginTop: '40px'
          }}
        >
          <div
            className="glass-widget"
            style={{
              padding: '24px',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(37, 99, 235, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb',
                marginBottom: '12px'
              }}
            >
              <Zap size={20} />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Real-Time Metrics
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Instant live synchronization between your databases, customer channels, and executive dashboards.
            </p>
          </div>

          <div
            className="glass-widget"
            style={{
              padding: '24px',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
                marginBottom: '12px'
              }}
            >
              <Layers size={20} />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Modular Scalability
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Built with clean, decoupled architecture that grows seamlessly as your transaction volume scales.
            </p>
          </div>

          <div
            className="glass-widget"
            style={{
              padding: '24px',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981',
                marginBottom: '12px'
              }}
            >
              <CheckCircle2 size={20} />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Predictable ROI
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Clear milestones, bank-grade reliability, and automated workflows designed to accelerate business profits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

