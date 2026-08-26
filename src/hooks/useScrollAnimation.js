import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animationCallback) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (animationCallback && containerRef.current) {
        animationCallback(containerRef.current, gsap, ScrollTrigger);
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [animationCallback]);

  return containerRef;
};

export { gsap, ScrollTrigger };
