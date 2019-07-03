const cssNext = require('postcss-cssnext');

module.exports = {
  plugins: [
    cssNext({
      browsers: [
        'last 2 Chrome versions',
        'Explorer >= 11',
        'last 2 Firefox versions',
        'Safari >= 8',
      ],
      features: {
        customProperties: {
          warnings: false,
        },
      },
    }),
  ],
};
