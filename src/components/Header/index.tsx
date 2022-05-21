import { Container } from './styles'
import {
  LinkedIn,
  GitHub,
  Instagram,
  HomeRounded,
  SchoolRounded,
  CodeRounded,
  EmailRounded
} from '@material-ui/icons'

export const Header = () => {
  return (
    <Container>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/jhonatan-gabriel-alves-11b28015b/" target="_blank"><LinkedIn /></a>
        <a href="https://github.com/JhonatanGAlves" target="_blank"><GitHub /></a>
        <a href="https://www.instagram.com/jhonatangalves" target="_blank"><Instagram /></a>
      </div>
      <div className="lines">
        <div className="line-1-switch">
        </div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
        <div className="line-5"></div>
      </div>
      <div className="nav-menu">
        <a className="active" href="#"><HomeRounded /></a>
        <a href="#skills-experience"><SchoolRounded /></a>
        <a href="#projects"><CodeRounded /></a>
        <a href="#contact"><EmailRounded /></a>
      </div>
    </Container>
  )
}