import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words', 
  direction = 'top', 
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of (animationTo || defaultTo)) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${className} `} style={{ position: 'absolute',zIndex:1 }}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            willChange: 'transform, filter, opacity',
    fontSize: '8rem', 
    lineHeight: '1.5',
    zIndex: 1000,
    display: 'block',
    position: 'relative',
    left: index > 0 ? '-10px' : '-300px',
    transform: 'translate(-100px, -50px)',
    top: '-10px',



 // ✅ تحسين الخط والتنسيق
 fontFamily: "'Poppins ', serif", // 🔥 جرّب Poppins أو Montserrat أيضًا
 fontWeight: 'bold',
 letterSpacing: '2px',
 textRendering: 'optimizeLegibility',
 color: 'black', // ✅ لون أنيق يناسب الخلفية الداكنة
 textShadow: '4px 4px 10px rgba(184, 178, 186, 0.5)', // تأثير ظل رائع





          }}
        >
          {elements[index] === ' ' ? '' : elements[index]}
          {animateBy === 'words' && index < elements.length - 1 && ''}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText;