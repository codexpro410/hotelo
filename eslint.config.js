// eslint.config.js
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      vue,
      prettier,
    },
    extends: [
      'plugin:vue/vue3-recommended',
    ],
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
    },
  },
]
