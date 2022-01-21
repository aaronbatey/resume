const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "jest-extended"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/$1",
    "^components/(.*)": "<rootDir>/components/$1",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
};

module.exports = createJestConfig(customJestConfig);
