import React from "react";
import PropTypes from "prop-types";

/**
 * Container component for centering and padding page content.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children] - The content of the container.
 * @param {boolean|string} [props.fluid=false] - If true, container is 100% wide. Can also be a breakpoint string ('sm', 'md', 'lg', 'xl', 'xxl').
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {React.ElementType} [props.as='div'] - Custom HTML element to render as.
 * @returns {JSX.Element} The rendered Container component.
 */
export const Container = ({
  children,
  fluid = false,
  className = "",
  as: Component = "div",
  ...props
}) => {
  const classes = [
    fluid
      ? typeof fluid === "string"
        ? `container-${fluid}`
        : "container-fluid"
      : "container",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Container.propTypes = {
  /** The content of the container. */
  children: PropTypes.node,
  /** If true, container is 100% wide. Can also be a breakpoint string ('sm', 'md', 'lg', 'xl', 'xxl'). */
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** Custom HTML element to render as (default is 'div'). */
  as: PropTypes.elementType,
};
