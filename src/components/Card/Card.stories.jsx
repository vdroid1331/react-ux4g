import React from "react";
import { Card } from "./Card";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { ListGroup } from "../ListGroup/ListGroup";
export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Card Component
The \`Card\` component provides a flexible and extensible content container with multiple variants and options. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

## Usage Guidelines
- **Structure:** Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Use \`Card.Body\` as the main wrapper, and optionally add \`Card.Header\` or \`Card.Footer\`.
- **Subcomponents:** Utilize \`Card.Title\`, \`Card.Subtitle\`, \`Card.Text\`, and \`Card.Link\` to automatically apply standard padding and typography.
- **Images:** You can easily embed images at the top or bottom of the card.

## Accessibility
Since cards are generic containers, they do not have specific ARIA roles assigned by default. If a card represents an article or a discrete piece of content, you can manually pass \`role="article"\` or \`role="region"\` with an \`aria-labelledby\` to improve screen reader experience.
`,
      },
    },
  },
};

export const BasicCard = {
  render: () => (
    <Card style={{ width: "18rem" }}>
      <img
        src="https://placehold.co/600x400?text=Card+Image"
        alt="Card cap"
        className="card-img-top object-fit-cover"
        style={{ height: "150px" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  ),
};

export const HeaderAndFooter = {
  render: () => (
    <Card className="text-center" style={{ width: "25rem" }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  ),
};

export const GridCards = {
  render: () => (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {[1, 2, 3].map((i) => (
        <div className="col" key={i}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Grid Card {i}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  ),
};

export const DashboardWidget = {
  render: () => (
    <Card style={{ width: "22rem" }} className="shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center bg-white fw-bold">
        Recent Tasks
        <Badge variant="primary" rounded>
          3 New
        </Badge>
      </Card.Header>

      <div
        className="p-3 bg-light border-bottom text-muted"
        style={{ fontSize: "0.85rem" }}
      >
        <strong>Demonstration:</strong> This practical example mixes{" "}
        <code>Card</code>, <code>ListGroup</code>, and <code>Badge</code>{" "}
        components to create a dashboard widget.
      </div>

      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between align-items-center py-3">
          <div>
            <h6 className="mb-1">Update Documentation</h6>
            <small className="text-muted">Assigned to Aaditya</small>
          </div>
          <Badge variant="warning">In Progress</Badge>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center py-3">
          <div>
            <h6 className="mb-1">Fix Navigation Bug</h6>
            <small className="text-muted">Assigned to Team Alpha</small>
          </div>
          <Badge variant="danger">High Priority</Badge>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center py-3">
          <div>
            <h6 className="mb-1">Release v1.2.0</h6>
            <small className="text-muted">System</small>
          </div>
          <Badge variant="success">Completed</Badge>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="bg-white p-3">
        <Button variant="outline-primary" className="w-100">
          View All Tasks
        </Button>
      </Card.Footer>
    </Card>
  ),
};
