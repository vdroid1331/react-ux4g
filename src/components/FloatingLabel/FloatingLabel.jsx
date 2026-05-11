import React from "react";
import PropTypes from "prop-types";

/**
 * FloatingLabel component for creating inputs with floating labels.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.controlId - The HTML ID for the input element.
 * @param {React.ReactNode} props.label - The label text to float.
 * @param {React.ReactElement} props.children - The form control component (e.g. FormControl, FormSelect).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered FloatingLabel component.
 */
export const FloatingLabel = ({
  controlId,
  label,
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`form-floating ${className}`.trim()} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            id: controlId,
            placeholder: child.props.placeholder || label,
          });
        }
        return child;
      })}
      <label htmlFor={controlId}>{label}</label>
    </div>
  );
};

FloatingLabel.propTypes = {
  /** The HTML ID for the input element. Used to automatically link the `<label>` to the input for accessibility. */
  controlId: PropTypes.string.isRequired,
  /** The label text that will "float" inside the input. */
  label: PropTypes.node.isRequired,
  /** The form control component (e.g. `FormControl` or `FormSelect`). Must be a single valid React element. */
  children: PropTypes.element.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
