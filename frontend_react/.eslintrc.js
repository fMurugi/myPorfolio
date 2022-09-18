module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: [
  //   // "plugin:react/recommended",
  //   "prettier"
  //   ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["warn"],
    "import/prefer-default-export": 0,
    "react/function-component-definition": [
      0,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    
  },
};
