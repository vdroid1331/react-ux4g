import React from "react";
import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Badge Component
The \`Badge\` component is a small count and labeling component used to highlight status, notifications, or tag information.

## Usage Guidelines
- **Contextual Variants:** Badges scale to match the size of their immediate parent element by using relative font sizing and \`em\` units.
- **Positioning:** They can be used standalone or nested inside buttons and links to represent counts (like an unread message counter).
- **Pill Shape:** Use the \`pill\` prop to give the badge heavily rounded corners for a softer look.

## Accessibility
Badges are primarily visual indicators. If a badge is used to indicate a status or count, make sure to include visually hidden text (like \`<span className="visually-hidden">unread messages</span>\`) for screen readers to provide context.
`,
      },
    },
  },
};

export const ContextualVariations = {
  render: () => (
    <div className="d-flex gap-2">
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((bg) => (
        <Badge
          key={bg}
          bg={bg}
          className={
            bg === "warning" || bg === "info" || bg === "light"
              ? "text-dark"
              : ""
          }
        >
          {bg}
        </Badge>
      ))}
    </div>
  ),
};

export const PillBadges = {
  render: () => (
    <div className="d-flex gap-2">
      {["primary", "secondary", "success", "danger"].map((bg) => (
        <Badge key={bg} bg={bg} pill>
          {bg} Pill
        </Badge>
      ))}
    </div>
  ),
};

export const InsideElements = {
  render: () => (
    <div className="d-flex gap-4">
      <button className="btn btn-primary">
        Notifications{" "}
        <Badge bg="danger" className="ms-1">
          4
        </Badge>
      </button>
      <button className="btn btn-dark position-relative">
        Inbox
        <Badge
          bg="danger"
          className="position-absolute top-0 start-100 translate-middle rounded-pill"
        >
          99+
        </Badge>
      </button>
    </div>
  ),
};
