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

  const currentStepLabel = steps[currentStep] ?? "Step";
  const isLastStep = currentStep === steps.length - 1;

  return (
    <form
    onSubmit={handleSubmit}
    className="flex justify-center "
  >
    <div className="
      w-full 
      max-w-[344px] 
      sm:max-w-md 
      md:max-w-2xl 
      lg:max-w-6xl 
      grid 
      justify-items-center 
      gap-6 
      lg:justify-items-stretch 
      lg:grid-cols-[370px_1fr] 
      lg:gap-10
    ">
       
        <aside className="hidden lg:block">
          <div className="sticky top-10 space-y-6">
            <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/40">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Webaigen Studio
              </p>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Website project intake
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                A short, structured questionnaire so we can estimate scope, align
                on design direction, and move fast.
              </p>

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  <span>
                    Step {currentStep + 1} / {steps.length}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-200/70 dark:bg-zinc-800/60">
                  <div
                    className="h-full rounded-full bg-zinc-950 transition-all duration-300 dark:bg-white"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <nav className="rounded-3xl border border-zinc-200/70 bg-white/70 p-3 shadow-sm backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/40">
              {steps.map((step, index) => {
                const active = index === currentStep;
                const complete = index < currentStep;

                return (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setCurrentStep(index)}
                    className={[
                      "group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition",
                      active
                        ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900/60",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-8 w-8 items-center justify-center rounded-xl border text-sm font-semibold",
                        active
                          ? "border-white/20 bg-white/10 text-white dark:border-zinc-950/10 dark:bg-zinc-950/5 dark:text-zinc-950"
                          : complete
                            ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-950/40 dark:bg-emerald-950/25 dark:text-emerald-200"
                            : "border-zinc-200 bg-white text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200",
                      ].join(" ")}
                    >
                      {complete ? (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                        >
                          <path
                            fill="currentColor"
                            d="M7.7 13.3a1 1 0 0 1-1.4 0L3.7 10.7a1 1 0 1 1 1.4-1.4l1.9 1.9 6-6a1 1 0 0 1 1.4 1.4l-6.7 6.7Z"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </span>

                    <span className="flex-1">
                      <span className="block text-sm font-semibold leading-5">
                        {step}
                      </span>
                      <span
                        className={[
                          "mt-0.5 block text-xs leading-4",
                          active
                            ? "text-white/80 dark:text-zinc-700"
                            : "text-zinc-500 dark:text-zinc-400",
                        ].join(" ")}
                      >
                        {index === 0
                          ? "Contact + business basics"
                          : index === 1
                            ? "Scope and goals"
                            : index === 2
                              ? "Brand & visual direction"
                              : index === 3
                                ? "Content and functionality"
                                : index === 4
                                  ? "Timing and budget"
                                  : "Confirm before submitting"}
                      </span>
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main panel */}
        <section className="  w-full 
  max-w-[340px] 
  mx-auto 
  rounded-3xl 

  sm:max-w-2xl 
  lg:max-w-none border border-zinc-200/70  shadow-xl shadow-zinc-950/[0.04] backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/40 dark:shadow-black/40 ">
          {/* Top bar */}
          <div className="border-b border-zinc-200/60 px-5 py-5 dark:border-zinc-800/60 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Website project questionnaire
                </p>
                <div className="mt-2 flex items-baseline gap-3">
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-xl">
                    {currentStepLabel}
                  </h2>
                  <span className="hidden text-xs font-medium text-zinc-500 dark:text-zinc-400 sm:inline">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200">
                  {progress}% complete
                </span>
              </div>
            </div>

            {/* Mobile stepper */}
            <div className="mt-5 lg:hidden">
              <div className="h-2 overflow-hidden rounded-full bg-zinc-200/70 dark:bg-zinc-800/60">
                <div
                  className="h-full rounded-full bg-zinc-950 transition-all duration-300 dark:bg-white"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {steps.map((step, index) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setCurrentStep(index)}
                    className={[
                      "shrink-0 rounded-2xl border px-3 py-2 text-xs font-semibold transition",
                      index === currentStep
                        ? "border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                        : "border-zinc-200 bg-white/60 text-zinc-700 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-200 dark:hover:bg-zinc-950/60",
                    ].join(" ")}
                  >
                    {index + 1}. {step}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <div className="min-h-[420px]">{renderStep()}</div>

            <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-3 border-t border-zinc-200/60 pt-6 dark:border-zinc-800/60 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={previousStep}
                disabled={currentStep === 0 || loading}
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:bg-zinc-950/70"
              >
                Previous
              </button>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-zinc-950/20 transition hover:shadow-zinc-950/25 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:shadow-white/10"
              >
                {loading ? "Submitting..." : isLastStep ? "Submit request" : "Continue"}
              </button>
            </div>

            {message && (
              <div className="mt-8 rounded-3xl border border-emerald-200/70 bg-emerald-50/70 p-6 shadow-sm backdrop-blur-xl dark:border-emerald-950/50 dark:bg-emerald-950/20">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                      <svg
                        className="h-6 w-6"
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
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-950 dark:text-emerald-100">
                        Submission received
                      </h3>
                      <p className="mt-1 text-sm text-emerald-900/80 dark:text-emerald-100/80">
                        Thanks — we’ll review and follow up with next steps.
                      </p>
                      <p className="mt-1 text-xs text-emerald-900/70 dark:text-emerald-100/70">
                        You can refresh later; we’ve recorded your answers.
                      </p>
                    </div>
                  </div>

                  <div className="text-sm font-medium text-emerald-900/80 dark:text-emerald-100/80">
                    {message}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </form>
  );
}