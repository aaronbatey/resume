import React from "react";
import { render } from "@testing-library/react";

import ResumeObjective from "../ResumeObjective";

const renderComponent = () => render(<ResumeObjective />);

describe("ResumeObjective", () => {
  it("should display the About Me Section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("About Me")).toBeInTheDocument();
    expect(
      queryByText(
        "I am a software developer that has over 6 years professional experience in the field. I have worked on everything from building websites for local businesses to building web applications that are used globally. Before I dedicated my life to code, I was working professionally in the arts, which gives me a creative edge to my work."
      )
    ).toBeInTheDocument();
  });
});
