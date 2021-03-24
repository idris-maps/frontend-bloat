module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: '@yoo-digital/eslint-config-react',
  rules: {
    // otherwise you have to install enzyme and co in every package - not needed
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
  }
};