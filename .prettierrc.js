module.exports = {
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
}
