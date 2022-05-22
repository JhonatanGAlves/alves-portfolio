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
import iconBrazil from '../../assets/images/brazil.svg'
import iconBrazilLight from '../../assets/images/brazil-light.svg'
import iconBrazilDark from '../../assets/images/brazil-dark.svg'
import iconUSA from '../../assets/images/united-states.svg'
import iconUSALight from '../../assets/images/united-states-light.svg'
import iconUSADark from '../../assets/images/united-states-dark.svg'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

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
        <div className="language">
          {title === 'dark' ? (
            <img src={iconBrazilDark} alt="Bandeira da Seleção Brasileira" />
          ) : (
            <img src={iconBrazilLight} alt="Bandeira da Seleção Brasileira" />
          )}
          <span>PT</span>
        </div>
        <div className="language">
          {title === 'dark' ? (
            <img src={iconUSADark} alt="Bandeira da Seleção dos Estados Unidos" />
          ) : (
            <img src={iconUSALight} alt="Bandeira da Seleção dos Estados Unidos" />
          )}
          <span>EN</span>
        </div>
      </div>
    </Container>
  )
}