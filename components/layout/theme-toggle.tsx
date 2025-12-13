'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
  const next = !dark;
  setDark(next);
  localStorage.setItem('theme', next ? 'dark' : 'light');

  if (next) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  };

  return (
    <button onClick={toggle} className="p-2 border rounded-md">
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
