import React, { useState, useEffect, useRef, ElementType } from 'react';

interface LazyLoadOnScrollProps {
  component: ElementType;
}

const LazyLoadOnScroll: React.FC<LazyLoadOnScrollProps> = ({ component: Component }) => {
  const [showComponent, setShowComponent] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setShowComponent(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showComponent ? <Component /> : <div ref={componentRef}></div>}
    </div>
  );
};

export default LazyLoadOnScroll;