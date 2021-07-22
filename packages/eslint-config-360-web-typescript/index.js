module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort'
  ],
  extends: [
    '@stevebaum23/360-web-javascript',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'singleline': { 'delimiter': 'comma' },
        'multiline': { 'delimiter': 'none' }
      }
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/type-annotation-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off'
  }
}
