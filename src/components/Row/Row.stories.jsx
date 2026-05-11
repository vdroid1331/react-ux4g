import React from "react";
import { Row } from "./Row";
import { Col } from "../Col/Col";

export default {
  title: "Components/Row",
  component: Row,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Row Component
The \`Row\` component provides a horizontal wrapper for columns in the CSS grid system.

## Usage Guidelines
- **Grid Composition:** Rows must be placed within a \`Container\`. Only \`Col\` components should be immediate children of a \`Row\`.
- **Gutters:** Rows automatically create negative margins to counteract the padding of columns, ensuring the content aligns perfectly with the container's edge. You can use standard utility classes (e.g., \`g-3\`, \`gx-2\`) to modify the gutter sizing.

## Accessibility
Rows are presentational layout elements. If a row represents a logical grouping of data that isn't a table, you might consider using \`role="list"\` combined with \`role="listitem"\` on the inner columns.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <div className="container">
      <Row className="mb-3">
        <Col className="border bg-light p-3">Row 1, Col 1</Col>
        <Col className="border bg-light p-3">Row 1, Col 2</Col>
      </Row>
      <Row>
        <Col className="border bg-light p-3">Row 2, Col 1</Col>
        <Col className="border bg-light p-3">Row 2, Col 2</Col>
        <Col className="border bg-light p-3">Row 2, Col 3</Col>
      </Row>
    </div>
  ),
};
