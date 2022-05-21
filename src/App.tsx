import styled from 'styled-components'
import { Header } from './components/Header'
import GlobalStyles from './styles/globals'

export const App = () => {
  return (
    <ContainerApp>
      <Header />
      <GlobalStyles />
    </ContainerApp>
  )
}

const ContainerApp = styled.div`
  
`
