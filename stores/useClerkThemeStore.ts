import { useThemeStore } from '#layers/base/stores/useThemeStore'
import { dark, experimental_createTheme } from '@clerk/themes'

const theme = {
  light: experimental_createTheme({
    variables: {
      colorBackground: '#ebedef',
      colorNeutral: '#060505',
      colorPrimary: '#0b0a09',
      colorTextOnPrimaryBackground: 'white',
      colorText: '#060505',
      colorInputText: '#060505',
      colorInputBackground: '#d8dcdf',
    },
    elements: {
      providerIcon__apple: { filter: 'invert(1)' },
      providerIcon__github: { filter: 'invert(1)' },
      providerIcon__okx_wallet: { filter: 'invert(1)' },
      activeDeviceIcon: {
        '--cl-chassis-bottom': '#d2d2d2',
        '--cl-chassis-back': '#e6e6e6',
        '--cl-chassis-screen': '#e6e6e6',
        '--cl-screen': '#111111',
      },
    },
  }),
  dark: experimental_createTheme({
    ...dark,
    variables: {
      ...dark.variables,
      colorBackground: '#1c1f22',
      colorInputBackground: '#292e33',
    },
  }),
}

/**
 * The clerk theme store.
 *
 * @returns A key to refresh Clerk components and the TARC appearance property.
 */
export const useClerkThemeStore = defineStore('clerk:theme', () => {
  const themeStore = useThemeStore()

  return {
    key: computed(() => (themeStore.isDark ? 'dark' : 'light')),
    appearance: computed(() => (themeStore.isDark ? theme.dark : theme.light)),
  }
})
