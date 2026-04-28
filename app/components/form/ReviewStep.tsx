import { StepCard } from "./FormFields";
import type { FormData } from "./types";

export default function ReviewStep({ formData }: { formData: FormData }) {
  return (
    <StepCard title="Review Your Answers">
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="rounded-xl border bg-gray-50 p-4">
            <p className="text-sm font-semibold capitalize text-gray-500">
              {key.replace(/([A-Z])/g, " $1")}
            </p>
            <p className="mt-1 text-gray-950">{value || "Not answered"}</p>
          </div>
        ))}
      </div>
    </StepCard>
  );
}