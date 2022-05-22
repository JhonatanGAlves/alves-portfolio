import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --primary: ${props => props.theme.colors.primary};
    --secundary: ${props => props.theme.colors.secundary};
    --background: ${props => props.theme.colors.background};
    --text: ${props => props.theme.colors.text};
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Por padrão, o font-size é 16px.
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px == 16*0,93.75
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px == 16*0,875
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    /* transition: all 0.25s linear; */
  }

  button {
    cursor: pointer;
  }
  body, input, textarea, button {
    font-family: "Source Code Pro", monospace;  
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
`