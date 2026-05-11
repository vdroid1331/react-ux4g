import React from "react";
import PropTypes from "prop-types";

/**
 * Figure component for displaying images with captions.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Figure.Image and Figure.Caption components.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Figure component.
 */
export const Figure = ({ children, className = "", ...props }) => (
  <figure className={`figure ${className}`.trim()} {...props}>
    {children}
  </figure>
);

/**
 * Image component specifically styled for use within a Figure.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Figure Image.
 */
export const FigureImage = ({ className = "", ...props }) => (
  <img
    className={`figure-img img-fluid rounded ${className}`.trim()}
    {...props}
    alt={props.alt || "Figure"}
  />
);

/**
 * Caption component for a Figure.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The caption text.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Figure Caption.
 */
export const FigureCaption = ({ children, className = "", ...props }) => (
  <figcaption className={`figure-caption ${className}`.trim()} {...props}>
    {children}
  </figcaption>
);

Figure.Image = FigureImage;
Figure.Caption = FigureCaption;

Figure.propTypes = {
  /** Figure.Image and Figure.Caption components. */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
