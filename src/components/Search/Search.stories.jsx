import React from "react";
import { Search } from "./Search";

export default {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Search Component
The \`Search\` component provides a pre-assembled, standardized search input complete with a search icon button.

## Usage Guidelines
- **Event Handling:** Instead of manually tracking the input's \`onChange\` event, use the \`onSearch\` prop. This callback is only triggered when the user presses Enter or clicks the search button, preventing unnecessary API calls on every keystroke.
- **Layout:** The component renders as a native \`<form>\` element, making it easy to drop into Navbars or toolbars.

## Accessibility
The internal text input automatically receives \`type="search"\` and \`aria-label="Search"\` attributes. The submit button uses an SVG icon, meaning it does not rely on icon fonts, and the \`<form>\` submission natively supports the Enter key.
`,
      },
    },
  },
};

export const Default = {
  args: {
    placeholder: "Search for documents...",
    onSearch: (q) => alert("Searching for: " + q),
  },
};
