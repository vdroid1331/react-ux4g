import React from "react";
import { Alert } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Alert Component
The \`Alert\` component provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Usage Guidelines
- **Feedback:** Use alerts to inform users about the status of an action (e.g., success message after saving, error message if a submission fails).
- **Additional Content:** Alerts can contain additional HTML elements like headings, paragraphs, and dividers to structure complex messages.
- **Dismissible:** Add the \`dismissible\` prop to allow users to close the alert when it is no longer needed.

## Accessibility
Alerts automatically apply the \`role="alert"\` attribute to ensure that assistive technologies like screen readers immediately announce the alert content when it appears dynamically.
`,
      },
    },
  },
};

export const AllVariants = {
  render: () => (
    <div>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          A simple {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  ),
};

export const AdditionalContent = {
  render: () => (
    <Alert variant="success">
      <h4 className="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  ),
};

export const Dismissible = {
  render: () => (
    <Alert variant="warning" dismissible>
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
    </Alert>
  ),
};
