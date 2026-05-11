import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Navs,
  Stepper,
  Button,
  FloatingLabel,
  FormControl,
  Feedback,
  Toast,
  FormSelect,
} from "../../index";

export default {
  title: "Templates / Pages/Banking Portal",
  parameters: {
    layout: "fullscreen",
    docs: { source: { type: "code" } },
  },
};

export const SecureBanking = () => {
  const [activeTab, setActiveTab] = useState("transfer");
  const [showToast, setShowToast] = useState(false);
  const [transferStep, setTransferStep] = useState(0);
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
    const converted = baseINR * rate;
    return `${symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const transferSteps = [
    { title: "Recipient Details" },
    { title: "Amount & Remarks" },
    { title: "Confirmation" },
  ];

  const handleNext = () => setTransferStep((prev) => Math.min(prev + 1, 2));
  const handlePrev = () => setTransferStep((prev) => Math.max(prev - 1, 0));
  const handleSubmit = () => {
    setShowToast(true);
    setTransferStep(0);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="banking-portal bg-light min-vh-100 d-flex flex-column">
      {/* Secure Header */}
      <div className="bg-primary bg-gradient text-white py-1">
        <Container className="d-flex justify-content-between">
          <small className="fw-bold">🔒 Secure Banking Environment</small>
          <small>Last Login: Today, 14:32 IST</small>
        </Container>
      </div>

      <Navbar
        variant="light"
        bg="white"
        expand="lg"
        className="shadow-sm border-bottom py-3"
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4 text-primary">
            NexusBank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="bank-nav" />
          <Navbar.Collapse id="bank-nav">
            <div className="ms-auto d-flex align-items-center gap-3">
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
              <span className="fw-bold text-dark">Hello, Aaditya</span>
              <Button
                variant="outline-danger"
                size="sm"
                className="rounded-pill px-4 fw-bold"
              >
                Logout
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="flex-grow-1 py-5">
        <Row className="g-5">
          <Col lg={3}>
            {/* Account Summary Card */}
            <Card className="border-0 shadow-lg rounded-4 overflow-hidden mb-4">
              <div className="bg-dark text-white p-4">
                <p className="text-white-50 mb-1 small text-uppercase fw-bold">
                  Savings Account
                </p>
                <h4 className="fw-bold mb-3 font-monospace">XXXX-XXXX-4932</h4>
                <p className="text-white-50 mb-1 small text-uppercase fw-bold">
                  Available Balance
                </p>
                <h2 className="fw-bold m-0">{formatCurrency(3500000)}</h2>
              </div>
              <div className="list-group list-group-flush">
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-3 fw-bold text-primary"
                >
                  View Statement
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-3 fw-bold text-primary"
                >
                  Request Cheque Book
                </a>
              </div>
            </Card>
          </Col>

          <Col lg={9}>
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="bg-white px-4 pt-3 border-bottom">
                <Navs variant="tabs" className="border-0 gap-3">
                  <Navs.Item>
                    <Navs.Link
                      href="#"
                      active={activeTab === "accounts"}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("accounts");
                      }}
                      className={`fw-bold fs-5 ${activeTab === "accounts" ? "text-primary border-bottom border-primary border-3" : "text-muted border-0"}`}
                    >
                      My Accounts
                    </Navs.Link>
                  </Navs.Item>
                  <Navs.Item>
                    <Navs.Link
                      href="#"
                      active={activeTab === "transfer"}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("transfer");
                      }}
                      className={`fw-bold fs-5 ${activeTab === "transfer" ? "text-primary border-bottom border-primary border-3" : "text-muted border-0"}`}
                    >
                      Fund Transfer
                    </Navs.Link>
                  </Navs.Item>
                  <Navs.Item>
                    <Navs.Link
                      href="#"
                      active={activeTab === "cards"}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("cards");
                      }}
                      className={`fw-bold fs-5 ${activeTab === "cards" ? "text-primary border-bottom border-primary border-3" : "text-muted border-0"}`}
                    >
                      Cards & Loans
                    </Navs.Link>
                  </Navs.Item>
                </Navs>
              </div>

              <Card.Body className="p-5">
                {activeTab === "transfer" && (
                  <div className="transfer-flow">
                    <Stepper
                      steps={transferSteps}
                      activeStep={transferStep}
                      className="mb-5"
                    />

                    <div className="step-content px-lg-5 mx-lg-5">
                      {transferStep === 0 && (
                        <div className="animate-fade-in">
                          <h4 className="fw-bold mb-4">Recipient Details</h4>
                          <FloatingLabel
                            label="Select Beneficiary"
                            className="mb-4 shadow-sm"
                          >
                            <FormSelect defaultValue="">
                              <option value="" disabled>
                                Choose a saved beneficiary
                              </option>
                              <option value="1">
                                Rahul Sharma - HDFC Bank
                              </option>
                              <option value="2">Priya Patel - SBI</option>
                            </FormSelect>
                          </FloatingLabel>
                          <div className="d-flex align-items-center my-4 text-muted">
                            <hr className="flex-grow-1" />
                            <span className="px-3 fw-bold small text-uppercase">
                              OR
                            </span>
                            <hr className="flex-grow-1" />
                          </div>
                          <FloatingLabel
                            label="Account Number"
                            className="mb-3 shadow-sm"
                          >
                            <FormControl
                              type="text"
                              placeholder="Account Number"
                            />
                          </FloatingLabel>
                          <FloatingLabel
                            label="IFSC Code"
                            className="mb-4 shadow-sm"
                          >
                            <FormControl type="text" placeholder="IFSC Code" />
                          </FloatingLabel>
                          <div className="d-flex justify-content-end">
                            <Button
                              variant="primary"
                              onClick={handleNext}
                              className="rounded-pill px-5 py-2 fw-bold shadow"
                            >
                              Continue
                            </Button>
                          </div>
                        </div>
                      )}

                      {transferStep === 1 && (
                        <div className="animate-fade-in">
                          <h4 className="fw-bold mb-4">Amount & Remarks</h4>
                          <FloatingLabel
                            label={`Amount (${currencies[currency].symbol})`}
                            className="mb-4 shadow-sm"
                          >
                            <FormControl
                              type="number"
                              placeholder={`Amount (${currencies[currency].symbol})`}
                              className="fs-4 fw-bold text-primary"
                            />
                          </FloatingLabel>
                          <FloatingLabel
                            label="Remarks (Optional)"
                            className="mb-4 shadow-sm"
                          >
                            <FormControl
                              type="text"
                              placeholder="Remarks (Optional)"
                            />
                          </FloatingLabel>
                          <div className="d-flex justify-content-between">
                            <Button
                              variant="light"
                              onClick={handlePrev}
                              className="rounded-pill px-5 py-2 fw-bold"
                            >
                              Back
                            </Button>
                            <Button
                              variant="primary"
                              onClick={handleNext}
                              className="rounded-pill px-5 py-2 fw-bold shadow"
                            >
                              Proceed to Pay
                            </Button>
                          </div>
                        </div>
                      )}

                      {transferStep === 2 && (
                        <div className="animate-fade-in">
                          <h4 className="fw-bold mb-4">Review & Confirm</h4>
                          <Card className="border-0 bg-light rounded-4 p-4 mb-4">
                            <div className="d-flex justify-content-between mb-3">
                              <span className="text-muted fw-bold">To:</span>
                              <span className="fw-bold text-dark">
                                Rahul Sharma
                              </span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                              <span className="text-muted fw-bold">
                                Account:
                              </span>
                              <span className="fw-bold text-dark">
                                XXXX-XXXX-1234
                              </span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <span className="text-muted fw-bold">
                                Total Amount:
                              </span>
                              <h3 className="text-primary m-0 fw-bold">
                                {formatCurrency(400000)}
                              </h3>
                            </div>
                          </Card>

                          <FloatingLabel
                            label="Enter 6-digit OTP sent to mobile"
                            className="mb-4 shadow-sm"
                          >
                            <FormControl
                              type="text"
                              placeholder="Enter OTP"
                              className="fs-5 letter-spacing-2"
                            />
                          </FloatingLabel>

                          <div className="d-flex justify-content-between">
                            <Button
                              variant="light"
                              onClick={handlePrev}
                              className="rounded-pill px-5 py-2 fw-bold"
                            >
                              Back
                            </Button>
                            <Button
                              variant="success"
                              onClick={handleSubmit}
                              className="rounded-pill px-5 py-2 fw-bold shadow-lg"
                            >
                              Confirm Transfer
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab !== "transfer" && (
                  <div className="text-center py-5 text-muted">
                    <h3 className="fw-bold">Section Under Construction</h3>
                    <p>This demo focuses on the Fund Transfer flow.</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Success Toast */}
      <div className="position-fixed bottom-0 end-0 p-4" style={{ zIndex: 11 }}>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          className="shadow-lg border-0 rounded-4 overflow-hidden"
        >
          <div className="bg-success text-white px-3 py-2 d-flex justify-content-between align-items-center">
            <strong className="me-auto">Transaction Successful</strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
          <Toast.Body className="p-4 bg-white text-dark fw-bold">
            {formatCurrency(400000)} has been transferred successfully. Ref ID:
            #TRX-982347
          </Toast.Body>
        </Toast>
      </div>
    </div>
  );
};
