import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Banner images
import slide1 from "../../assets/images/herobanners/one.jpeg";
import slide2 from "../../assets/images/herobanners/two.jpeg";
import slide3 from "../../assets/images/herobanners/three.jpeg";
import slide4 from "../../assets/images/herobanners/four.jpeg";

const slides = [slide1, slide2, slide3, slide4];

// Generate random particles - responsive count
const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 7,
    size: 2 + Math.random() * 4,
  }));
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [particles, setParticles] = useState([]);
  const [isTouch, setIsTouch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);

  // Detect device type and set particle count
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsTouch('ontouchstart' in window);
      
      // Adjust particle count based on device
      if (width < 640) {
        setParticles(generateParticles(15)); // Mobile
      } else if (width < 1024) {
        setParticles(generateParticles(20)); // Tablet
      } else {
        setParticles(generateParticles(30)); // Desktop
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Auto-slide with touch detection
  useEffect(() => {
    const interval = isTouch ? 5000 : 6000; // Faster on mobile
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isTouch]);

  // Touch handlers
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrent((prev) => (prev + 1) % slides.length);
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section 
    className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ 
            scale: 1.2,
            opacity: 0,
            filter: windowWidth < 768 ? "blur(5px)" : "blur(10px)"
          }}
          animate={{ 
            scale: 1,
            opacity: 1,
            filter: "blur(0px)"
          }}
          exit={{ 
            scale: 0.9,
            opacity: 0,
            filter: windowWidth < 768 ? "blur(5px)" : "blur(10px)"
          }}
          transition={{ 
            duration: windowWidth < 768 ? 0.8 : 1.2,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.img
            src={slides[current]}
            alt={`Hero Banner ${current + 1}`}
            initial={{ scale: 1 }}
            animate={{ scale: windowWidth < 768 ? 1.03 : 1.05 }}
            transition={{ 
              duration: windowWidth < 768 ? 5 : 6,
              ease: "linear"
            }}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          
          {/* Animated Gradient Overlay - Enhanced for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: windowWidth < 768 ? 0.6 : 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30 md:from-black/40 md:via-transparent md:to-black/20"
          />
        </motion.div>
      </AnimatePresence>

      {/* Snowfall/Bubble Particles - Hidden on small mobile for performance */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden xs:block">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/30 backdrop-blur-sm"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: windowWidth >= 768 ? '0 0 10px rgba(255, 255, 255, 0.3)' : '0 0 5px rgba(255, 255, 255, 0.2)',
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 0.8, 0.6, 0],
              x: [0, Math.sin(particle.id) * 30, -Math.sin(particle.id) * 20, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Bubbles - Responsive sizing */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden sm:block">
        {[...Array(windowWidth < 640 ? 4 : windowWidth < 1024 ? 6 : 8)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-white/20 md:border-2 bg-white/5 backdrop-blur-sm"
            style={{
              left: `${10 + i * (windowWidth < 640 ? 20 : 12)}%`,
              width: windowWidth < 640 ? `${15 + Math.random() * 25}px` : `${20 + Math.random() * 40}px`,
              height: windowWidth < 640 ? `${15 + Math.random() * 25}px` : `${20 + Math.random() * 40}px`,
            }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: ['-10vh'],
              opacity: [0, 0.4, 0.2, 0],
              scale: [0.8, 1.2, 1, 0.9],
            }}
            transition={{
              duration: windowWidth < 768 ? 12 + i * 1.5 : 15 + i * 2,
              delay: i * (windowWidth < 768 ? 1 : 1.5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Light Rays - Hidden on mobile for performance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden lg:block absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent transform rotate-12 blur-sm"
      />

      {/* Navigation Dots - Enhanced touch targets for mobile */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 md:gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: current === index ? [1, 1.3, 1.1] : 1,
              width: current === index ? (windowWidth < 640 ? "1.5rem" : "2rem") : (windowWidth < 640 ? "0.5rem" : "0.75rem"),
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
            className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-colors duration-300 touch-manipulation ${
              current === index ? "bg-yellow-400 shadow-lg shadow-yellow-400/50" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            style={{ minWidth: windowWidth < 640 ? '0.5rem' : '0.75rem' }}
          />
        ))}
      </div>

      {/* Navigation Arrows - Desktop only */}
      <div className="hidden lg:block">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 xl:p-4 rounded-full transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 xl:w-7 xl:h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 xl:p-4 rounded-full transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 xl:w-7 xl:h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Swipe Indicator - Mobile only, fades after first interaction */}
      {isTouch && windowWidth < 768 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1, 0], y: 0 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 text-white/70 text-xs sm:text-sm flex items-center gap-2 pointer-events-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Swipe to navigate</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      )}

      {/* Animated Corner Accent - Responsive sizing */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-yellow-400/20 to-transparent blur-2xl md:blur-3xl"
      />

      {/* Progress Bar - Mobile only */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-yellow-400/50 lg:hidden z-20"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{
          duration: isTouch ? 5 : 6,
          ease: "linear",
          repeat: Infinity,
        }}
        key={current}
      />
    </section>
  );
}