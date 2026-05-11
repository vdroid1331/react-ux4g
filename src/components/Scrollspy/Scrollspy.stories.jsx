import React, { useState } from "react";
import { Scrollspy } from "./Scrollspy";
import { Navs } from "../Navs/Navs";

export default {
  title: "Components/Scrollspy",
  component: Scrollspy,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Scrollspy Component
The \`Scrollspy\` component automatically updates navigation targets based on the user's scroll position, utilizing the modern \`IntersectionObserver\` API for maximum performance.

## Usage Guidelines
- **Target Tracking:** Pass an array of string IDs to the \`items\` prop. These IDs must exactly match the \`id\` attributes on the elements inside the Scrollspy container.
- **State Updates:** Provide an \`onUpdate\` callback to receive the active ID whenever it changes, and pass that ID back via \`currentId\` so your navigation component (like \`Navs\`) can highlight the active link.
- **Container Structure:** The \`Scrollspy\` itself renders a scrollable container (\`overflowY: auto\`). Your spied sections must reside directly inside it.

## Accessibility
When building Scrollspy navigation, ensure your navigation links point directly to the corresponding IDs (e.g., \`href="#section1"\`). This allows users to jump directly to the content, and ensures the links remain functional even without JavaScript.
`,
      },
    },
  },
};

export const Default = () => {
  const [activeId, setActiveId] = useState("section1");

  return (
    <div className="row">
      <div className="col-4">
        <Navs variant="pills" className="flex-column">
          <Navs.Item>
            <Navs.Link href="#section1" active={activeId === "section1"}>
              Section 1
            </Navs.Link>
          </Navs.Item>
          <Navs.Item>
            <Navs.Link href="#section2" active={activeId === "section2"}>
              Section 2
            </Navs.Link>
          </Navs.Item>
          <Navs.Item>
            <Navs.Link href="#section3" active={activeId === "section3"}>
              Section 3
            </Navs.Link>
          </Navs.Item>
        </Navs>
      </div>
      <div className="col-8">
        <Scrollspy
          items={["section1", "section2", "section3"]}
          currentId={activeId}
          onUpdate={setActiveId}
          style={{ height: "200px" }}
          tabIndex="0"
        >
          <div id="section1" style={{ paddingBottom: "100px" }}>
            <h4>Section 1</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
          <div id="section2" style={{ paddingBottom: "100px" }}>
            <h4>Section 2</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
          <div id="section3" style={{ paddingBottom: "100px" }}>
            <h4>Section 3</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
        </Scrollspy>
      </div>
    </div>
  );
};
