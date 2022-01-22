import ResumeEducation from "../ResumeEducation";
import React from "react";
import { PAST_EDUCATION } from "../../ResumeEducation/constants";
import { render } from "@testing-library/react";

interface TestSettings {
  educationIcon: string;
  courseName: string;
  collegeName: string;
  startDate: string;
  endDate: string;
}

const tests = PAST_EDUCATION.map((item) => [item.collegeName, item]);

const renderComponent = () => render(<ResumeEducation />);

describe("ResumeEducation", () => {
  test.each(tests)("renders education for %s", async (_, testSettings) => {
    const { educationIcon, courseName, collegeName, startDate, endDate } =
      testSettings as TestSettings;
    const { getByTestId, getByText } = renderComponent();

    expect(getByTestId(educationIcon)).toBeInTheDocument();
    expect(getByText(`${courseName} at ${collegeName}`)).toBeInTheDocument();
    expect(getByText(`${startDate} - ${endDate}`)).toBeInTheDocument();
  });
});
