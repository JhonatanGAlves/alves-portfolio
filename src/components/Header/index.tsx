import { Container } from './styles'
import { LinkedIn, GitHub, Instagram } from '@material-ui/icons'

export const Header = () => {
  return (
    <Container>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/jhonatan-gabriel-alves-11b28015b/" target="_blank"><LinkedIn /></a>
        <a href="https://github.com/JhonatanGAlves" target="_blank"><GitHub /></a>
        <a href="https://www.instagram.com/jhonatangalves" target="_blank"><Instagram /></a>
      </div>
    </Container>
  )
}