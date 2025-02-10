import { Menu, UserCircle } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <button className="text-gray-600 hover:text-gray-900">
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex items-center gap-3">
        <p className="text-gray-700">Admin</p>
        <UserCircle className="w-6 h-6 text-gray-600" />
      </div>
    </nav>
  );
}