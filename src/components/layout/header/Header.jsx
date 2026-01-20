import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { navItems } from "../../../data/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);

  const navigate = useNavigate();

  // CTA button style (UNCHANGED)
  const blueBtn =
    "relative overflow-hidden px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold " +
    "animate-soft-bounce animate-fire cta-wave cta-shine " +
    "hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300";

  // 🔥 SCROLL-ONLY HANDLER (HEADER PURPOSE)
  const handleNavClick = ({ sectionId }) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= TOP ROW ================= */}
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Logo />

          {/* ================= CTA BUTTONS (DESKTOP) ================= */}
          <div className="hidden md:flex items-center gap-2 relative">

            {/* Admissions Dropdown */}
            <div className="relative">
              <button
                className={`${blueBtn} flex items-center gap-2`}
                onClick={() => setAdmissionsOpen(!admissionsOpen)}
              >
                Admissions 26
                <span className="text-xs">▼</span>
              </button>

              {admissionsOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg border z-50">
                  <button
                    onClick={() => {
                      navigate("/contact");
                      setAdmissionsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50"
                  >
                    Admissions 26
                  </button>

                  <button
                    onClick={() => {
                      navigate("/contact");
                      setAdmissionsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50"
                  >
                    Admissions 25
                  </button>
                </div>
              )}
            </div>

            {/* Announcement */}
            <button
              className={blueBtn}
              onClick={() => navigate("/announcements")}
            >
              Announcement
            </button>

            {/* Apply Now */}
            <button
              className={blueBtn}
              onClick={() => navigate("/apply")}
            >
              Apply Now
            </button>

          </div>

          {/* ================= MOBILE MENU TOGGLE ================= */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* ================= NAV ITEMS (DESKTOP) ================= */}
        <div className="hidden md:flex justify-center gap-8 pb-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t px-4 py-4 space-y-3">

          {/* Scroll-only menu */}
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left py-2 font-medium text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}

          <hr />

          {/* ================= MOBILE CTA BUTTONS ================= */}
          <button
            className="w-full py-2 rounded-md border border-blue-600 text-blue-600 font-semibold"
            onClick={() => navigate("/contact")}
          >
            🎓 Alumni Contact
          </button>

          <button
            className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold"
            onClick={() => navigate("/announcements")}
          >
            Announcement
          </button>

          <button
            className="w-full py-3 rounded-xl bg-blue-700 text-white font-bold"
            onClick={() => navigate("/apply")}
          >
            🚀 Apply Now
          </button>

        </nav>
      </div>
    </header>
  );
}
