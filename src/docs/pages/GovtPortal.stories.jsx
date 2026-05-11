import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Navs,
  Breadcrumb,
  Accordion,
  Alert,
  Button,
  Chips,
  InputGroup,
  FormControl,
  Badge,
} from "../../index";

export default {
  title: "Templates / Pages/Govt Portal",
  parameters: {
    layout: "fullscreen",
    docs: { source: { type: "code" } },
  },
};

export const CitizenServices = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="govt-portal bg-light min-vh-100 pb-5">
      {/* Top Bar for Govt Portals */}
      <div className="bg-dark text-white py-2 border-bottom border-secondary">
        <Container className="d-flex justify-content-between align-items-center">
          <small className="fw-semibold text-white-50">
            Government of India | e-Gov Platform Demonstration
          </small>
          <div className="d-flex gap-3">
            <small className="text-white-50 hover-text-white cursor-pointer fw-bold">
              A-
            </small>
            <small className="text-white-50 hover-text-white cursor-pointer fw-bold">
              A
            </small>
            <small className="text-white-50 hover-text-white cursor-pointer fw-bold">
              A+
            </small>
            <small className="text-white-50 hover-text-white cursor-pointer border-start border-secondary ps-3 ms-1">
              English
            </small>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar
        variant="light"
        bg="white"
        expand="lg"
        className="shadow-sm border-bottom border-primary border-4 sticky-top py-3"
      >
        <Container>
          <Navbar.Brand
            href="#"
            className="fw-bold fs-3 text-primary d-flex align-items-center gap-2"
          >
            🏛️ e-CitizenPortal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="govt-nav" />
          <Navbar.Collapse id="govt-nav">
            <Navs
              className="ms-auto fw-bold text-uppercase"
              style={{ fontSize: "0.85rem", letterSpacing: "1px" }}
            >
              <Navs.Item>
                <Navs.Link href="#" active className="px-3">
                  Home
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#" className="px-3 text-dark">
                  Services
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#" className="px-3 text-dark">
                  Departments
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#" className="px-3 text-dark">
                  Guidelines
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#" className="px-3 text-dark">
                  Contact
                </Navs.Link>
              </Navs.Item>
            </Navs>
            <Button
              variant="primary"
              className="ms-lg-3 rounded-pill px-4 fw-bold shadow-sm"
            >
              Login / Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Breadcrumb className="mb-4 bg-white px-4 py-3 rounded-4 shadow-sm fw-bold">
          <Breadcrumb.Item href="#" className="text-decoration-none">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" className="text-decoration-none">
            Citizen Services
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Apply for Certificate</Breadcrumb.Item>
        </Breadcrumb>

        <Alert
          variant="warning"
          dismissible
          className="mb-5 d-flex align-items-center shadow-sm rounded-4 border-0 border-start border-warning border-5"
        >
          <div className="me-3 fs-3">🔔</div>
          <div>
            <strong className="text-dark">Important Update:</strong>{" "}
            <span className="text-muted">
              The deadline for submitting property tax returns has been extended
              to 31st December 2026.
            </span>{" "}
            <a href="#" className="alert-link text-decoration-none ms-2">
              Read full notification here &rarr;
            </a>
          </div>
        </Alert>

        <Row className="g-5">
          {/* Main Content Area */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 mb-4">
              <Card.Body className="p-5">
                <h3 className="text-dark fw-bold mb-4">Available e-Services</h3>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {["All", "Revenue", "Transport", "Education", "Health"].map(
                    (filter) => (
                      <Chips
                        key={filter}
                        label={filter}
                        variant={
                          activeFilter === filter
                            ? "primary"
                            : "outline-secondary"
                        }
                        onClick={() => setActiveFilter(filter)}
                        style={{ cursor: "pointer" }}
                        className="fw-bold"
                      />
                    ),
                  )}
                </div>

                <div className="d-flex justify-content-between align-items-center mb-5 bg-light p-3 rounded-4 border">
                  <InputGroup className="w-75 shadow-sm rounded-pill overflow-hidden bg-white">
                    <FormControl
                      placeholder="Search for a specific service (e.g. Income Certificate)..."
                      className="border-0 shadow-none py-2 px-4"
                    />
                    <Button variant="primary" className="px-4 fw-bold">
                      Search
                    </Button>
                  </InputGroup>
                  <span className="text-muted small fw-bold text-uppercase ms-3">
                    Showing 14 results
                  </span>
                </div>

                <div className="service-list">
                  {/* Service Item 1 */}
                  <div className="p-4 bg-white border rounded-4 mb-4 shadow-sm hover-shadow transition">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h4 className="mb-0 text-dark fw-bold">
                        Income Certificate
                      </h4>
                      <Badge
                        bg="info"
                        className="text-dark fw-bold px-3 py-2 rounded-pill"
                      >
                        Revenue Dept.
                      </Badge>
                    </div>
                    <p
                      className="text-muted mb-4 lead"
                      style={{ fontSize: "1rem" }}
                    >
                      Apply for a certified document proving your annual income
                      for scholarships or government schemes. Requires Aadhaar
                      authentication.
                    </p>
                    <div className="d-flex gap-3">
                      <Button
                        variant="primary"
                        className="rounded-pill px-4 fw-bold shadow-sm"
                      >
                        Apply Online
                      </Button>
                      <Button
                        variant="outline-secondary"
                        className="rounded-pill px-4 fw-bold"
                      >
                        Download Guidelines
                      </Button>
                    </div>
                  </div>

                  {/* Service Item 2 */}
                  <div className="p-4 bg-white border rounded-4 mb-4 shadow-sm hover-shadow transition">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h4 className="mb-0 text-dark fw-bold">
                        Driving License Renewal
                      </h4>
                      <Badge
                        bg="warning"
                        className="text-dark fw-bold px-3 py-2 rounded-pill"
                      >
                        Transport Dept.
                      </Badge>
                    </div>
                    <p
                      className="text-muted mb-4 lead"
                      style={{ fontSize: "1rem" }}
                    >
                      Renew your expiring driving license completely online with
                      Aadhaar authentication. Biometrics update required if
                      older than 10 years.
                    </p>
                    <div className="d-flex gap-3">
                      <Button
                        variant="primary"
                        className="rounded-pill px-4 fw-bold shadow-sm"
                      >
                        Apply Online
                      </Button>
                      <Button
                        variant="outline-secondary"
                        className="rounded-pill px-4 fw-bold"
                        disabled
                      >
                        Track Status
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="rounded-pill px-5 fw-bold"
                  >
                    Load More Services
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sidebar Area */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 mb-5 overflow-hidden">
              <Card.Header className="bg-primary border-bottom-0 fw-bold text-white py-3 px-4 fs-5">
                Quick Links
              </Card.Header>
              <div className="list-group list-group-flush border-0">
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-bottom py-3 px-4 d-flex justify-content-between align-items-center text-dark fw-bold"
                >
                  Track Application Status
                  <span className="badge bg-light text-primary rounded-pill px-3 py-2">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-bottom py-3 px-4 d-flex justify-content-between align-items-center text-dark fw-bold"
                >
                  Verify Certificate Authenticity
                  <span className="badge bg-light text-primary rounded-pill px-3 py-2">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-3 px-4 d-flex justify-content-between align-items-center text-dark fw-bold"
                >
                  Download Mobile App
                  <span className="badge bg-light text-primary rounded-pill px-3 py-2">
                    &rarr;
                  </span>
                </a>
              </div>
            </Card>

            <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
              <Card.Header className="bg-dark border-bottom-0 fw-bold text-white py-3 px-4 fs-5">
                Frequently Asked Questions
              </Card.Header>
              <Card.Body className="p-0">
                <Accordion flush>
                  <Accordion.Item
                    header={
                      <span className="fw-bold text-dark">
                        What documents are required?
                      </span>
                    }
                  >
                    <span className="text-muted">
                      You generally need Aadhaar, PAN, and address proof.
                      Specific services require additional documents which are
                      listed on their respective pages.
                    </span>
                  </Accordion.Item>
                  <Accordion.Item
                    header={
                      <span className="fw-bold text-dark">
                        How long does processing take?
                      </span>
                    }
                  >
                    <span className="text-muted">
                      Standard processing time is 7-14 working days depending on
                      the service and department load. Fast-track options are
                      available for medical emergencies.
                    </span>
                  </Accordion.Item>
                  <Accordion.Item
                    header={
                      <span className="fw-bold text-dark">
                        Is there an application fee?
                      </span>
                    }
                  >
                    <span className="text-muted">
                      Fees vary by service. Some are free while others have
                      nominal processing charges payable via UPI/Netbanking.
                    </span>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
