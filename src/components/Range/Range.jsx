import React from "react";
import PropTypes from "prop-types";

/**
 * Range component for inputting a number within a specified range via a sliding scale.
 * Wrapper for native input type="range".
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string|number} [props.min] - Minimum value.
 * @param {string|number} [props.max] - Maximum value.
 * @param {string|number} [props.step] - Granularity of the input.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Range component.
 */
export const Range = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      type="range"
      className={`form-range ${className}`.trim()}
      ref={ref}
      {...props}
    />
  );
});

Range.displayName = "Range";

Range.propTypes = {
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** The minimum allowed value. */
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The maximum allowed value. */
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Granularity of the sliding scale input. */
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** HTML ID for the input. */
  id: PropTypes.string,
};
