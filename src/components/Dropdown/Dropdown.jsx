import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Dropdown component for toggleable, contextual overlays for displaying lists of links and more.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Dropdown subcomponents (Toggle, Menu).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
export const Dropdown = ({ children, className = "", ...props }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setShow(!show);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === DropdownToggle) {
        return React.cloneElement(child, { onClick: toggle, show });
      }
      if (child.type === DropdownMenu) {
        return React.cloneElement(child, { show });
      }
    }
    return child;
  });

  return (
    <div
      className={`dropdown ${className}`.trim()}
      ref={dropdownRef}
      {...props}
    >
      {childrenWithProps}
    </div>
  );
};

/**
 * Toggle button for the Dropdown component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The button content.
 * @param {boolean} [props.show] - Handled internally, true if the dropdown is open.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [props.variant='primary'] - Button variant.
 * @param {boolean} [props.split=false] - Whether this is a split dropdown toggle.
 * @returns {JSX.Element} The rendered Dropdown Toggle.
 */
export const DropdownToggle = ({
  children,
  show,
  className = "",
  variant = "primary",
  split = false,
  ...props
}) => {
  const classes = [
    "btn",
    `btn-${variant}`,
    "dropdown-toggle",
    split ? "dropdown-toggle-split" : "",
    show ? "show" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} aria-expanded={show} {...props}>
      {children}
    </button>
  );
};

/**
 * Menu wrapper for the Dropdown component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Dropdown.Item components.
 * @param {boolean} [props.show] - Handled internally, true if the dropdown is open.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Dropdown Menu.
 */
export const DropdownMenu = ({ children, show, className = "", ...props }) => {
  const classes = `dropdown-menu ${show ? "show" : ""} ${className}`.trim();

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
};

/**
 * Item within a Dropdown Menu.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The item content.
 * @param {string} [props.href='#'] - The link destination.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {boolean} [props.active=false] - Whether the item is active.
 * @param {boolean} [props.disabled=false] - Whether the item is disabled.
 * @returns {JSX.Element} The rendered Dropdown Item.
 */
export const DropdownItem = ({
  children,
  href = "#",
  className = "",
  active = false,
  disabled = false,
  ...props
}) => {
  const classes = [
    "dropdown-item",
    active ? "active" : "",
    disabled ? "disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li>
      <a
        className={classes}
        href={href}
        aria-disabled={disabled ? "true" : undefined}
        {...props}
      >
        {children}
      </a>
    </li>
  );
};

/**
 * A horizontal line/divider to separate items within a Dropdown Menu.
 *
 * @component
 * @returns {JSX.Element} The rendered Dropdown Divider.
 */
export const DropdownDivider = () => (
  <li>
    <hr className="dropdown-divider" />
  </li>
);

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

Dropdown.propTypes = {
  /**
   * Dropdown subcomponents (Dropdown.Toggle and Dropdown.Menu).
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};

DropdownToggle.propTypes = {
  /** The button content. */
  children: PropTypes.node.isRequired,
  /** Handled internally by the parent Dropdown. */
  show: PropTypes.bool,
  /** The visual variant of the toggle button. */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  /** Whether this is a split dropdown toggle (styles it thinner). */
  split: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

DropdownMenu.propTypes = {
  /** Dropdown.Item components. */
  children: PropTypes.node.isRequired,
  /** Handled internally by the parent Dropdown. */
  show: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

DropdownItem.propTypes = {
  /** The item content/text. */
  children: PropTypes.node.isRequired,
  /** The link destination. */
  href: PropTypes.string,
  /** Whether the item is styled as active. */
  active: PropTypes.bool,
  /** Whether the item is disabled and unclickable. */
  disabled: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
