/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    'babel-preset-react-app',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  sourceMaps: 'inline',
});
