import Link from "next/link";
import { LayoutDashboard, List, Package, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h1 className="text-lg font-bold mb-6">📦 CMS</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="flex items-center gap-3 hover:text-gray-400">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/categories" className="flex items-center gap-3 hover:text-gray-400">
            <List className="w-5 h-5" /> Categorías
          </Link>
        </li>
        <li>
          <Link href="/dashboard/products" className="flex items-center gap-3 hover:text-gray-400">
            <Package className="w-5 h-5" /> Productos
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className="flex items-center gap-3 hover:text-gray-400">
            <Settings className="w-5 h-5" /> Configuración
          </Link>
        </li>
      </ul>
    </aside>
  );
}