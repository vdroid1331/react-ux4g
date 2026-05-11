import React, { useState } from "react";
import { Stepper } from "./Stepper";
import { Button } from "../Button/Button";
import { FormControl } from "../Form/FormControl";
import { FormSelect } from "../Form/FormSelect";

export default {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Stepper Component
The \`Stepper\` component conveys progress through numbered steps. It provides a visual timeline of a user's journey through a multi-step process like a checkout or wizard.

## Usage Guidelines
- **State Management:** The Stepper is a purely presentational component. You must manage the current \`activeStep\` state (0-indexed) in your parent component.
- **Step Definitions:** Pass an array of objects to the \`steps\` prop, where each object contains a \`label\` to describe that step.
- **Visuals:** Completed steps turn green with a checkmark, the active step is highlighted in primary blue, and upcoming steps are greyed out.

## Accessibility
Since the stepper relies heavily on visual cues (colors and checkmarks), ensure that your surrounding UI clearly communicates the current step in text, such as a large "Step 2 of 4" heading, so screen readers can follow along.
`,
      },
    },
  },
};

export const Default = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" },
    { label: "Final Step" },
  ];

  return (
    <div className="p-4 border rounded">
      <Stepper steps={steps} activeStep={activeStep} className="mb-5" />
      <div className="d-flex justify-content-between">
        <Button
          disabled={activeStep === 0}
          onClick={() => setActiveStep((s) => s - 1)}
        >
          Back
        </Button>
        <Button
          disabled={activeStep === steps.length - 1}
          onClick={() => setActiveStep((s) => s + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { label: "Personal Info" },
    { label: "Address Details" },
    { label: "Review & Submit" },
  ];

  const handleNext = () =>
    setActiveStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setActiveStep((s) => Math.max(s - 1, 0));

  return (
    <div
      className="p-4 border rounded shadow-sm bg-white"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <h4 className="mb-4 text-center">User Registration</h4>
      <Stepper steps={steps} activeStep={activeStep} className="mb-5" />

      <div className="mb-4 p-3 bg-light rounded border">
        {activeStep === 0 && (
          <div>
            <h5 className="mb-3">Step 1: Personal Information</h5>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <FormControl type="text" placeholder="e.g. Aaditya Sharma" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <FormControl type="email" placeholder="aaditya@example.com" />
            </div>
          </div>
        )}

        {activeStep === 1 && (
          <div>
            <h5 className="mb-3">Step 2: Address Details</h5>
            <div className="mb-3">
              <label className="form-label">Street Address</label>
              <FormControl type="text" placeholder="Connaught Place, Block B" />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <FormSelect>
                <option>Select a city...</option>
                <option>New Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Chennai</option>
              </FormSelect>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div>
            <h5 className="mb-3">Step 3: Review & Submit</h5>
            <p className="text-muted">
              Please review your information before final submission.
            </p>
            <div className="alert alert-info">
              <strong>Demonstration:</strong> This is a practical example
              showing how to mix the <code>Stepper</code> component with{" "}
              <code>FormControl</code> and <code>FormSelect</code> components.
            </div>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <Button
          variant="outline-secondary"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Previous
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="success" onClick={() => alert("Form Submitted!")}>
            Submit Application
          </Button>
        ) : (
          <Button variant="primary" onClick={handleNext}>
            Next Step
          </Button>
        )}
      </div>
    </div>
  );
};
