module.exports = {
  rootDir: '../',
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/test',
    '<rootDir>/src/index.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
  verbose: true,
  testMatch: ['**/test/**/*.test.js'],
  setupFilesAfterEnv: [
    '<rootDir>/test/config/setup-file.js',
  ],
  reporters: [
    'default',
    // ['jest-junit', {
    //   outputDirectory: 'test-results/jest',
    //   outputName: 'results.xml'
    // }]
  ]
}
