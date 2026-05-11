import React from "react";
import { Navbar } from "./Navbar";
import { Navs } from "../Navs/Navs";
import { Dropdown } from "../Dropdown/Dropdown";

export default {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Navbar Component
The \`Navbar\` component is a powerful, responsive navigation header that provides branding, navigation links, and responsive collapsing behaviors.

## Usage Guidelines
- **Responsive Collapsing:** Use the \`expand\` prop to define when the navbar should expand horizontally. For example, \`expand="lg"\` means it will be a collapsed hamburger menu on mobile and tablet, and a full horizontal bar on desktops.
- **Composition:** Wrap your brand in \`Navbar.Brand\`. Include a \`Navbar.Toggle\` to render the hamburger icon. Wrap your navigation links inside \`Navbar.Collapse\` so they hide appropriately on small screens.
- **Theming:** Combine the \`bg\` prop (background color) with the \`variant\` prop to ensure text is readable (e.g., \`bg="dark" variant="dark"\` ensures text is white).

## Accessibility
The component uses a native \`<nav>\` element. The toggle button automatically manages states internally to ensure keyboard users can open and close the menu easily.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navs className="me-auto mb-2 mb-lg-0">
          <Navs.Item>
            <Navs.Link active aria-current="page" href="#">
              Home
            </Navs.Link>
          </Navs.Item>
          <Navs.Item>
            <Navs.Link href="#">Link</Navs.Link>
          </Navs.Item>
          <Dropdown as="li" className="nav-item">
            <Dropdown.Toggle
              as="a"
              className="nav-link"
              variant=""
              id="navbarDropdown"
            >
              Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu aria-labelledby="navbarDropdown">
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navs.Item>
            <Navs.Link disabled href="#" tabIndex="-1" aria-disabled="true">
              Disabled
            </Navs.Link>
          </Navs.Item>
        </Navs>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </Navbar.Collapse>
    </Navbar>
  ),
};
