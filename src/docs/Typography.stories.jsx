import React from "react";

export default {
  title: "Foundation/Typography",
  parameters: {
    docs: {
      description: {
        component: `# Typography
UX4G provides robust typography utilities derived from standard Bootstrap styling. Since these are global CSS classes, you do not need a React component to use them. Simply apply the classes to standard HTML tags.`,
      },
    },
  },
};

export const Headings = {
  render: () => (
    <div>
      <p className="text-muted mb-4">
        All HTML headings, <code>&lt;h1&gt;</code> through{" "}
        <code>&lt;h6&gt;</code>, are available. You can also use the{" "}
        <code>.h1</code> through <code>.h6</code> classes on other elements if
        you want to match the font styling of a heading.
      </p>
      <h1 className="h1">h1. UX4G heading</h1>
      <h2 className="h2">h2. UX4G heading</h2>
      <h3 className="h3">h3. UX4G heading</h3>
      <h4 className="h4">h4. UX4G heading</h4>
      <h5 className="h5">h5. UX4G heading</h5>
      <h6 className="h6">h6. UX4G heading</h6>
    </div>
  ),
};

export const DisplayHeadings = {
  render: () => (
    <div>
      <p className="text-muted mb-4">
        Traditional heading elements are designed to work best in the meat of
        your page content. When you need a heading to stand out, consider using
        a display heading.
      </p>
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>
    </div>
  ),
};

export const InlineTextElements = {
  render: () => (
    <div>
      <p>
        You can use the mark tag to <mark>highlight</mark> text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>
          This line of text is meant to be treated as an addition to the
          document.
        </ins>
      </p>
      <p>
        <u>This line of text will render as underlined.</u>
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p>
        <em>This line rendered as italicized text.</em>
      </p>
    </div>
  ),
};
