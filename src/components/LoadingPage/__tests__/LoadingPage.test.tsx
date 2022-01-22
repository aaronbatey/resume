import React from "react";
import { render } from "@testing-library/react";

import LoadingPage from "../LoadingPage";

const renderComponent = () => render(<LoadingPage />);

describe("LoadingPage", () => {
  it("should display the loading icon", () => {
    const { container } = renderComponent();
    expect(
      container.getElementsByClassName("MuiCircularProgress-svg").length
    ).toBe(1);
  });
});
