import { useEffect, useRef } from 'react';

export const SparkleParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive particle attraction
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate 60 interactive floating sparkles & ambient stars
    const particleCount = Math.min(65, Math.floor(window.innerWidth / 22));
    const particles = [];

    const colors = ['#00f5a0', '#6366f1', '#00d2ff', '#a855f7', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.15, // Gentle float upward
        alpha: Math.random() * 0.8 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        isSparkleStar: Math.random() > 0.6,
        rotation: Math.random() * Math.PI * 2
      });
    }

    // Draw 4-point sparkle star shape
    const drawSparkleStar = (x, y, radius, color, alpha, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;

      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos((i * Math.PI) / 2) * radius, Math.sin((i * Math.PI) / 2) * radius);
        ctx.lineTo((Math.cos((i * Math.PI) / 2 + Math.PI / 4) * radius) / 3, (Math.sin((i * Math.PI) / 2 + Math.PI / 4) * radius) / 3);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle mouse ambient glow spotlight
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
        gradient.addColorStop(0.5, 'rgba(0, 245, 160, 0.04)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Update & Draw Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += 0.01;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse avoidance/attraction physics
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        // Draw particle or 4-point sparkle star
        if (p.isSparkleStar) {
          drawSparkleStar(p.x, p.y, p.size * 3.5, p.color, Math.max(0.1, Math.min(1, p.alpha)), p.rotation);
        } else {
          ctx.save();
          ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};
