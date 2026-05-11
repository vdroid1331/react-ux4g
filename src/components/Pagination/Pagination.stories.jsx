import React from "react";
import { Pagination } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Pagination Component
The \`Pagination\` component provides a standardized set of controls for navigating through pages of data or search results.

## Usage Guidelines
- **Composition:** Wrap a list of \`Pagination.Item\` components inside the \`Pagination\` wrapper. Inside each item, use \`Pagination.Link\` for the clickable target.
- **States:** Apply the \`active\` prop to the current page item, and the \`disabled\` prop to the "Previous" or "Next" items when at the boundaries of the list.
- **Sizing:** Use the \`size\` prop on the root \`Pagination\` component to easily scale all buttons up (\`lg\`) or down (\`sm\`).

## Accessibility
The component wraps the list in a native \`<nav>\` element with \`aria-label="Page navigation"\`. When an item is marked active, the link should ideally receive \`aria-current="page"\` so screen readers identify it as the currently loaded set of data. Disabled links should receive \`aria-disabled="true"\`.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Pagination>
      <Pagination.Item disabled>
        <Pagination.Link tabIndex="-1" aria-disabled="true">
          Previous
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item active aria-current="page">
        <Pagination.Link>2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link>Next</Pagination.Link>
      </Pagination.Item>
    </Pagination>
  ),
};

export const Sizes = {
  render: () => (
    <>
      <Pagination size="lg">
        <Pagination.Item>
          <Pagination.Link>1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>3</Pagination.Link>
        </Pagination.Item>
      </Pagination>
      <Pagination size="sm">
        <Pagination.Item>
          <Pagination.Link>1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>3</Pagination.Link>
        </Pagination.Item>
      </Pagination>
    </>
  ),
};
