import { Select, StepCard, Textarea } from "./FormFields";
import type { StepProps } from "./types";

export default function ContentFeaturesStep({ formData, handleChange }: StepProps) {
  return (
    <StepCard title="Content & Features">
      <Select
        label="Do you already have text and images?"
        name="hasContent"
        value={formData.hasContent}
        onChange={handleChange}
        hint="We can work with anything from zero to fully prepared content."
      >
        <option value="">Select one</option>
        <option>Yes</option>
        <option>No</option>
        <option>Some content, but I need help</option>
      </Select>

      <Textarea
        label="What features do you need?"
        name="features"
        placeholder="Contact form, booking, payments, newsletter, map, login..."
        value={formData.features}
        onChange={handleChange}
        hint="List must-haves first; we’ll prioritize in the build plan."
      />
    </StepCard>
  );
}