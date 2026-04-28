import { StepCard } from "./FormFields";
import type { FormData } from "./types";

const LABELS: Record<keyof FormData, string> = {
  fullName: "Full name",
  businessName: "Business name",
  email: "Email",
  phone: "Phone",
  currentWebsite: "Current website",
  projectType: "Project type",
  websiteGoal: "Website goal",
  targetAudience: "Target audience",
  pagesNeeded: "Pages needed",
  designStyle: "Design style",
  websitesLiked: "Websites you like",
  hasLogo: "Logo",
  hasContent: "Content ready",
  features: "Features",
  timeline: "Timeline",
  budget: "Budget",
  extraDetails: "Extra details",
};

export default function ReviewStep({ formData }: { formData: FormData }) {
  const entries = (Object.entries(formData) as Array<[keyof FormData, string]>)
    .map(([key, value]) => ({ key, label: LABELS[key] ?? String(key), value }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <StepCard title="Review Your Answers">
      <div className="rounded-3xl border border-zinc-200/70 bg-white/60 p-4 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-950/30 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {entries.map(({ key, label, value }) => (
            <div
              key={String(key)}
              className="rounded-2xl border border-zinc-200/70 bg-white/70 p-4 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-950/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                {label}
              </p>
              <p className="mt-2 whitespace-pre-wrap text-sm text-zinc-950 dark:text-zinc-50">
                {value?.trim() ? value : (
                  <span className="text-zinc-400 dark:text-zinc-500">
                    Not answered
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </StepCard>
  );
}