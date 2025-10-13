export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    for (const el of document.querySelectorAll('.overflow-y-overlay')) {
      el.scrollTo({ top: 0 })
    }

    for (const el of document.querySelectorAll('.overflow-y-auto')) {
      el.scrollTo({ top: 0 })
    }

    for (const el of document.querySelectorAll('.overflow-y-scroll')) {
      el.scrollTo({ top: 0 })
    }

    document.body.scrollTo({ top: 0 })
    window.scrollTo({ top: 0 })
  })
})
