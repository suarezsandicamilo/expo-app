//

import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from 'typescript-eslint';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  {
    files: ['**/*.{ts,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  js.configs.recommended,
  ...typescript.configs.recommended,
  react.configs.flat.recommended,
  sonarjs.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
