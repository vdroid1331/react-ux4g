import React, { useState } from "react";
import { Toast } from "./Toast";
import { Button } from "../Button/Button";

export default {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Toast Component
The \`Toast\` component pushes brief, non-interruptive notifications to the user. They resemble push notifications common in mobile and desktop operating systems.

## Usage Guidelines
- **Autohide behavior:** Toasts can automatically dismiss themselves. Set \`autohide={true}\` and provide a \`delay\` (default is 5000ms). You must still provide an \`onClose\` handler to update your component's state when the autohide triggers.
- **Positioning:** This component does not handle absolute screen positioning. You must wrap your toasts in a \`toast-container\` div with positioning utilities (e.g., \`position-fixed bottom-0 end-0 p-3\`) to place them securely in a corner of the screen.
- **Stacking:** Multiple toasts placed in the same \`toast-container\` will automatically stack vertically.

## Accessibility
Toasts are rendered with \`role="alert"\` and \`aria-live="assertive"\`. This instructs screen readers to immediately announce the toast's content upon its appearance, regardless of what the user is currently doing. Ensure your messages are brief and concise.
`,
      },
    },
  },
};

export const Default = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show Toast</Button>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <Toast show={show} onClose={() => setShow(false)}>
          <Toast.Header closeButton onClose={() => setShow(false)}>
            <strong className="me-auto">UX4G</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </div>
    </>
  );
};
