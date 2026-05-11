import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  arrow,
} from "@floating-ui/react";

/**
 * Tooltip component to display floating informational text when hovering over or focusing an element.
 * Powered by @floating-ui/react for positioning.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The target element to attach the tooltip to.
 * @param {React.ReactNode} props.content - The text content of the tooltip.
 * @param {'top'|'right'|'bottom'|'left'} [props.placement='top'] - The preferred placement of the tooltip.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Tooltip component.
 */
export const Tooltip = ({
  children,
  content,
  placement = "top",
  className = "",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({ fallbackAxisSideDirection: "start" }),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>
      <FloatingPortal>
        {isOpen && (
          <div
            className={`tooltip bs-tooltip-${placement} show ${className}`.trim()}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps(props)}
          >
            <div className="tooltip-arrow" ref={arrowRef} />
            <div className="tooltip-inner">{content}</div>
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Tooltip.propTypes = {
  /** The target element to attach the tooltip to. */
  children: PropTypes.node.isRequired,
  /** The text content of the tooltip. */
  content: PropTypes.node.isRequired,
  /** The preferred placement of the tooltip relative to the target. */
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** Additional custom CSS classes applied to the tooltip container. */
  className: PropTypes.string,
};
