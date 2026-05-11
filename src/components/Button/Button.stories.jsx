import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Button Component
The \`Button\` component is a fundamental UI element used to trigger actions, submit forms, and navigate across the application. It supports multiple visual variants, sizes, states, and styles like outlined buttons.

## Usage Guidelines
- Use **Primary** buttons for the main, most important action on a page (e.g., "Submit" or "Save").
- Use **Secondary** buttons for alternate actions (e.g., "Cancel" or "Go Back").
- Avoid having multiple primary buttons in the same view.
- Use **Outline** buttons when you want to draw less attention to an action.

## Accessibility
- Native \`<button>\` tags are used, ensuring full support for screen readers and keyboard navigation (using \`Tab\` and \`Enter\`/\`Space\`).
- If a button relies solely on an icon without text, ensure you pass an \`aria-label\` for screen readers.
- Disabled buttons correctly use the \`disabled\` HTML attribute, making them un-focusable.

## Interactive States
The button includes built-in hover and active states. It also optionally supports a \`ripple\` effect for a more dynamic feel on click.
`,
      },
    },
  },
};

export const AllVariants = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
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
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

export const AllOutlines = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
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
        <Button key={variant} variant={variant} outline>
          {variant} Outline
        </Button>
      ))}
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="d-flex gap-2 align-items-center">
      <Button size="lg">Large Button</Button>
      <Button>Default Button</Button>
      <Button size="sm">Small Button</Button>
    </div>
  ),
};

export const States = {
  render: () => (
    <div className="d-flex gap-2 align-items-center">
      <Button active>Active State</Button>
      <Button disabled>Disabled State</Button>
      <Button ripple>Ripple Effect</Button>
    </div>
  ),
};
