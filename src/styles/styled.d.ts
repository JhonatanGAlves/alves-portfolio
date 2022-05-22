// Para sobrescrever uma definição de tipo já definida.
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secundary: string,

      background: string,
      text: string,
    }
  }
}