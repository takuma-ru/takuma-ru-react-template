export default {
  plugins: ["@typescript-eslint"],
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    ecmaFeatures: {
      "jsx": true
    }
  },
  ignorePatterns: [
    "./next.config.js"
  ],
  rules: {
    "semi": [ "error", "never", { "beforeStatementContinuationChars": "never" } ],
    "semi-spacing": [ "error", { "after": true, "before": false } ],
    "semi-style": [ "error", "first" ],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-console": [ "warn", { "allow": [ "warn", "error" ] } ],
    "eol-last": [ "error", "always" ],
    "quotes": [ 2, "single" ],
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "react/jsx-boolean-value": "error",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "types": ["boolean"],
        "format": ["PascalCase"],
        "prefix": ["is", "should", "has", "can", "did", "will"]
      }
    ]
  }
}
