import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 bg-white/30 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-black/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-bold text-white shadow-sm shadow-zinc-950/20 dark:bg-white dark:text-zinc-950 dark:shadow-white/10">
                W
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  WebAigen
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Website Client Intake
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Premium websites built for modern businesses. Clear intake, faster
              estimates, better outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950 dark:text-zinc-50">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <Link
                href="/"
                className="block text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Start Form
              </Link>
              <Link
                href="/terms"
                className="block text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950 dark:text-zinc-50">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <p className="font-medium text-zinc-700 dark:text-zinc-300">
                webaigen.com
              </p>
              <p>Available for new website projects.</p>
              <p className="text-xs">
                Response time: typically within 1–2 business days.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-zinc-200/60 pt-6 text-sm text-zinc-500 dark:border-zinc-800/60 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-zinc-600 dark:text-zinc-400">
            © {year} WebAigen. All rights reserved.
          </p>

          <p>
            Designed for clarity, speed, and a premium client experience.
          </p>
        </div>
      </div>
    </footer>
  );
}