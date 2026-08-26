import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: coarse)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .interactive-card');
      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice || !isVisible) return;
    let animationFrameId;

    const follow = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}>
      {/* Central Modern Accent Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          backgroundColor: '#0d9488',
          borderRadius: '50%',
          transform: `translate3d(${position.x - (isHovered ? 4 : 3)}px, ${position.y - (isHovered ? 4 : 3)}px, 0)`,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
          boxShadow: '0 0 10px rgba(13, 148, 136, 0.4)'
        }}
      />

      {/* Soft Outer Ring Follower */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '54px' : isClicking ? '26px' : '36px',
          height: isHovered ? '54px' : isClicking ? '26px' : '36px',
          border: isHovered ? '1.5px solid rgba(13, 148, 136, 0.8)' : '1px solid rgba(79, 70, 229, 0.35)',
          backgroundColor: isHovered ? 'rgba(13, 148, 136, 0.08)' : 'transparent',
          borderRadius: '50%',
          transform: `translate3d(${followerPosition.x - (isHovered ? 27 : isClicking ? 13 : 18)}px, ${followerPosition.y - (isHovered ? 27 : isClicking ? 13 : 18)}px, 0)`,
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), border 0.2s, background-color 0.2s',
          boxShadow: isHovered ? '0 0 15px rgba(13, 148, 136, 0.2)' : 'none'
        }}
      />
    </div>
  );
};
