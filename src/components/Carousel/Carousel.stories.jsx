import React, { useState } from "react";
import { Carousel } from "./Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Carousel Component
The \`Carousel\` component is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of React state. It works with a series of images, text, or custom markup.

## Usage Guidelines
- **Slides:** Nest \`Carousel.Item\` components inside the main \`Carousel\`. The active slide state is automatically managed.
- **Captions:** Add \`Carousel.Caption\` inside a \`Carousel.Item\` to easily display text overlaying the image.
- **Controls:** Previous and Next controls are automatically rendered alongside the slide indicators at the bottom.

## Accessibility
Carousels can be challenging for accessibility. Our component utilizes \`aria-hidden="true"\` on decorative icons and includes visually hidden text for the Previous/Next controls to ensure screen readers can navigate them.
`,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Carousel
      style={{ width: "600px", height: "300px", backgroundColor: "#333" }}
    >
      <Carousel.Item>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "300px",
            color: "white",
            backgroundImage:
              "url(https://placehold.co/800x400/292b2c/FFF?text=First+Slide)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "300px",
            color: "white",
            backgroundImage:
              "url(https://placehold.co/800x400/0275d8/FFF?text=Second+Slide)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  ),
};
