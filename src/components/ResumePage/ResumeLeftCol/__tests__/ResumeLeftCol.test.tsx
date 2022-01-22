import React from "react";
import { render } from "@testing-library/react";

import ResumeLeftCol from "../ResumeLeftCol";

const renderComponent = () => render(<ResumeLeftCol />);

describe("ResumeLeftCol", () => {
  it("should display the left column", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Left Col")).toBeInTheDocument();
  });
});
