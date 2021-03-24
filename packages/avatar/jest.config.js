const pkg = require('./package.json');

module.exports = {
  displayName: pkg.name,
  name: pkg.name,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '../styleMock.js',
  },
};
