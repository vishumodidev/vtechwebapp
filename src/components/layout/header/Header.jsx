import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import TopNav from "./TopNav";
import { navItems } from "../../../data/navigation";

import GradientButton from "./GradientButton";

import { MessageSquare, FileText, UserPlus, ChevronDown, ChevronUp } from "lucide-react"; // Import Lucide icons
import { courses } from "../../../data/coursesData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleMobileNavClick = (item) => {
    const homeSections = ["services", "faq", "placements"]; 
    
    setMenuOpen(false);

    if (homeSections.includes(item.sectionId) || item.path === "/") {
      if (location.pathname === "/") {
        handleScroll(item.sectionId || "top");
      } else {
        navigate("/");
        [100, 300, 600, 1000].forEach(delay => {
          setTimeout(() => handleScroll(item.sectionId || "top"), delay);
        });
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm overflow-visible">
      {/* Expanded width to accommodate new buttons and nav */}
      <div className="w-full px-4 lg:px-8 xl:px-12">

        {/* ================= TOP ROW ================= */}
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Logo />

          {/* ================= DESKTOP NAV + CTA ================= */}
          <div className="hidden md:flex items-center gap-1 xl:gap-6">

            {/* NAVBAR (Courses hover dropdown, others scroll) */}
            <TopNav />

            {/* ================= CTA BUTTONS (NEW GRADIENT DESIGN) ================= */}
            <div className="flex items-center gap-2">

              {/* Requirement Button (Orange Gradient) */}
              <div className="relative">
                <GradientButton 
                  text="Requirement" 
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
                      Requirement 2026
                    </button>
                    <div className="h-px bg-gray-100 mx-2"></div>
                    <button
                      onClick={() => navigate("/contact")}
                      className="block w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 text-left transition-colors"
                    >
                      Requirement 2025
                    </button>
                  </div>
                )}
              </div>

              {/* Announcement Button (Blue/Purple Gradient) */}
              <GradientButton 
                text="Announcement" 
                icon={<MessageSquare size={18} className="text-blue-500" />}
                fromColor="from-blue-400"
                toColor="to-indigo-500"
                onClick={() => navigate("/announcements")}
              />

              {/* Notice Button (Red/Pink Gradient) */}
              <GradientButton 
                text="Notice" 
                icon={<FileText size={18} className="text-rose-500" />}
                fromColor="from-rose-400"
                toColor="to-pink-500"
                onClick={() => navigate("/notices")}
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
        <nav className="bg-white border-t px-4 py-4 space-y-4 max-h-[85vh] overflow-y-auto pb-20">
          
          {/* ================= MOBILE NAV ITEMS ================= */}
          {navItems.map((item) =>
            item.label === "Courses" ? (
              <div key={item.label} className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="flex items-center justify-between w-full text-left py-2 font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                  {mobileCoursesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                
                {/* Mobile Courses Accordion */}
                {mobileCoursesOpen && (
                  <div className="pl-3 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        onClick={() => {
                          navigate(`/courses/${course.slug}`);
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left py-2 text-sm text-gray-500 hover:text-blue-500 hover:bg-blue-50 px-2 rounded-lg transition-colors"
                      >
                        {course.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.label}
                onClick={() => handleMobileNavClick(item)}
                className="block w-full text-left py-2 font-medium text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </button>
            )
          )}

          {/* ================= MOBILE CTA BUTTONS ================= */}
          <div className="pt-4 space-y-3 border-t border-gray-100">
            
            {/* Requirement */}
            <div className="relative">
              <GradientButton 
                text="Requirement" 
                icon={<UserPlus size={18} className="text-orange-100" />}
                fromColor="from-orange-400"
                toColor="to-yellow-400"
                onClick={() => setAdmissionsOpen(!admissionsOpen)}
                className="w-full justify-center"
              />
              {admissionsOpen && (
                 <div className="mt-2 bg-gray-50 rounded-xl p-2 space-y-1 border border-gray-100">
                   <button
                     onClick={() => { navigate("/contact"); setMenuOpen(false); }}
                     className="block w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:text-orange-600 rounded-lg transition-colors text-center shadow-sm"
                   >
                     Requirement 2026
                   </button>
                   <button
                     onClick={() => { navigate("/contact"); setMenuOpen(false); }}
                     className="block w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:text-orange-600 rounded-lg transition-colors text-center shadow-sm"
                   >
                     Requirement 2025
                   </button>
                 </div>
              )}
            </div>

            {/* Announcement */}
            <GradientButton 
              text="Announcement" 
              icon={<MessageSquare size={18} className="text-blue-100" />}
              fromColor="from-blue-400"
              toColor="to-indigo-500"
              onClick={() => { navigate("/announcements"); setMenuOpen(false); }}
              className="w-full justify-center"
            />

            {/* Notice */}
            <GradientButton 
              text="Notice" 
              icon={<FileText size={18} className="text-rose-100" />}
              fromColor="from-rose-400"
              toColor="to-pink-500"
              onClick={() => { navigate("/notices"); setMenuOpen(false); }}
              className="w-full justify-center"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
