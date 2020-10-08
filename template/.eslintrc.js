module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'module-resolver',
    'import',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'quotes': ['error', 'single'],
    'no-console': ['error'],
    'module-resolver/use-alias': 2,
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2
  },
  overrides: [],
  settings: {
    'import/resolver': {
      'babel-module': {},
      'node': {
        extensions: [
          '.js',
        ],
      },
    },
  },
};
