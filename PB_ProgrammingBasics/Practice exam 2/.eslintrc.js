module.exports = {
  "root": true,
  "plugins": [
    "jsdoc", 
    "etc"
  ],
  "parserOptions": {
    "ecmaVersion": 2019
  },
  "env": {
    "es6": true
  },
  "ignorePatterns": ['.eslintrc.js'],
  "rules": {
    // Indentation
    "indent": ["warn", 2],

    // Semicolons
    "semi": ['warn', 'always'],
    "semi-style": ['warn', 'last'],

    // Empty lines
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],

    // Spaces
    "no-multi-spaces": "warn",
    "space-infix-ops": ["warn", { "int32Hint": false }],
    "space-in-parens": ["warn", "never"],
    "no-trailing-spaces": ["warn", { "skipBlankLines": true, "ignoreComments": true }],
    "semi-spacing": ["warn", {"before": false, "after": true}],

    // Variable naming
    // WARNING: does not check if PascalCase is used instead of camelCase
    "camelcase": ["warn", { "properties": "always"}],
    "id-length": ["warn", { "min": 2, 'exceptions': ['i', 'j', 'n', 'm', 'PI', 'Pi', 'pi'] }],
    "no-underscore-dangle": ["warn"],

    // Comments
    "no-warning-comments": "warn",
    "no-inline-comments": "warn",
    "spaced-comment": ["warn", "always"],
    "etc/no-commented-out-code": "warn",
    // // JSDoc
    "jsdoc/check-alignment": "warn",
    "jsdoc/multiline-blocks": "warn",
    "jsdoc/require-jsdoc": "warn",

    // Other
    "curly": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
  }
};
