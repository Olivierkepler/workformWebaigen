"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-black/30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-bold text-white shadow-sm shadow-zinc-950/20 dark:bg-white dark:text-zinc-950 dark:shadow-white/10 sm:h-11 sm:w-11">
              W
            </div>

            <div>
              <h1 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-lg">
                WebAigen
              </h1>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Website Client Intake
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900/60 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/"
              className="ml-2 rounded-2xl bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-zinc-950/20 transition hover:shadow-zinc-950/25 dark:bg-white dark:text-zinc-950 dark:shadow-white/10"
            >
              Start Form
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white/60 text-zinc-800 shadow-sm transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-200 dark:hover:bg-zinc-950/60 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className={[
            "md:hidden",
            isOpen ? "block" : "hidden",
          ].join(" ")}
        >
          <div className="border-t border-zinc-200/60 py-4 dark:border-zinc-800/60">
            <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-3 shadow-sm backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/40">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-white hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-950/70 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-zinc-950/20 transition dark:bg-white dark:text-zinc-950 dark:shadow-white/10"
                >
                  Start Form
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl border border-zinc-200 bg-white/60 px-4 py-3 text-center text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-200 dark:hover:bg-zinc-950/60"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}