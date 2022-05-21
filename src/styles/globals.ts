import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --gray-0: #FFFFFF;
    --gray-500: #8D8D8D;
    --gray-800: #242424;
    --gray-900: #181818;
    --orange: #FF6B00;
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
    background: var(--gray-800);
    color: var(--gray-500); 
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