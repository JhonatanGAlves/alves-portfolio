import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
// useTranslation é um hook 
// que devolve uma função de tradução (t) e a instância do i18n

// Importa as bandeiras (imagens e componente)
import BrazilFlag from '../../assets/images/brazil.svg'
import BrazilLight from '../../assets/images/brazil-light.svg'
import BrazilDark from '../../assets/images/brazil-dark.svg'
import EuaFlag from '../../assets/images/united-states.svg'
import EuaLight from '../../assets/images/united-states-light.svg'
import EuaDark from '../../assets/images/united-states-dark.svg'
import Flag from './Flag'
import { ThemeContext } from 'styled-components'

const I18n = () => {
  const { i18n } = useTranslation()
  // Instância do i18n

  const handleChangeLanguage = (language) => {
    // Trocando o idioma na chamada da função
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language // Idioma selecionado

  const { title } = useContext(ThemeContext)

  return (
    <>
      <div className="language">
        {title === 'dark' ? (
          <Flag
            image={selectedLanguage === 'pt-BR' ? BrazilFlag : BrazilDark}
            isSelected={selectedLanguage === 'pt-BR'} // Verifica o idioma escolhido
            onClick={() => handleChangeLanguage('pt-BR')} // Troca o idioma para pt-BR
          />
        ) : (
          <Flag
            image={selectedLanguage === 'pt-BR' ? BrazilFlag : BrazilLight}
            isSelected={selectedLanguage === 'pt-BR'} // Verifica o idioma escolhido
            onClick={() => handleChangeLanguage('pt-BR')} // Troca o idioma para pt-BR
          />
        )}
        <span>PT</span>
      </div>
      <div className="language">
        {title === 'dark' ? (
          <Flag
            image={selectedLanguage === 'en-US' ? EuaFlag: EuaDark}
            isSelected={selectedLanguage === 'en-US'} // Verifica o idioma escolhido
            onClick={() => handleChangeLanguage('en-US')} // Troca o idioma para en-US
          />
        ) : (
          <Flag
            image={selectedLanguage === 'en-US' ? EuaFlag: EuaLight}
            isSelected={selectedLanguage === 'en-US'} // Verifica o idioma escolhido
            onClick={() => handleChangeLanguage('en-US')} // Troca o idioma para en-US
          />
        )}
        <span>EN</span>
      </div>
    </>
  )
}

export default I18n