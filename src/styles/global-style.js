import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'JetBrains Mono', monospace;

    ::-webkit-scrollbar {
      width: .8rem;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #0e0d0d;
      border-radius: .6rem;
    }
  }
`;

export default GlobalStyle;