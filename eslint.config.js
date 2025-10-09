// @ts-check
import withNuxt from './.playground/.nuxt/eslint.config.mjs'

export default withNuxt([{
  rules: {
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
}])
