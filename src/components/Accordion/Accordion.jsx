import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Accordion component for building vertically collapsing sections.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Accordion.Item components.
 * @param {string} [props.defaultActiveKey=null] - The eventKey of the item that should be open by default.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Accordion component.
 */
export const Accordion = ({
  children,
  defaultActiveKey = null,
  className = "",
  ...props
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const eventKey = child.props.eventKey || String(index);
      return React.cloneElement(child, {
        active: activeKey === eventKey,
        onToggle: () => handleToggle(eventKey),
      });
    }
    return child;
  });

  return (
    <div className={`accordion ${className}`.trim()} {...props}>
      {childrenWithProps}
    </div>
  );
};

/**
 * Accordion.Item component representing a single collapsible section.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.eventKey] - A unique identifier for the item.
 * @param {React.ReactNode} props.header - The header content/title for the accordion item.
 * @param {React.ReactNode} props.children - The body content of the accordion item.
 * @param {boolean} [props.active=false] - Whether the item is currently expanded.
 * @param {Function} [props.onToggle] - Callback fired when the item header is clicked.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Accordion Item.
 */
export const AccordionItem = ({
  eventKey,
  active,
  onToggle,
  header,
  children,
  className = "",
}) => {
  return (
    <div className={`accordion-item ${className}`.trim()}>
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${active ? "" : "collapsed"}`}
          type="button"
          onClick={onToggle}
          aria-expanded={active}
        >
          {header}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${active ? "show" : ""}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

Accordion.Item = AccordionItem;

Accordion.propTypes = {
  /**
   * Accordion.Item components to be rendered within the accordion container.
   */
  children: PropTypes.node.isRequired,
  /**
   * The \`eventKey\` of the item that should be open/expanded by default when the component mounts.
   */
  defaultActiveKey: PropTypes.string,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};

AccordionItem.propTypes = {
  /**
   * A unique identifier for the item used to determine its active state. If omitted, the child index is used.
   */
  eventKey: PropTypes.string,
  /**
   * The header content/title for the accordion item. This is always visible and clickable.
   */
  header: PropTypes.node.isRequired,
  /**
   * The body content of the accordion item that is revealed when expanded.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether the item is currently expanded. Usually controlled internally by the parent Accordion.
   * @default false
   */
  active: PropTypes.bool,
  /**
   * Callback fired when the item header is clicked.
   */
  onToggle: PropTypes.func,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};
