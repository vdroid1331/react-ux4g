import React from "react";
import PropTypes from "prop-types";

/**
 * FormSelect component for native select menus.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {'sm'|'lg'} [props.size] - The size of the select field.
 * @param {boolean} [props.isInvalid=false] - If true, applies validation error styling.
 * @param {React.ReactNode} props.children - The `<option>` elements.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered FormSelect component.
 */
export const FormSelect = React.forwardRef(
  ({ size, className = "", isInvalid = false, children, ...props }, ref) => {
    const sizeClass = size ? `form-select-${size}` : "";
    const invalidClass = isInvalid ? "is-invalid" : "";

    const classes = ["form-select", sizeClass, invalidClass, className]
      .filter(Boolean)
      .join(" ");

    return (
      <select className={classes} ref={ref} {...props}>
        {children}
      </select>
    );
  },
);

FormSelect.displayName = "FormSelect";

FormSelect.propTypes = {
  /** The size of the select field. */
  size: PropTypes.oneOf(["sm", "lg"]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** If true, applies validation error styling. */
  isInvalid: PropTypes.bool,
  /** The `<option>` elements to populate the select menu. */
  children: PropTypes.node.isRequired,
};
