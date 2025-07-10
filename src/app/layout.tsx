import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Ajay Kumar - Senior Frontend Engineer | React & Angular Specialist',
  description: '5+ years experienced Senior Frontend Engineer specializing in React, Angular, and TypeScript. Building scalable web applications and innovative solutions.',
   icons: {
    icon: [
      // { url: '/favicon.ico', sizes: 'any' },
      { url: 'icon.svg' },
    ],
  },
  keywords: [
    'Senior Software Engineer',
    'React Developer',
    'Angular Developer',
    'TypeScript Expert',
    'Frontend Developer',
    'Web Application Developer',
    'UI/UX Specialist',
    'JavaScript Engineer',
    'Next.js Developer',
    'Web Performance Optimization',
    'Ajay Kumar Portfolio'
  ],
  authors: [{ name: 'Ajay Kumar', url: 'https://linkedin.com/in/ajay-kumar-04' }],
  creator: 'Ajay Kumar',
  publisher: 'Ajay Kumar',
  openGraph: {
    title: 'Ajay Kumar - Senior Software Engineer',
    description: '5+ years experience in building scalable web applications with React, Angular, and TypeScript',
    url: 'https://codedbyajey.vercel.app',
    siteName: 'Ajay Kumar Portfolio',
    images: [
      {
        url: 'https://codedbyajey.vercel.app/#about',
        width: 1200,
        height: 630,
        alt: 'Ajay Kumar - Senior Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
  alternates: {
    canonical: 'https://codedbyajey.vercel.app/',
  },
  category: 'technology',
  metadataBase: new URL('https://codedbyajey.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
