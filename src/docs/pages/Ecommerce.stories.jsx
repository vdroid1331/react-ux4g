import React, { useState } from "react";
import {
  Navbar,
  Navs,
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  InputGroup,
  FormControl,
  Carousel,
  FormSelect,
} from "../../index";

export default {
  title: "Templates / Pages/Ecommerce",
  parameters: {
    layout: "fullscreen",
    docs: { source: { type: "code" } },
  },
};

export const Homepage = () => {
  const [currency, setCurrency] = useState("INR");

  const currencies = {
    INR: { symbol: "₹", rate: 1 },
    USD: { symbol: "$", rate: 0.012 },
    EUR: { symbol: "€", rate: 0.011 },
    JPY: { symbol: "¥", rate: 1.88 },
    CNY: { symbol: "¥", rate: 0.086 },
    RUB: { symbol: "₽", rate: 1.1 },
  };

  const formatPrice = (basePriceINR) => {
    const { symbol, rate } = currencies[currency];
    const converted = basePriceINR * rate;
    return `${symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="ecommerce-template bg-light min-vh-100">
      {/* Top Navbar */}
      <Navbar variant="dark" bg="dark" expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4">
            ShopNX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navs className="me-auto">
              <Navs.Item>
                <Navs.Link href="#" active>
                  Home
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#">Electronics</Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#">Fashion</Navs.Link>
              </Navs.Item>
            </Navs>
            <div className="d-flex align-items-center gap-3">
              <FormSelect
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-auto border-0 shadow-sm rounded-pill bg-white text-dark fw-bold"
              >
                {Object.keys(currencies).map((c) => (
                  <option key={c} value={c}>
                    {c} ({currencies[c].symbol})
                  </option>
                ))}
              </FormSelect>
              <InputGroup
                className="bg-white rounded-pill overflow-hidden border-0"
                style={{ maxWidth: "300px" }}
              >
                <FormControl
                  placeholder="Search products..."
                  className="border-0 shadow-none"
                />
                <Button variant="light" className="border-0">
                  🔍
                </Button>
              </InputGroup>
              <Button
                variant="outline-light"
                className="position-relative border-0"
              >
                🛒
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  3
                </Badge>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Carousel */}
      <Container className="mt-4 mb-5">
        <Carousel
          className="shadow-lg rounded-4 overflow-hidden"
          controls
          indicators
        >
          <Carousel.Item>
            <div
              className="bg-primary text-white d-flex align-items-center justify-content-center flex-column"
              style={{
                height: "400px",
                background: "linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)",
              }}
            >
              <h1 className="display-4 fw-bold">Summer Sale!</h1>
              <p className="lead">Up to 50% off on electronics.</p>
              <Button
                variant="light"
                size="lg"
                className="mt-3 rounded-pill px-4 shadow"
              >
                Shop Now
              </Button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="bg-dark text-white d-flex align-items-center justify-content-center flex-column"
              style={{
                height: "400px",
                background: "linear-gradient(135deg, #212529 0%, #495057 100%)",
              }}
            >
              <h1 className="display-4 fw-bold">New Arrivals</h1>
              <p className="lead">Check out the latest fashion trends.</p>
              <Button
                variant="outline-light"
                size="lg"
                className="mt-3 rounded-pill px-4"
              >
                Discover
              </Button>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Product Grid */}
      <Container className="mb-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h3 className="fw-bold m-0">Featured Products</h3>
          <a href="#" className="text-decoration-none fw-bold text-primary">
            View All &rarr;
          </a>
        </div>

        <Row className="g-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Col key={item} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-shadow transition">
                <div
                  className="bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center position-relative"
                  style={{ height: "200px", overflow: "hidden" }}
                >
                  {item === 1 && (
                    <Badge
                      bg="danger"
                      className="position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 z-1"
                    >
                      Sale
                    </Badge>
                  )}
                  {item === 2 && (
                    <Badge
                      bg="primary"
                      className="position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 z-1"
                    >
                      New
                    </Badge>
                  )}
                  <img
                    src={`https://placehold.co/400x300?text=Product+${item}`}
                    alt={`Product ${item}`}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <h5 className="fw-bold mb-1">Premium Item {item}</h5>
                  <p className="text-muted small mb-3">Category Name</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <h5 className="text-primary fw-bold mb-0">
                      {formatPrice(item * 1499)}
                    </h5>
                    <Button
                      variant="dark"
                      size="sm"
                      className="rounded-circle rounded-circle shadow"
                      style={{ width: "35px", height: "35px" }}
                    >
                      +
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
