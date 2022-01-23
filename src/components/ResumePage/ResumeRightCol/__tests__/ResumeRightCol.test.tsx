import React from "react";
import { render } from "@testing-library/react";

import ResumeRightCol from "../ResumeRightCol";

const renderComponent = () => render(<ResumeRightCol />);

describe("ResumeRightCol", () => {
  it("should display the Objective Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Objective")).toBeInTheDocument();
  });
  it("should display the Experience Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Experience")).toBeInTheDocument();
  });

  it("should display the Education Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Education")).toBeInTheDocument();
  });
});
