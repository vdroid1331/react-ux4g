import React from "react";
import PropTypes from "prop-types";

/**
 * Card component for displaying content in a flexible and extensible container.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Card subcomponents (Card.Body, Card.Header, etc.).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Card component.
 */
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={`card ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

/**
 * Header section for the Card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The header content.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Card Header.
 */
export const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`card-header ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

/**
 * Body section for the Card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The body content.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Card Body.
 */
export const CardBody = ({ children, className = "", ...props }) => {
  return (
    <div className={`card-body ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

/**
 * Footer section for the Card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The footer content.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Card Footer.
 */
export const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div className={`card-footer ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

/**
 * Title element to be used inside Card.Body.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The title text.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Card Title.
 */
export const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h5 className={`card-title ${className}`.trim()} {...props}>
      {children}
    </h5>
  );
};

/**
 * Text element to be used inside Card.Body.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The card text/paragraph.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Card Text.
 */
export const CardText = ({ children, className = "", ...props }) => {
  return (
    <p className={`card-text ${className}`.trim()} {...props}>
      {children}
    </p>
  );
};

/**
 * Subtitle element to be used inside Card.Body.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The subtitle text.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Card Subtitle.
 */
export const CardSubtitle = ({ children, className = "", ...props }) => {
  return (
    <h6 className={`card-subtitle ${className}`.trim()} {...props}>
      {children}
    </h6>
  );
};

/**
 * Link element to be used inside Card.Body.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The link text.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Card Link.
 */
export const CardLink = ({ children, className = "", ...props }) => {
  return (
    <a className={`card-link ${className}`.trim()} {...props}>
      {children}
    </a>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Link = CardLink;

Card.propTypes = {
  /**
   * Card subcomponents (like Card.Body, Card.Header, etc.) or custom content.
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};

CardHeader.propTypes = {
  /** The header content. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

CardBody.propTypes = {
  /** The body content. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

CardFooter.propTypes = {
  /** The footer content. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

CardTitle.propTypes = {
  /** The title text. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

CardSubtitle.propTypes = {
  /** The subtitle text. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

CardText.propTypes = {
  /** The card text/paragraph. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

CardLink.propTypes = {
  /** The link text. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
