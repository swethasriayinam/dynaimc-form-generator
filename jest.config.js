module.exports = {
    preset: 'ts-jest',               // Use ts-jest preset for TypeScript support
    testEnvironment: 'jsdom',         // Use jsdom to simulate a browser environment
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions Jest will handle
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform TypeScript files using ts-jest
      '^.+\\.svg$': 'jest-transform-stub', // Optional: Handle SVG imports
    },
    testPathIgnorePatterns: ['/node_modules/', '/build/'],  // Ignore node_modules and build folders during testing
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Add Jest DOM for better assertions
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',   // Allows using absolute imports starting with '@'
    },
    collectCoverage: true,             // Collect test coverage information
    coverageDirectory: 'coverage',    // Output coverage reports to the 'coverage' folder
    coverageReporters: ['json', 'lcov', 'text'], // Coverage reporters to use
    transformIgnorePatterns: [
      'node_modules/(?!(@babel|react-spring|lodash))',  // Allow transforming specific node_modules packages
    ],
  };
  