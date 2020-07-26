module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: `jsdom`,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  moduleNameMapper: {
    '~/*': '<rootDir>/src',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|js)?$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  automock: false,

  setupFiles: ['<rootDir>/src/setupTests.js'],

  verbose: true,
}

// module.exports = {
//   "roots": [
//     "<rootDir>/src"
//   ],
//   "testMatch": [
//     "**/__tests__/**/*.+(ts|tsx|js)",
//     "**/?(*.)+(spec|test).+(ts|tsx|js)"
//   ],
//   "transform": {
//     "^.+\\.(ts|tsx)$": "ts-jest"
//   },
// }
