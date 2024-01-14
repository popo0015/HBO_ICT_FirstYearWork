module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc'
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
    'camelcase': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
    'no-empty': 'warn',
    'no-multiple-empty-lines': 'warn',
    'max-len': 'warn',
    'no-plusplus': ["warn", { "allowForLoopAfterthoughts": true }],
    'no-trailing-spaces': ["warn", { "ignoreComments": true }],
    'padded-blocks': "warn",
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
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'explicit',
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
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
        'format': ['camelCase', 'UPPER_CASE']
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
        'format': ['camelCase', 'PascalCase'],
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase']
      }
    ],
  }
};
