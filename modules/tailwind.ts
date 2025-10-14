import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.css.push(resolver.resolve('../assets/css/main.css'))
  },
})
