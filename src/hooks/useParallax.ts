import { useState, useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  startVisible?: boolean;
}

export const useParallax = ({
  speed = 0.5,
  direction = 'up',
  startVisible = false,
}: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(startVisible);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the element is from the viewport center
      const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;

      // Calculate offset based on direction
      let parallaxOffset = 0;

      if (direction === 'up' || direction === 'down') {
        parallaxOffset = distanceFromCenter * speed * (direction === 'up' ? -1 : 1);
      } else {
        // For horizontal parallax
        const windowWidth = window.innerWidth;
        const distanceHorizontal = rect.left + rect.width / 2 - windowWidth / 2;
        parallaxOffset = distanceHorizontal * speed * (direction === 'left' ? -1 : 1);
      }

      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return {
    ref: elementRef,
    style: {
      transform: direction === 'up' || direction === 'down'
        ? `translateY(${offset}px)`
        : `translateX(${offset}px)`,
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.6s ease-out',
    },
    isVisible
  };
};

export default useParallax;
