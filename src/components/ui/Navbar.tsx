'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
      <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-full border border-border bg-background/70 backdrop-blur-md">
        <Link
          href="#home"
          className="px-3 py-1.5 text-sm font-semibold tracking-tight text-foreground"
          aria-label="Home"
        >
          RV
        </Link>

        <ul className="flex items-center gap-0.5">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-sm text-muted hover:text-foreground hover:bg-card transition-colors"
              >
                <span className="hidden sm:inline">{item.name}</span>
                <span className="sm:hidden">{item.name[0]}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
}
