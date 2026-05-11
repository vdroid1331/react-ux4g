import React from "react";
import { Figure } from "./Figure";

export default {
  title: "Components/Figure",
  component: Figure,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Figure Component
The \`Figure\` component provides semantic HTML5 structure for displaying an image alongside an associated caption.

## Usage Guidelines
- **Composition:** Wrap a \`Figure.Image\` and a \`Figure.Caption\` inside the root \`Figure\` component.
- **Image Sizing:** The \`Figure.Image\` automatically receives responsive classes (\`img-fluid\`) and rounded corners by default to fit modern design aesthetics.

## Accessibility
The \`<figure>\` and \`<figcaption>\` tags are inherently semantic. Screen readers understand that the caption describes the content of the figure. However, you must still provide a valid \`alt\` text on the \`Figure.Image\` itself.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://placehold.co/171x180?text=Figure+Image"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  ),
};
