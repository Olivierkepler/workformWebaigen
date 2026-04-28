export default function TermsPage() {
    return (
      <section className="mx-auto w-full max-w-4xl py-10">
        <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-xl shadow-zinc-950/[0.04] backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/40 dark:shadow-black/40 sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Legal
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                Terms & Conditions
              </h1>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Last updated: April 28, 2026
              </p>
            </div>
          </div>
  
          <div className="mt-10 space-y-8 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                1. Introduction
              </h2>
              <p className="mt-3">
                These Terms & Conditions explain how WebAigen provides website
                design and development services. By submitting this form or working
                with us, you agree to these terms.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                2. Project Requests
              </h2>
              <p className="mt-3">
                Submitting a website request does not guarantee that your project
                has been accepted. We will review your request and contact you to
                discuss details, pricing, timeline, and next steps.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                3. Payments
              </h2>
              <p className="mt-3">
                Payment terms, deposits, and final balances will be discussed and
                agreed upon before work begins. Some projects may require an
                upfront deposit before design or development starts.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                4. Client Responsibilities
              </h2>
              <p className="mt-3">
                Clients are responsible for providing accurate information,
                website content, images, branding materials, and timely feedback
                unless otherwise agreed.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                5. Revisions
              </h2>
              <p className="mt-3">
                Revision limits will be defined before the project begins.
                Additional revisions or changes outside the agreed project scope
                may require additional fees.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                6. Ownership
              </h2>
              <p className="mt-3">
                Once full payment is received, the client will own the final
                website files and approved deliverables, unless otherwise stated in
                a separate agreement.
              </p>
            </section>
  
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                7. Contact
              </h2>
              <p className="mt-3">
                For questions about these terms, contact us at:
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