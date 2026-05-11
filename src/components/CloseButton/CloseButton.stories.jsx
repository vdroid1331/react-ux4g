import React from "react";
import { CloseButton } from "./CloseButton";

export default {
  title: "Components/CloseButton",
  component: CloseButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Close Button Component
The \`CloseButton\` is a generic, universally recognized "X" icon button used primarily for dismissing content like Modals, Alerts, and Offcanvases.

## Usage Guidelines
- **Placement:** Usually placed in the top right corner of the element it controls.
- **Dark Backgrounds:** By default, the close icon is dark. If you are placing it on a dark or primary colored background, use the \`white\` prop to invert its color for better contrast.

## Accessibility
It natively renders a \`<button>\` tag and automatically includes an \`aria-label="Close"\` to ensure it is perfectly accessible to screen readers out-of-the-box, without requiring any visible text.
`,
      },
    },
  },
};

export const Default = {
  render: () => <CloseButton />,
};

export const Disabled = {
  render: () => <CloseButton disabled />,
};

export const White = {
  render: () => (
    <div className="bg-dark p-3">
      <CloseButton white />
    </div>
  ),
};
