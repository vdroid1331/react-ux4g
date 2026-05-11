import React from "react";
import PropTypes from "prop-types";

/**
 * ButtonGroup component for grouping a series of buttons together on a single line.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The Button components to group.
 * @param {'sm'|'lg'} [props.size] - The size applied to all buttons in the group.
 * @param {boolean} [props.vertical=false] - If true, stacks buttons vertically instead of horizontally.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered ButtonGroup component.
 */
export const ButtonGroup = ({
  children,
  size,
  vertical = false,
  className = "",
  ...props
}) => {
  const baseClass = vertical ? "btn-group-vertical" : "btn-group";
  const sizeClass = size ? `btn-group-${size}` : "";

  const classes = [baseClass, sizeClass, className].filter(Boolean).join(" ");

  return (
    <div className={classes} role="group" {...props}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  /**
   * The Button components to group together. They will be rendered flush against each other.
   */
  children: PropTypes.node.isRequired,
  /**
   * The size applied to all buttons in the group. Ensures uniform sizing across the group.
   */
  size: PropTypes.oneOf(["sm", "lg"]),
  /**
   * If true, stacks buttons vertically instead of horizontally.
   * @default false
   */
  vertical: PropTypes.bool,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};
