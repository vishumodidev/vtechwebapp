import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Banner images
import slide1 from "../../assets/images/herobanners/one.jpeg";
import slide2 from "../../assets/images/herobanners/two.jpeg";
import slide3 from "../../assets/images/herobanners/three.jpeg";
import slide4 from "../../assets/images/herobanners/four.jpeg";

const slides = [slide1, slide2, slide3, slide4];

// Generate particles once (or dependent on count)
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
  const [isMobile, setIsMobile] = useState(false);

  // Optimize: Check device type only on mount and resize (debounced technically better, but basic check is fine)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    // Defer resize listener to avoid Layout Thrashing if possible, or just accept simple check
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        checkMobile();
      }, 150); // Debounce
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Memoize particles to prevent re-calculation on every render
  // Determine count based on initial assumption or simple state
  const particleCount = isMobile ? 15 : 30;
  const particles = useMemo(() => generateParticles(particleCount), [particleCount]);

  // Auto-slide logic
  useEffect(() => {
    const intervalTime = isMobile ? 5000 : 6000;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [isMobile]);

  /* ================= TOUCH HANDLERS (Optimized) ================= */
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Threshold for swipe
    if (Math.abs(diff) > 75) {
      if (diff > 0) {
        // Swipe Left -> Next
        setCurrent((prev) => (prev + 1) % slides.length);
      } else {
        // Swipe Right -> Prev
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
    setTouchStart(null);
  };

  /* ================= HELPERS ================= */
  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prevSlide = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  return (
    <section 
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <motion.img
            src={slides[current]}
            alt={`Hero Banner ${current + 1}`}
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }} // Subtle Ken Burns
            transition={{ duration: 6, ease: "linear" }}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          
          {/* Clean Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* ================= PARTICLES ================= */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              left: `${particle.left}%`,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0, 0.8, 0],
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

      {/* ================= NAVIGATION CONTROLS ================= */}
      
      {/* 1. Dots (Visible on all) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? "w-8 bg-yellow-400 shadow-glow" 
                : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 2. Arrows (Desktop Only) */}
      <div className="hidden lg:block">
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all transform hover:scale-110"
          aria-label="Previous"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all transform hover:scale-110"
          aria-label="Next"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* 3. Swipe Hint (Mobile Only) */}
      {isMobile && (
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 2, duration: 1 }}
           className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-xs flex items-center gap-1 pointer-events-none"
        >
          <span>Swipe</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </motion.div>
      )}
    </section>
  );
}