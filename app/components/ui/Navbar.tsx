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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white shadow-sm">
              W
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-gray-950">
                WebAigen
              </h1>
              <p className="text-xs font-medium text-gray-500">
                Website Client Intake
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/"
              className="ml-2 rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              Start Form
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 text-gray-700 transition hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
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

        {isOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="space-y-2 rounded-2xl bg-gray-50 p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-white hover:text-gray-950"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
              >
                Start Form
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}