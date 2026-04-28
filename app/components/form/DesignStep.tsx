import { Input, Select, StepCard, Textarea } from "./FormFields";
import type { StepProps } from "./types";

export default function DesignStep({ formData, handleChange }: StepProps) {
  return (
    <StepCard title="Design & Branding">
      <Input label="Preferred design style" name="designStyle" placeholder="Modern, clean, luxury, bold..." value={formData.designStyle} onChange={handleChange} />

      <Textarea label="List websites you like" name="websitesLiked" placeholder="Paste 2-3 website links you like" value={formData.websitesLiked} onChange={handleChange} />

      <Select label="Do you have a logo?" name="hasLogo" value={formData.hasLogo} onChange={handleChange}>
        <option value="">Select one</option>
        <option>Yes</option>
        <option>No</option>
        <option>I need one created</option>
      </Select>
    </StepCard>
  );
}