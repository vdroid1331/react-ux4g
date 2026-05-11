import React from "react";
import PropTypes from "prop-types";

/**
 * Pagination component for indicating a series of related content exists across multiple pages.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Pagination.Item components.
 * @param {'sm'|'lg'} [props.size] - The size of the pagination buttons.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Pagination component.
 */
export const Pagination = ({ children, size, className = "", ...props }) => {
  const sizeClass = size ? `pagination-${size}` : "";
  const classes = `pagination ${sizeClass} ${className}`.trim();

  return (
    <nav aria-label="Page navigation">
      <ul className={classes} {...props}>
        {children}
      </ul>
    </nav>
  );
};

/**
 * Item wrapper for a PaginationLink within a Pagination component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Pagination.Link component.
 * @param {boolean} [props.active=false] - If true, styles the item as active.
 * @param {boolean} [props.disabled=false] - If true, styles the item as disabled.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Pagination Item.
 */
export const PaginationItem = ({
  children,
  active = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const classes = [
    "page-item",
    active ? "active" : "",
    disabled ? "disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  );
};

/**
 * Link component used within a PaginationItem.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The page number or navigation icon.
 * @param {string} [props.href='#'] - The destination URL.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Pagination Link.
 */
export const PaginationLink = ({
  children,
  href = "#",
  className = "",
  ...props
}) => {
  return (
    <a className={`page-link ${className}`.trim()} href={href} {...props}>
      {children}
    </a>
  );
};

Pagination.Item = PaginationItem;
Pagination.Link = PaginationLink;

Pagination.propTypes = {
  /** Pagination.Item components. */
  children: PropTypes.node.isRequired,
  /** The size of the pagination buttons. */
  size: PropTypes.oneOf(["sm", "lg"]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

PaginationItem.propTypes = {
  /** Pagination.Link component. */
  children: PropTypes.node.isRequired,
  /** If true, styles the item as active to indicate current page. */
  active: PropTypes.bool,
  /** If true, styles the item as disabled and unclickable. */
  disabled: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

PaginationLink.propTypes = {
  /** The page number or navigation icon. */
  children: PropTypes.node.isRequired,
  /** The destination URL. */
  href: PropTypes.string,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
