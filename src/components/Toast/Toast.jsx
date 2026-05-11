import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CloseButton } from "../CloseButton/CloseButton";

/**
 * Toast component for displaying brief, auto-expiring notifications.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} [props.show=true] - Whether the toast is currently visible.
 * @param {Function} [props.onClose] - Callback fired when the toast is closed or autohides.
 * @param {number} [props.delay=5000] - Delay in milliseconds before autohiding (if autohide is true).
 * @param {boolean} [props.autohide=false] - If true, automatically hides the toast after the delay.
 * @param {React.ReactNode} props.children - Toast subcomponents (Header, Body).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element|null} The rendered Toast component, or null if hidden.
 */
export const Toast = ({
  show = true,
  onClose,
  delay = 5000,
  autohide = false,
  children,
  className = "",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  useEffect(() => {
    if (autohide && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [autohide, isVisible, delay, onClose]);

  if (!isVisible) return null;

  const classes = `toast show ${className}`.trim();

  return (
    <div
      className={classes}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Header section for the Toast component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The header text or icon.
 * @param {boolean} [props.closeButton=false] - If true, displays a close button.
 * @param {Function} [props.onClose] - Callback for the close button.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Toast Header.
 */
export const ToastHeader = ({
  children,
  closeButton = false,
  onClose,
  className = "",
  ...props
}) => (
  <div className={`toast-header ${className}`.trim()} {...props}>
    {children}
    {closeButton && <CloseButton onClick={onClose} className="me-2 m-auto" />}
  </div>
);

/**
 * Body section for the Toast component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The main content of the notification.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Toast Body.
 */
export const ToastBody = ({ children, className = "", ...props }) => (
  <div className={`toast-body ${className}`.trim()} {...props}>
    {children}
  </div>
);

Toast.Header = ToastHeader;
Toast.Body = ToastBody;

Toast.propTypes = {
  /** Whether the toast is currently visible. */
  show: PropTypes.bool,
  /** Callback fired when the toast requests to be closed (e.g., clicking close button or autohiding). */
  onClose: PropTypes.func,
  /** Delay in milliseconds before the toast automatically hides. */
  delay: PropTypes.number,
  /** If true, automatically hides the toast after the defined delay. */
  autohide: PropTypes.bool,
  /** Toast subcomponents (Header, Body). */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

ToastHeader.propTypes = {
  /** The header text or icon. */
  children: PropTypes.node.isRequired,
  /** If true, displays a built-in CloseButton on the right side. */
  closeButton: PropTypes.bool,
  /** Callback fired when the close button is clicked. */
  onClose: PropTypes.func,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

ToastBody.propTypes = {
  /** The main content of the notification. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
