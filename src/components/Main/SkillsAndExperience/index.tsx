import { useTranslation } from "react-i18next"
import { Chart } from "./Chart"
import { Container } from "./styles"

export const SkillsAndExperience = () => {
  const { t } = useTranslation()

  return (
    <Container id="skills-experience">
      <div className="content">
        <div className="skills-charts">
          <Chart
            technology="HTML"
            className="chart-1"
            style={{ width: "90%" }}
          />
          <Chart
            technology="CSS"
            className="chart-2"
            style={{ width: "80%" }}
          />
          <Chart
            technology="JavaScript"
            className="chart-3"
            style={{ width: "65%" }}
          />
          <Chart
            technology="TypeScript"
            className="chart-4"
            style={{ width: "75%" }}
          />
          <Chart
            technology="ReactJS"
            className="chart-5"
            style={{ width: "70%" }}
          />
        </div>
        <div className="txt-experiences">
          <h1>{t("main.skillsAndExperience.h1")} <span>{t("main.skillsAndExperience.span")}</span></h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea optio iste aspernatur fuga accusamus consequuntur, veritatis consequatur esse impedit repudiandae, minima laudantium! Minus, dignissimos labore. Et sed debitis facere sapiente?Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore facilis at, architecto dolores fugiat et exercitationem esse dolorem incidunt ut odit molestias nemo? Quas vero pariatur blanditiis odit distinctio!
          </p>
        </div>
      </div>
    </Container>
  )
}