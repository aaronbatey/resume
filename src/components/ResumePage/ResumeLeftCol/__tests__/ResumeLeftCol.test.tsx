import React from "react";
import { render } from "@testing-library/react";

import ResumeLeftCol from "../ResumeLeftCol";

const renderComponent = () => render(<ResumeLeftCol />);

describe("ResumeLeftCol", () => {
  it("should display the personal details section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Aaron Batey")).toBeInTheDocument();
  });

  it("should display the contact info section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("aaron@aaronbatey.com")).toBeInTheDocument();
  });
});
