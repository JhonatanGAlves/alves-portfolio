import { useContext } from 'react'
import { Container } from './styles'
import {
  LinkedIn,
  GitHub,
  Instagram,
  HomeRounded,
  SchoolRounded,
  CodeRounded,
  EmailRounded,
  WbSunnyRounded,
  Brightness3Rounded
} from '@material-ui/icons'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import I18n from '../I18n/I18n'

type HeaderProps = {
  toggleTheme(): void
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/jhonatan-gabriel-alves-11b28015b/" rel="noreferrer" target="_blank"><LinkedIn /></a>
        <a href="https://github.com/JhonatanGAlves" rel="noreferrer" target="_blank"><GitHub /></a>
        <a href="https://www.instagram.com/jhonatangalves" rel="noreferrer" target="_blank"><Instagram /></a>
      </div>
      <div className="lines">
        <div className="line-1-switch">
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            onColor={colors.primary}
            offColor={colors.primary}
            handleDiameter={20}
            onHandleColor={colors.secundary}
            offHandleColor={colors.secundary}
            checkedIcon={
              <div className="switch-dark-icon">
                {title === 'dark' && <WbSunnyRounded />}
              </div>
            }
            uncheckedIcon={
              <div className="switch-light-icon">
                {title === 'light' && <Brightness3Rounded />}
              </div>
            }
          />
        </div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
        <div className="line-5"></div>
      </div>
      <div className="nav-menu">
        <a href="#"><HomeRounded className="active" /></a>
        <a href="#skills-experience"><SchoolRounded /></a>
        <a href="#projects"><CodeRounded /></a>
        <a href="#contact"><EmailRounded /></a>
      </div>
      <div className="container-languages">
        <I18n />
      </div>
    </Container>
  )
}