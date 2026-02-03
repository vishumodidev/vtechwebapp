import { useNavigate, useLocation } from "react-router-dom";
import { navItems } from "../../../data/navigation";
import { courses } from "../../../data/coursesData";

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80; // Adjust for sticky header
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (item) => {
    // List of keys that are HOME SECTIONS, not separate pages
    const homeSections = ["services", "faq", "placements"]; 
    
    // If it's a home section OR specifically the Home link
    if (homeSections.includes(item.sectionId) || item.path === "/") {
      if (location.pathname === "/") {
        handleScroll(item.sectionId || "top");
      } else {
        navigate("/");
        // Attempt scrolling multiple times to allow for page load/rendering
        [100, 300, 600, 1000].forEach(delay => {
          setTimeout(() => handleScroll(item.sectionId || "top"), delay);
        });
      }
    } else {
      // Otherwise, regular navigation (About, Courses, Contact, Alumni, etc.)
      navigate(item.path);
    }
  };

  return (
    <nav className="hidden md:flex gap-1 xl:gap-6 items-center">
      {navItems.map((item) => (
        <div key={item.label} className="relative group">

          {/* ================= MAIN NAV ================= */}
          {item.label !== "Courses" ? (
            <button
              onClick={() => handleNavClick(item)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition whitespace-nowrap"
            >
              {item.label}
            </button>
          ) : (
            // COURSES TAB (NO CLICK)
            <span className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-default whitespace-nowrap">
              Courses
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          )}

          {/* ================= COURSES DROPDOWN ================= */}
          {item.label === "Courses" && (
            <div
              className="
                absolute left-0 top-full mt-3 w-[380px]
                bg-white rounded-xl shadow-xl border border-gray-100
                opacity-0 invisible translate-y-2
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-200 ease-out
                z-[9999]
              "
            >
              <div className="py-2 max-h-[420px] overflow-y-auto">
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => navigate(`/courses/${course.slug}`)}
                    className="
                      block w-full text-left
                      px-5 py-2.5 text-sm
                      text-gray-700
                      hover:bg-blue-50 hover:text-blue-600
                      transition
                    "
                  >
                    {course.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
