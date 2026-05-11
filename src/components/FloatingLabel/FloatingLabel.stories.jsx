import React from "react";
import { FloatingLabel } from "./FloatingLabel";
import { FormControl } from "../Form/FormControl";

export default {
  title: "Components/FloatingLabel",
  component: FloatingLabel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Floating Label Component
The \`FloatingLabel\` component creates beautifully animated form labels that "float" above the input field when the user focuses or enters a value.

## Usage Guidelines
- **Child Requirement:** The component requires exactly one child element, which must be a form control like \`FormControl\` or \`FormSelect\`.
- **Placeholder Rule:** The internal form control *must* have a placeholder attribute for the CSS animation to work correctly. If you don't provide one, the component will automatically inject the \`label\` text as the placeholder.
- **Heights:** Floating labels enforce a consistent height layout. Avoid using \`size="sm"\` or \`size="lg"\` on the inner form control, as the floating label handles the sizing itself.

## Accessibility
The \`controlId\` prop is strictly required. It automatically assigns the \`id\` to the internal input and creates the \`htmlFor\` attribute on the generated \`<label>\`. This guarantees that clicking the label focuses the input, and screen readers correctly read the label when the input is focused.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <FormControl type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <FormControl type="password" placeholder="Password" />
      </FloatingLabel>
    </div>
  ),
};
