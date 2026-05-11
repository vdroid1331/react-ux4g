import React from "react";
import { Range } from "./Range";

export default {
  title: "Components/Range",
  component: Range,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Range Component
The \`Range\` component is a custom styled slider that overrides the browser's default range input, providing a consistent cross-browser appearance.

## Usage Guidelines
- **Controlled vs Uncontrolled:** Like standard React inputs, you can manage the value using the \`value\` prop alongside an \`onChange\` handler, or use \`defaultValue\` for an uncontrolled input.
- **Constraints:** Define the bounds using \`min\` and \`max\` props.
- **Granularity:** Use the \`step\` prop to make the slider "snap" to specific increments (e.g., \`step="0.5"\`).

## Accessibility
Always pair the Range input with a standard \`<label>\` using the \`id\` and \`htmlFor\` attributes. The custom styling uses CSS variables to ensure the slider thumb remains visible and focusable for keyboard users.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <label htmlFor="customRange1" className="form-label">
        Example range
      </label>
      <Range id="customRange1" />
    </div>
  ),
};
