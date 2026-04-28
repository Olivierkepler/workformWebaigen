import { Input, StepCard } from "./FormFields";
import type { StepProps } from "./types";

export default function BasicInfoStep({ formData, handleChange }: StepProps) {
  return (
    <StepCard 
      title="Client Partnership Profile" 
    //   description="Please provide your primary contact and business details. This information ensures our communication remains seamless and personalized."
    >
      <div className="space-y-8">
        {/* Section 1: Primary Contact */}
        <section>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Primary Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              label="Full Name" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="e.g. Alexander Sterling"
              hint="Use the name we should address in communications."
              required 
            />
            <Input 
              label="Email Address" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="name@company.com"
              hint="We’ll only use this to contact you about the project."
              required 
            />
          </div>
        </section>

        <hr className="border-zinc-200/60 dark:border-zinc-800/60" />

        {/* Section 2: Business Identity */}
        <section>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Business Details
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Legal Business Name" 
                name="businessName" 
                value={formData.businessName} 
                onChange={handleChange} 
                placeholder="Global Enterprises Inc."
                hint="If you have a registered name, add it here."
              />
              <Input 
                label="Direct Phone Number" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+1 (555) 000-0000"
                hint="Optional — helpful for quick coordination."
              />
            </div>
            
            <Input 
              label="Existing Digital Presence" 
              name="currentWebsite" 
              value={formData.currentWebsite} 
              onChange={handleChange} 
              placeholder="https://www.your-current-site.com" 
            //   description="If applicable, provide your current URL to help us understand your brand's existing footprint."
              hint="If you have a site today, share the URL so we can review."
            />
          </div>
        </section>
      </div>
    </StepCard>
  );
}