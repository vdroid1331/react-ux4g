import React from "react";
import { Breadcrumb } from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Breadcrumb Component
The \`Breadcrumb\` component indicates the current page's location within a navigational hierarchy.

## Usage Guidelines
- **Hierarchy:** Use breadcrumbs to show a hierarchical path to the current page (e.g., Home > Category > Subcategory > Current Page).
- **Active State:** The last item in the breadcrumb should represent the current page and have the \`active\` prop set to \`true\`. Active items automatically receive \`aria-current="page"\` and should not be clickable links.
- **Links:** For all intermediate steps, provide an \`href\` prop so users can navigate back up the tree.

## Accessibility
The component uses a \`<nav aria-label="breadcrumb">\` wrapper and an ordered list \`<ol>\` to ensure screen readers correctly interpret it as a navigation landmark with sequential items.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
import { Breadcrumb } from 'react-ux4g';

export default function App() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}
`.trim(),
      },
    },
  },
};
