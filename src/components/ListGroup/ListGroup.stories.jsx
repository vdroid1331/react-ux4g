import React from "react";
import { ListGroup } from "./ListGroup";

export default {
  title: "Components/ListGroup",
  component: ListGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# List Group Component
The \`ListGroup\` component is a flexible and powerful component for displaying a series of content.

## Usage Guidelines
- **Variants:** Modify the standard look by using the \`flush\` prop to remove outer borders (perfect for inside cards), or the \`numbered\` prop to create an ordered list.
- **Actionable Items:** When using links (\`href\`) or the \`action\` prop, items receive hover states and pointer cursors, making them behave like interactive menus.
- **Horizontal:** Use the \`horizontal\` prop to lay out items side-by-side, either always or at specific breakpoints (e.g., \`horizontal="md"\`).

## Accessibility
By default, the ListGroup renders as an unordered list (\`<ul>\`) with list items (\`<li>\`). If you pass an \`href\` to a \`ListGroup.Item\`, it automatically renders as an anchor tag (\`<a>\`) within the list, preserving semantic meaning for screen readers. Disabled items automatically receive \`aria-disabled="true"\`.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <ListGroup>
      <ListGroup.Item>An item</ListGroup.Item>
      <ListGroup.Item>A second item</ListGroup.Item>
      <ListGroup.Item>A third item</ListGroup.Item>
      <ListGroup.Item>A fourth item</ListGroup.Item>
      <ListGroup.Item>And a fifth one</ListGroup.Item>
    </ListGroup>
  ),
};

export const ActiveAndDisabled = {
  render: () => (
    <ListGroup>
      <ListGroup.Item active aria-current="true">
        An active item
      </ListGroup.Item>
      <ListGroup.Item>A second item</ListGroup.Item>
      <ListGroup.Item disabled>A disabled item</ListGroup.Item>
    </ListGroup>
  ),
};

export const Actionable = {
  render: () => (
    <ListGroup>
      <ListGroup.Item action href="#link1" active>
        Action link 1
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => alert("Clicked")}>
        Action button 2
      </ListGroup.Item>
    </ListGroup>
  ),
};
