import React from "react";
import { render } from "@testing-library/react";

import ResumePage from "../ResumePage";

const renderComponent = () => render(<ResumePage />);

describe("ResumePage", () => {
  it("should display the left column", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Left Col")).toBeInTheDocument();
  });

  it("should display the experience Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Experience")).toBeInTheDocument();
  });
});
