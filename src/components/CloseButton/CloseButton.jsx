import React from "react";
import PropTypes from "prop-types";

/**
 * CloseButton component used for dismissing modals, alerts, and offcanvases.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {boolean} [props.white=false] - If true, renders a white variant (useful on dark backgrounds).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered CloseButton component.
 */
export const CloseButton = ({
  disabled = false,
  white = false,
  className = "",
  ...props
}) => {
  const classes =
    `btn-close ${white ? "btn-close-white" : ""} ${className}`.trim();

  return (
    <button
      type="button"
      className={classes}
      aria-label="Close"
      disabled={disabled}
      {...props}
    ></button>
  );
};

CloseButton.propTypes = {
  /**
   * If true, the button is disabled, grayed out, and unclickable.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If true, renders a white variant of the close icon. Useful when placing the button on dark or highly saturated backgrounds.
   * @default false
   */
  white: PropTypes.bool,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};
