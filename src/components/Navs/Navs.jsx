import React from "react";
import PropTypes from "prop-types";

/**
 * Nav component for creating navigation links (tabs, pills, or basic nav).
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Navs.Item and Navs.Link components.
 * @param {'tabs'|'pills'} [props.variant] - The visual style of the navigation.
 * @param {boolean} [props.fill=false] - If true, stretches items to fill the available width proportionally.
 * @param {boolean} [props.justified=false] - If true, stretches items to fill the available width equally.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Navs component.
 */
export const Navs = ({
  children,
  variant,
  fill = false,
  justified = false,
  className = "",
  ...props
}) => {
  const classes = [
    "nav",
    variant === "tabs" ? "nav-tabs" : variant === "pills" ? "nav-pills" : "",
    fill ? "nav-fill" : "",
    justified ? "nav-justified" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
};

/**
 * Item wrapper for a NavLink within a Nav.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Navs.Link component.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered NavItem component.
 */
export const NavItem = ({ children, className = "", ...props }) => (
  <li className={`nav-item ${className}`.trim()} {...props}>
    {children}
  </li>
);

/**
 * Link component used within a Nav or NavItem.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The link text.
 * @param {boolean} [props.active=false] - If true, styles the link as active.
 * @param {boolean} [props.disabled=false] - If true, styles the link as disabled and prevents interaction.
 * @param {string} [props.href='#'] - The destination URL.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered NavLink component.
 */
export const NavLink = ({
  children,
  active = false,
  disabled = false,
  href = "#",
  className = "",
  ...props
}) => {
  const classes = [
    "nav-link",
    active ? "active" : "",
    disabled ? "disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={href}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {children}
    </a>
  );
};

Navs.Item = NavItem;
Navs.Link = NavLink;

Navs.propTypes = {
  /** Navs.Item and Navs.Link components. */
  children: PropTypes.node.isRequired,
  /** The visual style of the navigation. Tabs have borders, pills have solid backgrounds. */
  variant: PropTypes.oneOf(["tabs", "pills"]),
  /** If true, stretches items to proportionally fill the available width. */
  fill: PropTypes.bool,
  /** If true, stretches items to equally fill the available width. */
  justified: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

NavItem.propTypes = {
  /** The Navs.Link component. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

NavLink.propTypes = {
  /** The link text. */
  children: PropTypes.node.isRequired,
  /** If true, styles the link as active and currently selected. */
  active: PropTypes.bool,
  /** If true, styles the link as disabled and prevents interaction. */
  disabled: PropTypes.bool,
  /** The destination URL. */
  href: PropTypes.string,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
