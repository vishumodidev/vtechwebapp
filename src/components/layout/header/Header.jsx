import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import TopNav from "./TopNav";
import HeaderActions from "./HeaderActions";
import { navItems } from "../../../data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <TopNav />

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <HeaderActions />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive
                    ? "text-teal-600 border-l-4 border-teal-600 pl-3"
                    : "text-gray-700 pl-4"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Enquire Button */}
          <button className="mt-4 w-full bg-teal-600 text-white py-3 rounded-md font-semibold">
            Enquire Now
          </button>
        </nav>
      </div>
    </header>
  );
}
