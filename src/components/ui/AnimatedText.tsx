import React, { useRef, useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'typewriter';
  direction?: 'left' | 'right' | 'up' | 'down';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  className = '',
  animation = 'fade',
  direction = 'up',
  tag = 'p',
}) => {
  const textRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(textElement);
    return () => observer.disconnect();
  }, [delay]);

  const getAnimationStyle = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return { opacity: 0 };
        case 'slide':
          return {
            opacity: 0,
            transform: direction === 'left' ? 'translateX(-20px)' :
                      direction === 'right' ? 'translateX(20px)' :
                      direction === 'up' ? 'translateY(20px)' : 'translateY(-20px)'
          };
        case 'scale':
          return { opacity: 0, transform: 'scale(0.95)' };
        case 'typewriter':
          return { width: '0%', overflow: 'hidden', whiteSpace: 'nowrap' };
        default:
          return { opacity: 0 };
      }
    }

    if (animation === 'typewriter') {
      return {
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        transition: `width 1s ease-out ${delay}ms`
      };
    }

    return {
      opacity: 1,
      transform: 'translateX(0) translateY(0) scale(1)',
      transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`
    };
  };

  const Tag = tag;

  return React.createElement(
    Tag,
    {
      ref: textRef as React.RefObject<any>,
      className: `animated-text ${className} ${isVisible ? 'visible' : ''}`,
      style: getAnimationStyle(),
    },
    text
  );
};

export default AnimatedText;
