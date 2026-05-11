import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Alert component for providing contextual feedback messages.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the alert.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant='primary'] - The visual variant of the alert.
 * @param {boolean} [props.dismissible=false] - Whether the alert can be closed/dismissed.
 * @param {Function} [props.onClose] - Callback fired when the alert is closed.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element|null} The rendered Alert component, or null if dismissed.
 */
export const Alert = ({
  children,
  variant = "primary",
  dismissible = false,
  onClose,
  className = "",
  ...props
}) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  const baseClass = "alert";
  const variantClass = `alert-${variant}`;
  const dismissibleClass = dismissible ? "alert-dismissible fade show" : "";

  const classes = [baseClass, variantClass, dismissibleClass, className]
    .filter(Boolean)
    .join(" ");

  const handleClose = (e) => {
    setShow(false);
    if (onClose) onClose(e);
  };

  return (
    <div className={classes} role="alert" {...props}>
      {children}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={handleClose}
        ></button>
      )}
    </div>
  );
};

Alert.propTypes = {
  /**
   * The content to be displayed inside the alert. Can contain HTML elements like headings and paragraphs.
   */
  children: PropTypes.node.isRequired,
  /**
   * The visual color variant of the alert. Matches standard contextual classes.
   * @default 'primary'
   */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  /**
   * If true, adds a close button to the alert, allowing the user to dismiss it.
   * @default false
   */
  dismissible: PropTypes.bool,
  /**
   * Callback fired when the alert is closed (via the dismiss button).
   */
  onClose: PropTypes.func,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};
