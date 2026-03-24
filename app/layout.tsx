import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Assuming these are pre-configured
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import CyberBackground from "@/components/CyberBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ali Shibli | Full-Stack Developer",
  description:
    "Full-stack developer building MERN apps, Next.js sites, Shopify & WIX experiences—secure APIs, fast UI, and production-ready delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f8ff] text-slate-900 min-h-screen flex flex-col`}
      >
        <CyberBackground />
        <Sidebar /> {/* Added Sidebar component */}
        <Navbar />
        <main className="flex-grow pt-20"> {/* pt-20 to account for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
