import { useNavigate } from "react-router-dom";
import { navItems } from "../../../data/navigation";
import { courses } from "../../../data/coursesData";

export default function TopNav() {
  const navigate = useNavigate();

  // Scroll for non-course items
  const handleScroll = (sectionId) => {
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hidden md:flex gap-6 items-center">
      {navItems.map((item) => (
        <div key={item.label} className="relative group">

          {/* ================= MAIN NAV ================= */}
          {item.label !== "Courses" ? (
            <button
              onClick={() => handleScroll(item.sectionId)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
            </button>
          ) : (
            // COURSES TAB (NO CLICK)
            <span className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-default">
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
