import ResumeExperience from "../ResumeExperience";
import React from "react";
import { PAST_EXPERIENCE } from "../../../ResumePage/ResumeExperience/constants";
import { render } from "@testing-library/react";

interface TestSettings {
  jobIcon: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
  hasDivider: boolean;
}

const tests = PAST_EXPERIENCE.map((item) => [item.companyName, item]);

const renderComponent = () => render(<ResumeExperience />);

describe("ResumeExperience", () => {
  test.each(tests)(
    "renders work experience for %s",
    async (_, testSettings) => {
      const {
        jobIcon,
        jobTitle,
        companyName,
        startDate,
        endDate,
        description,
      } = testSettings as TestSettings;
      const { getByTestId, getByText } = renderComponent();

      const dateRegex = new RegExp(`${startDate} - ${endDate}`, "g");
      const descriptionRegex = new RegExp(description, "gm");

      expect(getByTestId(jobIcon)).toBeInTheDocument();
      expect(getByText(`${jobTitle} at ${companyName}`)).toBeInTheDocument();
      expect(getByText(dateRegex)).toBeInTheDocument();
      expect(getByText(descriptionRegex)).toBeInTheDocument();
    }
  );
});
