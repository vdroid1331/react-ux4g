import React from "react";

export default {
  title: "Foundation/Helpers",
  parameters: {
    docs: {
      description: {
        component: `# Helpers
UX4G provides a handful of helper classes to accomplish common UI tasks quickly.`,
      },
    },
  },
};

export const Clearfix = {
  render: () => (
    <div>
      <p className="text-muted mb-4">
        Easily clear floats by adding <code>.clearfix</code> to the parent
        element.
      </p>
      <div className="bg-info clearfix p-3">
        <button type="button" className="btn btn-secondary float-start">
          Example Button floated left
        </button>
        <button type="button" className="btn btn-secondary float-end">
          Example Button floated right
        </button>
      </div>
    </div>
  ),
};

export const StretchedLink = {
  render: () => (
    <div>
      <p className="text-muted mb-4">
        Make any HTML element or Bootstrap component clickable by "stretching" a
        nested link via CSS.
      </p>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card with stretched link</h5>
          <p className="card-text">Some quick example text.</p>
          <a href="#" className="btn btn-primary stretched-link">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  ),
};

export const TextTruncation = {
  render: () => (
    <div>
      <p className="text-muted mb-4">
        Truncate long strings of text with an ellipsis.
      </p>
      <div className="row">
        <div className="col-2 text-truncate bg-light border p-2">
          This is a very long string of text that will be truncated.
        </div>
      </div>
      <br />
      <span
        className="d-inline-block text-truncate bg-light border p-2"
        style={{ maxWidth: "150px" }}
      >
        This is a very long string of text that will be truncated.
      </span>
    </div>
  ),
};

export const Ratio = {
  render: () => (
    <div style={{ maxWidth: "400px" }}>
      <p className="text-muted mb-4">
        Use generated pseudo elements to force an element to maintain an aspect
        ratio.
      </p>
      <div className="ratio ratio-16x9 border bg-light">
        <div className="d-flex align-items-center justify-content-center">
          16x9 Aspect Ratio Box
        </div>
      </div>
    </div>
  ),
};
