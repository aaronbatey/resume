import React from "react";
import { render } from "@testing-library/react";

import ResumePage from "../ResumePage";

const renderComponent = () => render(<ResumePage />);

describe("ResumePage", () => {
  it("should display the personal details section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Aaron Batey")).toBeInTheDocument();
  });

  it("should display the contact info section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("aaron@aaronbatey.com")).toBeInTheDocument();
  });

  it("should display the skills section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Skills")).toBeInTheDocument();
  });

  it("should display the Objective Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Objective")).toBeInTheDocument();
  });

  it("should display the experience Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Experience")).toBeInTheDocument();
  });

  it("should display the Education Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Education")).toBeInTheDocument();
  });
});
