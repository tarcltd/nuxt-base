export default defineAppConfig({
  ui: {
    theme: {
      colors: [
        'blue',
        'brown',
        'gray',
        'green',
        'gold',
        'info',
        'red',
        'slate',
        'success',
        'warning',
        'error',
        'yellow',
      ],
    },
    colors: {
      primary: 'blue',
      neutral: 'gray',
    },
    button: {
      slots: {
        base: 'font-bold cursor-pointer select-none',
      },
    },
  },
})

// declare module '@nuxt/schema' {
//   interface AppConfigInput {
//     myLayer?: {
//       /** Project name */
//       name?: string
//     }
//   }
// }
