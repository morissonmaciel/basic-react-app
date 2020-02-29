module.exports = {
  verbose: true,
  rootDir: "../",
  setupFiles: ["./config/jest.setup.js"],
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/mocks/fileMock.js",
    "\\.(svg)$": "<rootDir>/config/mocks/svgMock.js",
    "\\.(css|less)$": "<rootDir>/config/mocks/fileMock.js"
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "(.test)\\.(ts|tsx|js)$",
    "/distribution/.*\\.(ts|js)$"
  ]
};