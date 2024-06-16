module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js','jsx'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverage: true, // Add this line to collect coverage
    coverageDirectory: 'coverage', // Optional: specify a directory for the coverage report
    coverageReporters: ['text', 'lcov'],
  };
  