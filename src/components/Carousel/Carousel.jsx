import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Carousel component for cycling through elements like a slideshow.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Carousel.Item components.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Carousel component.
 */
export const Carousel = ({ children, className = "", ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = React.Children.toArray(children).filter(
    (child) => child.type === CarouselItem,
  );
  const total = items.length;

  const handlePrev = () => setActiveIndex((activeIndex - 1 + total) % total);
  const handleNext = () => setActiveIndex((activeIndex + 1) % total);

  return (
    <div className={`carousel slide ${className}`.trim()} {...props}>
      <div className="carousel-indicators">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={idx === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {items.map((child, idx) =>
          React.cloneElement(child, { active: idx === activeIndex }),
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

/**
 * Carousel.Item component representing a single slide in the carousel.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the slide.
 * @param {boolean} [props.active] - Handled internally to determine if the slide is visible.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Carousel Item.
 */
export const CarouselItem = ({
  children,
  active,
  className = "",
  ...props
}) => (
  <div
    className={`carousel-item ${active ? "active" : ""} ${className}`.trim()}
    {...props}
  >
    {children}
  </div>
);

/**
 * Carousel.Caption component for adding labels or descriptions to a slide.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The caption text or elements.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Carousel Caption.
 */
export const CarouselCaption = ({ children, className = "", ...props }) => (
  <div
    className={`carousel-caption d-none d-md-block ${className}`.trim()}
    {...props}
  >
    {children}
  </div>
);

Carousel.Item = CarouselItem;
Carousel.Caption = CarouselCaption;

Carousel.propTypes = {
  /**
   * Carousel.Item components containing the slides.
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional custom CSS classes.
   */
  className: PropTypes.string,
};

CarouselItem.propTypes = {
  /** The content of the slide (typically an Image). */
  children: PropTypes.node.isRequired,
  /** Handled internally to determine if the slide is visible. */
  active: PropTypes.bool,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};

CarouselCaption.propTypes = {
  /** The caption text or elements (like h5 and p). */
  children: PropTypes.node.isRequired,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
