import React from "react";
import PropTypes from "prop-types";

/**
 * Badge component for small counts and labeling.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the badge.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant='primary'] - The visual color variant.
 * @param {boolean} [props.pill=false] - If true, makes the badge more rounded (pill shape).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Badge component.
 */
export const Badge = ({
  children,
  variant = "primary",
  pill = false,
  className = "",
  ...props
}) => {
  const baseClass = "badge";
  // Note: UX4G/Bootstrap usually uses bg-{variant} for badges in newer versions
  // If it's an older bootstrap fork, it might be badge-{variant}
  const bgClass = `bg-${variant}`;
  const pillClass = pill ? "rounded-pill" : "";

  const classes = [baseClass, bgClass, pillClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  /**
   * The content to be rendered inside the badge. Typically a number or a short string.
   */
  children: PropTypes.node.isRequired,
  /**
   * The visual color variant of the badge indicating its context (e.g., success for positive, danger for errors).
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
   * If true, makes the badge extremely rounded (pill shape) instead of slightly rounded corners.
   * @default false
   */
  pill: PropTypes.bool,
  /**
   * Additional custom CSS classes to apply to the badge.
   */
  className: PropTypes.string,
};
