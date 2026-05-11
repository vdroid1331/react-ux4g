import React from "react";
import { InputGroup } from "./InputGroup";
import { FormControl } from "../Form/FormControl";
import { FormSelect } from "../Form/FormSelect";
import { Button } from "../Button/Button";
export default {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Input Group Component
The \`InputGroup\` component allows you to easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

## Usage Guidelines
- **Prepend/Append:** Place an \`InputGroup.Text\` component *before* the \`FormControl\` to prepend it, or *after* the \`FormControl\` to append it.
- **Sizing:** Use the \`size\` prop directly on the \`InputGroup\` to uniformly size the input and its add-ons. Do not size the individual form control.

## Accessibility
When using an input group, you must ensure that the form control still has a label or an \`aria-label\`. If the prepended text acts as the label (like an "@" symbol), you can use \`aria-describedby\` on the input to associate it with the add-on's \`id\`.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
    </div>
  ),
};

export const ComplexFormInputs = {
  render: () => (
    <div
      style={{ maxWidth: 600 }}
      className="p-4 border rounded shadow-sm bg-white"
    >
      <div className="alert alert-info mb-4">
        <strong>Demonstration:</strong> Mixing <code>InputGroup</code> with{" "}
        <code>FormControl</code>, <code>FormSelect</code>, and{" "}
        <code>Button</code> components.
      </div>

      <label className="form-label fw-bold">Payment Amount</label>
      <InputGroup className="mb-4">
        <FormSelect style={{ maxWidth: "100px" }}>
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
        </FormSelect>
        <InputGroup.Text>₹</InputGroup.Text>
        <FormControl type="number" placeholder="0.00" />
        <Button variant="primary">Pay Now</Button>
      </InputGroup>

      <label className="form-label fw-bold">Custom Profile URL</label>
      <InputGroup>
        <InputGroup.Text>https://ux4g.gov.in/u/</InputGroup.Text>
        <FormControl type="text" placeholder="username" />
        <Button variant="outline-secondary">Check Availability</Button>
      </InputGroup>
    </div>
  ),
};
