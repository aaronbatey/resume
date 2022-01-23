import ResumeContactInfo from "../ResumeContactInfo";
import React from "react";
import { CONTACT_INFO } from "../../ResumeContactInfo/constants";
import { render } from "@testing-library/react";

interface TestSettings {
  contactIcon: string;
  contactTitle: string;
}

const tests = CONTACT_INFO.map((item) => [item.contactTitle, item]);

const renderComponent = () => render(<ResumeContactInfo />);

describe("ResumeContactInfo", () => {
  test.each(tests)("renders education for %s", async (_, testSettings) => {
    const { contactIcon, contactTitle } = testSettings as TestSettings;
    const { getByTestId, getByText } = renderComponent();

    expect(getByTestId(contactIcon)).toBeInTheDocument();
    expect(getByText(contactTitle)).toBeInTheDocument();
  });
});
