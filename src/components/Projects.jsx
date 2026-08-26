import { useEffect, useRef, useState } from 'react';
import { projectsData, projectCategories } from '../data/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.categorySlug === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '90px 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="glow-orb glow-indigo" style={{ top: '20%', left: '5%', width: '400px', height: '400px', opacity: 0.25 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} color="#00f5a0" /> Featured Portfolio
          </div>
          <h2 className="section-title">
            Recent Client <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore a few of our flagship digital products and SaaS platforms.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '24px'
            }}
          >
            {projectCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                style={{
                  padding: '6px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-main)',
                  transition: 'all 0.25s ease',
                  background: activeCategory === cat.slug ? 'var(--gradient-primary)' : '#ffffff',
                  color: activeCategory === cat.slug ? '#ffffff' : 'var(--text-secondary)',
                  border: activeCategory === cat.slug ? '1px solid transparent' : '1px solid var(--glass-border)',
                  boxShadow: activeCategory === cat.slug ? '0 4px 15px rgba(13, 148, 136, 0.25)' : 'var(--shadow-sm)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid-3" style={{ gap: '28px' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card interactive-card project-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                background: '#ffffff',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {/* Image */}
              <div
                className="project-image-wrapper"
                style={{
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="project-img"
                />
                
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.3) 100%)'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(203, 213, 225, 0.8)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-mint)',
                    fontWeight: 700
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3
                    className="project-title-text"
                    style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '8px', transition: 'color 0.2s ease' }}
                  >
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '18px' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-mint)',
                          background: 'rgba(13, 148, 136, 0.08)',
                          border: '1px solid rgba(13, 148, 136, 0.25)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontWeight: 600
                        }}
                      >
                        ⚡ {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--text-secondary)',
                          background: 'var(--bg-tertiary)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          border: '1px solid rgba(203, 213, 225, 0.8)',
                          fontWeight: 500
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-mint)',
                      fontWeight: 700,
                      fontSize: '0.875rem'
                    }}
                  >
                    View Case Study <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover .project-img {
          transform: scale(1.08);
        }
        .project-card:hover .project-title-text {
          color: var(--accent-mint) !important;
        }
      `}</style>
    </section>
  );
};
