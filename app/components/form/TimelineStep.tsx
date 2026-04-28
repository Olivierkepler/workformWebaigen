import { Input, StepCard, Textarea } from "./FormFields";
import type { StepProps } from "./types";

export default function TimelineStep({ formData, handleChange }: StepProps) {
  return (
    <StepCard title="Timeline & Budget">
      <Input label="Desired timeline" name="timeline" placeholder="Example: 2 weeks, 1 month, ASAP" value={formData.timeline} onChange={handleChange} />
      <Input label="Budget range" name="budget" placeholder="Example: $500-$1500" value={formData.budget} onChange={handleChange} />
      <Textarea label="Anything else we should know?" name="extraDetails" value={formData.extraDetails} onChange={handleChange} />
    </StepCard>
  );
}