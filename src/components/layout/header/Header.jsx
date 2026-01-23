import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import TopNav from "./TopNav";
import { navItems } from "../../../data/navigation";

import GradientButton from "./GradientButton";
import { MessageSquare, Bell, Send, UserPlus } from "lucide-react"; // Import Lucide icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm overflow-visible">
      {/* Expanded width to accommodate new buttons and nav */}
      <div className="w-full px-4 lg:px-8 xl:px-12">

        {/* ================= TOP ROW ================= */}
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Logo />

          {/* ================= DESKTOP NAV + CTA ================= */}
          <div className="hidden md:flex items-center gap-6">

            {/* NAVBAR (Courses hover dropdown, others scroll) */}
            <TopNav />

            {/* ================= CTA BUTTONS (NEW GRADIENT DESIGN) ================= */}
            <div className="flex items-center gap-3">

              {/* Admissions Button (Orange Gradient) */}
              <div className="relative">
                <GradientButton 
                  text="Admissions" 
                  icon={<UserPlus size={18} className="text-orange-500" />}
                  fromColor="from-orange-400"
                  toColor="to-yellow-400"
                  onClick={() => setAdmissionsOpen(!admissionsOpen)}
                />
                
                {admissionsOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 z-[9999] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <button
                      onClick={() => navigate("/contact")}
                      className="block w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 text-left transition-colors"
                    >
                      Admissions 2026
                    </button>
                    <div className="h-px bg-gray-100 mx-2"></div>
                    <button
                      onClick={() => navigate("/contact")}
                      className="block w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 text-left transition-colors"
                    >
                      Admissions 2025
                    </button>
                  </div>
                )}
              </div>

              {/* Announcement Button (Blue/Purple Gradient) */}
              <GradientButton 
                text="Notices" 
                icon={<Bell size={18} className="text-blue-500" />}
                fromColor="from-blue-400"
                toColor="to-indigo-500"
                onClick={() => navigate("/announcements")}
              />

              {/* Apply Now Button (Pink/Rose Gradient) */}
              <GradientButton 
                text="Apply Now" 
                icon={<Send size={18} className="text-rose-500" />}
                fromColor="from-rose-400"
                toColor="to-pink-500"
                onClick={() => navigate("/apply")}
              />

            </div>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="block w-full text-left py-2 font-medium text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
