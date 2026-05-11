import React from "react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Tooltip Component
The \`Tooltip\` component displays floating, informational text when hovering over, focusing, or tapping an element. It is powered by \`@floating-ui/react\` for perfect positioning.

## Usage Guidelines
- **Triggers:** Tooltips are triggered on *hover* and *focus*. They are meant for brief, supplementary information, not interactive content (use a Popover for interactive content).
- **Composition:** Wrap the target element (like an icon or button) with the \`Tooltip\` component and provide the text via the \`content\` prop.
- **Placement:** Use the \`placement\` prop to dictate the preferred side (\`top\`, \`bottom\`, \`left\`, \`right\`). Collision detection will automatically adjust this if it hits the screen edge.

## Accessibility
The tooltip automatically manages the \`aria-describedby\` attribute on the target element, ensuring that screen reader users hear the tooltip content when focusing the button. The tooltip text itself is kept brief to avoid overwhelming speech output.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <div
      style={{
        padding: "50px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <Tooltip content="Tooltip on top" placement="top">
        <Button variant="secondary">Tooltip on top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="right">
        <Button variant="secondary">Tooltip on right</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button variant="secondary">Tooltip on bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="left">
        <Button variant="secondary">Tooltip on left</Button>
      </Tooltip>
    </div>
  ),
};
