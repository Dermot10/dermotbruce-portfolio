'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
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
  document.documentElement.classList.toggle('dark', next);
  };

  return (
    <button onClick={toggle} className="p-2 border rounded-md bg-surface text-text dark:bg-surfaceMuted dark:text-text transition-colors duration-300">
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
