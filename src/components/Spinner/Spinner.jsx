import React from "react";
import PropTypes from "prop-types";

/**
 * Spinner component used to indicate loading state.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {'border'|'grow'} [props.animation='border'] - The type of animation.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant] - The color variant.
 * @param {'sm'} [props.size] - The size of the spinner (defaults to regular if omitted).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {string} [props.role='status'] - ARIA role.
 * @param {React.ReactNode} [props.children] - Screen-reader text for accessibility.
 * @returns {JSX.Element} The rendered Spinner component.
 */
export const Spinner = ({
  animation = "border",
  variant,
  size,
  className = "",
  role = "status",
  children,
  ...props
}) => {
  const baseClass = `spinner-${animation}`;
  const variantClass = variant ? `text-${variant}` : "";
  const sizeClass = size ? `spinner-${animation}-${size}` : "";

  const classes = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role={role} {...props}>
      {children ? (
        children
      ) : (
        <span className="visually-hidden">Loading...</span>
      )}
    </div>
  );
};

Spinner.propTypes = {
  /** The type of animation. 'border' provides a classic spinning ring, 'grow' provides a pulsing circle. */
  animation: PropTypes.oneOf(["border", "grow"]),
  /** The color variant. */
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
  /** The size of the spinner. Omit for standard size. */
  size: PropTypes.oneOf(["sm"]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** ARIA role for accessibility. */
  role: PropTypes.string,
  /** Screen-reader visually hidden text. Defaults to "Loading...". */
  children: PropTypes.node,
};
