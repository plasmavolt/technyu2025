import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

// Define Satoshi as a local font
export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi/Satoshi-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi/Satoshi-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi/Satoshi-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Satoshi/Satoshi-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

// Optionally keep Inter as a fallback or secondary font
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
