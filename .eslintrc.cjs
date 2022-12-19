module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx', '.js', '.jsx'] },
    ],
    'import/extensions': ['warn', 'never'],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-underscore-dangle': 'off',
  },
};
