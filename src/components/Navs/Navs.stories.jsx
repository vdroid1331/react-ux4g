import React from "react";
import { Navs } from "./Navs";

export default {
  title: "Components/Navs",
  component: Navs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Navs Component
The \`Navs\` component provides a flexible navigation interface. It can be styled as simple text links, folder-style tabs, or button-like pills.

## Usage Guidelines
- **Variants:** Use \`variant="tabs"\` for a classic tabbed interface, or \`variant="pills"\` for a more modern, button-styled list of links.
- **Layout:** Use the \`fill\` prop to make the navigation span the entire width of its parent container proportionally, or \`justified\` to make every item exactly the same width.
- **Active State:** Set \`active={true}\` on the \`Navs.Link\` that represents the current page or view.

## Accessibility
The root element renders as an \`<ul>\` list. Active \`Navs.Link\` elements automatically receive the \`aria-current="page"\` attribute to inform screen readers of their selected state.
`,
      },
    },
  },
};

export const BaseNav = {
  render: () => (
    <Navs>
      <Navs.Item>
        <Navs.Link href="#" active>
          Active
        </Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#" disabled>
          Disabled
        </Navs.Link>
      </Navs.Item>
    </Navs>
  ),
};

export const Tabs = {
  render: () => (
    <Navs variant="tabs">
      <Navs.Item>
        <Navs.Link href="#" active>
          Active
        </Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#" disabled>
          Disabled
        </Navs.Link>
      </Navs.Item>
    </Navs>
  ),
};

export const Pills = {
  render: () => (
    <Navs variant="pills">
      <Navs.Item>
        <Navs.Link href="#" active>
          Active
        </Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#" disabled>
          Disabled
        </Navs.Link>
      </Navs.Item>
    </Navs>
  ),
};

export const VerticalPills = {
  render: () => (
    <div className="d-flex align-items-start">
      <Navs
        variant="pills"
        className="flex-column me-3"
        style={{ width: "150px" }}
      >
        <Navs.Item>
          <Navs.Link href="#" active>
            Home
          </Navs.Link>
        </Navs.Item>
        <Navs.Item>
          <Navs.Link href="#">Profile</Navs.Link>
        </Navs.Item>
        <Navs.Item>
          <Navs.Link href="#">Messages</Navs.Link>
        </Navs.Item>
        <Navs.Item>
          <Navs.Link href="#">Settings</Navs.Link>
        </Navs.Item>
      </Navs>
      <div className="p-3 bg-light border rounded flex-grow-1">
        <h5>Vertical Navs</h5>
        <p>Vertical navigation is great for sidebars and settings menus.</p>
      </div>
    </div>
  ),
};

export const Underline = {
  render: () => (
    <Navs variant="underline">
      <Navs.Item>
        <Navs.Link href="#" active>
          Active
        </Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#" disabled>
          Disabled
        </Navs.Link>
      </Navs.Item>
    </Navs>
  ),
};

export const Justified = {
  render: () => (
    <Navs variant="pills" fill>
      <Navs.Item>
        <Navs.Link href="#" active>
          Active
        </Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Much longer nav link</Navs.Link>
      </Navs.Item>
      <Navs.Item>
        <Navs.Link href="#">Link</Navs.Link>
      </Navs.Item>
    </Navs>
  ),
};
