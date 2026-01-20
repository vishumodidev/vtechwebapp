import { NavLink } from "react-router-dom";
import { navItems } from "../../../data/navigation";

export default function TopNav() {
  return (
    <nav className="hidden md:flex gap-3">
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) =>
            `relative text-sm font-medium ${
              isActive
                ? "text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-teal-600"
                : "text-gray-700 hover:text-teal-600"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
