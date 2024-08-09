//

import globals from 'globals';

import typescript from 'typescript-eslint';

import react from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{ts,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  ...typescript.configs.recommended,
  react.configs.flat.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
