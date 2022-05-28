import { useState, useContext } from 'react'
import { Container } from './styles'
import { Brightness3Rounded, Menu, CloseRounded, WbSunnyRounded } from '@material-ui/icons'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import I18n from '../../I18n/I18n'
import { useTranslation } from 'react-i18next'

type HeaderProps = {
  toggleTheme(): void
}

export const HeaderMobile = ({ toggleTheme }: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    if (openMenu) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true)
    }
  }

  return (
    <Container>
      <div className="menu-open">
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          onColor={colors.primary}
          offColor={colors.primary}
          handleDiameter={20}
          onHandleColor={colors.secundary}
          offHandleColor={colors.secundary}
          checkedIcon={
            <div className="mobile-switch-dark-icon">
              {title === 'dark' && <WbSunnyRounded />}
            </div>
          }
          uncheckedIcon={
            <div className="mobile-switch-light-icon">
              {title === 'light' && <Brightness3Rounded />}
            </div>
          }
        />
        <Menu className="hamburguer-icon" onClick={handleOpenMenu} />
      </div>
      {openMenu &&
        <>
          <div className="content-menu">
            <div className="close-button">
              <CloseRounded onClick={handleOpenMenu} />
            </div>
            <nav className="hamburguer-menu">
              <a href="#" rel="noreferrer" className="active">{t('headerMobile.menu.home')}</a>
              <a href="#" rel="noreferrer">{t('headerMobile.menu.skills')}</a>
              <a href="#" rel="noreferrer">{t('headerMobile.menu.projects')}</a>
              <a href="#" rel="noreferrer">{t('headerMobile.menu.contacts')}</a>
            </nav>
            <div className="translations-mobile">
              <I18n />
            </div>
          </div>
        </>
      }
    </Container>
  )
}