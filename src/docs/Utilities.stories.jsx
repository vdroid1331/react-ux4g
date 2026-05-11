import React from "react";

export default {
  title: "Foundation/Utilities",
  parameters: {
    docs: {
      description: {
        component: `# Utilities
UX4G is packed with utility classes to help you build interfaces without writing custom CSS. For the best developer experience, you should use these standard CSS classes directly on your React elements instead of importing wrapper components.`,
      },
    },
  },
};

export const Colors = {
  render: () => (
    <div>
      <p className="text-muted mb-4">
        Use text and background color utilities to rapidly style elements.
      </p>
      <div className="text-primary bg-light p-3">
        Primary Text on Light Background
      </div>
      <div className="text-white bg-primary p-3 mt-2">
        White Text on Primary Background
      </div>
      <div className="text-success bg-dark p-3 mt-2">
        Success Text on Dark Background
      </div>
    </div>
  ),
};

export const Spacing = {
  render: () => (
    <div>
      <p className="text-muted mb-4">
        UX4G includes a wide range of shorthand responsive margin and padding
        utility classes to modify an element's appearance.
      </p>
      <div className="bg-light border mt-3">Margin Top 3</div>
      <div className="bg-light border px-4 py-2 mt-3">
        Padding X 4, Padding Y 2
      </div>
      <div className="bg-light border mx-auto mt-3" style={{ width: "200px" }}>
        Centered horizontally
      </div>
    </div>
  ),
};

export const Flexbox = {
  render: () => (
    <div>
      <p className="text-muted mb-4">
        Quickly manage the layout, alignment, and sizing of grid columns,
        navigation, components, and more.
      </p>
      <div className="d-flex justify-content-between align-items-center bg-light p-3 border">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </div>
  ),
};

export const ShadowsAndBorders = {
  render: () => (
    <div>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
      <div className="border border-primary rounded-pill p-2 mt-3 text-center">
        Primary border
      </div>
    </div>
  ),
};
