import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Scrollspy component for automatically updating navigation targets based on scroll position.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string[]} props.items - Array of element IDs to spy on.
 * @param {string} [props.currentId] - The currently active ID (managed state).
 * @param {Function} props.onUpdate - Callback fired when the active scrolled item changes, receives the new ID.
 * @param {React.ReactNode} props.children - The scrollable content containing the spied elements.
 * @param {number} [props.offset=0] - Offset (in pixels) from top to trigger intersection.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Scrollspy component.
 */
export const Scrollspy = ({
  items,
  currentId,
  onUpdate,
  children,
  offset = 0,
  className = "",
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onUpdate(entry.target.id);
          }
        });
      },
      {
        root: containerRef.current,
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0.5,
      },
    );

    items.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items, onUpdate, offset]);

  return (
    <div
      ref={containerRef}
      className={`scrollspy-container ${className}`.trim()}
      style={{ position: "relative", overflowY: "auto" }}
      {...props}
    >
      {children}
    </div>
  );
};

Scrollspy.propTypes = {
  /** Array of element IDs to spy on. Must match the IDs of the elements in the DOM. */
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** The currently active ID (managed state from parent). */
  currentId: PropTypes.string,
  /** Callback fired when the active scrolled item changes, receives the new ID. */
  onUpdate: PropTypes.func.isRequired,
  /** The scrollable content containing the spied elements. */
  children: PropTypes.node.isRequired,
  /** Offset (in pixels) from the top to trigger intersection. */
  offset: PropTypes.number,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
