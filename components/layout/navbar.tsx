'use client';

import Link from 'next/link';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 max-w-5xl mx-auto">
      <Link href="/" className="text-2xl font-bold">
        Home
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/projects" className="hover:text-accent transition">
          Projects
        </Link>
        <Link href="/blog" className="hover:text-accent transition">
          Blog
        </Link>
        <Link href="/about" className="hover:text-accent transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-accent transition">
          Contact
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
