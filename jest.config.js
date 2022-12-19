module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': '<rootDir>/jest/babelTransform.js',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/jest/fileTransform.js',
  },
  testPathIgnorePatterns: ['node_modules/', 'build/'],
  watchPathIgnorePatterns: ['.tmp', 'dist'],
  setupFiles: ['<rootDir>/jest/setup.ts'],
};
