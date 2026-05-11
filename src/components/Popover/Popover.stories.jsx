import React from "react";
import { Popover } from "./Popover";
import { Button } from "../Button/Button";

export default {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Popover Component
The \`Popover\` component displays rich, floating content tethered to a target element. It uses \`@floating-ui/react\` under the hood for highly robust positioning, collision detection, and arrow alignment.

## Usage Guidelines
- **Triggers:** Popovers in this library are triggered by *clicking* the target element, making them suitable for interactive menus or detailed contextual information that requires user intent.
- **Composition:** Wrap your target button or element inside the \`Popover\`. Pass the popover's text/components via the \`title\` and \`content\` props.
- **Collision Avoidance:** If a popover is placed near the edge of the screen and lacks space, Floating UI will automatically flip it to the opposite side to keep it visible.

## Accessibility
The component uses Floating UI's \`useRole\` and \`useInteractions\` hooks to automatically manage \`aria-expanded\`, \`aria-controls\`, and focus management. When opened, it can be dismissed via the Escape key or by clicking outside.
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
      <Popover
        title="Popover title"
        content="And here's some amazing content. It's very engaging. Right?"
        placement="top"
      >
        <Button variant="danger">Click to toggle popover</Button>
      </Popover>
      <Popover
        title="Popover title"
        content="And here's some amazing content. It's very engaging. Right?"
        placement="right"
      >
        <Button variant="danger">Popover on right</Button>
      </Popover>
    </div>
  ),
};
