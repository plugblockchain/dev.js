const base = require('@plugnet/dev-react/config/eslint');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: [
      './tsconfig.eslint.json'
    ]
  }
};
