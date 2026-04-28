import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
                W
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-950">WebAigen</h2>
                <p className="text-sm text-gray-500">
                  Website Client Intake
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              Professional websites built for modern businesses, creators, and
              service providers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-950">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <Link
                href="/"
                className="block text-sm text-gray-600 transition hover:text-gray-950"
              >
                Start Form
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-gray-600 transition hover:text-gray-950"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-sm text-gray-600 transition hover:text-gray-950"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-950">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>weaigen.com</p>
              <p>Available for website projects</p>
           
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} WebAigen. All rights reserved.</p>

          <p>
            Designed to collect project details clearly and professionally.
          </p>
        </div>
      </div>
    </footer>
  );
}