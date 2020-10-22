module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn', 'prettier'],
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
  ],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error', 'debug'] }],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          props: false,
        },
      },
    ],
  },
};
