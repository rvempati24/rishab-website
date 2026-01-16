'use client';

import { Terminal, Code2, User, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Code2 },
  { name: 'Resume', href: '/resume.pdf', icon: FileText },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-2 rounded-full border border-slate-800 bg-slate-950/80 backdrop-blur-md shadow-lg shadow-slate-900/50">
        <Link 
          href="/" 
          className="p-3 rounded-full hover:bg-slate-800 transition-colors group"
          aria-label="Home"
        >
          <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </Link>
        
        <div className="w-px h-6 bg-slate-800 mx-1" />

        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-cyan-200 hover:bg-slate-800 transition-all duration-300"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
