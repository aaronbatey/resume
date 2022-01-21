import React from "react";
import { render } from "@testing-library/react";

import LoadingPage from "../LoadingPage";

const renderComponent = () => render(<LoadingPage />);

describe("LoadingPage", () => {
  it("should display the text Loading", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Loading...")).toBeInTheDocument();
  });
});
