import React from "react";
import PropTypes from "prop-types";

/**
 * Stepper component for displaying progress through a sequence of logical and numbered steps.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array<{label: React.ReactNode}>} props.steps - Array of step objects containing labels.
 * @param {number} [props.activeStep=0] - The index of the currently active step (0-based).
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered Stepper component.
 */
export const Stepper = ({
  steps,
  activeStep = 0,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`ux4g-stepper d-flex align-items-center justify-content-between ${className}`.trim()}
      {...props}
    >
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <React.Fragment key={index}>
            {/* Step Item */}
            <div
              className="d-flex flex-column align-items-center position-relative"
              style={{ zIndex: 1 }}
            >
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center text-white ${isActive ? "bg-primary" : isCompleted ? "bg-success" : "bg-secondary"}`}
                style={{ width: "40px", height: "40px", fontWeight: "bold" }}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              <div
                className={`mt-2 ${isActive ? "fw-bold text-primary" : "text-muted"}`}
              >
                {step.label}
              </div>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-grow-1 ${isCompleted ? "bg-success" : "bg-secondary"}`}
                style={{
                  height: "4px",
                  opacity: isCompleted ? 1 : 0.3,
                  margin: "0 10px",
                  transform: "translateY(-12px)",
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

Stepper.propTypes = {
  /** Array of step objects containing labels to display for each step. */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
    }),
  ).isRequired,
  /** The index of the currently active step (0-based indexing). */
  activeStep: PropTypes.number,
  /** Additional custom CSS classes. */
  className: PropTypes.string,
};
