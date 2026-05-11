import React from "react";
import { Col } from "./Col";
import { Row } from "../Row/Row";

export default {
  title: "Components/Col",
  component: Col,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Column Component
The \`Col\` component defines the responsive columns within your layout rows.

## Usage Guidelines
- **Responsive Spans:** Use the breakpoint props (\`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`, \`xxl\`) to specify how many columns (out of 12) the component should span at that screen size and above.
- **Auto Layout:** Passing \`true\` to a breakpoint (e.g., \`md={true}\` or just \`<Col>\`) will make the column automatically share the available space equally with its siblings.
- **Nesting:** You can nest a \`Row\` inside a \`Col\` to create infinitely complex, deeply divided grid layouts.

## Accessibility
Like the other layout elements, columns are purely visual. Ensure the content *inside* the column is marked up semantically with proper headings, paragraphs, and roles.
`,
      },
    },
  },
};

export const ResponsiveLayout = {
  render: () => (
    <div className="container">
      <Row>
        <Col xs={12} md={8} className="bg-primary text-white p-3 border">
          xs=12 md=8
        </Col>
        <Col xs={6} md={4} className="bg-secondary text-white p-3 border">
          xs=6 md=4
        </Col>
      </Row>
    </div>
  ),
};
