import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen p-6">
          {children}
        </main>
      </div>
    </>
  );
}
