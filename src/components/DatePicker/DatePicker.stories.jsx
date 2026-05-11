import React from "react";
import { DatePicker, TimePicker } from "./DatePicker";

export default {
  title: "Components/Date and Time",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
# Date and Time Pickers
The \`DatePicker\` and \`TimePicker\` components are stylized wrappers around the native HTML5 \`type="date"\` and \`type="time"\` inputs.

## Usage Guidelines
- **Native Implementation:** These components rely entirely on the browser's native date/time picking interfaces (e.g., the iOS wheel picker or the Chrome calendar widget). This ensures maximum compatibility and lightweight performance without importing heavy date libraries.
- **Values:** Date and time values are passed as standard ISO formatted strings (e.g., \`"YYYY-MM-DD"\` for dates and \`"HH:MM"\` for times).

## Accessibility
By leveraging native HTML5 inputs, these components automatically inherit the deep accessibility integrations built into modern browsers and operating systems, providing optimal experiences for mobile screen readers.
`,
      },
    },
  },
};

export const DateInput = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <label className="form-label">Select Date</label>
      <DatePicker />
    </div>
  ),
};

export const TimeInput = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <label className="form-label">Select Time</label>
      <TimePicker />
    </div>
  ),
};
