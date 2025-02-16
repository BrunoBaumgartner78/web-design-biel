import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedSupportIcon = () => {
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
        <circle cx="12" cy="12" r="10" />
        <path d="M9 9a3 3 0 1 1 6 0c0 1.5-1.5 2-1.5 3h-3" />
        <line x1="12" y1="17" x2="12" y2="17.01" />
      </motion.svg>
    </div>
  );
};

export default AnimatedSupportIcon;
