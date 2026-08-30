"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: "Tickets",
    href: "/tickets",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Users",
    href: "/users",
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-200 bg-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-zinc-900">
          DP Platform
        </h1>
      </div>

      <nav>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}