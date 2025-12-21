import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Vicky Narotamo | Developer Portfolio",
  description:
    "Portfolio of Vicky Narotamo - a Computer Science student building clean, scalable web experiences with Next.js, React, and Tailwind CSS.",
  metadataBase: new URL("https://xekyute-portfolio.vercel.app"),
  openGraph: {
    title: "Vicky Narotamo | Developer Portfolio",
    description:
      "Computer Science student building clean, scalable web experiences with Next.js, React, and Tailwind CSS.",
    url: "https://xekyute-portfolio.vercel.app",
    siteName: "Vicky Narotamo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      {/* Only set the *class mapping* here (font-sans), not the font directly */}
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
