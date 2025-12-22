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
        
      </head> 
      <body className="bg-[#161B22] text-[#C9D1D9] transition-colors duration-300">
        <Navbar />
   
        {children}
        <Footer />
      </body>
    </html>
  );
}
