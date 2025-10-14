/**
 * Detect or change the color mode.
 *
 * @returns The theme store.
 */
export const useThemeStore = defineStore('theme', () => {
  const colorMode = useColorMode()
  const isLight = computed({
    get: () => colorMode.value === 'light',
    set(isLight) {
      colorMode.preference = isLight ? 'light' : 'dark'
    },
  })
  const isDark = computed({
    get: () => colorMode.value === 'dark',
    set(isDark) {
      colorMode.preference = isDark ? 'dark' : 'light'
    },
  })

  return {
    isLight,
    isDark,
  }
})
