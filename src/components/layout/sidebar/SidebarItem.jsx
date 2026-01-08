import { NavLink } from "react-router-dom";

export default function SidebarItem({ item }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-teal-50 text-teal-700"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {item.label}
    </NavLink>
  );
}
