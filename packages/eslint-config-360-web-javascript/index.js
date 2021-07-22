module.exports = {
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'constructor-super': 'off',
    'getter-return': 'off',
    'keyword-spacing': ['error'],
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-redeclare': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-trailing-spaces': ['error'],
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-var': 'error',
    'object-curly-spacing': [2, 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-blocks': ['error'],
    'space-before-function-paren': ['error', 'never'],
    'valid-typeof': 'off'
  }
}
