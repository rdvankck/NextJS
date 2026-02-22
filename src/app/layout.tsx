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
  title: "My Next.Js App",
  description: "Learning next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header - Navigation */}
        <header className="bg-blue-600 text-white p-4">
          <nav className="flex gap-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
          </nav>
        </header>

        {/* Main Content - Page content goes here */}
        <main className="flex-1 p-8">{children}</main>

        {/* Footer - Page bottom */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2026 Ridvan Kocuk. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
