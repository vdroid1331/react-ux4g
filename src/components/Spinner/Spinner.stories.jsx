import React from "react";
import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Spinner Component
The \`Spinner\` component provides loading indicators for your projects, utilizing CSS animations for smooth performance without requiring JavaScript intervals.

## Usage Guidelines
- **Animations:** Use \`animation="border"\` for a lightweight spinning ring, or \`animation="grow"\` for a pulsing circle.
- **Sizing:** Use \`size="sm"\` to make a spinner small enough to fit inline within a button or text element.
- **Coloring:** Spinners inherit their color from the current text color (\`currentColor\`). Use the \`variant\` prop to quickly apply standard theme colors.

## Accessibility
Spinners inherently utilize the \`role="status"\` attribute. By default, they render a visually hidden "Loading..." text block inside for screen readers. You can override this text by passing children to the component.
`,
      },
    },
  },
};

export const Border = {
  args: {
    animation: "border",
  },
};

export const Grow = {
  args: {
    animation: "grow",
    variant: "primary",
  },
};

export const Variants = {
  render: () => (
    <div className="d-flex gap-2">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="success" />
      <Spinner variant="danger" />
    </div>
  ),
};
