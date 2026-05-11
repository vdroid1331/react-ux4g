import React from "react";
import { Placeholder } from "./Placeholder";
import { Card } from "../Card/Card";

export default {
  title: "Components/Placeholder",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Placeholder Component
The \`Placeholder\` component provides skeleton loading screens. They mimic the layout of your final content to reduce perceived load times.

## Usage Guidelines
- **Animation Container:** For animations to work, place your placeholders inside a container with the \`placeholder-glow\` or \`placeholder-wave\` class.
- **Sizing:** Placeholders are built on the grid system. Pass a number between 1 and 12 to the \`col\` prop to determine the width. Use the \`size\` prop for height adjustments.
- **Buttons:** Use \`Placeholder.Button\` to render a block that perfectly mimics the dimensions of a standard button component.

## Accessibility
Placeholders are inherently visual and do not convey information themselves. Ensure your application uses \`aria-busy="true"\` on the parent container or announces a loading state via an ARIA live region while the skeleton is visible.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <div>
      <p className="placeholder-glow">
        <Placeholder col={6} />
      </p>
      <p className="placeholder-wave">
        <Placeholder col={7} />
      </p>
    </div>
  ),
};

export const CardPlaceholder = {
  render: () => (
    <Card style={{ width: "18rem" }}>
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
      </svg>
      <Card.Body>
        <Placeholder as="h5" animation="glow">
          <Placeholder col={6} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder col={7} /> <Placeholder col={4} />{" "}
          <Placeholder col={4} /> <Placeholder col={6} />{" "}
          <Placeholder col={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" col={6} />
      </Card.Body>
    </Card>
  ),
};
