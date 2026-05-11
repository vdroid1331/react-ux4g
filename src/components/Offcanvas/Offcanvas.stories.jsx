import React, { useState } from "react";
import { Offcanvas } from "./Offcanvas";
import { Button } from "../Button/Button";
import { ListGroup } from "../ListGroup/ListGroup";
import { Badge } from "../Badge/Badge";
export default {
  title: "Components/Offcanvas",
  component: Offcanvas,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Offcanvas Component
The \`Offcanvas\` component builds hidden sidebars into your project for navigation, shopping carts, and more.

## Usage Guidelines
- **Placement:** Use the \`placement\` prop to determine where the sidebar slides in from (\`start\` for left, \`end\` for right, \`top\`, or \`bottom\`).
- **Controlled State:** Similar to Modals, the component is completely controlled by the \`show\` prop and requires an \`onHide\` callback to dismiss itself when the backdrop or close button is clicked.
- **Backdrop:** A dark backdrop is automatically rendered behind the offcanvas, restricting interaction with the main page content until dismissed.

## Accessibility
When opened, focus is automatically trapped within the Offcanvas to ensure keyboard users cannot accidentally navigate the hidden page beneath. Ensure you provide an \`Offcanvas.Title\` inside the \`Offcanvas.Header\` so screen readers can announce the purpose of the sidebar.
`,
      },
    },
  },
};

export const Default = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch demo offcanvas
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton onHide={() => setShow(false)}>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export const NotificationsSidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="outline-primary"
        onClick={() => setShow(true)}
        className="position-relative"
      >
        Notifications
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">New alerts</span>
        </span>
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header
          closeButton
          onHide={() => setShow(false)}
          className="border-bottom"
        >
          <Offcanvas.Title>Activity Feed</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div
            className="p-3 bg-light border-bottom text-muted"
            style={{ fontSize: "0.85rem" }}
          >
            <strong>Demonstration:</strong> Mixing <code>Offcanvas</code> with{" "}
            <code>ListGroup</code> and <code>Badge</code>.
          </div>
          <ListGroup variant="flush">
            <ListGroup.Item className="p-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <strong>System Update</strong>
                <Badge variant="info">New</Badge>
              </div>
              <p className="mb-1 text-muted small">
                Server maintenance scheduled for tonight at 2:00 AM.
              </p>
              <small className="text-primary">10 mins ago</small>
            </ListGroup.Item>
            <ListGroup.Item className="p-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <strong>New User Registration</strong>
              </div>
              <p className="mb-1 text-muted small">
                A new user "Priya" just signed up.
              </p>
              <small className="text-secondary">1 hour ago</small>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
