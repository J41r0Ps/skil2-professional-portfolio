/**
 * ESLint flat config. Runs in CI (frontend-pipeline.yml) — keep it at zero
 * errors. Browser globals for app code; a second block gives Node globals
 * to build configs and scripts.
 */
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // marks identifiers referenced in JSX (e.g. `motion.div`) as used,
      // so no-unused-vars stops flagging them
      'react/jsx-uses-vars': 'error',
      // sections export `SectionWrapper(Component, id)` — treat that HOC as
      // a component export instead of flagging it
      'react-refresh/only-export-components': ['error', { extraHOCs: ['SectionWrapper'] }],
    },
  },
  {
    // Node-side files (build configs, asset scripts) run outside the browser
    files: ['*.config.js', 'scripts/**/*.mjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    // tailwind.config.js is the only CommonJS file (module.exports)
    files: ['tailwind.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
])
