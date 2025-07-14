'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full bg-blue-950 text-blue-100 border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* ✅ Larger logo + Brand Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-10" />
          <h1 className="text-2xl font-bold">Blog Summariser</h1>
        </div>

        {/* ✅ Oval tabs */}
        <nav className="flex space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-full transition-colors ${
                pathname === item.href
                  ? 'bg-blue-900 text-white'
                  : 'hover:bg-blue-800 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
