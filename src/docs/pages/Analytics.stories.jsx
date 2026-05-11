import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Navs,
  Alert,
  Progress,
  Dropdown,
  Table,
  Chart,
} from "../../index";

export default {
  title: "Templates / Pages/Analytics Dashboard",
  parameters: {
    layout: "fullscreen",
    docs: { source: { type: "code" } },
  },
};

export const AnalyticsDashboard = {
  render: () => {
    const [activeRange, setActiveRange] = useState("7d");

    const chartData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Revenue",
          data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
      ],
    };

    return (
      <div className="analytics-dashboard bg-light min-vh-100 d-flex flex-column">
        {/* Top Navbar */}
        <Navbar variant="dark" bg="dark" expand="lg" className="shadow-sm">
          <Container fluid className="px-4">
            <Navbar.Brand href="#" className="fw-bold">
              📊 Analytics Pro
            </Navbar.Brand>
            <div className="d-flex align-items-center">
              <span className="text-light me-3">Welcome, Admin</span>
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white"
                style={{ width: "35px", height: "35px" }}
              >
                A
              </div>
            </div>
          </Container>
        </Navbar>

        <div className="d-flex flex-grow-1">
          {/* Sidebar */}
          <div
            className="sidebar bg-white border-end shadow-sm"
            style={{ width: "250px", minHeight: "calc(100vh - 56px)" }}
          >
            <Navs variant="pills" className="flex-column p-3 gap-2">
              <Navs.Item>
                <Navs.Link href="#" active className="rounded-3">
                  📈 Overview
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#" className="rounded-3 text-dark">
                  👥 Audience
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#" className="rounded-3 text-dark">
                  💰 Revenue
                </Navs.Link>
              </Navs.Item>
              <Navs.Item>
                <Navs.Link href="#" className="rounded-3 text-dark">
                  🎯 Campaigns
                </Navs.Link>
              </Navs.Item>
              <hr className="my-2" />
              <Navs.Item>
                <Navs.Link href="#" className="rounded-3 text-dark">
                  ⚙️ Settings
                </Navs.Link>
              </Navs.Item>
            </Navs>
          </div>

          {/* Main Content */}
          <div className="main-content flex-grow-1 p-4 bg-light">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold m-0 text-dark">Overview</h2>
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  className="border shadow-sm rounded-pill px-4"
                >
                  Last{" "}
                  {activeRange === "7d"
                    ? "7 Days"
                    : activeRange === "30d"
                      ? "30 Days"
                      : "Year"}
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow-lg border-0 rounded-3">
                  <Dropdown.Item onClick={() => setActiveRange("7d")}>
                    Last 7 Days
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setActiveRange("30d")}>
                    Last 30 Days
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setActiveRange("1y")}>
                    Last Year
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <Alert
              variant="info"
              dismissible
              className="border-0 shadow-sm rounded-3"
            >
              <strong>New Feature!</strong> You can now export your reports
              directly to PDF. Try it out from the settings menu.
            </Alert>

            {/* KPI Cards */}
            <Row className="g-4 mb-4">
              {[
                {
                  title: "Total Users",
                  value: "24,592",
                  trend: "+12.5%",
                  trendColor: "text-success",
                },
                {
                  title: "Revenue",
                  value: "$84,209",
                  trend: "+8.2%",
                  trendColor: "text-success",
                },
                {
                  title: "Bounce Rate",
                  value: "42.3%",
                  trend: "-2.4%",
                  trendColor: "text-danger",
                },
                {
                  title: "Active Sessions",
                  value: "1,492",
                  trend: "+15.3%",
                  trendColor: "text-success",
                },
              ].map((kpi, idx) => (
                <Col md={6} xl={3} key={idx}>
                  <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden hover-shadow transition">
                    <Card.Body className="p-4">
                      <p className="text-muted text-uppercase small fw-bold mb-1">
                        {kpi.title}
                      </p>
                      <h3 className="fw-bold text-dark mb-0">{kpi.value}</h3>
                      <div className={`small fw-bold mt-2 ${kpi.trendColor}`}>
                        {kpi.trend}{" "}
                        <span className="text-muted fw-normal">
                          vs last period
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Charts & Progress */}
            <Row className="g-4 mb-4">
              <Col lg={8}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Header className="bg-white border-bottom-0 pt-4 pb-0">
                    <h5 className="fw-bold">Revenue Growth</h5>
                  </Card.Header>
                  <Card.Body>
                    <div
                      style={{ height: "300px" }}
                      className="w-100 d-flex align-items-center justify-content-center"
                    >
                      <Chart
                        type="line"
                        data={chartData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                        }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Header className="bg-white border-bottom-0 pt-4 pb-0">
                    <h5 className="fw-bold">Traffic Sources</h5>
                  </Card.Header>
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="small fw-bold">Direct Traffic</span>
                        <span className="small text-muted">45%</span>
                      </div>
                      <Progress
                        value={45}
                        className="rounded-pill"
                        style={{ height: "8px" }}
                      />
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="small fw-bold">Organic Search</span>
                        <span className="small text-muted">30%</span>
                      </div>
                      <Progress
                        value={30}
                        variant="success"
                        className="rounded-pill"
                        style={{ height: "8px" }}
                      />
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="small fw-bold">Social Media</span>
                        <span className="small text-muted">15%</span>
                      </div>
                      <Progress
                        value={15}
                        variant="warning"
                        className="rounded-pill"
                        style={{ height: "8px" }}
                      />
                    </div>
                    <div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="small fw-bold">Referrals</span>
                        <span className="small text-muted">10%</span>
                      </div>
                      <Progress
                        value={10}
                        variant="info"
                        className="rounded-pill"
                        style={{ height: "8px" }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Data Table */}
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Header className="bg-white border-bottom pt-4 pb-3">
                <h5 className="fw-bold m-0">Recent Activity</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <Table hover responsive className="mb-0 border-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0 ps-4 py-3">User</th>
                      <th className="border-0 py-3">Action</th>
                      <th className="border-0 py-3">Date</th>
                      <th className="border-0 pe-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        user: "Sarah Jenkins",
                        action: "Purchased Pro Plan",
                        date: "Oct 24, 2026",
                        status: "Completed",
                        color: "success",
                      },
                      {
                        user: "Mike Ross",
                        action: "Upgraded to Enterprise",
                        date: "Oct 23, 2026",
                        status: "Pending",
                        color: "warning",
                      },
                      {
                        user: "Rachel Zane",
                        action: "Cancelled Subscription",
                        date: "Oct 21, 2026",
                        status: "Failed",
                        color: "danger",
                      },
                      {
                        user: "Harvey Specter",
                        action: "Purchased Pro Plan",
                        date: "Oct 20, 2026",
                        status: "Completed",
                        color: "success",
                      },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="ps-4 fw-semibold text-dark">
                          {row.user}
                        </td>
                        <td className="text-muted">{row.action}</td>
                        <td className="text-muted">{row.date}</td>
                        <td className="pe-4">
                          <span
                            className={`badge bg-${row.color} bg-opacity-10 text-${row.color} rounded-pill px-3`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  },
};
