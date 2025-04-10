import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // Speed of parallax effect (0-1)
  className?: string;
  direction?: 'up' | 'down'; // Direction of parallax movement
  startVisible?: boolean; // Whether section should start visible
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
  startVisible = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(startVisible);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the section is from the center of the viewport
      const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;

      // Apply parallax effect based on this distance
      const parallaxOffset = distanceFromCenter * speed * (direction === 'up' ? -1 : 1);
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return (
    <div
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={{
        position: 'relative',
        opacity: visible ? 1 : 0,
        transform: `translateY(${offset}px)`,
        transition: 'opacity 0.6s ease-out, transform 0.3s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
