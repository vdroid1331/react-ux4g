import React from "react";
import { Progress } from "./Progress";

export default {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Progress Component
The \`Progress\` component displays a custom progress bar to indicate the completion state of a task or process.

## Usage Guidelines
- **Value Handling:** Provide a \`value\` between \`min\` (default 0) and \`max\` (default 100). The component automatically calculates the percentage width.
- **Styling:** Use \`striped={true}\` to add a CSS gradient stripe effect. Add \`animated={true}\` alongside it to make the stripes move.
- **Labels:** Pass a string to the \`label\` prop to display text centered inside the active progress bar (e.g., "50%").

## Accessibility
The internal bar element automatically receives \`role="progressbar"\` and updates the \`aria-valuenow\`, \`aria-valuemin\`, and \`aria-valuemax\` attributes based on the props you provide, ensuring screen readers can announce the exact completion status.
`,
      },
    },
  },
};

export const Default = {
  args: {
    value: 50,
  },
};

export const StripedAnimated = {
  args: {
    value: 75,
    striped: true,
    animated: true,
    variant: "success",
  },
};

export const WithLabel = {
  args: {
    value: 25,
    label: "25%",
  },
};
