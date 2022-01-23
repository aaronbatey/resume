import ResumeSkills from "../ResumeSkills";
import React from "react";
import { KNOWN_SKILLS, Skill } from "../../ResumeSkills/constants";
import { render } from "@testing-library/react";

const tests = KNOWN_SKILLS.map((item) => [item.skillLabel, item]);

const renderComponent = () => render(<ResumeSkills />);

describe("ResumeSkills", () => {
  it("should display the skills section", () => {
    const { queryByText } = renderComponent();
    expect(queryByText("Skills")).toBeInTheDocument();
  });

  test.each(tests)("renders skill for %s", async (_, testSettings) => {
    const { skillLabel } = testSettings as Skill;
    const { getByText } = renderComponent();

    expect(getByText(skillLabel)).toBeInTheDocument();
  });
});
