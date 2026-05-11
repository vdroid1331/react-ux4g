import React from "react";
import PropTypes from "prop-types";
import { CloseButton } from "../CloseButton/CloseButton";

/**
 * Offcanvas component for building hidden sidebars for navigation, shopping carts, etc.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.show - Whether the offcanvas is visible.
 * @param {Function} props.onHide - Callback fired to close the offcanvas.
 * @param {'start'|'end'|'top'|'bottom'} [props.placement='start'] - Where the offcanvas should open from.
 * @param {React.ReactNode} props.children - Offcanvas subcomponents (Header, Body).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Offcanvas component.
 */
export const Offcanvas = ({
  show,
  onHide,
  placement = "start",
  children,
  className = "",
  ...props
}) => {
  const classes = [
    "offcanvas",
    `offcanvas-${placement}`,
    show ? "show" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {show && (
        <div className="offcanvas-backdrop fade show" onClick={onHide}></div>
      )}
      <div
        className={classes}
        tabIndex="-1"
        style={{ visibility: show ? "visible" : "hidden" }}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

/**
 * Header section for the Offcanvas component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The header content (usually Offcanvas.Title).
 * @param {boolean} [props.closeButton=false] - If true, displays a built-in close button.
 * @param {Function} [props.onHide] - Callback for the close button.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Offcanvas Header.
 */
export const OffcanvasHeader = ({
  children,
  closeButton = false,
  onHide,
  className = "",
  ...props
}) => (
  <div className={`offcanvas-header ${className}`.trim()} {...props}>
    {children}
    {closeButton && <CloseButton onClick={onHide} />}
  </div>
);

/**
 * Title element for the Offcanvas.Header.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The title text.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Offcanvas Title.
 */
export const OffcanvasTitle = ({ children, className = "", ...props }) => (
  <h5 className={`offcanvas-title ${className}`.trim()} {...props}>
    {children}
  </h5>
);

/**
 * Body section for the Offcanvas component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The main content of the offcanvas.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Offcanvas Body.
 */
export const OffcanvasBody = ({ children, className = "", ...props }) => (
  <div className={`offcanvas-body ${className}`.trim()} {...props}>
    {children}
  </div>
);

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Title = OffcanvasTitle;
Offcanvas.Body = OffcanvasBody;

Offcanvas.propTypes = {
  /** Whether the offcanvas is currently visible. */
  show: PropTypes.bool.isRequired,
  /** Callback fired to close the offcanvas (e.g., backdrop click, Esc key). */
  onHide: PropTypes.func.isRequired,
  /** Where the offcanvas should open from ('start' for left, 'end' for right, 'top', 'bottom'). */
  placement: PropTypes.oneOf(["start", "end", "top", "bottom"]),
  /** Offcanvas subcomponents (Header, Body). */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

OffcanvasHeader.propTypes = {
  /** The header content (usually Offcanvas.Title). */
  children: PropTypes.node.isRequired,
  /** If true, displays a built-in CloseButton on the right side. */
  closeButton: PropTypes.bool,
  /** Callback fired when the close button is clicked. */
  onHide: PropTypes.func,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

OffcanvasTitle.propTypes = {
  /** The title text. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

OffcanvasBody.propTypes = {
  /** The main content of the offcanvas. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
