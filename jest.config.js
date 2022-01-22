/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 100,
      lines: 66,
      functions: 75,
    },
  },
};