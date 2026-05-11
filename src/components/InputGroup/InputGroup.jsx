import React from "react";
import PropTypes from "prop-types";

/**
 * InputGroup component to seamlessly append or prepend text/buttons to form controls.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - InputGroup subcomponents and FormControls.
 * @param {'sm'|'lg'} [props.size] - Size of the input group.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered InputGroup component.
 */
export const InputGroup = ({ children, size, className = "", ...props }) => {
  const classes = ["input-group", size ? `input-group-${size}` : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

/**
 * Text wrapper to append or prepend text within an InputGroup.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The text or icon to display.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {React.ElementType} [props.as='span'] - Custom HTML element to render as.
 * @returns {JSX.Element} The rendered InputGroup Text.
 */
export const InputGroupText = ({
  children,
  className = "",
  as: Component = "span",
  ...props
}) => (
  <Component className={`input-group-text ${className}`.trim()} {...props}>
    {children}
  </Component>
);

InputGroup.Text = InputGroupText;

InputGroup.propTypes = {
  /** InputGroup subcomponents (InputGroup.Text) and FormControls. */
  children: PropTypes.node.isRequired,
  /** Size of the input group. Applied to all elements inside. */
  size: PropTypes.oneOf(["sm", "lg"]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

InputGroupText.propTypes = {
  /** The text or icon to display. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** Custom HTML element to render as. */
  as: PropTypes.elementType,
};
