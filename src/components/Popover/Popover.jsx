import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  arrow,
} from "@floating-ui/react";

/**
 * Popover component to display rich content in an overlay that's tethered to an element.
 * Powered by @floating-ui/react for positioning.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The target element to attach the popover to.
 * @param {React.ReactNode} [props.title] - Optional title for the popover header.
 * @param {React.ReactNode} props.content - The main body content of the popover.
 * @param {'top'|'right'|'bottom'|'left'} [props.placement='right'] - The preferred placement of the popover.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Popover component.
 */
export const Popover = ({
  children,
  title,
  content,
  placement = "right",
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
      flip({ fallbackAxisSideDirection: "end" }),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
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
            className={`popover bs-popover-${placement} show ${className}`.trim()}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps(props)}
          >
            <div className="popover-arrow" ref={arrowRef} />
            {title && <h3 className="popover-header">{title}</h3>}
            <div className="popover-body">{content}</div>
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Popover.propTypes = {
  /** The target element (button, link, etc.) to attach the popover to. */
  children: PropTypes.node.isRequired,
  /** Optional title for the popover header. If omitted, the header is not rendered. */
  title: PropTypes.node,
  /** The main body content of the popover. */
  content: PropTypes.node.isRequired,
  /** The preferred placement of the popover relative to the target element. */
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /** Additional custom CSS classes applied to the popover container. */
  className: PropTypes.string,
};
