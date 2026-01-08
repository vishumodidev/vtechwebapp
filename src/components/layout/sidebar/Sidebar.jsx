import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-white border-r min-h-screen">
      <SidebarMenu />
    </aside>
  );
}
