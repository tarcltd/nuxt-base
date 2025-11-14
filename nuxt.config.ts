// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    'magic-regexp/nuxt',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@nuxt/image',
    '@nuxt/ui',
    'motion-v/nuxt',
  ],
  $meta: {
    name: 'base',
  },
  devtools: { enabled: true, telemetry: false },
  css: [
    fileURLToPath(new URL('./assets/css/main.css', import.meta.url)),
  ],
  colorMode: {
    storageKey: 'tarc-color-mode',
  },
  alias: {
    '@clerk/themes': '@clerk/themes',
    '@nuxt/ui': '@nuxt/ui',
    'dayjs': 'dayjs',
    'deepmerge': 'deepmerge',
    'fast-equals': 'fast-equals',
    'scule': 'scule',
    'short-uuid': 'short-uuid',
    'uuid': 'uuid',
    'zod': 'zod',
  },
  sourcemap: true,
  experimental: {
    checkOutdatedBuildInterval: 60_000,
  },
  compatibilityDate: '2025-07-15',
  telemetry: { enabled: false },
  eslint: {
    checker: true,
    config: {
      autoInit: false,
      stylistic: {
        braceStyle: '1tbs',
        quotes: 'single',
        indent: 2,
        semi: false,
      },
      tooling: {
        regexp: true,
        jsdoc: true,
      },
    },
  },
})
