"use client";

import { useMemo, useState } from "react";

import BasicInfoStep from "./form/BasicInfoStep";
import ContentFeaturesStep from "./form/ContentFeaturesStep";
import DesignStep from "./form/DesignStep";
import ProjectDetailsStep from "./form/ProjectDetailsStep";
import ReviewStep from "./form/ReviewStep";
import TimelineStep from "./form/TimelineStep";

import type { FormData } from "./form/types";

const initialFormData: FormData = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  currentWebsite: "",
  projectType: "",
  websiteGoal: "",
  targetAudience: "",
  pagesNeeded: "",
  designStyle: "",
  websitesLiked: "",
  hasLogo: "",
  hasContent: "",
  features: "",
  timeline: "",
  budget: "",
  extraDetails: "",
};

const steps = [
  "Basic Info",
  "Project Details",
  "Design",
  "Content & Features",
  "Timeline",
  "Review",
];

export default function ClientIntakeForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const progress = useMemo(() => {
    return Math.round(((currentStep + 1) / steps.length) * 100);
  }, [currentStep]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setMessage("");
    }
  }

  function previousStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setMessage("");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (currentStep !== steps.length - 1) {
      nextStep();
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setMessage("Thank you! Your website request has been submitted.");
      setFormData(initialFormData);
      setCurrentStep(0);
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function renderStep() {
    const stepProps = { formData, handleChange };

    switch (currentStep) {
      case 0:
        return <BasicInfoStep {...stepProps} />;
      case 1:
        return <ProjectDetailsStep {...stepProps} />;
      case 2:
        return <DesignStep {...stepProps} />;
      case 3:
        return <ContentFeaturesStep {...stepProps} />;
      case 4:
        return <TimelineStep {...stepProps} />;
      case 5:
        return <ReviewStep formData={formData} />;
      default:
        return <BasicInfoStep {...stepProps} />;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-xl md:p-10"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Website Project Questionnaire
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-950 md:text-4xl">
          Tell us about your website
        </h1>

        <p className="mt-3 text-gray-600">
          Complete each section so we can understand your goals, style, content,
          features, timeline, and budget.
        </p>
      </div>

      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {progress}% complete
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-6">
        {steps.map((step, index) => (
          <button
            key={step}
            type="button"
            onClick={() => setCurrentStep(index)}
            className={`rounded-xl px-3 py-3 text-sm font-semibold cursor-pointer transition ${
              currentStep === index
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {step}
          </button>
        ))}
      </div>

      <div className="min-h-[420px]">{renderStep()}</div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t pt-6">
        <button
          type="button"
          onClick={previousStep}
          disabled={currentStep === 0 || loading}
          className="rounded-xl border px-6 py-3 font-semibold text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-black px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Submitting..."
            : currentStep === steps.length - 1
              ? "Submit Request"
              : "Next"}
        </button>
      </div>
      {message && (
  <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-center shadow-sm">
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white">
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    <h3 className="text-xl font-bold text-green-900">
      Submission Received
    </h3>

    <p className="mt-2 text-green-800">
      Thank you! Your website request has been submitted successfully.
    </p>

    <p className="mt-1 text-sm text-green-700">
      We’ll review your answers and follow up with the next steps.
    </p>
  </div>
)}
    </form>
  );
}