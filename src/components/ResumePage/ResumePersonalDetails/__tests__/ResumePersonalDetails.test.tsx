import React from "react";
import { render } from "@testing-library/react";

import ResumePersonalDetails from "../ResumePersonalDetails";

const renderComponent = () => render(<ResumePersonalDetails />);

describe("ResumePersonalDetails", () => {
  it("should display my name", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Aaron Batey")).toBeInTheDocument();
  });

  it("should display my job title", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Software Developer")).toBeInTheDocument();
  });
});
