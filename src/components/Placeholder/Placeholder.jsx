import React from "react";
import PropTypes from "prop-types";

/**
 * Placeholder component for showing skeleton loading states.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {'glow'|'wave'} [props.animation] - The animation style of the placeholder.
 * @param {'xs'|'sm'|'lg'} [props.size] - The size/height of the placeholder.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant] - The color variant.
 * @param {number|string} [props.col] - The grid column span (1-12) to determine width.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Placeholder component.
 */
export const Placeholder = ({
  animation,
  size,
  variant,
  col,
  className = "",
  ...props
}) => {
  const baseClass = "placeholder";
  const animClass = animation ? `placeholder-${animation}` : "";
  const sizeClass = size ? `placeholder-${size}` : "";
  const colClass = col ? `col-${col}` : "";
  const variantClass = variant ? `bg-${variant}` : "";

  const classes = [
    baseClass,
    colClass,
    animClass,
    sizeClass,
    variantClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes} {...props}></span>;
};

/**
 * Placeholder formatted to look like a Button, useful for loading states of actions.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {'glow'|'wave'} [props.animation] - The animation style.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant='primary'] - The color variant.
 * @param {number|string} [props.col] - The grid column span.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Placeholder Button component.
 */
export const PlaceholderButton = ({
  animation,
  variant = "primary",
  col,
  className = "",
  ...props
}) => {
  const baseClass = "btn disabled placeholder";
  const colClass = col ? `col-${col}` : "";
  const variantClass = `btn-${variant}`;
  const animClass = animation ? `placeholder-${animation}` : "";

  const classes = [baseClass, colClass, variantClass, animClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href="#"
      tabIndex="-1"
      className={classes}
      aria-hidden="true"
      {...props}
    ></a>
  );
};

Placeholder.Button = PlaceholderButton;

Placeholder.propTypes = {
  /** The animation style. 'glow' creates a fading pulse, 'wave' creates a sweeping gradient. */
  animation: PropTypes.oneOf(["glow", "wave"]),
  /** The size/height of the placeholder line. */
  size: PropTypes.oneOf(["xs", "sm", "lg"]),
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
  /** The grid column span (1-12) to determine the width of the placeholder line. */
  col: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

PlaceholderButton.propTypes = {
  ...Placeholder.propTypes,
  /** The color variant, defaults to primary for buttons. */
  variant: PropTypes.string,
};
