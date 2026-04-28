export default function PrivacyPage() {
    return (
      <section className="mx-auto w-full max-w-4xl">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-xl shadow-zinc-950/[0.04] backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/40 dark:shadow-black/40 sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Legal
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Last updated: April 28, 2026
              </p>
            </div>
          </div>
  
          <div className="mt-10 space-y-8 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                1. Information We Collect
              </h2>
              <p className="mt-3">
                When you submit our website questionnaire, we may collect your
                name, business name, email, phone number, project details, budget,
                timeline, and other information you choose to provide.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                2. How We Use Your Information
              </h2>
              <p className="mt-3">
                We use your information to understand your website needs, contact
                you about your project, prepare estimates, and provide website
                design or development services.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                3. Data Storage
              </h2>
              <p className="mt-3">
                Form submissions may be stored in Google Sheets or other business
                tools used to manage client requests.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                4. Sharing Information
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share information
                only when necessary to complete your project, comply with legal
                requirements, or use trusted service providers.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                5. Data Security
              </h2>
              <p className="mt-3">
                We take reasonable steps to protect your information, but no online
                system is completely secure.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                6. Your Rights
              </h2>
              <p className="mt-3">
                You may request that we update or delete your information by
                contacting us directly.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                7. Contact
              </h2>
              <p className="mt-3">
                For privacy questions, contact us at:
                <span className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {" "}
                  your-email@example.com
                </span>
              </p>
            </section>
          </div>
        </div>
      </section>
    );
  }