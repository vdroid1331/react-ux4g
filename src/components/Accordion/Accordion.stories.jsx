import React from "react";
import { Accordion } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Accordion Component
The \`Accordion\` component allows you to build vertically collapsing sections. It is extremely useful for reducing page clutter by hiding large amounts of content until the user explicitly requests it.

## Usage Guidelines
- **Grouping:** Use the Accordion to group related pieces of content (like FAQs or step-by-step forms) under clickable headers.
- **Exclusive Selection:** By default, clicking on a new accordion item will collapse the currently open item, ensuring only one section is visible at a time.
- **Flush Style:** You can use the \`flush\` property to remove the default background color and outer borders, allowing the accordion to blend seamlessly into parent containers like cards.

## Accessibility
The Accordion utilizes native \`button\` tags for the headers, ensuring proper keyboard navigation. It also manages \`aria-expanded\` attributes to inform screen readers whether a section is currently open or closed.
`,
      },
    },
  },
};

export const Basic = {
  render: () => (
    <Accordion>
      <Accordion.Item header="Accordion Item #1">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element.
      </Accordion.Item>
      <Accordion.Item header="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default.
      </Accordion.Item>
      <Accordion.Item header="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default.
      </Accordion.Item>
    </Accordion>
  ),
};

export const Flush = {
  render: () => (
    <Accordion flush>
      <Accordion.Item header="Accordion Item #1">
        This is the first item's accordion body, styled flush with its parent
        container.
      </Accordion.Item>
      <Accordion.Item header="Accordion Item #2">
        This is the second item's accordion body.
      </Accordion.Item>
      <Accordion.Item header="Accordion Item #3">
        This is the third item's accordion body.
      </Accordion.Item>
    </Accordion>
  ),
};
