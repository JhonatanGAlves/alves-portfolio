import { useTranslation } from "react-i18next"
import { Container } from "./styles"
import photo from "../../assets/images/photo-jhonatan-alves.png"
import bgVideo from "../../assets/static/video-hero-dark.mp4"
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="content-hero">
        <h1>
          <span>{t("hero.h1.span")}</span><br />
          Jhonatan Alves
        </h1>
        <Typewriter
          options={{
            strings: [
              `${t("hero.span.first")}`,
              `${t("hero.span.second")}`,
              `${t("hero.span.third")}`,
              `${t("hero.span.fourth")}`
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 1,

          }}
        />
        <a href="#contact">
          <button className="btn-hero">{t("hero.button")}</button>
        </a>
        <div className="photo-hero">
          <img src={photo} alt="Foto Jhonatan Alves" />
        </div>
      </div>
    </Container>
  )
}