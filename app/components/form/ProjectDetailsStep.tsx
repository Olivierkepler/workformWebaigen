import { Select, StepCard, Textarea } from "./FormFields";
import type { StepProps } from "./types";

export default function ProjectDetailsStep({ formData, handleChange }: StepProps) {
  return (
    <StepCard title="Project Details">
      <Select
        label="Project Type"
        name="projectType"
        value={formData.projectType}
        onChange={handleChange}
        hint="Pick the option closest to your scope."
      >
        <option value="">Select one</option>
        <option>New website</option>
        <option>Website redesign</option>
        <option>Landing page</option>
        <option>E-commerce website</option>
        <option>Portfolio website</option>
        <option>Booking website</option>
        <option>Other</option>
      </Select>

      <Textarea
        label="What is the main goal of the website?"
        name="websiteGoal"
        value={formData.websiteGoal}
        onChange={handleChange}
        placeholder="Generate leads, book appointments, sell products, build credibility…"
        hint="One or two sentences is enough."
      />
      <Textarea
        label="Who is your target audience?"
        name="targetAudience"
        value={formData.targetAudience}
        onChange={handleChange}
        placeholder="Who you serve, where they are, what matters to them…"
      />
      <Textarea
        label="What pages do you need?"
        name="pagesNeeded"
        placeholder="Home, About, Services, Contact, Gallery, Blog..."
        value={formData.pagesNeeded}
        onChange={handleChange}
        hint="List the pages you expect at launch."
      />
    </StepCard>
  );
}