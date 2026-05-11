import React from "react";
import PropTypes from "prop-types";

/**
 * Feedback component for form validation messages.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The feedback text.
 * @param {'valid'|'invalid'} [props.type='invalid'] - The type of feedback (valid/invalid).
 * @param {boolean} [props.tooltip=false] - If true, styles the feedback as a tooltip.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Feedback component.
 */
export const Feedback = ({
  children,
  type = "invalid",
  tooltip = false,
  className = "",
  ...props
}) => {
  const classes = [
    `${type}-feedback`,
    tooltip ? `${type}-tooltip` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Feedback.propTypes = {
  /** The feedback text to display. */
  children: PropTypes.node.isRequired,
  /** The type of feedback, dictating the color (green for valid, red for invalid). */
  type: PropTypes.oneOf(["valid", "invalid"]),
  /** If true, styles the feedback as a tooltip floating over the input rather than inline block text. */
  tooltip: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
