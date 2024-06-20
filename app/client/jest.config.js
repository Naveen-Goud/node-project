const { mode } = require("./webpack.config");

module.exports = {
    preset: 'ts-jest',
    mode:'development',
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js','jsx'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverage: true, // Add this line to collect coverage
    coverageDirectory: 'coverage', // Optional: specify a directory for the coverage report
    coverageReporters: ['text', 'lcov'],
    collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Specify the files for which coverage should be collected
    "!src/**/*.d.ts",   // Exclude type declaration files
  ],
  };
  