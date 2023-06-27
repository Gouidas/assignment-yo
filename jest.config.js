module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$":
      "<rootDir>/node_modules/react-scripts/config/jest/babelTransform.js",
    "^.+\\.svg$": "<rootDir>/src/svgTransform.js",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  transformIgnorePatterns: ["node_modules/(?!axios)"],
};
