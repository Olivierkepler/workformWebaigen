import { Input, StepCard, Textarea } from "./FormFields";
import type { StepProps } from "./types";

export default function TimelineStep({ formData, handleChange }: StepProps) {
  return (
    <StepCard title="Timeline & Budget">
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Desired timeline"
          name="timeline"
          placeholder="Example: 2 weeks, 1 month, ASAP"
          value={formData.timeline}
          onChange={handleChange}
          hint="If there’s a deadline, include it."
        />
        <Input
          label="Budget range"
          name="budget"
          placeholder="Example: $5k–$15k"
          value={formData.budget}
          onChange={handleChange}
          hint="A range helps us propose the right approach."
        />
      </div>
      <Textarea
        label="Anything else we should know?"
        name="extraDetails"
        value={formData.extraDetails}
        onChange={handleChange}
        placeholder="Constraints, examples, integrations, stakeholders, brand guidelines…"
      />
    </StepCard>
  );
}