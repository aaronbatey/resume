import React from "react";
import { render } from "@testing-library/react";

import OverviewPage from "../OverviewPage";

const renderComponent = () => render(<OverviewPage />);

describe("OverviewPage", () => {
  it("should display the text Overview", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Overview")).toBeInTheDocument();
  });
});
