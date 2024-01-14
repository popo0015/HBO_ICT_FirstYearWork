module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "jsdoc",
    "filenames"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended"
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    // Styling and Formatting
    "array-bracket-spacing": ["warn", "never"],
    "brace-style": "off",
    "camelcase": "off",
    "eol-last": ["warn", "always"],
    "linebreak-style": "off",
    "max-len": [
      "warn",
      100,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-trailing-spaces": ["warn", { "skipBlankLines": true, "ignoreComments": true }],
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 2,
        "maxBOF": 1,
        "maxEOF": 1
      }
    ],
    "no-multi-spaces": "warn",
    "padded-blocks": ["warn", "never"],
    "prefer-arrow-callback": "warn",
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "warn",

    "brace-style": "off",
    "@typescript-eslint/brace-style": "warn",
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "warn",
    "indent": "off",
    "@typescript-eslint/indent": ["warn", 2],
    "quotes": "off",
    "@typescript-eslint/quotes": ["warn", "single"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "warn",

    // Code Quality
    "no-console": "off",
    "class-methods-use-this": "warn",
    "no-empty": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
    "semi": "off",
    "@typescript-eslint/semi": "error",
    "curly": ["warn", "all"],
    "no-else-return": "off",
    "no-plusplus": ["warn", { "allowForLoopAfterthoughts": true }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",

    // TypeScript Specific

    "@typescript-eslint/triple-slash-reference": "off",

    // TypeScript Types and Classes
    "filenames/match-exported": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrowParameter": true,
        "variableDeclaration": true,
        "variableDeclarationIgnoreFunction": true,
        "memberVariableDeclaration": true,
        "parameter": true,
      }
    ],

    // Naming Conventions
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"]
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE"]
      },
      {
        "selector": "classProperty",
        "format": ["camelCase", "UPPER_CASE"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "import",
        "format": ["PascalCase"],
      },
      {
        "selector": "enumMember",
        "format": ["PascalCase", "camelCase"]
      }
    ],
    
    // Documentation
    "jsdoc/require-jsdoc": [
      "warn",
      {
        "publicOnly": true,
        "checkConstructors": false,
        "contexts": [
          "MethodDefinition[key.name!=/get.*/][key.name!=/set.*/]",
        ],
        "require": {
          "ClassDeclaration": false,
          "MethodDefinition": false
        },
      }
    ],
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns-type": "off",
    "jsdoc/no-types": [
      "warn",
      {
        "contexts": ["any"]
      }
    ],
    "jsdoc/tag-lines": "off",
  }
};
