import React from "react";
import PropTypes from "prop-types";
import { CloseButton } from "../CloseButton/CloseButton";

/**
 * Modal component for creating dialog prompts and custom overlays.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} [props.show=false] - Whether the modal is visible.
 * @param {Function} [props.onHide] - Callback fired when the modal requests to be closed (e.g., backdrop click).
 * @param {React.ReactNode} props.children - Modal subcomponents (Header, Body, Footer).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {boolean} [props.centered=false] - If true, vertically centers the modal in the viewport.
 * @param {'sm'|'lg'|'xl'} [props.size] - The size variant of the modal.
 * @returns {JSX.Element|null} The rendered Modal component, or null if hidden.
 */
export const Modal = ({
  show = false,
  onHide,
  children,
  className = "",
  centered = false,
  size,
  ...props
}) => {
  if (!show) return null;

  const dialogClasses = [
    "modal-dialog",
    centered ? "modal-dialog-centered" : "",
    size ? `modal-${size}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1040 }}
        onClick={onHide}
      ></div>
      <div
        className={`modal fade show ${className}`.trim()}
        style={{ display: "block", zIndex: 1045 }}
        tabIndex="-1"
        role="dialog"
        {...props}
      >
        <div className={dialogClasses} onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};

/**
 * Header section for the Modal component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The header content (usually Modal.Title).
 * @param {boolean} [props.closeButton=false] - If true, displays a built-in close button.
 * @param {Function} [props.onHide] - Callback for the close button.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Modal Header.
 */
export const ModalHeader = ({
  children,
  closeButton = false,
  onHide,
  className = "",
  ...props
}) => (
  <div className={`modal-header ${className}`.trim()} {...props}>
    {children}
    {closeButton && <CloseButton onClick={onHide} />}
  </div>
);

/**
 * Title element for the Modal.Header.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The title text.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Modal Title.
 */
export const ModalTitle = ({ children, className = "", ...props }) => (
  <h5 className={`modal-title ${className}`.trim()} {...props}>
    {children}
  </h5>
);

/**
 * Body section for the Modal component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The main content of the modal.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Modal Body.
 */
export const ModalBody = ({ children, className = "", ...props }) => (
  <div className={`modal-body ${className}`.trim()} {...props}>
    {children}
  </div>
);

/**
 * Footer section for the Modal component, typically containing action buttons.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The footer content (e.g., buttons).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Modal Footer.
 */
export const ModalFooter = ({ children, className = "", ...props }) => (
  <div className={`modal-footer ${className}`.trim()} {...props}>
    {children}
  </div>
);

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

Modal.propTypes = {
  /** Whether the modal is currently visible. */
  show: PropTypes.bool,
  /** Callback fired when the modal requests to be closed (e.g., backdrop click, Esc key). */
  onHide: PropTypes.func,
  /** Modal subcomponents (Header, Body, Footer). */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes applied to the modal container. */
  className: PropTypes.string,
  /** If true, vertically centers the modal in the viewport. */
  centered: PropTypes.bool,
  /** The size variant of the modal. */
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
};

ModalHeader.propTypes = {
  /** The header content (usually Modal.Title). */
  children: PropTypes.node.isRequired,
  /** If true, displays a built-in CloseButton on the right side. */
  closeButton: PropTypes.bool,
  /** Callback fired when the close button is clicked. */
  onHide: PropTypes.func,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

ModalTitle.propTypes = {
  /** The title text. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

ModalBody.propTypes = {
  /** The main content of the modal. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

ModalFooter.propTypes = {
  /** The footer content (e.g., action buttons). */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
