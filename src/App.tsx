import { Header } from './components/Header'
import GlobalStyles from './styles/globals'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../src/styles/themes/light'
import dark from '../src/styles/themes/dark'
import { usePersistedState } from './utils/usePersistedState'
import { Hero } from './components/Hero'
import { HeaderMobile } from './components/Header/Mobile'
import { SkillsAndExperience } from './components/Main/SkillsAndExperience'

export const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <HeaderMobile toggleTheme={toggleTheme} />
      <Hero />
      <SkillsAndExperience />
      <GlobalStyles />
    </ThemeProvider>
  )
}
