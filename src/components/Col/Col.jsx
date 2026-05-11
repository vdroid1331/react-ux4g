import React from "react";
import PropTypes from "prop-types";

/**
 * Col component for defining grid columns.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children] - The content of the column.
 * @param {boolean|string|number} [props.xs] - Column span for extra small devices.
 * @param {boolean|string|number} [props.sm] - Column span for small devices.
 * @param {boolean|string|number} [props.md] - Column span for medium devices.
 * @param {boolean|string|number} [props.lg] - Column span for large devices.
 * @param {boolean|string|number} [props.xl] - Column span for extra large devices.
 * @param {boolean|string|number} [props.xxl] - Column span for extra extra large devices.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {React.ElementType} [props.as='div'] - Custom HTML element to render as.
 * @returns {JSX.Element} The rendered Col component.
 */
export const Col = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  className = "",
  as: Component = "div",
  ...props
}) => {
  const colClasses = [];
  if (xs) colClasses.push(xs === true ? "col" : `col-${xs}`);
  if (sm) colClasses.push(sm === true ? "col-sm" : `col-sm-${sm}`);
  if (md) colClasses.push(md === true ? "col-md" : `col-md-${md}`);
  if (lg) colClasses.push(lg === true ? "col-lg" : `col-lg-${lg}`);
  if (xl) colClasses.push(xl === true ? "col-xl" : `col-xl-${xl}`);
  if (xxl) colClasses.push(xxl === true ? "col-xxl" : `col-xxl-${xxl}`);

  if (!colClasses.length) colClasses.push("col");

  const classes = [...colClasses, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Col.propTypes = {
  /** The content of the column. */
  children: PropTypes.node,
  /** Column span for extra small devices (<576px). Can be true (auto), a number (1-12), or 'auto'. */
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  /** Column span for small devices (≥576px). */
  sm: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  /** Column span for medium devices (≥768px). */
  md: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  /** Column span for large devices (≥992px). */
  lg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  /** Column span for extra large devices (≥1200px). */
  xl: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  /** Column span for extra extra large devices (≥1400px). */
  xxl: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
  /** Custom HTML element to render as (default is 'div'). */
  as: PropTypes.elementType,
};
