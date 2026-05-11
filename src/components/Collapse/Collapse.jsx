import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Collapse component for toggling the visibility of content.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} [props.in=false] - Whether the content is currently visible/expanded.
 * @param {React.ReactNode} props.children - The content to collapse/expand.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Collapse component.
 */
export const Collapse = ({
  in: inProp = false,
  children,
  className = "",
  ...props
}) => {
  const [show, setShow] = useState(inProp);

  useEffect(() => {
    setShow(inProp);
  }, [inProp]);

  const classes = ["collapse", show ? "show" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Collapse.propTypes = {
  /**
   * Controls the visibility state of the content. True expands it, false collapses it.
   * @default false
   */
  in: PropTypes.bool,
  /**
   * The content to collapse/expand.
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};
