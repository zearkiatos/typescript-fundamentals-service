/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 100,
      lines: 97,
      functions: 96,
    },
  },
};