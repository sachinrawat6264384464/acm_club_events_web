import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ACM Student Chapter | Empowering Student Developers",
  description: "Official web portal of the ACM Student Chapter. Discover workshops, capture the flag contests, hackathons, and visual photo archives of computing excellence.",
  keywords: "ACM, Student Chapter, Coding, Hackathon, AI Workshop, Computer Science, Coding Club, Web Development",
  authors: [{ name: "Sachin Rawat" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <div id="app-root" className="min-h-screen flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  );
}
