import { useEffect, useRef, useState } from 'react';
import { statsData } from '../data/stats';
import { TrendingUp } from 'lucide-react';

const CounterCard = ({ stat }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const duration = 2000;
          const steps = 60;
          const increment = stat.value / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= stat.value) {
              setCount(stat.value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <div
      ref={cardRef}
      className="glass-card interactive-card"
      style={{
        padding: '36px 28px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#ffffff',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      <div
        style={{
          fontSize: 'clamp(2.8rem, 4vw, 3.8rem)',
          fontWeight: 800,
          fontFamily: 'var(--font-main)',
          lineHeight: 1,
          marginBottom: '12px',
          color: 'var(--text-primary)'
        }}
      >
        <span className="gradient-text">{count}</span>
        <span style={{ color: 'var(--accent-mint)' }}>{stat.suffix}</span>
      </div>

      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
        {stat.label}
      </h3>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
        {stat.description}
      </p>
    </div>
  );
};

export const Stats = () => {
  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <div className="section-tag">
            <TrendingUp size={14} color="var(--accent-mint)" /> Proven Business Impact
          </div>
          <h2 className="section-title">
            Numbers That Define Our <span className="gradient-text">Track Record</span>
          </h2>
        </div>

        <div className="grid-4">
          {statsData.map((stat) => (
            <CounterCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
