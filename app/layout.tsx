// // root layout for entire app
// // frame around every page 
// /* global CSS import
// <html> and <body> tags
// fonts
// navbar
// footer */

import './globals.css';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Dermot Bruce Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try{
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch {}
              })();
            `,
          }}
        />
      </head> 
      <body className="bg-[#f8fafc] text-[#0F172A] dark:bg-[#0F1115] dark:text-[#E5E7EB] transition-colors duration-300">
        <Navbar />
   
        {children}
        <Footer />
      </body>
    </html>
  );
}
