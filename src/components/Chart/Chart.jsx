import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../../assets/ux4g/js/ux4g-chart.js";

/**
 * Chart component for data visualization using the UX4G Chart library.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {'bar'|'line'|'pie'|'doughnut'|'radar'|'scatter'|'bubble'} [props.type='bar'] - The type of chart to render.
 * @param {Object} props.data - The data object containing datasets and labels.
 * @param {Object} [props.options] - Configuration options for the chart.
 * @param {string|number} [props.width] - The width of the canvas element.
 * @param {string|number} [props.height] - The height of the canvas element.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Chart component.
 */
export const Chart = ({
  type = "bar",
  data,
  options,
  width,
  height,
  className = "",
  ...props
}) => {
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ChartLib = typeof window !== "undefined" ? window.Chart : null;

    if (typeof window !== "undefined" && ChartLib && canvasRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new ChartLib(canvasRef.current, {
        type,
        data,
        options,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return (
    <div
      className={`ux4g-chart-container ${className}`.trim()}
      style={{ width, height }}
      {...props}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

Chart.propTypes = {
  /** The type of chart to render ('bar', 'line', 'pie', 'doughnut', 'radar', 'scatter', 'bubble'). */
  type: PropTypes.string,
  /** The data object containing datasets and labels (Chart.js format). */
  data: PropTypes.object.isRequired,
  /** Configuration options for the chart (Chart.js format). */
  options: PropTypes.object,
  /** The width of the canvas container. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The height of the canvas container. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
