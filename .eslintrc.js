module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    "cypress/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaVersion: 2018,
  },
  plugins: ["react", "jest", "cypress"],
  rules: {
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["**/*.spec.js", "**/*.spec.jsx"],
      env: {
        jest: true,
      },
    },
  ],
};
