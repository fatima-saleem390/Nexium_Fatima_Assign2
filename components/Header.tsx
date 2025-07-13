'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Star, Info, Mail } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: <Home className="w-4 h-4 mr-1" /> },
    { href: '/features', label: 'Features', icon: <Star className="w-4 h-4 mr-1" /> },
    { href: '/about', label: 'About', icon: <Info className="w-4 h-4 mr-1" /> },
    { href: '/contact', label: 'Contact', icon: <Mail className="w-4 h-4 mr-1" /> },
  ];

  return (
    <header className="w-full bg-blue-950 text-blue-100 border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Blog Summariser</h1>
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-2 py-1 rounded hover:text-blue-400 ${
                pathname === item.href ? 'text-blue-400 font-semibold' : 'text-blue-100'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
