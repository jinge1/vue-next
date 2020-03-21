module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': 0,
    semi: [0, 'always'],
    'no-unused-vars': 1,
    'vue/no-multiple-template-root': 0,
    'vue/valid-template-root': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
