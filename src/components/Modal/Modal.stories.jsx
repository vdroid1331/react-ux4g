import React, { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { FormControl } from "../Form/FormControl";
import { FloatingLabel } from "../FloatingLabel/FloatingLabel";
export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Modal Component
The \`Modal\` component allows you to add dialogs to your site for lightboxes, user notifications, or completely custom content.

## Usage Guidelines
- **Controlled Component:** Modals rely on external state (the \`show\` prop) to determine visibility. You must manage this state and pass an \`onHide\` handler to allow the modal to close itself.
- **Structure:** Always use \`Modal.Body\` for the main content. Use \`Modal.Header\` with the \`closeButton\` prop to provide a standard title area, and \`Modal.Footer\` to house primary/secondary action buttons.
- **Placement:** Modals render as a fixed overlay over the entire application.

## Accessibility
The Modal uses \`role="dialog"\` and manages focus to ensure screen reader users are trapped within the modal while it is open. Ensure your \`Modal.Header\` contains a \`Modal.Title\` to properly identify the dialog's purpose.
`,
      },
    },
  },
};

export const BasicModal = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Launch demo modal
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setShow(false)}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const StaticBackdrop = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Launch static backdrop modal
        </Button>
        <Modal show={show} onHide={() => setShow(false)} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Understood
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const Centered = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Vertically centered modal
        </Button>
        <Modal show={show} onHide={() => setShow(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>This modal is vertically centered.</Modal.Body>
        </Modal>
      </>
    );
  },
};

export const ProfileEditorModal = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Edit Profile
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="alert alert-info mb-4">
              <strong>Demonstration:</strong> This is a practical example
              showing how to mix the <code>Modal</code> component with{" "}
              <code>FloatingLabel</code> and <code>FormControl</code>{" "}
              components.
            </div>
            <form>
              <div className="mb-3">
                <FloatingLabel label="Full Name">
                  <FormControl type="text" defaultValue="Aaditya Sharma" />
                </FloatingLabel>
              </div>
              <div className="mb-3">
                <FloatingLabel label="Email address">
                  <FormControl
                    type="email"
                    defaultValue="aaditya@example.com"
                  />
                </FloatingLabel>
              </div>
              <div className="mb-3">
                <label className="form-label">Bio</label>
                <FormControl
                  as="textarea"
                  rows={3}
                  defaultValue="Frontend developer working on UX4G."
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button
              variant="success"
              onClick={() => {
                alert("Profile updated successfully!");
                setShow(false);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
