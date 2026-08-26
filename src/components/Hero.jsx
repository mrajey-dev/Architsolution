import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Monitor,
  Tablet,
  Smartphone,
  LayoutGrid,
  CheckCircle2,
  TrendingUp,
  Heart,
  Code2,
  Headphones,
  Users,
  ArrowRight,
  Sparkles,
  Menu
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const Hero = () => {
  const [activeDevice, setActiveDevice] = useState('all'); // 'all' | 'desktop' | 'tablet' | 'mobile'
  const containerRef = useRef(null);

  // Smooth 3D Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);

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

  // Avatar demo stack
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'radial-gradient(ellipse at 50% 15%, #eef2ff 0%, #f8fafd 60%, #ffffff 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background Studio Subtle Grids & Ambient Glow Orbs */}
      <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }} />
      <div className="glow-orb glow-indigo" style={{ width: '600px', height: '600px', top: '-10%', left: '15%' }} />
      <div className="glow-orb glow-pink" style={{ width: '450px', height: '450px', bottom: '5%', right: '10%' }} />
      <div className="glow-orb glow-cyan" style={{ width: '500px', height: '500px', top: '30%', right: '35%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Main 3D Composition Stage */}
        <motion.div
          className="perspective-container"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '620px',
            position: 'relative'
          }}
        >
          {/* ======================================================== */}
          {/* FLOATING GLASS WIDGET 1: LEFT VERTICAL DEVICE DOCK       */}
          {/* ======================================================== */}
          <motion.div
            className="animate-float-1 glass-widget"
            style={{
              position: 'absolute',
              left: '2%',
              top: '18%',
              zIndex: 30,
              padding: '12px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              borderRadius: '24px',
              backdropFilter: 'blur(24px)',
              background: 'rgba(255, 255, 255, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 40px -10px rgba(99, 102, 241, 0.15)'
            }}
          >
            <button
              onClick={() => setActiveDevice('all')}
              title="All Devices (Showcase)"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: activeDevice === 'all' ? 'var(--gradient-primary)' : 'rgba(241, 245, 249, 0.9)',
                color: activeDevice === 'all' ? '#ffffff' : '#64748b',
                boxShadow: activeDevice === 'all' ? '0 6px 16px rgba(236, 72, 153, 0.35)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setActiveDevice(prev => prev === 'desktop' ? 'all' : 'desktop')}
              title="Desktop View (Click to isolate)"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: activeDevice === 'desktop' ? 'var(--gradient-primary)' : 'rgba(241, 245, 249, 0.9)',
                color: activeDevice === 'desktop' ? '#ffffff' : '#6366f1',
                boxShadow: activeDevice === 'desktop' ? '0 6px 16px rgba(236, 72, 153, 0.35)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              <Monitor size={20} />
            </button>
            <button
              onClick={() => setActiveDevice(prev => prev === 'tablet' ? 'all' : 'tablet')}
              title="Tablet View (Click to isolate)"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: activeDevice === 'tablet' ? 'var(--gradient-primary)' : 'rgba(241, 245, 249, 0.9)',
                color: activeDevice === 'tablet' ? '#ffffff' : '#0284c7',
                boxShadow: activeDevice === 'tablet' ? '0 6px 16px rgba(236, 72, 153, 0.35)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              <Tablet size={20} />
            </button>
            <button
              onClick={() => setActiveDevice(prev => prev === 'mobile' ? 'all' : 'mobile')}
              title="Mobile View (Click to isolate)"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: activeDevice === 'mobile' ? 'var(--gradient-primary)' : 'rgba(241, 245, 249, 0.9)',
                color: activeDevice === 'mobile' ? '#ffffff' : '#10b981',
                boxShadow: activeDevice === 'mobile' ? '0 6px 16px rgba(236, 72, 153, 0.35)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              <Smartphone size={20} />
            </button>
          </motion.div>

          {/* ======================================================== */}
          {/* FLOATING GLASS WIDGET 2: TOP-RIGHT LIVE ANALYTICS CARD   */}
          {/* ======================================================== */}
          <motion.div
            className="animate-float-2 glass-widget"
            style={{
              position: 'absolute',
              right: '4%',
              top: '8%',
              zIndex: 30,
              padding: '14px 18px',
              borderRadius: '20px',
              backdropFilter: 'blur(24px)',
              background: 'rgba(255, 255, 255, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              minWidth: '170px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Live Growth</span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#059669',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}
              >
                <TrendingUp size={12} /> +2.4%
              </div>
            </div>
            {/* Glowing SVG Wave Chart */}
            <svg width="140" height="36" viewBox="0 0 140 36" fill="none">
              <path
                d="M 2 24 C 25 10, 45 32, 70 18 C 95 6, 115 28, 138 8"
                stroke="url(#chartGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* ======================================================== */}
          {/* FLOATING GLASS WIDGET 3: RIGHT SOCIAL HEART BADGE        */}
          {/* ======================================================== */}
          <motion.div
            className="animate-float-3"
            style={{
              position: 'absolute',
              right: '1%',
              top: '38%',
              zIndex: 32,
              padding: '14px 18px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.9) 0%, rgba(236, 72, 153, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              boxShadow: '0 16px 36px -6px rgba(236, 72, 153, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)'
              }}
            >
              <Heart size={20} fill="#ec4899" color="#ec4899" />
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.02em' }}>
              1.2K
            </span>
          </motion.div>

          {/* ======================================================== */}
          {/* FLOATING GLASS WIDGET 4: BOTTOM-LEFT NOTIFICATION TOAST  */}
          {/* ======================================================== */}
          <motion.div
            className="animate-float-2 glass-widget"
            style={{
              position: 'absolute',
              left: '4%',
              bottom: '4%',
              zIndex: 35,
              padding: '14px 20px',
              borderRadius: '20px',
              backdropFilter: 'blur(24px)',
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              maxWidth: '300px'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
                boxShadow: '0 6px 16px rgba(16, 185, 129, 0.35)'
              }}
            >
              <CheckCircle2 size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Project Completed!
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Website redesign was completed successfully.
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* FLOATING GLASS WIDGET 5: CENTER-BOTTOM DEV CODE SNIPPET  */}
          {/* ======================================================== */}
          <motion.div
            className="animate-float-1 glass-widget"
            style={{
              position: 'absolute',
              left: '44%',
              bottom: '2%',
              zIndex: 35,
              padding: '12px 18px',
              borderRadius: '20px',
              backdropFilter: 'blur(24px)',
              background: 'rgba(255, 255, 255, 0.82)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
              }}
            >
              <Code2 size={20} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ width: '65px', height: '6px', borderRadius: '4px', background: 'var(--accent-pink)' }} />
              <div style={{ width: '45px', height: '6px', borderRadius: '4px', background: 'var(--accent-cyan)' }} />
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* FLOATING GLASS WIDGET 6: BOTTOM-RIGHT 3D BAR CHART       */}
          {/* ======================================================== */}
          <motion.div
            className="animate-float-3 glass-widget"
            style={{
              position: 'absolute',
              right: '6%',
              bottom: '6%',
              zIndex: 36,
              padding: '14px 18px',
              borderRadius: '20px',
              backdropFilter: 'blur(24px)',
              background: 'rgba(255, 255, 255, 0.82)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.14)',
              display: 'flex',
              alignItems: 'flex-end',
              gap: '8px',
              height: '68px'
            }}
          >
            <div style={{ width: '12px', height: '24px', borderRadius: '6px', background: '#fbbf24' }} />
            <div style={{ width: '12px', height: '44px', borderRadius: '6px', background: '#ec4899' }} />
            <div style={{ width: '12px', height: '34px', borderRadius: '6px', background: '#8b5cf6' }} />
          </motion.div>

          {/* ========================================================================= */}
          {/* CENTER 3D HARDWARE RIG: DESKTOP MONITOR + TABLET + SMARTPHONE COMPOSITION */}
          {/* ========================================================================= */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '920px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* ------------------------------------------------------------- */}
            {/* 1. DESKTOP MONITOR DISPLAY (Main Canvas)                      */}
            {/* ------------------------------------------------------------- */}
            <div
              className="monitor-frame"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: activeDevice === 'desktop' ? '820px' : '780px',
                aspectRatio: '16 / 10',
                background: '#1e293b',
                borderRadius: '32px',
                padding: '14px',
                border: '3px solid #64748b',
                boxShadow: 'var(--shadow-device)',
                display: (activeDevice === 'all' || activeDevice === 'desktop') ? 'flex' : 'none',
                flexDirection: 'column',
                transform: activeDevice === 'desktop' ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 10
              }}
            >
              {/* Monitor Screen Surface */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '22px',
                  background: 'var(--gradient-screen-hero)',
                  overflow: 'hidden',
                  padding: '24px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* 3D Iridescent Fluid Ribbon Graphic inside Screen */}
                <div
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '15%',
                    width: '320px',
                    height: '320px',
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0 20px 30px rgba(129, 140, 248, 0.45))',
                    opacity: 0.95
                  }}
                >
                  <svg viewBox="0 0 200 200" width="100%" height="100%">
                    <defs>
                      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="35%" stopColor="#818cf8" />
                        <stop offset="70%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M 50 140 C 30 70, 90 20, 140 50 C 180 80, 160 160, 110 160 C 70 160, 50 120, 80 90 C 110 60, 150 90, 140 120"
                      fill="none"
                      stroke="url(#ribbonGrad)"
                      strokeWidth="24"
                      strokeLinecap="round"
                      filter="url(#glow)"
                    />
                  </svg>
                </div>

                {/* Inner Screen Navigation Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 900,
                        fontSize: '0.75rem'
                      }}
                    >
                      P
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                      Your logo
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="screen-nav-links">
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>Home</span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>Features</span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>Pricing</span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>About</span>
                    <button
                      style={{
                        background: 'rgba(139, 92, 246, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '4px 14px',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </div>

                {/* Inner Screen Hero Copy */}
                <div style={{ maxWidth: '420px', zIndex: 12, marginTop: '20px' }}>
                  <h2
                    style={{
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.3rem)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                      color: '#ffffff',
                      marginBottom: '10px'
                    }}
                  >
                    ERP Software <br />
                    <span
                      style={{
                        background: 'var(--gradient-text-accent)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      For Every Business
                    </span>
                  </h2>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      lineHeight: 1.4,
                      color: 'var(--text-light-muted)',
                      marginBottom: '18px'
                    }}
                  >
                    Transform your business with our powerful, scalable, and intuitive ERP software. Designed to streamline operations and drive growth.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <a
                      href="#services"
                      style={{
                        background: 'var(--gradient-primary)',
                        color: '#ffffff',
                        padding: '8px 18px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        boxShadow: 'var(--shadow-glow-pink)'
                      }}
                    >
                      Get Started
                    </a>
                    <a
                      href="#projects"
                      className="btn-glass-play"
                      style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                    >
                      <Play size={10} fill="#ffffff" /> Learn More
                    </a>
                  </div>
                </div>

                {/* Inner Screen Frosted Metrics Bar (3 Pillars) */}
                <div
                  style={{
                    zIndex: 12,
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '16px',
                    padding: '10px 16px',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr 1fr',
                    gap: '12px',
                    alignItems: 'center',
                    maxWidth: '430px'
                  }}
                >
                  {/* Metric 1: Happy Customers */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Users size={12} color="#ffffff" />
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>18K+</span>
                    </div>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)' }}>Happy Customers</span>
                    {/* Avatar stack */}
                    <div style={{ display: 'flex', marginTop: '2px' }}>
                      {avatars.map((url, i) => (
                        <img
                          key={i}
                          src={url}
                          alt="Customer"
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            border: '1.5px solid #ffffff',
                            marginLeft: i > 0 ? '-6px' : '0'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Metric 2: Satisfaction Rate */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>98%</span>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)' }}>Satisfaction Rate</span>
                    {/* Glowing Circular Gauge */}
                    <svg width="24" height="24" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#2dd4bf"
                        strokeWidth="3.5"
                        strokeDasharray="80 100"
                        strokeLinecap="round"
                        transform="rotate(-90 18 18)"
                      />
                    </svg>
                  </div>

                  {/* Metric 3: 24/7 Support */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Headphones size={12} color="#c084fc" />
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff' }}>24/7</span>
                    </div>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.7)' }}>Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitor Stand Base and Stem */}
            <div
              style={{
                position: 'absolute',
                bottom: '-32px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '140px',
                height: '35px',
                background: 'linear-gradient(180deg, #94a3b8 0%, #cbd5e1 100%)',
                borderRadius: '8px 8px 16px 16px',
                zIndex: 4,
                boxShadow: '0 15px 30px rgba(15, 23, 42, 0.2)',
                display: (activeDevice === 'all' || activeDevice === 'desktop') ? 'block' : 'none'
              }}
            />

            {/* ------------------------------------------------------------- */}
            {/* 2. TABLET DISPLAY (Overlapping Portrait Device)               */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="tablet-frame"
              style={{
                position: activeDevice === 'tablet' ? 'relative' : 'absolute',
                right: activeDevice === 'tablet' ? 'auto' : '10%',
                bottom: activeDevice === 'tablet' ? 'auto' : '-25px',
                margin: activeDevice === 'tablet' ? '0 auto' : '0',
                width: activeDevice === 'tablet' ? '340px' : '270px',
                height: activeDevice === 'tablet' ? '460px' : '380px',
                background: '#0f172a',
                borderRadius: '28px',
                padding: '10px',
                border: '2px solid #64748b',
                boxShadow: '0 30px 60px -10px rgba(15, 23, 42, 0.35)',
                display: (activeDevice === 'all' || activeDevice === 'tablet') ? 'flex' : 'none',
                flexDirection: 'column',
                zIndex: 20,
                transform: activeDevice === 'tablet' ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Tablet Screen Surface */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  background: 'var(--gradient-screen-tablet)',
                  overflow: 'hidden',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Tablet Nav */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '4px',
                        background: 'var(--gradient-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '0.6rem',
                        fontWeight: 900
                      }}
                    >
                      P
                    </div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffffff' }}>Your logo</span>
                  </div>
                  <Menu size={14} color="#ffffff" />
                </div>

                {/* Tablet Copy */}
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '6px' }}>
                    CRM<br />
                    <span style={{ color: 'var(--accent-cyan)' }}>For Your Business</span>
                  </h3>
                  <p style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '10px' }}>
                    Manage customer relationships, sales, leads, and interactions efficiently from one centralized system.
                  </p>
                  <button
                    style={{
                      background: 'var(--gradient-primary)',
                      color: '#ffffff',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.68rem',
                      fontWeight: 700
                    }}
                  >
                    Get Started
                  </button>
                </div>

                {/* Tablet Metric Stack */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: '8px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#ffffff' }}>18K+</div>
                    <div style={{ fontSize: '0.55rem', color: 'rgba(255, 255, 255, 0.65)' }}>Users</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>98%</div>
                    <div style={{ fontSize: '0.55rem', color: 'rgba(255, 255, 255, 0.65)' }}>Rate</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#c084fc' }}>24/7</div>
                    <div style={{ fontSize: '0.55rem', color: 'rgba(255, 255, 255, 0.65)' }}>Support</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ------------------------------------------------------------- */}
            {/* 3. SMARTPHONE DISPLAY (Frontmost Handheld Device)             */}
            {/* ------------------------------------------------------------- */}
            <motion.div
              className="phone-frame"
              style={{
                position: activeDevice === 'mobile' ? 'relative' : 'absolute',
                right: activeDevice === 'mobile' ? 'auto' : '-2%',
                bottom: activeDevice === 'mobile' ? 'auto' : '-45px',
                margin: activeDevice === 'mobile' ? '0 auto' : '0',
                width: activeDevice === 'mobile' ? '250px' : '180px',
                height: activeDevice === 'mobile' ? '460px' : '310px',
                background: '#090d16',
                borderRadius: '26px',
                padding: '7px',
                border: '2px solid #475569',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.45)',
                display: (activeDevice === 'all' || activeDevice === 'mobile') ? 'flex' : 'none',
                flexDirection: 'column',
                zIndex: 25,
                transform: activeDevice === 'mobile' ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Phone Screen Surface */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '18px',
                  background: 'var(--gradient-screen-mobile)',
                  padding: '12px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Phone Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '3px',
                        background: 'var(--gradient-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '0.5rem',
                        fontWeight: 900
                      }}
                    >
                      P
                    </div>
                    <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#ffffff' }}>Your logo</span>
                  </div>
                  <Menu size={12} color="#ffffff" />
                </div>

                {/* Phone Headline & CTA */}
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '4px' }}>
                    App Development<br />
                    <span style={{ color: 'var(--accent-cyan)' }}>Android & iOS</span>
                  </div>
                  <div style={{ fontSize: '0.58rem', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '8px' }}>
                    Beautiful & responsive.
                  </div>
                  <button
                    style={{
                      width: '100%',
                      background: 'var(--gradient-primary)',
                      color: '#ffffff',
                      padding: '4px 0',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      textAlign: 'center'
                    }}
                  >
                    Get Started
                  </button>
                </div>

                {/* Phone Bottom Customer Avatar Bar */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.58rem', fontWeight: 700, color: '#ffffff' }}>18K+ Users</span>
                  <div style={{ display: 'flex' }}>
                    {avatars.slice(0, 3).map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt="Customer"
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          border: '1px solid #ffffff',
                          marginLeft: i > 0 ? '-3px' : '0'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* HERO CALL-TO-ACTION & VALUE PROPOSITION BANNER                            */}
        {/* ========================================================================= */}

      </div>

      <style>{`
        @media (max-width: 992px) {
          .screen-nav-links { display: none !important; }
          .tablet-frame { display: none !important; }
          .phone-frame { display: none !important; }
        }
      `}</style>
    </section>
  );
};

