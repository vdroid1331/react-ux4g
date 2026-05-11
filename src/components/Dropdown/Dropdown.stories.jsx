import React from "react";
import { Dropdown } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Dropdown Component
The \`Dropdown\` component provides toggleable, contextual overlays for displaying lists of links and actions.

## Usage Guidelines
- **Composition:** A dropdown is built using three main pieces: \`Dropdown\` (the wrapper), \`Dropdown.Toggle\` (the button that opens the menu), and \`Dropdown.Menu\` (the container for the items).
- **Items:** Use \`Dropdown.Item\` for clickable actions or links. You can also use \`Dropdown.Divider\` to visually separate groups of items.
- **Click Outside:** The component includes a built-in event listener that automatically closes the menu if the user clicks anywhere outside of the dropdown.

## Accessibility
The toggle button utilizes \`aria-expanded\` dynamically based on state. The menu items render as an unordered list \`<ul>\` containing \`<li>\` anchor tags, providing a structured layout for screen readers. Disabled items automatically receive \`aria-disabled="true"\`.
`,
      },
    },
  },
};

export const BasicDropdown = {
  render: () => (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};

export const Colors = {
  render: () => (
    <div className="d-flex gap-2">
      {["primary", "success", "info", "warning", "danger"].map((variant) => (
        <Dropdown key={variant}>
          <Dropdown.Toggle variant={variant} id={`dropdown-${variant}`}>
            {variant}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </div>
  ),
};

export const SplitButton = {
  render: () => (
    <Dropdown split>
      <Dropdown.Toggle variant="danger" id="dropdown-split-basic" split>
        Action
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
