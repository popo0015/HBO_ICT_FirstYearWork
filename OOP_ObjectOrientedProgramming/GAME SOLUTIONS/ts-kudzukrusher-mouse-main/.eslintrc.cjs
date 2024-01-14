module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc',
    'filenames'
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Styling and Formatting
    'array-bracket-spacing': ['warn', 'never'],
    'brace-style': 'off',
    'camelcase': 'off',
    'eol-last': ['warn', 'always'],
    'linebreak-style': 'off',
    'max-len': 'warn',
    'no-trailing-spaces': ['warn', { 'skipBlankLines': true, 'ignoreComments': true }],
    'no-multiple-empty-lines': 'warn',
    'no-multi-spaces': 'warn',
    'padded-blocks': ['warn', 'never'],
    '@typescript-eslint/brace-style': ['warn'],
    '@typescript-eslint/comma-spacing': 'warn',
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/quotes': ['warn', 'single'],
    "@typescript-eslint/no-useless-constructor": "warn",

    // Code Quality
    'no-console': 'off',
    'class-methods-use-this': 'warn',
    'no-empty': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    "@typescript-eslint/semi": "error",

    'curly': ['warn', 'all'],
    'no-else-return': 'off',
    'no-plusplus': ['warn', { 'allowForLoopAfterthoughts': true }],

    // TypeScript Specific
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/triple-slash-reference': 'off',

    // TypeScript Types and Classes
    'filenames/match-exported': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'explicit',
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/typedef': [
      'error',
      {
        'arrowParameter': true,
        'variableDeclaration': true,
        'variableDeclarationIgnoreFunction': true,
        'memberVariableDeclaration': true,
        'parameter': true,
      }
    ],

    // Naming Conventions
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        'selector': 'default',
        'format': ['camelCase']
      },
      {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE']
      },
      {
        'selector': 'classProperty',
        'format': ['camelCase', 'UPPER_CASE'],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': 'parameter',
        'format': ['camelCase'],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': 'memberLike',
        'modifiers': ['private'],
        'format': ['camelCase']
      },
      {
        'selector': 'import',
        'format': ['PascalCase'],
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase']
      },
      {
        'selector': 'enumMember',
        'format': ['PascalCase', 'camelCase']
      }
    ],
    
    // Documentation
    'jsdoc/tag-lines': 'off',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        'publicOnly': true,
        'checkConstructors': false,
        'contexts': [
          'MethodDefinition[key.name!=/get.*/][key.name!=/set.*/]',
        ],
        'require': {
          'ClassDeclaration': false,
          'MethodDefinition': false
        },
      }
    ],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/no-types': [
      'warn',
      {
        'contexts': ['any']
      }
    ],
  }
};
