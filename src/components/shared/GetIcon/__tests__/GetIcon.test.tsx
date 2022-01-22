import GetIcon from "../GetIcon";
import React from "react";
import { render } from "@testing-library/react";

interface TestSettings {
  iconName: string;
}

const tests = [
  [
    "SchoolIcon",
    {
      iconName: "SchoolIcon",
    },
  ],
  [
    "ShowChartIcon",
    {
      iconName: "ShowChartIcon",
    },
  ],
  [
    "PeopleIcon",
    {
      iconName: "PeopleIcon",
    },
  ],
  [
    "LibraryBooksIcon",
    {
      iconName: "LibraryBooksIcon",
    },
  ],
  [
    "MedicalServicesIcon",
    {
      iconName: "MedicalServicesIcon",
    },
  ],
  [
    "ImageIcon",
    {
      iconName: "ImageIcon",
    },
  ],
];

const renderComponent = (iconName: string) =>
  render(<GetIcon iconName={iconName} />);

describe("GetIcon", () => {
  test.each(tests)("renders an icon for %s", async (_, testSettings) => {
    const { iconName } = testSettings as TestSettings;
    const { getByTestId } = renderComponent(iconName);

    expect(getByTestId(iconName)).toBeInTheDocument();
  });
});
