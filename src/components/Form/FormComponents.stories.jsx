import React from "react";
import { FormControl } from "./FormControl";
import { FormSelect } from "./FormSelect";
import { FloatingLabel } from "../FloatingLabel/FloatingLabel";
import { InputGroup } from "../InputGroup/InputGroup";
import { Feedback } from "../Feedback/Feedback";
import { Range } from "../Range/Range";

export default {
  title: "Forms/Comprehensive Examples",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Form Components
This comprehensive page demonstrates the usage of all fundamental form controls provided by the library, including \`FormControl\`, \`FormSelect\`, \`FormCheck\`, \`FloatingLabel\`, \`InputGroup\`, \`Range\`, and Validation \`Feedback\`.

## Usage Guidelines
- **FormControl:** Use for standard text, email, and password inputs.
- **FormSelect:** Use for native dropdown menus. Do not use \`FormControl\` for selects.
- **FormCheck:** Use for checkboxes, radios, and toggle switches (by passing \`type="switch"\`).
- **Validation:** Use the \`isInvalid\` prop alongside the \`Feedback\` component to show error states.

## Accessibility
All components are designed to use semantic HTML. Always ensure that every input has an associated label (either visually or via \`aria-label\`) so screen readers can correctly identify the field's purpose.
`,
      },
    },
  },
};

export const AllInputTypes = {
  render: () => (
    <form style={{ maxWidth: "600px" }}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <FormControl type="email" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <FormControl type="password" />
      </div>
      <div className="mb-3">
        <label className="form-label">Select Menu</label>
        <FormSelect>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect>
      </div>
      <div className="mb-3">
        <label className="form-label">Textarea</label>
        <textarea className="form-control" rows="3" />
      </div>
    </form>
  ),
};

export const SizingAndStates = {
  render: () => (
    <form style={{ maxWidth: "600px" }}>
      <FormControl
        size="lg"
        type="text"
        placeholder=".form-control-lg"
        className="mb-3"
      />
      <FormControl type="text" placeholder="Default input" className="mb-3" />
      <FormControl
        size="sm"
        type="text"
        placeholder=".form-control-sm"
        className="mb-3"
      />
      <FormControl
        type="text"
        placeholder="Disabled input"
        disabled
        className="mb-3"
      />
      <FormControl
        type="text"
        placeholder="Readonly input"
        readOnly
        className="mb-3"
      />
    </form>
  ),
};

export const FloatingLabelsGroup = {
  render: () => (
    <form style={{ maxWidth: "600px" }}>
      <FloatingLabel label="Email address" className="mb-3">
        <FormControl type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel label="Password" className="mb-3">
        <FormControl type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel label="Comments">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </form>
  ),
};

export const InputGroups = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
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

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
    </div>
  ),
};

export const ValidationWithFeedback = {
  render: () => (
    <form className="was-validated" style={{ maxWidth: "600px" }}>
      <div className="mb-3">
        <label className="form-label">Valid input</label>
        <FormControl type="text" defaultValue="Mark" required />
        <Feedback type="valid">Looks good!</Feedback>
      </div>
      <div className="mb-3">
        <label className="form-label">Invalid input</label>
        <FormControl type="text" required />
        <Feedback type="invalid">Please provide a valid input.</Feedback>
      </div>
    </form>
  ),
};

export const Ranges = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <label className="form-label">Example Range</label>
      <Range />
      <label className="form-label mt-3">Min, Max, and Steps</label>
      <Range min="0" max="5" step="0.5" id="customRange3" />
      <label className="form-label mt-3">Disabled Range</label>
      <Range disabled />
    </div>
  ),
};
