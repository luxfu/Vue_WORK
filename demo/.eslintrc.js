module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', '@vue/standard'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'vue/no-multiple-template-root': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
}