module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  plugins: ['learn-plugin'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'learn-plugin/learn-rule': 'error',
    'learn-plugin/async-rule': 'error',
  }
}
