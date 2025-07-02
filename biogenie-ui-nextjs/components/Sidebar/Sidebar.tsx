'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "New Chat", href: "/chat" },
  { name: "Search", href: "/search" },
  { name: "Projects", href: "/project" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white dark:bg-[#1e1e1e] border-r border-gray-200 dark:border-gray-700 p-4">
      <h2 className="text-xl font-bold text-biotechblue mb-6">BioGenie</h2>
      <nav className="space-y-3">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={`block px-4 py-2 rounded-md font-medium ${
            pathname === link.href
              ? "bg-biogreen text-white"
              : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}>
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
