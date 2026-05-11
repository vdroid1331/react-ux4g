import React from "react";
import { Table } from "./Table";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { Pagination } from "../Pagination/Pagination";
export default {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Table Component
The \`Table\` component styles standard HTML tabular data into sleek, modern, and readable interfaces.

## Usage Guidelines
- **Responsive Wrappers:** Use the \`responsive\` prop to wrap your table in a container that allows horizontal scrolling on small screens instead of breaking the layout. You can also pass a breakpoint string (e.g., \`responsive="md"\`) to only make it responsive up to that breakpoint.
- **Modifiers:** Combine props like \`striped\`, \`bordered\`, and \`hover\` to create complex, data-dense views.
- **Composition:** The \`Table\` component only styles the outer \`<table>\` element. You should use standard semantic HTML tags (\`<thead>\`, \`<tbody>\`, \`<tr>\`, \`<th>\`, \`<td>\`) inside of it.

## Accessibility
Because you write the internal HTML yourself, ensure you follow standard table accessibility rules: always use a \`<thead>\` with \`<th>\` elements, and consider adding a \`<caption>\` element inside the table to summarize its contents for screen readers.
`,
      },
    },
  },
};

export const Basic = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aaditya</td>
          <td>Sharma</td>
          <td>@aaditya</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Priya</td>
          <td>Patel</td>
          <td>@priya</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Ramesh Kumar</td>
          <td>@ramesh</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Striped = {
  render: () => (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aaditya</td>
          <td>Sharma</td>
          <td>@aaditya</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Priya</td>
          <td>Patel</td>
          <td>@priya</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Ramesh Kumar</td>
          <td>@ramesh</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Bordered = {
  render: () => (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aaditya</td>
          <td>Sharma</td>
          <td>@aaditya</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Priya</td>
          <td>Patel</td>
          <td>@priya</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Ramesh Kumar</td>
          <td>@ramesh</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Hoverable = {
  render: () => (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aaditya</td>
          <td>Sharma</td>
          <td>@aaditya</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Priya</td>
          <td>Patel</td>
          <td>@priya</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Ramesh Kumar</td>
          <td>@ramesh</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Dark = {
  render: () => (
    <Table variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aaditya</td>
          <td>Sharma</td>
          <td>@aaditya</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Priya</td>
          <td>Patel</td>
          <td>@priya</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Ramesh Kumar</td>
          <td>@ramesh</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Small = {
  render: () => (
    <Table size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aaditya</td>
          <td>Sharma</td>
          <td>@aaditya</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Priya</td>
          <td>Patel</td>
          <td>@priya</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Ramesh Kumar</td>
          <td>@ramesh</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Responsive = {
  render: () => (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
          <th>Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const DataGrid = {
  render: () => (
    <div className="border rounded shadow-sm bg-white p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">User Management</h5>
        <Button variant="primary" size="sm">
          Add New User
        </Button>
      </div>
      <Table hover responsive className="align-middle">
        <thead className="table-light">
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="fw-bold">Aaditya Sharma</div>
              <div className="text-muted small">aaditya@example.com</div>
            </td>
            <td>Admin</td>
            <td>
              <Badge variant="success">Active</Badge>
            </td>
            <td>Just now</td>
            <td>
              <Button variant="outline-primary" size="sm">
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="fw-bold">Priya Patel</div>
              <div className="text-muted small">priya@example.com</div>
            </td>
            <td>Editor</td>
            <td>
              <Badge variant="warning">Pending</Badge>
            </td>
            <td>2 days ago</td>
            <td>
              <Button variant="outline-primary" size="sm">
                Edit
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span className="text-muted small">Showing 1 to 2 of 24 entries</span>
        <Pagination className="mb-0">
          <Pagination.Item disabled>Previous</Pagination.Item>
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>Next</Pagination.Item>
        </Pagination>
      </div>
    </div>
  ),
};
