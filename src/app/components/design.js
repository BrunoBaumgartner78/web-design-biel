import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedDesignIcon = () => {
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
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </motion.svg>
    </div>
  );
};

export default AnimatedDesignIcon;
