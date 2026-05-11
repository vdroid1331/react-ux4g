import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Navs,
  Button,
  Tooltip,
  Popover,
  Badge,
  FormSelect,
} from "../../index";

export default {
  title: "Templates / Pages/SaaS Landing Page",
  parameters: {
    layout: "fullscreen",
    docs: { source: { type: "code" } },
  },
};

export const LandingPage = () => {
  const [currency, setCurrency] = useState("INR");

  const currencies = {
    INR: { symbol: "₹", rate: 1 },
    USD: { symbol: "$", rate: 0.012 },
    EUR: { symbol: "€", rate: 0.011 },
    JPY: { symbol: "¥", rate: 1.88 },
    CNY: { symbol: "¥", rate: 0.086 },
    RUB: { symbol: "₽", rate: 1.1 },
  };

  const formatCurrency = (baseINR) => {
    const { symbol, rate } = currencies[currency];
    const converted = Math.round(baseINR * rate);
    return `${symbol}${converted.toLocaleString()}`;
  };

  return (
    <div className="saas-landing">
      {/* Transparent-ish Navbar */}
      <Navbar
        variant="light"
        bg="white"
        expand="lg"
        className="fixed-top shadow-sm py-3 bg-opacity-90"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <Container>
          <Navbar.Brand
            href="#"
            className="fw-bold fs-3 text-primary tracking-tight d-flex align-items-center gap-2"
          >
            <div
              className="bg-primary text-white rounded d-flex align-items-center justify-content-center"
              style={{ width: "32px", height: "32px", borderRadius: "8px" }}
            >
              ⚡
            </div>{" "}
            NexusFlow
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="saas-nav" />
          <Navbar.Collapse id="saas-nav">
            <Navs className="mx-auto fw-bold">
              <Navs.Item>
                <Navs.Link href="#features" className="px-3">
                  Features
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#solutions" className="px-3">
                  Solutions
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#pricing" className="px-3">
                  Pricing
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#docs" className="px-3">
                  Documentation
                </Navs.Link>
              </Navs.Item>
            </Navs>
            <div className="d-flex gap-3 align-items-center">
              <FormSelect
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-auto border-0 shadow-sm rounded-pill bg-light text-dark fw-bold"
              >
                {Object.keys(currencies).map((c) => (
                  <option key={c} value={c}>
                    {c} ({currencies[c].symbol})
                  </option>
                ))}
              </FormSelect>
              <a
                href="#"
                className="text-dark fw-bold text-decoration-none hover-text-primary transition"
              >
                Log in
              </a>
              <Button
                variant="primary"
                className="rounded-pill px-4 shadow fw-bold"
              >
                Get Started
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        className="hero-section pt-5 pb-5 mt-5"
        style={{
          background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
        }}
      >
        <Container className="text-center pt-5 pb-5 mt-4">
          <Badge
            bg="primary"
            className="mb-4 rounded-pill px-4 py-2 text-white bg-opacity-10 text-primary shadow-sm border border-primary border-opacity-25"
            style={{ fontSize: "0.9rem" }}
          >
            v2.0 is now live! ✨
          </Badge>
          <h1
            className="display-2 fw-bolder text-dark mb-4 px-lg-5 mx-lg-5"
            style={{ letterSpacing: "-1.5px", lineHeight: "1.1" }}
          >
            The ultimate platform to{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(90deg, #0d6efd 0%, #0dcaf0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              supercharge
            </span>{" "}
            your workflow.
          </h1>
          <p
            className="lead text-muted mb-5 px-lg-5 mx-lg-5 fw-normal fs-4"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            NexusFlow provides all the tools your team needs to collaborate,
            automate, and scale operations seamlessly in the cloud. No credit
            card required.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="primary"
              size="lg"
              className="rounded-pill px-5 py-3 shadow-lg fw-bold"
            >
              Start for free
            </Button>
            <Tooltip content="Watch a 2-minute product tour" placement="bottom">
              <Button
                variant="outline-dark"
                size="lg"
                className="rounded-pill px-5 py-3 fw-bold bg-white"
              >
                ▶ Watch Demo
              </Button>
            </Tooltip>
          </div>
          <div className="mt-5 pt-4 text-muted small fw-bold text-uppercase tracking-wider">
            Trusted by innovative teams worldwide
          </div>
        </Container>
      </div>

      {/* Feature Section */}
      <Container className="py-5 my-5" id="features">
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <div
              className="bg-dark rounded-4 shadow-lg d-flex align-items-center justify-content-center p-5 text-white position-relative overflow-hidden"
              style={{
                height: "450px",
                background: "linear-gradient(135deg, #212529 0%, #343a40 100%)",
              }}
            >
              <div
                className="position-absolute w-100 h-100 opacity-25"
                style={{
                  background:
                    "radial-gradient(circle at top right, #0d6efd 0%, transparent 50%)",
                }}
              ></div>
              <h3 className="position-relative z-index-1 fw-light">
                [ Interactive Dashboard Preview ]
              </h3>
            </div>
          </Col>
          <Col lg={6} className="px-lg-5">
            <h2
              className="display-5 fw-bold mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              Real-time analytics at your fingertips.
            </h2>
            <p className="text-muted lead mb-5 fs-5">
              Stop guessing and start knowing. Our intuitive dashboards
              translate raw data into actionable insights instantly.
            </p>

            <div className="d-flex mb-5">
              <div
                className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center fs-4 me-4 shadow-sm"
                style={{ width: "60px", height: "60px", minWidth: "60px" }}
              >
                📊
              </div>
              <div>
                <h4 className="fw-bold mb-2">Visual Reports</h4>
                <p className="text-muted fs-6 mb-0">
                  Create stunning visual reports in seconds with our
                  drag-and-drop builder. Export to PDF or share live links.
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div
                className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center fs-4 me-4 shadow-sm"
                style={{ width: "60px", height: "60px", minWidth: "60px" }}
              >
                ⚡
              </div>
              <div>
                <h4 className="fw-bold mb-2">Lightning Fast</h4>
                <p className="text-muted fs-6 mb-0">
                  Built on modern edge architecture ensuring zero latency and
                  99.99% uptime globally.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Pricing Section */}
      <div className="bg-light py-5" id="pricing">
        <Container className="py-5 my-4">
          <div className="text-center mb-5 pb-3">
            <h2 className="display-5 fw-bold" style={{ letterSpacing: "-1px" }}>
              Simple, transparent pricing
            </h2>
            <p className="text-muted lead fs-5">
              Choose the perfect plan for your business needs.
            </p>
          </div>

          <Row className="g-4 justify-content-center align-items-center">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4 hover-shadow transition">
                <Card.Body className="d-flex flex-column">
                  <h5 className="text-muted text-uppercase fw-bold mb-3 tracking-wider">
                    Starter
                  </h5>
                  <div className="display-3 fw-bold mb-3">
                    {formatCurrency(0)}
                    <span className="fs-5 text-muted fw-normal">/mo</span>
                  </div>
                  <p className="text-muted mb-4 fs-6">
                    Perfect for individuals and small side projects just getting
                    started.
                  </p>
                  <Button
                    variant="outline-dark"
                    className="w-100 rounded-pill mb-5 fw-bold py-3"
                  >
                    Get Started for Free
                  </Button>
                  <ul className="list-unstyled text-start text-dark fw-medium mt-auto">
                    <li className="mb-3 d-flex gap-2">
                      <span className="text-primary">✓</span> Up to 3 projects
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <span className="text-primary">✓</span> Basic analytics
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <span className="text-primary">✓</span> Community support
                    </li>
                    <li className="mb-3 d-flex gap-2 text-muted opacity-50">
                      <span className="text-muted">✗</span> Custom domains
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card
                className="border-primary border-2 shadow-lg rounded-4 p-4 position-relative transform-scale-105"
                style={{ zIndex: 2 }}
              >
                <Badge
                  bg="primary"
                  className="position-absolute top-0 start-50 translate-middle rounded-pill px-4 py-2 text-white fw-bold shadow-sm"
                  style={{ fontSize: "0.9rem" }}
                >
                  Most Popular
                </Badge>
                <Card.Body className="d-flex flex-column">
                  <h5 className="text-primary text-uppercase fw-bold mb-3 tracking-wider">
                    Pro
                  </h5>
                  <div className="display-3 fw-bold mb-3">
                    {formatCurrency(2400)}
                    <span className="fs-5 text-muted fw-normal">/mo</span>
                  </div>
                  <p className="text-muted mb-4 fs-6">
                    Ideal for growing teams and startups that need more power.
                  </p>
                  <Popover
                    title="14-Day Free Trial"
                    content="No credit card required. Cancel anytime."
                    placement="top"
                  >
                    <Button
                      variant="primary"
                      className="w-100 rounded-pill mb-5 fw-bold py-3 shadow"
                    >
                      Start Free Trial
                    </Button>
                  </Popover>
                  <ul className="list-unstyled text-start text-dark fw-bold mt-auto">
                    <li className="mb-3 d-flex gap-2">
                      <span className="text-primary">✓</span> Unlimited projects
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <span className="text-primary">✓</span> Advanced analytics
                      dashboard
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <span className="text-primary">✓</span> 1-hour support SLA
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <span className="text-primary">✓</span> Custom domain
                      integration
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
