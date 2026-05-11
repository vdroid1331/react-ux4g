import React from "react";
import PropTypes from "prop-types";
import { CloseButton } from "../CloseButton/CloseButton";

/**
 * Chips component for representing small blocks of information, tags, or filters.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.label - The text or content displayed inside the chip.
 * @param {Function} [props.onClose] - Callback fired when the dismiss button is clicked. If provided, a close button appears.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'outline-primary'|'outline-secondary'} [props.variant='primary'] - The color variant.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Chips component.
 */
export const Chips = ({
  label,
  onClose,
  variant = "primary",
  className = "",
  ...props
}) => {
  const classes = [
    "badge rounded-pill",
    `bg-${variant}`,
    "d-inline-flex align-items-center",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      style={{ fontSize: "0.9rem", padding: "0.4em 0.8em" }}
      {...props}
    >
      {label}
      {onClose && (
        <CloseButton
          white={["primary", "secondary", "success", "danger", "dark"].includes(
            variant,
          )}
          onClick={onClose}
          className="ms-2"
          style={{ fontSize: "0.5em" }}
        />
      )}
    </span>
  );
};

Chips.propTypes = {
  /**
   * The text, icon, or combination of elements displayed inside the chip.
   */
  label: PropTypes.node.isRequired,
  /**
   * Callback fired when the dismiss "X" button is clicked. If this prop is provided, the close button is automatically rendered.
   */
  onClose: PropTypes.func,
  /**
   * The visual color variant of the chip.
   * @default 'primary'
   */
  variant: PropTypes.string,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};
