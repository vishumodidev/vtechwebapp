import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Slider Data
const sliderImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Team meeting
    title: "Expert Mentorship",
    subtitle: "Learn from Industry Leaders"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Coding
    title: "Practical Learning",
    subtitle: "Hands-on Projects"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Success
    title: "Career Growth",
    subtitle: "Placement Assistance"
  }
];

export default function CourseOffer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agree: true,
    date: "",
    time: ""
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [step, setStep] = useState(1);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      console.log("Final Form submitted:", formData);
      // Add API call here
      alert("Booking Confirmed!");
      
      // Reset form and go back to Step 1
      setStep(1);
      setFormData({
        name: "",
        phone: "",
        email: "",
        agree: true,
        date: "",
        time: ""
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1181282/pexels-photo-1181282.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN (Content) ================= */}
          <div className="space-y-8">
            
            {/* IMAGE SLIDER CARD */}
            <div className="relative w-full max-w-lg aspect-[3/1] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Zooming Image */}
                  <motion.img
                    src={sliderImages[currentSlide].url}
                    alt={sliderImages[currentSlide].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.15 }} // Zoom effect
                    transition={{ duration: 6, ease: "linear" }}
                  />
                  
                  {/* Gradient Overlay on Card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Text Details */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <p className="text-xs uppercase tracking-widest text-blue-400 mb-1 font-semibold">
                      Featured Highlight
                    </p>
                    <h3 className="text-2xl font-bold font-serif text-white">
                      {sliderImages[currentSlide].title}
                    </h3>
                    <p className="text-sm text-yellow-400 mt-1">
                      {sliderImages[currentSlide].subtitle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-1.5 z-20">
                {sliderImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-6 bg-yellow-400" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Be an <span className="text-blue-400">AI-Ready CPA</span>{" "}
                in 2026
              </h1>
              <div className="mt-4 flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                <span className="text-white">Earn</span>
                <span className="text-yellow-400">50L+ per annum</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-4 pt-4">
              {[
                "CPA is the US equivalent of C.A.",
                "4 exams | 12 months",
                "Jobs at Big 4 & MNCs in India & U.S.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
                  <span className="text-lg text-slate-200 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= RIGHT COLUMN (Form) ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-transparent p-1 relative">
              {/* Sparkle Icon Top Left */}
              <div className="absolute -top-6 -left-6 text-yellow-400 animate-pulse">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>

              {/* Card */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/20 min-h-[460px] flex flex-col justify-center transition-all duration-500">
                
                {step === 1 ? (
                  /* ================= STEP 1: LEAD CAPTURE ================= */
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-600 mb-1">
                        Want to be an
                      </h3>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">
                        AI-Ready Accountant ?
                      </h3>
                      <p className="text-sm font-semibold text-slate-600">
                        Connect with an Expert
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Full Name*"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 placeholder:text-slate-400 transition-all"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex gap-2">
                        <div className="flex-shrink-0 w-16 bg-gray-50 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
                          <span className="text-lg">🇮🇳</span>
                          <span className="text-xs text-slate-500 ml-1">▼</span>
                        </div>
                        <input
                          type="tel"
                          placeholder="Phone Number*"
                          required
                          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 placeholder:text-slate-400 transition-all"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <input
                          type="email"
                          placeholder="E-mail*"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 placeholder:text-slate-400 transition-all"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="flex items-start gap-3 pt-1">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            required
                            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                            checked={formData.agree}
                            onChange={(e) =>
                              setFormData({ ...formData, agree: e.target.checked })
                            }
                          />
                        </div>
                        <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                          I agree to receive updates via{" "}
                          <span className="text-green-600 font-bold">WhatsApp</span>,
                          Email & SMS.{" "}
                          <a href="#" className="underline text-blue-600">
                            Privacy Policy
                          </a>
                        </p>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/30 transition-all transform active:scale-95"
                      >
                        Request A Call Back
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  /* ================= STEP 2: SCHEDULING ================= */
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">
                        Hey, {formData.name || "friend"}
                      </h3>
                      <h4 className="text-xl font-bold text-blue-600 mb-3">
                        Ready to take the next step?
                      </h4>
                      <p className="text-sm font-medium text-slate-600">
                        Let's schedule your online meet with an expert today?
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Date Select */}
                      <div className="relative">
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 placeholder:text-slate-400 transition-all"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                        />
                      </div>

                      {/* Time Select */}
                      <div className="relative">
                        <select
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 placeholder:text-slate-400 transition-all appearance-none"
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                        >
                          <option value="" disabled>Select Time *</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                          ▼
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30 transition-all transform active:scale-95"
                      >
                        Book My 1-On-1 Counselling
                      </button>
                    </form>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
