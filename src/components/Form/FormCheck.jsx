import React from "react";
import PropTypes from "prop-types";

/**
 * FormCheck component for checkboxes, radios, and switches.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {'checkbox'|'radio'|'switch'} [props.type='checkbox'] - The type of check input.
 * @param {string} [props.id] - The HTML ID for the input and label association.
 * @param {React.ReactNode} [props.label] - The text label for the input.
 * @param {boolean} [props.disabled=false] - Whether the input is disabled.
 * @param {boolean} [props.inline=false] - If true, displays the check inline.
 * @param {boolean} [props.reverse=false] - If true, puts the input on the opposite side of the label.
 * @param {boolean} [props.isInvalid=false] - If true, applies validation error styling.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered FormCheck component.
 */
export const FormCheck = React.forwardRef(
  (
    {
      type = "checkbox",
      id,
      label,
      disabled = false,
      inline = false,
      reverse = false,
      isInvalid = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    const wrapperClass = [
      "form-check",
      inline ? "form-check-inline" : "",
      reverse ? "form-check-reverse" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const inputClass = ["form-check-input", isInvalid ? "is-invalid" : ""]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={wrapperClass}>
        <input
          type={type}
          className={inputClass}
          id={id}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {label && (
          <label className="form-check-label" htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

FormCheck.displayName = "FormCheck";

FormCheck.propTypes = {
  /** The type of check input. */
  type: PropTypes.oneOf(["checkbox", "radio", "switch"]),
  /** The HTML ID for the input, used to associate the label automatically. */
  id: PropTypes.string,
  /** The text label to display next to the input. */
  label: PropTypes.node,
  /** Whether the input is disabled. */
  disabled: PropTypes.bool,
  /** If true, displays the check input inline alongside other inline checks. */
  inline: PropTypes.bool,
  /** If true, puts the input on the opposite side of the label (right-aligned). */
  reverse: PropTypes.bool,
  /** If true, applies validation error styling. */
  isInvalid: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
