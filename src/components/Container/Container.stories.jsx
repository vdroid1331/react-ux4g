import React from "react";
import { Container } from "./Container";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

export default {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Container Component
The \`Container\` is the most fundamental layout element in the library, required when using the default grid system.

## Usage Guidelines
- **Standard vs Fluid:** Use \`Container\` to center your content within responsive fixed-width breakpoints. Use \`fluid={true}\` for a full-width container spanning the entire viewport.
- **Breakpoint Fluids:** You can pass a breakpoint to \`fluid\` (e.g., \`fluid="md"\`) to make the container 100% wide until the specified breakpoint is reached, after which it behaves like a standard fixed-width container.

## Accessibility
Containers are strictly presentational. They do not have semantic meaning for screen readers. If your container wraps a distinct region of your page, consider passing \`as="main"\` or \`as="section"\` to improve document structure.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Container className="bg-light p-3 border">
      <Row>
        <Col className="bg-primary text-white p-2">Column 1</Col>
        <Col className="bg-secondary text-white p-2">Column 2</Col>
        <Col className="bg-success text-white p-2">Column 3</Col>
      </Row>
    </Container>
  ),
};

export const Fluid = {
  render: () => (
    <Container fluid className="bg-light p-3 border">
      <Row>
        <Col className="bg-primary text-white p-2">Fluid Column 1</Col>
        <Col className="bg-secondary text-white p-2">Fluid Column 2</Col>
      </Row>
    </Container>
  ),
};
