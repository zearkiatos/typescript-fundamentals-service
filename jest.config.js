/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 100,
      lines: 95,
      functions: 90,
    },
  },
};