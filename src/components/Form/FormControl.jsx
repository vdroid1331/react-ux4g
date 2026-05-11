import React from "react";
import PropTypes from "prop-types";

/**
 * FormControl component for standard form inputs (text, email, password, etc.).
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.type='text'] - The HTML5 input type.
 * @param {'sm'|'lg'} [props.size] - The size of the input field.
 * @param {boolean} [props.isInvalid=false] - If true, applies validation error styling.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered FormControl component.
 */
export const FormControl = React.forwardRef(
  (
    { type = "text", size, className = "", isInvalid = false, ...props },
    ref,
  ) => {
    const sizeClass = size ? `form-control-${size}` : "";
    const invalidClass = isInvalid ? "is-invalid" : "";

    const classes = ["form-control", sizeClass, invalidClass, className]
      .filter(Boolean)
      .join(" ");

    return <input type={type} className={classes} ref={ref} {...props} />;
  },
);

FormControl.displayName = "FormControl";

FormControl.propTypes = {
  /** The HTML5 input type (e.g., 'text', 'email', 'password', 'file'). */
  type: PropTypes.string,
  /** The size of the input field. */
  size: PropTypes.oneOf(["sm", "lg"]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** If true, applies validation error styling (red border and icon). */
  isInvalid: PropTypes.bool,
};
