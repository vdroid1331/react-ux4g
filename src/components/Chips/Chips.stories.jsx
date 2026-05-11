import React, { useState } from "react";
import { Chips } from "./Chips";

export default {
  title: "Components/Chips",
  component: Chips,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Chips Component
The \`Chips\` component (sometimes called Tags or Pills) is used to represent small, interactive blocks of information. They are ideal for categorizing content, applying filters, or representing selected multi-select options.

## Usage Guidelines
- **Filtering:** Use chips to allow users to toggle filters on a data table or search results page.
- **Dismissible:** Provide the \`onClose\` callback to automatically render a small trailing close button, allowing users to remove the chip (e.g., removing a selected filter).
- **Sizing:** Chips have a slightly smaller font size than badges to allow multiple chips to sit together comfortably in a row.

## Accessibility
If using dismissible chips, ensure the \`onClose\` action removes the item from the DOM and appropriately manages focus so keyboard users aren't left stranded on a deleted element.
`,
      },
    },
  },
};

export const Default = () => {
  const [chips, setChips] = useState(["React", "UX4G", "Design System"]);

  const handleRemove = (chipToRemove) => {
    setChips(chips.filter((c) => c !== chipToRemove));
  };

  return (
    <div className="d-flex gap-2">
      {chips.map((chip) => (
        <Chips key={chip} label={chip} onClose={() => handleRemove(chip)} />
      ))}
      <Chips label="Read-only chip" variant="secondary" />
    </div>
  );
};
