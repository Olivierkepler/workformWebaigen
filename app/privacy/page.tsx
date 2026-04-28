export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-10">
        <section className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-xl md:p-10">
          <h1 className="text-3xl font-bold text-gray-950">
            Privacy Policy
          </h1>
  
          <p className="mt-3 text-gray-600">
            Last updated: April 28, 2026
          </p>
  
          <div className="mt-8 space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-950">1. Information We Collect</h2>
              <p className="mt-2">
                When you submit our website questionnaire, we may collect your
                name, business name, email, phone number, project details, budget,
                timeline, and other information you choose to provide.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-gray-950">2. How We Use Your Information</h2>
              <p className="mt-2">
                We use your information to understand your website needs, contact
                you about your project, prepare estimates, and provide website
                design or development services.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-gray-950">3. Data Storage</h2>
              <p className="mt-2">
                Form submissions may be stored in Google Sheets or other business
                tools used to manage client requests.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-gray-950">4. Sharing Information</h2>
              <p className="mt-2">
                We do not sell your personal information. We may share information
                only when necessary to complete your project, comply with legal
                requirements, or use trusted service providers.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-gray-950">5. Data Security</h2>
              <p className="mt-2">
                We take reasonable steps to protect your information, but no online
                system is completely secure.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-gray-950">6. Your Rights</h2>
              <p className="mt-2">
                You may request that we update or delete your information by
                contacting us directly.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-bold text-gray-950">7. Contact</h2>
              <p className="mt-2">
                For privacy questions, contact us at:
                <span className="font-semibold"> your-email@example.com</span>
              </p>
            </section>
          </div>
        </section>
      </main>
    );
  }