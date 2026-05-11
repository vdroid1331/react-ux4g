import React from "react";
import PropTypes from "prop-types";

/**
 * Table component for displaying tabular data with optional styling like stripes and borders.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children] - Table contents (`<thead>`, `<tbody>`, `<tr>`, `<td>`, etc.).
 * @param {boolean} [props.striped=false] - If true, adds zebra-striping to any table row within the `<tbody>`.
 * @param {boolean} [props.bordered=false] - If true, adds borders on all sides of the table and cells.
 * @param {boolean} [props.hover=false] - If true, enables a hover state on table rows within a `<tbody>`.
 * @param {boolean} [props.dark=false] - If true, inverts the colors to appear dark.
 * @param {boolean|string} [props.responsive=false] - If true, makes the table scroll horizontally on small devices. Can be a breakpoint ('sm', 'md', 'lg', 'xl', 'xxl').
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Table component.
 */
export const Table = ({
  children,
  striped,
  bordered,
  hover,
  dark,
  responsive,
  className = "",
  ...props
}) => {
  const tableClasses = [
    "table",
    striped ? "table-striped" : "",
    bordered ? "table-bordered" : "",
    hover ? "table-hover" : "",
    dark ? "table-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const table = (
    <table className={tableClasses} {...props}>
      {children}
    </table>
  );

  if (responsive) {
    const responsiveClass =
      responsive === true
        ? "table-responsive"
        : `table-responsive-${responsive}`;
    return <div className={responsiveClass}>{table}</div>;
  }

  return table;
};

Table.propTypes = {
  /** Table contents (`<thead>`, `<tbody>`, `<tr>`, `<td>`, etc.). */
  children: PropTypes.node,
  /** If true, adds zebra-striping to any table row within the `<tbody>`. */
  striped: PropTypes.bool,
  /** If true, adds borders on all sides of the table and cells. */
  bordered: PropTypes.bool,
  /** If true, enables a hover state on table rows within a `<tbody>`. */
  hover: PropTypes.bool,
  /** If true, inverts the colors to appear dark. */
  dark: PropTypes.bool,
  /** If true, makes the table scroll horizontally on small devices. Can be a breakpoint ('sm', 'md', 'lg', 'xl', 'xxl'). */
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
