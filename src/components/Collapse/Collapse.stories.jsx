import React, { useState } from "react";
import { Collapse } from "./Collapse";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

export default {
  title: "Components/Collapse",
  component: Collapse,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Collapse Component
The \`Collapse\` component allows you to toggle the visibility of content. It provides a smooth transition when expanding and collapsing, powered by CSS transitions.

## Usage Guidelines
- **Controlled State:** The component relies on the \`in\` boolean prop. You must manage this state in your parent component (e.g., using a toggle button).
- **Performance:** Collapsed content is hidden via CSS, meaning it remains in the DOM. This is great for SEO and accessibility, but if you have extremely heavy components, consider conditional rendering instead.

## Accessibility
When building a toggle button for a Collapse component, ensure you add \`aria-expanded={isOpen}\` and \`aria-controls="collapse-id"\` to the button to inform screen readers of the state change.
`,
      },
    },
  },
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mb-3"
      >
        Click to toggle
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card>
            <Card.Body>
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </>
  );
};
