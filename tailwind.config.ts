import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#171717',
        accent: '#6366f1',
        border: '#2a2a2a',
        surface: '#161616',
        surface2: '#1e1e1e',
        'text-muted': '#a3a3a3',
        // add dark variants
        'background-dark': '#000000',
        'foreground-dark': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
    },
  },
  plugins: [],
};

export default config;
