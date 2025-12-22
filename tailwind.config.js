/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F1115',
        surface: '#161A22',
        surfaceMuted: '#1E1E1E',
        border: '#2A2A2A',
        text: '#E5E7EB',
        muted: '#9CA3AF',
        accent: '#3B82F6',
        accentHover: '#2563EB',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['hover', 'focus'], // ensures border-accent works with hover/focus
      textColor: ['hover', 'focus'],   // ensures text-accent works with hover/focus
      backgroundColor: ['hover', 'focus'], // accentHover works
    },
  },
  plugins: [],
};
