import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Noa Ligpitan | Fullstack Developer",
  description:
    "Showcasing projects in React, Next.js, Tailwind, Python, and more.",
  keywords: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Framer Motion",
    "Fullstack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Noa Ligpitan" }],
  openGraph: {
    title: "Noa Ligpitan | Fullstack Developer",
    description:
      "Modern portfolio website built with Next.js, Tailwind, and Framer Motion.",
    url: "https://yourdomain.com",
    siteName: "Noa Portfolio",
    images: [
      {
        url: "/og-image.png", // put inside /public
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noa Ligpitan | Fullstack Developer",
    description: "Modern portfolio with animations and projects.",
    images: ["/og-image.png"],
    creator: "@yourhandle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
