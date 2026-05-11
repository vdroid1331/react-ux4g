import React from "react";
import PropTypes from "prop-types";

/**
 * Row component for building CSS grids. Typically used to wrap `Col` components.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children] - Usually `Col` components.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {React.ElementType} [props.as='div'] - Custom HTML element to render as.
 * @returns {JSX.Element} The rendered Row component.
 */
export const Row = ({
  children,
  className = "",
  as: Component = "div",
  ...props
}) => {
  const classes = ["row", className].filter(Boolean).join(" ");
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Row.propTypes = {
  /** Usually `Col` components representing the columns within the row. */
  children: PropTypes.node,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** Custom HTML element to render as (default is 'div'). */
  as: PropTypes.elementType,
};
