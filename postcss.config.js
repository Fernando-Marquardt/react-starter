/* eslint-env node */
const AUTOPREFIXER_BROWSERS = [
  'Android >= 6',
  'Chrome >= 50',
  'Firefox >= 46',
  'Explorer >= 11',
  'iOS >= 9.3',
  'Opera >= 37',
  'Safari >= 9.1',
];

module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
  ]
};
