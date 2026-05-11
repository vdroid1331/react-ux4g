import React from "react";
import PropTypes from "prop-types";

/**
 * Progress component for displaying custom progress bars.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} [props.value=0] - The current value of progress (between min and max).
 * @param {number} [props.min=0] - The minimum value.
 * @param {number} [props.max=100] - The maximum value.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant] - The color variant.
 * @param {boolean} [props.striped=false] - If true, displays a striped gradient pattern.
 * @param {boolean} [props.animated=false] - If true, animates the stripes (requires striped=true).
 * @param {React.ReactNode} [props.label] - Text label to display inside the progress bar.
 * @param {string} [props.height] - Optional custom height (e.g., '20px').
 * @param {string} [props.className=''] - Additional CSS classes for the container.
 * @param {string} [props.barClassName=''] - Additional CSS classes for the internal bar.
 * @returns {JSX.Element} The rendered Progress component.
 */
export const Progress = ({
  value = 0,
  min = 0,
  max = 100,
  variant,
  striped = false,
  animated = false,
  label,
  height,
  className = "",
  barClassName = "",
  ...props
}) => {
  const percent = Math.min(
    Math.max(((value - min) / (max - min)) * 100, 0),
    100,
  );

  const barClasses = [
    "progress-bar",
    variant ? `bg-${variant}` : "",
    striped ? "progress-bar-striped" : "",
    animated ? "progress-bar-animated" : "",
    barClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`progress ${className}`.trim()}
      style={{ height }}
      {...props}
    >
      <div
        className={barClasses}
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {label && label}
      </div>
    </div>
  );
};

Progress.propTypes = {
  /** The current progress value. */
  value: PropTypes.number,
  /** The minimum value. */
  min: PropTypes.number,
  /** The maximum value. */
  max: PropTypes.number,
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
  /** If true, displays a striped gradient pattern. */
  striped: PropTypes.bool,
  /** If true, animates the stripes from right to left (requires striped=true). */
  animated: PropTypes.bool,
  /** Text label to display inside the progress bar. */
  label: PropTypes.node,
  /** Optional custom height for the outer container. */
  height: PropTypes.string,
  /** Additional custom CSS classes for the outer container. */
  className: PropTypes.string,
  /** Additional custom CSS classes for the internal progress bar. */
  barClassName: PropTypes.string,
};
