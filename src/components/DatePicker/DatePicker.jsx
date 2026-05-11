import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "../Form/FormControl";

/**
 * DatePicker component for selecting dates (HTML5 input type="date" wrapper).
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered DatePicker component.
 */
export const DatePicker = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <FormControl
        type="date"
        ref={ref}
        className={`ux4g-datepicker ${className}`.trim()}
        {...props}
      />
    );
  },
);

DatePicker.displayName = "DatePicker";

/**
 * TimePicker component for selecting times (HTML5 input type="time" wrapper).
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered TimePicker component.
 */
export const TimePicker = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <FormControl
        type="time"
        ref={ref}
        className={`ux4g-timepicker ${className}`.trim()}
        {...props}
      />
    );
  },
);

TimePicker.displayName = "TimePicker";

DatePicker.propTypes = {
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

TimePicker.propTypes = {
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
