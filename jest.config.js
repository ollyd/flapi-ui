const path = require('path');

module.exports = {
  setupFilesAfterEnv: ['./rtl.setup.js'],
  roots: [path.resolve(__dirname, './src')],
  testMatch: ['**/__tests__/**/*.js'],
  testPathIgnorePatterns: [ 'mocks' ],
  testURL: 'http://localhost',
};