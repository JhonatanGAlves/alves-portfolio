import { Header } from './components/Header'
import GlobalStyles from './styles/globals'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../src/styles/themes/light'
import dark from '../src/styles/themes/dark'
import { usePersistedState } from './utils/usePersistedState'

export const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
