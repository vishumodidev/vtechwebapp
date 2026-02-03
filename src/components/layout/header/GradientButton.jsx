import { motion } from "framer-motion";

export default function GradientButton({ 
  text, 
  icon, 
  onClick, 
  fromColor = "from-blue-500", 
  toColor = "to-cyan-400", 
  className = "" 
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative group flex items-center justify-between pl-1 pr-4 py-1 focus:outline-none overflow-hidden transition-all duration-300 transform active:scale-95 ${className}`}
      style={{
        borderRadius: "50px 50px 50px 8px", // Teardrop / Leaf shape pointing bottom-left
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Gradient Background Layer with Animation */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${fromColor} ${toColor} transition-all duration-500 bg-[length:200%_100%] group-hover:bg-right`} 
      />

      {/* Bounce Effect Layer (White shine) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

      {/* Icon Circle */}
      <div className="relative z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md transform group-hover:rotate-12 transition-transform duration-300">
        {icon}
      </div>

      {/* Text */}
      <span className="relative z-10 ml-2 text-white font-bold text-xs tracking-wide uppercase whitespace-nowrap">
        {text}
      </span>

      {/* Arrow Icon (Right) */}
      <span className="relative z-10 ml-2 text-white/80 group-hover:translate-x-1 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </motion.button>
  );
}
