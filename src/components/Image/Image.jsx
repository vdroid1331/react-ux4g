import React from "react";
import PropTypes from "prop-types";

/**
 * Image component with support for responsive behavior and styling.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} [props.fluid=false] - If true, scales the image to the parent width (max-width: 100%, height: auto).
 * @param {boolean} [props.thumbnail=false] - If true, adds a border and padding to look like a thumbnail.
 * @param {boolean} [props.rounded=false] - If true, adds rounded corners.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {string} props.src - The image source URL.
 * @param {string} [props.alt='Image'] - Alternative text for the image.
 * @returns {JSX.Element} The rendered Image component.
 */
export const Image = ({
  fluid = false,
  thumbnail = false,
  rounded = false,
  className = "",
  ...props
}) => {
  const classes = [
    fluid ? "img-fluid" : "",
    thumbnail ? "img-thumbnail" : "",
    rounded ? "rounded" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <img className={classes} {...props} alt={props.alt || "Image"} />;
};

Image.propTypes = {
  /** If true, scales the image to the parent width (max-width: 100%, height: auto). */
  fluid: PropTypes.bool,
  /** If true, adds a border and padding to look like a thumbnail. */
  thumbnail: PropTypes.bool,
  /** If true, adds rounded corners. */
  rounded: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** The image source URL. */
  src: PropTypes.string.isRequired,
  /** Alternative text for the image. */
  alt: PropTypes.string,
};
