import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button/Button";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Button Group Component
The \`ButtonGroup\` component allows you to group a series of buttons together on a single line or stack them in a vertical column.

## Usage Guidelines
- **Related Actions:** Group buttons when their actions are related or affect the same object (like pagination controls or text alignment toggles).
- **Consistent Sizing:** Instead of sizing each individual button, you can apply the \`size\` prop directly to the \`ButtonGroup\` to uniformly size all children.
- **Vertical Stacking:** Use the \`vertical\` prop for creating sidebar menus or compact vertical toolbars.

## Accessibility
The component wraps the buttons in a \`div\` with \`role="group"\`. If the button group represents a specific toolbar, you should consider adding an \`aria-label\` (e.g., \`aria-label="Text formatting controls"\`) to give screen reader users context.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <ButtonGroup aria-label="Basic example">
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Vertical = {
  render: () => (
    <ButtonGroup vertical aria-label="Vertical button group">
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </ButtonGroup>
  ),
};
