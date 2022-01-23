import React from "react";
import { render } from "@testing-library/react";

import ResumeObjective from "../ResumeObjective";

const renderComponent = () => render(<ResumeObjective />);

describe("ResumeObjective", () => {
  it("should display the Objective Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Objective")).toBeInTheDocument();
    expect(
      queryByText(
        "A hardworking developer looking to apply creative and technical skills in a professional environment, developing knowledge in the process."
      )
    ).toBeInTheDocument();
  });
});
