# React UX4G 🇮🇳

[![npm version](https://img.shields.io/npm/v/react-ux4g.svg?style=flat-square)](https://www.npmjs.com/package/react-ux4g)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**React UX4G** is the unofficial React implementation of the [UX4G (User Experience for Government)](https://ux4g.gov.in/) design system. Developed under the vision of the **Ministry of Electronics and Information Technology (MeitY)** and the **National Informatics Centre (NIC)**, this library provides a highly accessible, responsive, and robust set of React components specifically designed to build modern digital services for the Government of India.

> **Note**: This is the React adaptation of the core UX4G HTML/CSS framework.

---

## 🌟 Features

- **40+ Accessible Components**: From simple Buttons and Badges to complex data components like DataTables, Steppers, and Modals.
- **Government Standard Compliant**: Strictly adheres to the UX4G guidelines for typography, color palettes, and spacing required for official applications.
- **Fully Responsive**: Built with a mobile-first approach using flexible grid systems and fluid utilities.
- **Accessibility First**: Designed with ARIA attributes and screen-reader support out of the box to ensure inclusivity for all citizens.
- **Developer Experience**: Ships with comprehensive JSDoc annotations and a detailed Storybook documentation suite.

## 📦 Installation

To install `react-ux4g` in your React project, simply run:

```bash
npm install react-ux4g
```

> **Important**: You must import the UX4G core CSS and JavaScript bundles into your application's entry file (e.g., `index.js`, `App.js`, or `_app.js`) for the components to render correctly.

```javascript
// In your entry point (e.g., src/index.js)
import "react-ux4g/dist/assets/ux4g/css/ux4g.min.css";
import "react-ux4g/dist/assets/ux4g/js/ux4g.bundle.min.js";
```

## 🚀 Quick Start

Here is a quick example to get you started with building a responsive layout using React UX4G components:

```jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-ux4g";

function App() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">
              Citizen Registration
            </Card.Header>
            <Card.Body>
              <Card.Title>Welcome to the Portal</Card.Title>
              <Card.Text>
                Please ensure you have your Aadhar card ready before proceeding
                with the registration process.
              </Card.Text>
              <Button variant="success" className="w-100 mt-3">
                Start Registration
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
```

## 📚 Documentation & Storybook

React UX4G comes with a rich Storybook environment that provides:

1. **Live Previews**: Interact with every component.
2. **Prop Tables**: Detailed documentation of every accepted prop.
3. **Usage Guidelines**: Accessibility rules and implementation advice.
4. **Full Page Templates**: Pre-built dashboard templates for SaaS, Banking, and Government Portals.

To view the Storybook locally during development:

```bash
npm run storybook
```

## 🛠 Advanced Usage: Complex Compositions

React UX4G components are designed to be composable. You can easily mix components like `Offcanvas`, `ListGroup`, and `Badge` to create complex UI patterns:

```jsx
import { Offcanvas, ListGroup, Badge, Button } from "react-ux4g";

// Creating a Notifications Sidebar
<Offcanvas placement="end">
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Activity Feed</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <ListGroup variant="flush">
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        System Update Scheduled
        <Badge variant="warning">Alert</Badge>
      </ListGroup.Item>
    </ListGroup>
  </Offcanvas.Body>
</Offcanvas>;
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

_Empowering digital governance in India with world-class user experiences._
