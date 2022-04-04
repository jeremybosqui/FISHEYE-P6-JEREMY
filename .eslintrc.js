module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    eqeqeq: 'warn',
    indent: ['warn', 2, { SwitchCase: 1 }],
    'multiline-ternary': ['warn', 'always-multiline']
  }
}
