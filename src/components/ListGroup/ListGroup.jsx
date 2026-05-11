import React from "react";
import PropTypes from "prop-types";

/**
 * ListGroup component for displaying a series of content.
 * Can be configured as a flush list, numbered list, or horizontal list.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - ListGroup.Item components.
 * @param {boolean} [props.flush=false] - If true, removes borders and rounded corners to render edge-to-edge.
 * @param {boolean} [props.numbered=false] - If true, adds numbers to the list items (renders as an `<ol>`).
 * @param {boolean|string} [props.horizontal=false] - If true, changes the layout to horizontal. Can be a breakpoint ('sm', 'md', 'lg', 'xl', 'xxl').
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {React.ElementType} [props.as='ul'] - Custom HTML element to render as (e.g., 'ol' or 'div').
 * @returns {JSX.Element} The rendered ListGroup component.
 */
export const ListGroup = ({
  children,
  flush = false,
  numbered = false,
  horizontal = false,
  className = "",
  as: Component = "ul",
  ...props
}) => {
  const flushClass = flush ? "list-group-flush" : "";
  const numberedClass = numbered ? "list-group-numbered" : "";
  const horizontalClass = horizontal
    ? horizontal === true
      ? "list-group-horizontal"
      : `list-group-horizontal-${horizontal}`
    : "";

  const classes = [
    "list-group",
    flushClass,
    numberedClass,
    horizontalClass,
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

/**
 * ListGroup.Item component representing a single item within a ListGroup.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the list item.
 * @param {boolean} [props.active=false] - If true, styles the item as active.
 * @param {boolean} [props.disabled=false] - If true, styles the item as disabled and prevents interaction.
 * @param {boolean} [props.action=false] - If true, styles the item as an actionable element (e.g., hover effects).
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant] - Contextual color variant.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {React.ElementType} [props.as] - Custom HTML element to render as (e.g., 'a' or 'button').
 * @returns {JSX.Element} The rendered ListGroup Item.
 */
export const ListGroupItem = ({
  children,
  active = false,
  disabled = false,
  action = false,
  variant,
  className = "",
  as,
  ...props
}) => {
  let Component = as || (action || props.href || props.onClick ? "a" : "li");
  if (Component === "a" && !props.href) {
    Component = "button";
    props.type = props.type || "button";
  }

  const classes = [
    "list-group-item",
    active ? "active" : "",
    disabled ? "disabled" : "",
    action ? "list-group-item-action" : "",
    variant ? `list-group-item-${variant}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classes}
      aria-disabled={disabled ? "true" : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

ListGroup.Item = ListGroupItem;

ListGroup.propTypes = {
  /**
   * ListGroup.Item components to render inside the list.
   */
  children: PropTypes.node.isRequired,
  /**
   * If true, removes borders and rounded corners to render edge-to-edge.
   * @default false
   */
  flush: PropTypes.bool,
  /**
   * If true, adds numbers to the list items (renders as an `<ol>`).
   * @default false
   */
  numbered: PropTypes.bool,
  /**
   * If true, changes the layout from vertical to horizontal. Can also be a responsive breakpoint like 'md' or 'lg'.
   * @default false
   */
  horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** Custom HTML element to render the container as. */
  as: PropTypes.elementType,
};

ListGroupItem.propTypes = {
  /** The content of the list item. */
  children: PropTypes.node.isRequired,
  /** If true, styles the item as active. */
  active: PropTypes.bool,
  /** If true, styles the item as disabled and prevents interaction. */
  disabled: PropTypes.bool,
  /** If true, styles the item as an actionable element (e.g., hover effects). Automatically true if href is provided. */
  action: PropTypes.bool,
  /** Contextual color variant. */
  variant: PropTypes.string,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** Custom HTML element to render the item as (e.g., 'a', 'button', 'li'). */
  as: PropTypes.elementType,
};
