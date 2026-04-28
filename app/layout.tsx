import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
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
  title: "WebAigen — Client Intake",
  description: "A premium website project intake form for WebAigen clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
        <div className="relative flex min-h-full flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(24,24,27,0.08),transparent_60%),radial-gradient(900px_500px_at_90%_10%,rgba(24,24,27,0.06),transparent_55%),linear-gradient(to_bottom,rgba(250,250,250,1),rgba(244,244,245,1))] dark:bg-[radial-gradient(1100px_600px_at_25%_-10%,rgba(255,255,255,0.10),transparent_60%),radial-gradient(900px_520px_at_90%_10%,rgba(255,255,255,0.06),transparent_55%),linear-gradient(to_bottom,rgba(9,9,11,1),rgba(0,0,0,1))]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.08] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] dark:opacity-[0.10]" />
          </div>

          <Navbar />

<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-4 pb-10 sm:px-6 sm:pt-6 lg:px-8 lg:pt-10 lg:pb-14">
  {children}
</main>

<Footer />
        </div>
      </body>
    </html>
  );
}
