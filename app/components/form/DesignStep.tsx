import { Input, Select, StepCard, Textarea } from "./FormFields";
import type { StepProps } from "./types";

export default function DesignStep({ formData, handleChange }: StepProps) {
  return (
    <StepCard title="Design & Branding">
      <Input
        label="Preferred design style"
        name="designStyle"
        placeholder="Modern, clean, luxury, bold..."
        value={formData.designStyle}
        onChange={handleChange}
        hint="Describe the vibe you want the brand to convey."
      />

      <Textarea
        label="List websites you like"
        name="websitesLiked"
        placeholder="Paste 2–3 links and what you like about each"
        value={formData.websitesLiked}
        onChange={handleChange}
        hint="Links + a short note helps us replicate the intent, not just the look."
      />

      <Select
        label="Do you have a logo?"
        name="hasLogo"
        value={formData.hasLogo}
        onChange={handleChange}
        hint="This helps us plan brand assets and timeline."
      >
        <option value="">Select one</option>
        <option>Yes</option>
        <option>No</option>
        <option>I need one created</option>
      </Select>
    </StepCard>
  );
}