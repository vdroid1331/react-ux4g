import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Navs,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
  Feedback,
  Scrollspy,
  Modal,
  Range,
} from "../../index";

export default {
  title: "Templates / Pages/User Settings",
  parameters: {
    layout: "fullscreen",
    docs: { source: { type: "code" } },
  },
};

export const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="settings-page bg-light min-vh-100 py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold m-0 text-dark">Account Settings</h2>
            <p className="text-muted m-0">
              Manage your profile, security, and billing preferences.
            </p>
          </div>
          <Button
            variant="primary"
            className="rounded-pill px-4 py-2 shadow fw-bold"
          >
            Save Changes
          </Button>
        </div>

        <Row className="g-5">
          {/* Settings Navigation */}
          <Col md={3}>
            <div className="sticky-top" style={{ top: "2rem" }}>
              <Navs variant="pills" className="flex-column gap-2">
                <Navs.Item>
                  <Navs.Link
                    href="#profile"
                    active={activeSection === "profile"}
                    onClick={() => setActiveSection("profile")}
                    className={`rounded-4 px-4 py-3 fw-bold ${activeSection === "profile" ? "shadow-sm" : "text-dark hover-bg-light"}`}
                  >
                    <span className="me-2">👤</span> Profile Information
                  </Navs.Link>
                </Navs.Item>
                <Navs.Item>
                  <Navs.Link
                    href="#security"
                    active={activeSection === "security"}
                    onClick={() => setActiveSection("security")}
                    className={`rounded-4 px-4 py-3 fw-bold ${activeSection === "security" ? "shadow-sm" : "text-dark hover-bg-light"}`}
                  >
                    <span className="me-2">🔒</span> Security & Password
                  </Navs.Link>
                </Navs.Item>
                <Navs.Item>
                  <Navs.Link
                    href="#notifications"
                    active={activeSection === "notifications"}
                    onClick={() => setActiveSection("notifications")}
                    className={`rounded-4 px-4 py-3 fw-bold ${activeSection === "notifications" ? "shadow-sm" : "text-dark hover-bg-light"}`}
                  >
                    <span className="me-2">🔔</span> Notifications
                  </Navs.Link>
                </Navs.Item>
                <Navs.Item>
                  <Navs.Link
                    href="#billing"
                    active={activeSection === "billing"}
                    onClick={() => setActiveSection("billing")}
                    className={`rounded-4 px-4 py-3 fw-bold ${activeSection === "billing" ? "shadow-sm" : "text-dark hover-bg-light"}`}
                  >
                    <span className="me-2">💳</span> Billing & Plans
                  </Navs.Link>
                </Navs.Item>
              </Navs>
            </div>
          </Col>

          {/* Settings Content Area with Scrollspy */}
          <Col md={9}>
            <Scrollspy
              items={["profile", "security", "notifications", "billing"]}
              currentId={activeSection}
              onUpdate={setActiveSection}
              offset={100}
              style={{ height: "80vh", paddingRight: "15px" }}
            >
              {/* Profile Section */}
              <div id="profile" className="mb-5 pt-2">
                <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                  <Card.Header className="bg-white border-bottom-0 pt-4 px-5">
                    <h4 className="m-0 fw-bold">Profile Information</h4>
                  </Card.Header>
                  <Card.Body className="p-5">
                    <Row className="mb-5">
                      <Col xs={12} className="d-flex align-items-center gap-4">
                        <div
                          className="bg-primary bg-gradient rounded-circle d-flex align-items-center justify-content-center text-white display-5 shadow-sm"
                          style={{ width: "120px", height: "120px" }}
                        >
                          AS
                        </div>
                        <div>
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-primary"
                              className="rounded-pill px-4 fw-bold"
                            >
                              Upload Photo
                            </Button>
                            <Button
                              variant="outline-danger"
                              className="rounded-pill px-4 fw-bold"
                            >
                              Remove
                            </Button>
                          </div>
                          <p className="text-muted small mt-3 mb-0 fw-semibold">
                            JPG, GIF or PNG. Max size of 800K.
                          </p>
                        </div>
                      </Col>
                    </Row>

                    <form className="was-validated">
                      <Row className="g-4 mb-4">
                        <Col md={6}>
                          <FloatingLabel
                            label="First Name"
                            className="shadow-sm"
                          >
                            <FormControl
                              type="text"
                              defaultValue="Aaditya"
                              required
                            />
                          </FloatingLabel>
                          <Feedback type="valid">Looks good!</Feedback>
                        </Col>
                        <Col md={6}>
                          <FloatingLabel
                            label="Last Name"
                            className="shadow-sm"
                          >
                            <FormControl
                              type="text"
                              defaultValue="Sharma"
                              required
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <div className="mb-4">
                        <label className="form-label fw-bold text-muted small text-uppercase">
                          Primary Email Address
                        </label>
                        <InputGroup className="shadow-sm rounded overflow-hidden">
                          <InputGroup.Text className="bg-light border-0">
                            @
                          </InputGroup.Text>
                          <FormControl
                            type="email"
                            defaultValue="aaditya@example.com"
                            disabled
                            className="border-0"
                          />
                        </InputGroup>
                        <div className="form-text mt-2">
                          You cannot change your primary email address once set.
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold text-muted small text-uppercase">
                          Public Biography
                        </label>
                        <FormControl
                          as="textarea"
                          rows="4"
                          placeholder="Tell us a little bit about yourself..."
                          className="shadow-sm p-3"
                        />
                      </div>
                    </form>
                  </Card.Body>
                </Card>
              </div>

              {/* Security Section */}
              <div id="security" className="mb-5 pt-2">
                <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                  <Card.Header className="bg-white border-bottom-0 pt-4 px-5">
                    <h4 className="m-0 fw-bold">Security & Password</h4>
                  </Card.Header>
                  <Card.Body className="p-5">
                    <form>
                      <div className="mb-4">
                        <FloatingLabel
                          label="Current Password"
                          className="shadow-sm"
                        >
                          <FormControl
                            type="password"
                            placeholder="Current Password"
                          />
                        </FloatingLabel>
                      </div>
                      <Row className="g-4 mb-5">
                        <Col md={6}>
                          <FloatingLabel
                            label="New Password"
                            className="shadow-sm"
                          >
                            <FormControl
                              type="password"
                              placeholder="New Password"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col md={6}>
                          <FloatingLabel
                            label="Confirm New Password"
                            className="shadow-sm"
                          >
                            <FormControl
                              type="password"
                              placeholder="Confirm New Password"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Button
                        variant="dark"
                        className="rounded-pill px-5 py-2 fw-bold shadow-sm"
                      >
                        Update Password
                      </Button>
                    </form>

                    <hr className="my-5" />

                    <div className="bg-danger bg-opacity-10 p-4 rounded-4 border border-danger border-opacity-25">
                      <h5 className="fw-bold text-danger mb-2">Danger Zone</h5>
                      <p className="text-danger text-opacity-75 mb-4">
                        Once you delete your account, there is no going back.
                        Please be certain.
                      </p>
                      <Button
                        variant="danger"
                        onClick={() => setShowDeleteModal(true)}
                        className="rounded-pill px-4 fw-bold shadow-sm"
                      >
                        Delete Account
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Notifications Section */}
              <div id="notifications" className="mb-5 pt-2">
                <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                  <Card.Header className="bg-white border-bottom-0 pt-4 px-5">
                    <h4 className="m-0 fw-bold">Notification Preferences</h4>
                  </Card.Header>
                  <Card.Body className="p-5">
                    <div className="mb-5">
                      <div className="form-check form-switch mb-2 d-flex align-items-center gap-3 fs-5">
                        <input
                          className="form-check-input shadow-sm"
                          type="checkbox"
                          role="switch"
                          id="emailNotif"
                          defaultChecked
                        />
                        <label
                          className="form-check-label fw-bold text-dark"
                          htmlFor="emailNotif"
                        >
                          Email Notifications
                        </label>
                      </div>
                      <p className="text-muted ms-5">
                        Receive daily email digests and important account
                        alerts.
                      </p>
                    </div>

                    <div className="mb-5">
                      <div className="form-check form-switch mb-2 d-flex align-items-center gap-3 fs-5">
                        <input
                          className="form-check-input shadow-sm"
                          type="checkbox"
                          role="switch"
                          id="pushNotif"
                        />
                        <label
                          className="form-check-label fw-bold text-dark"
                          htmlFor="pushNotif"
                        >
                          Browser Push Notifications
                        </label>
                      </div>
                      <p className="text-muted ms-5">
                        Receive browser push notifications when active on the
                        platform.
                      </p>
                    </div>

                    <div className="bg-light p-4 rounded-4">
                      <h6 className="fw-bold mb-4 text-dark text-uppercase small">
                        Global Alert Volume
                      </h6>
                      <Range min="0" max="100" defaultValue="50" step="10" />
                      <div className="d-flex justify-content-between text-muted small mt-2 fw-bold">
                        <span>Low / Quiet</span>
                        <span>High / Urgent</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Scrollspy>
          </Col>
        </Row>
      </Container>

      {/* Delete Confirmation Modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton className="border-0 pb-0 pt-4 px-4">
          <Modal.Title className="text-danger fw-bold fs-3">
            Delete Account?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 py-4">
          <p className="lead text-dark">
            Are you absolutely sure you want to permanently delete your account?
          </p>
          <p className="text-muted mb-4">
            This action cannot be undone and all your data will be wiped
            immediately.
          </p>
          <FloatingLabel label="Type 'DELETE' to confirm" className="shadow-sm">
            <FormControl type="text" placeholder="Type DELETE" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className="border-0 pb-4 px-4">
          <Button
            variant="light"
            className="rounded-pill px-4 fw-bold"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            className="rounded-pill px-4 fw-bold shadow-sm"
            onClick={() => setShowDeleteModal(false)}
          >
            Permanently Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
