export type FormData = {
    fullName: string;
    businessName: string;
    email: string;
    phone: string;
    currentWebsite: string;
    projectType: string;
    websiteGoal: string;
    targetAudience: string;
    pagesNeeded: string;
    designStyle: string;
    websitesLiked: string;
    hasLogo: string;
    hasContent: string;
    features: string;
    timeline: string;
    budget: string;
    extraDetails: string;
  };
  
  export type StepProps = {
    formData: FormData;
    handleChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => void;
  };