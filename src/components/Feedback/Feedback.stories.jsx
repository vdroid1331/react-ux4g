import React from "react";
import { Feedback } from "./Feedback";
import { FormControl } from "../Form/FormControl";

export default {
  title: "Components/Feedback",
  component: Feedback,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Feedback Component
The \`Feedback\` component provides textual validation messages for form inputs, indicating success or error states.

## Usage Guidelines
- **Context:** Place the \`Feedback\` component immediately following the \`FormControl\` it describes.
- **Activation:** The feedback text relies on its parent \`<form>\` having the \`was-validated\` class (often applied upon form submission attempts) or the input itself having validation pseudo-classes applied.
- **Tooltips:** By passing \`tooltip={true}\`, the feedback text will render as a floating tooltip overlaying the input instead of pushing down the surrounding DOM elements. Use this sparingly, as it requires the parent to have \`position: relative\`.

## Accessibility
Always pair visual feedback with appropriate ARIA attributes. For instance, link the feedback to the input using \`aria-describedby\`, or utilize \`aria-invalid="true"\` on the input when an error occurs.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <form className="was-validated" style={{ maxWidth: 400 }}>
      <div className="mb-3">
        <label htmlFor="validationTextarea" className="form-label">
          Textarea
        </label>
        <FormControl
          as="textarea"
          id="validationTextarea"
          placeholder="Required example textarea"
          required
        />
        <Feedback type="invalid">
          Please enter a message in the textarea.
        </Feedback>
      </div>
      <div className="mb-3">
        <label htmlFor="validationInput" className="form-label">
          Input
        </label>
        <FormControl
          type="text"
          id="validationInput"
          defaultValue="Looks good!"
          required
        />
        <Feedback type="valid">Looks good!</Feedback>
      </div>
    </form>
  ),
};
