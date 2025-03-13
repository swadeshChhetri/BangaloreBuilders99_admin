import { Menu, X, LayoutDashboard, Settings } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md ">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link href="/admin" className="text-xl font-bold">
          Admin Panel
        </Link>
      </div>

      <div className="hidden lg:flex gap-6">
        <Link href="/admin/dashboard" className="flex items-center gap-2 hover:text-gray-400">
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link href="/admin/settings" className="flex items-center gap-2 hover:text-gray-400">
          <Settings size={20} /> Settings
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-4 flex flex-col gap-4 lg:hidden">
          <Link href="/admin/dashboard" className="flex items-center gap-2 hover:text-gray-400">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-2 hover:text-gray-400">
            <Settings size={20} /> Settings
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
