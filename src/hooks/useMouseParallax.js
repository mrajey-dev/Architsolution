import { useState, useEffect, useCallback } from 'react';

export const useMouseParallax = (strength = 15) => {
  const [coords, setCoords] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: coarse)').matches;
    }
    return false;
  });

  useEffect(() => {
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const handleTouchChange = (e) => setIsTouchDevice(e.matches);
    touchQuery.addEventListener('change', handleTouchChange);

    return () => touchQuery.removeEventListener('change', handleTouchChange);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isTouchDevice) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const normalizedX = mouseX / (rect.width / 2);
    const normalizedY = mouseY / (rect.height / 2);

    setCoords({
      x: mouseX,
      y: mouseY,
      rotateX: -normalizedY * strength,
      rotateY: normalizedX * strength
    });
  }, [strength, isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    setCoords({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  }, []);

  return {
    coords,
    handleMouseMove,
    handleMouseLeave,
    isTouchDevice,
    tiltStyle: isTouchDevice ? {} : {
      transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.15s ease-out'
    }
  };
};
