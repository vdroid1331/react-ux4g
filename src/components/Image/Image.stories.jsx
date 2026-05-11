import React from "react";
import { Image } from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Image Component
The \`Image\` component provides simple styling utilities for standard \`<img>\` tags.

## Usage Guidelines
- **Responsiveness:** Always apply the \`fluid\` prop to images that are larger than their container. This ensures they scale down gracefully without causing horizontal scrolling.
- **Styling:** Use \`thumbnail\` to give the image a subtle border and padding, or \`rounded\` to slightly round the corners.

## Accessibility
The \`alt\` prop is critical. Provide a brief, descriptive \`alt\` text for images that contain information. If the image is purely decorative and conveys no meaning, you should pass an empty string (\`alt=""\`) so screen readers explicitly ignore it.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <div className="d-flex gap-3">
      <Image src="https://placehold.co/150?text=Rounded" rounded />
      <Image src="https://placehold.co/150?text=Thumbnail" thumbnail />
    </div>
  ),
};
