import React from "react";
import PropTypes from "prop-types";

/**
 * Button component for triggering actions or navigation.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant='primary'] - The visual style variant.
 * @param {boolean} [props.outline=false] - If true, displays an outlined button style.
 * @param {'sm'|'lg'} [props.size] - The size of the button.
 * @param {boolean} [props.ripple=false] - If true, adds a ripple effect on click.
 * @param {boolean} [props.disabled=false] - If true, disables the button interactions.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Button component.
 */
export const Button = ({
  children,
  variant = "primary",
  outline = false,
  size,
  ripple = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClass = "btn";
  const variantClass = outline ? `btn-outline-${variant}` : `btn-${variant}`;
  const sizeClass = size ? `btn-${size}` : "";
  const rippleClass = ripple ? "ripple" : "";

  const classes = [baseClass, variantClass, sizeClass, rippleClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * The content to be rendered inside the button. This can be text, icons, or any React element.
   */
  children: PropTypes.node.isRequired,
  /**
   * The visual style variant of the button. Determines the background and text color based on the theme palette.
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
   * If true, displays an outlined button style with transparent background and colored border.
   * @default false
   */
  outline: PropTypes.bool,
  /**
   * The size of the button. Use 'sm' for smaller buttons or 'lg' for larger buttons.
   */
  size: PropTypes.oneOf(["sm", "lg"]),
  /**
   * If true, adds a material-ui style ripple effect when the button is clicked.
   * @default false
   */
  ripple: PropTypes.bool,
  /**
   * If true, disables the button, preventing mouse events and applying a disabled styling.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * Additional custom CSS classes to apply to the button.
   */
  className: PropTypes.string,
};
