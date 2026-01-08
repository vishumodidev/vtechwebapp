import { navItems } from "../../../data/navigation";
import SidebarItem from "./SidebarItem";

export default function SidebarMenu() {
  return (
    <nav className="p-4 space-y-1">
      {navItems.map((item) => (
        <SidebarItem key={item.label} item={item} />
      ))}
    </nav>
  );
}
