import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Navbar component for responsive navigation headers.
 * Includes support for branding, navigation, and more, including support for collapse plugins.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Navbar subcomponents.
 * @param {boolean|string} [props.expand='lg'] - Responsive breakpoint to collapse the navbar ('sm', 'md', 'lg', 'xl', 'xxl').
 * @param {'light'|'dark'} [props.variant='light'] - The styling variant for text color.
 * @param {string} [props.bg='light'] - The background color class suffix.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Navbar component.
 */
export const Navbar = ({
  children,
  expand = "lg",
  variant = "light",
  bg = "light",
  className = "",
  ...props
}) => {
  const [expanded, setExpanded] = useState(false);

  const classes = [
    "navbar",
    expand ? `navbar-expand-${expand}` : "",
    variant ? `navbar-${variant}` : "",
    bg ? `bg-${bg}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === NavbarToggle) {
      return React.cloneElement(child, {
        onClick: () => setExpanded(!expanded),
      });
    }
    if (React.isValidElement(child) && child.type === NavbarCollapse) {
      return React.cloneElement(child, { show: expanded });
    }
    return child;
  });

  return (
    <nav className={classes} {...props}>
      <div className="container-fluid">{childrenWithProps}</div>
    </nav>
  );
};

/**
 * Brand/logo element for the Navbar.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Brand text or image.
 * @param {string} [props.href='#'] - Link destination.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Navbar Brand.
 */
export const NavbarBrand = ({
  children,
  href = "#",
  className = "",
  ...props
}) => (
  <a className={`navbar-brand ${className}`.trim()} href={href} {...props}>
    {children}
  </a>
);

/**
 * Toggle button for mobile collapsing in the Navbar.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} [props.onClick] - Handled internally to toggle the collapse.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Navbar Toggle.
 */
export const NavbarToggle = ({ onClick, className = "", ...props }) => (
  <button
    className={`navbar-toggler ${className}`.trim()}
    type="button"
    onClick={onClick}
    {...props}
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);

/**
 * Collapsible container for the Navbar contents (navigation links, forms, etc.).
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The contents to collapse on smaller viewports.
 * @param {boolean} [props.show] - Handled internally, controls visibility.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Navbar Collapse.
 */
export const NavbarCollapse = ({
  children,
  show,
  className = "",
  ...props
}) => (
  <div
    className={`collapse navbar-collapse ${show ? "show" : ""} ${className}`.trim()}
    {...props}
  >
    {children}
  </div>
);

Navbar.Brand = NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;

Navbar.propTypes = {
  /** Navbar subcomponents (Brand, Toggle, Collapse, Navs). */
  children: PropTypes.node.isRequired,
  /** Responsive breakpoint to collapse the navbar into a hamburger menu. True never collapses, false always collapses. */
  expand: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** The styling variant for text color ('light' for dark text, 'dark' for light text). */
  variant: PropTypes.oneOf(["light", "dark"]),
  /** The background color class suffix (e.g., 'primary', 'dark', 'light'). */
  bg: PropTypes.string,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

NavbarBrand.propTypes = {
  /** Brand text or image/logo. */
  children: PropTypes.node.isRequired,
  /** Link destination for the brand. */
  href: PropTypes.string,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

NavbarToggle.propTypes = {
  /** Handled internally by the Navbar to toggle the collapse. */
  onClick: PropTypes.func,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

NavbarCollapse.propTypes = {
  /** The contents to collapse on smaller viewports. */
  children: PropTypes.node.isRequired,
  /** Handled internally, controls visibility. */
  show: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
