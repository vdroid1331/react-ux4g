import React from "react";
import PropTypes from "prop-types";

/**
 * Breadcrumb component indicating the current page's location within a navigational hierarchy.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Breadcrumb.Item components.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Breadcrumb component.
 */
export const Breadcrumb = ({ children, className = "", ...props }) => {
  return (
    <nav aria-label="breadcrumb" className={className} {...props}>
      <ol className="breadcrumb">{children}</ol>
    </nav>
  );
};

/**
 * Breadcrumb.Item representing an individual step in the breadcrumb trail.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the breadcrumb item.
 * @param {boolean} [props.active=false] - Whether this item represents the current page.
 * @param {string} [props.href] - The URL to link to (if not active).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Breadcrumb Item.
 */
export const BreadcrumbItem = ({
  children,
  active = false,
  href,
  className = "",
  ...props
}) => {
  const activeClass = active ? "active" : "";
  const classes = `breadcrumb-item ${activeClass} ${className}`.trim();

  return (
    <li
      className={classes}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {href && !active ? <a href={href}>{children}</a> : children}
    </li>
  );
};

Breadcrumb.Item = BreadcrumbItem;

Breadcrumb.propTypes = {
  /**
   * Breadcrumb.Item components to be rendered within the breadcrumb list.
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional custom CSS classes to apply to the nav element.
   */
  className: PropTypes.string,
};

BreadcrumbItem.propTypes = {
  /**
   * The content to display inside the breadcrumb item (usually text or a link).
   */
  children: PropTypes.node,
  /**
   * Whether this item represents the current active page. If true, it receives the active styling and an aria-current attribute.
   * @default false
   */
  active: PropTypes.bool,
  /**
   * The URL to link to. If provided (and not active), the child content is automatically wrapped in an anchor tag.
   */
  href: PropTypes.string,
  /**
   * Additional custom CSS classes for the list item.
   */
  className: PropTypes.string,
};
