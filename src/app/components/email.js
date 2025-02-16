import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedEmailIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, []);

  return (
    <div ref={iconRef} className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-xl">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-white"
        initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
        animate={isVisible ? { strokeDashoffset: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <polyline points="22,6 12,13 2,6" />
      </motion.svg>
    </div>
  );
};

export default AnimatedEmailIcon;
